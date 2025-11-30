"use client";

import { FormEvent, useRef, useState, ChangeEvent } from "react";
import Link from "next/link";

const universities = [
  "University of Hertfordshire",
  "Coventry University",
  "University of Roehampton",
  "University of the West of Scotland",
  "Bangor University",
  "Ulster University",
  "University of Portsmouth",
  "University of Huddersfield",
  "University of Greenwich",
];

type PhoneCountry = {
  code: string;
  name: string;
  flag: string;
};

const phoneCountries: PhoneCountry[] = [
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "+95", name: "Myanmar", flag: "🇲🇲" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+1", name: "United States / Canada", flag: "🇺🇸" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
];

function detectPhoneCountry(value: string): PhoneCountry | null {
  const trimmed = value.replace(/\s+/g, "");
  if (!trimmed.startsWith("+")) return null;

  const sorted = [...phoneCountries].sort(
    (a, b) => b.code.length - a.code.length
  );

  for (const c of sorted) {
    if (trimmed.startsWith(c.code)) return c;
  }
  return null;
}

const postalCodeRegex = /^[A-Za-z0-9\s-]{3,10}$/;

export default function AmbassadorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneCountry, setPhoneCountry] = useState<PhoneCountry | null>(null);
  const [motivation, setMotivation] = useState("");
  const [motivationWordCount, setMotivationWordCount] = useState(0);

  const [postalCode, setPostalCode] = useState("");
  const [postalCodeError, setPostalCodeError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);
    setFileError(null);
    setPostalCodeError(null);

    // Extra client-side validation

    if (fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (motivationWordCount === 0) {
      setError("Please tell us why you would like to be an ambassador.");
      return;
    }

    if (motivationWordCount > 200) {
      setError("Your answer must be 200 words or fewer.");
      return;
    }

    if (phone && !/^\+?[0-9\s]{7,18}$/.test(phone)) {
      setError(
        "Please enter a valid phone / WhatsApp number (digits and + only)."
      );
      return;
    }

    const cleanedPostal = postalCode.trim();
    if (!cleanedPostal || !postalCodeRegex.test(cleanedPostal)) {
      setPostalCodeError(
        "Please enter a valid postal code (3–10 letters/numbers)."
      );
      return;
    }

    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setFileError("Please upload a PDF or Word document only.");
        return;
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        setFileError("File must be 5MB or smaller.");
        return;
      }
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Normalise postal code before send
    formData.set("postalCode", cleanedPostal.toUpperCase());

    try {
      const res = await fetch("/api/ambassador", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      form.reset();
      setSelectedFileName(null);
      setFullName("");
      setPhone("");
      setPhoneCountry(null);
      setMotivation("");
      setMotivationWordCount(0);
      setPostalCode("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = () => {
    setFileError(null);
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      setSelectedFileName(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setFileError("Please upload a PDF or Word document only.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSelectedFileName(null);
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setFileError("File must be 5MB or smaller.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSelectedFileName(null);
      return;
    }

    setSelectedFileName(file.name);
  };

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setSelectedFileName(null);
    setFileError(null);
  };

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const cleaned = raw.replace(/[^a-zA-Z\s'-]/g, "");
    setFullName(cleaned.slice(0, 60));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value;

    raw = raw.replace(/[^\d+]/g, "");
    if (raw.includes("+")) {
      const firstPlusIndex = raw.indexOf("+");
      raw =
        "+" +
        raw.slice(0, firstPlusIndex).replace(/\+/g, "") +
        raw.slice(firstPlusIndex + 1).replace(/\+/g, "");
    }

    const limited = raw.slice(0, 18);
    setPhone(limited);

    const detected = detectPhoneCountry(limited);
    setPhoneCountry(detected);
  };

  const handleMotivationChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const limited = value.slice(0, 2000);
    setMotivation(limited);

    const words = limited.trim().split(/\s+/).filter(Boolean);
    setMotivationWordCount(words.length);
  };

  const handlePostalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostalCodeError(null);
    const raw = e.target.value;
    const cleaned = raw.replace(/[^A-Za-z0-9\s-]/g, "");
    setPostalCode(cleaned.slice(0, 10).toUpperCase());
  };

  return (
    <form
      id="ambassador-form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="mt-4 space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-md"
      autoComplete="on"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500"
          >
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={fullName}
            onChange={handleFullNameChange}
            maxLength={60}
            autoComplete="name"
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            placeholder="Your full name"
          />
          <p className="text-[0.7rem] text-slate-400">
            Letters only, up to 60 characters.
          </p>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={100}
            autoComplete="email"
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500"
          >
            Phone / WhatsApp
          </label>
          <div className="flex items-center gap-2">
            {phoneCountry ? (
              <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.75rem] text-slate-700">
                <span>{phoneCountry.flag}</span>
                <span>{phoneCountry.code}</span>
                <span className="hidden sm:inline">{phoneCountry.name}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.75rem] text-slate-400">
                <span>🌍</span>
                <span>Country code</span>
              </div>
            )}

            <input
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              inputMode="tel"
              pattern="\+?[0-9\s]{7,18}"
              maxLength={18}
              className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
              placeholder="+44 7..."
            />
          </div>
          <p className="text-[0.7rem] text-slate-400">
            Include country code (e.g. +44). Digits and + only.
          </p>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="currentCityCountry"
            className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500"
          >
            Current city &amp; country
          </label>
          <input
            id="currentCityCountry"
            name="currentCityCountry"
            type="text"
            required
            maxLength={80}
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            placeholder="For example: Hatfield, United Kingdom"
          />
        </div>
      </div>

      {/* Postal code */}
      <div className="space-y-1.5">
        <label
          htmlFor="postalCode"
          className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500"
        >
          Postal code (ZIP)
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          required
          value={postalCode}
          onChange={handlePostalCodeChange}
          maxLength={10}
          className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
          placeholder="For example: AL10 9AB"
        />
        <p className="text-[0.7rem] text-slate-400">
          3–10 characters. Letters, numbers, spaces, and dashes only.
        </p>
        {postalCodeError && (
          <p className="text-[0.7rem] text-red-600">{postalCodeError}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="currentStudy"
            className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500"
          >
            Current school / university
          </label>
          <select
            id="currentStudy"
            name="currentStudy"
            required
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            {universities.map((uni) => (
              <option key={uni} value={uni}>
                {uni}
              </option>
            ))}
            <option value="Other">Other school or college</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="destination"
            className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500"
          >
            Preferred study destination
          </label>
          <select
            id="destination"
            name="destination"
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a country
            </option>
            <option value="UK">United Kingdom</option>
            <option value="Europe">Europe (other)</option>
            <option value="Asia">Asia</option>
            <option value="Other">Other / not sure yet</option>
          </select>
        </div>
      </div>

      {/* Motivation with 200-word limit */}
      <div className="space-y-1.5">
        <label
          htmlFor="motivation"
          className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500"
        >
          Why would you like to be an ambassador?
        </label>
        <textarea
          id="motivation"
          name="motivation"
          required
          rows={4}
          value={motivation}
          onChange={handleMotivationChange}
          className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
          placeholder="Tell us how you would support other students and why this programme is a good fit for you."
        />
        <div className="flex items-center justify-between text-[0.7rem] text-slate-400">
          <span>Maximum 200 words.</span>
          <span
            className={
              motivationWordCount > 200 ? "font-semibold text-red-500" : ""
            }
          >
            {motivationWordCount} / 200 words
          </span>
        </div>
      </div>

      {/* CV upload with remove button */}
      <div className="space-y-1.5">
        <label
          htmlFor="cv"
          className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500"
        >
          Attach your CV (optional)
        </label>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            id="cv"
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-slate-700 hover:file:bg-slate-200 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
          />

          {selectedFileName && (
            <button
              type="button"
              onClick={handleRemoveFile}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[0.7rem]">
                ×
              </span>
              Remove file
            </button>
          )}
        </div>

        <p className="text-[0.7rem] text-slate-500">
          PDF or Word file, up to 5MB.
        </p>
        {fileError && <p className="text-[0.7rem] text-red-600">{fileError}</p>}
      </div>

      {/* Consent checkbox */}
      <div className="space-y-3 text-xs text-slate-600">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="consent"
            required
            className="h-4 w-4 rounded border-slate-300 text-yellow-400"
          />
          <span className="leading-snug">
            I agree that Student Choice Education may contact me about the
            ambassador programme and store my details in line with the{" "}
            <Link
              href="/privacy"
              className="font-semibold text-slate-900 underline-offset-2 hover:underline"
            >
              privacy policy
            </Link>
            .
          </span>
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit application"}
        </button>

        {submitted && !error && (
          <p className="text-xs text-emerald-600">
            Thank you. Your application has been received. Our team will contact
            you by email.
          </p>
        )}

        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    </form>
  );
}
