"use client";

import { FormEvent, useRef, useState, ChangeEvent } from "react";
import Link from "next/link";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

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

const postalCodeRegex = /^[A-Za-z0-9\s-]{3,10}$/;

export default function AmbassadorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [languages, setLanguages] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [motivation, setMotivation] = useState("");
  const [motivationWordCount, setMotivationWordCount] = useState(0);
  const [postalCode, setPostalCode] = useState("");
  const [postalCodeError, setPostalCodeError] = useState<string | null>(null);

  // File State
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);
    setFileError(null);
    setPostalCodeError(null);

    // Validation
    if (fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!phone || phone.length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (languages.trim().length < 2) {
      setError("Please list languages you speak.");
      return;
    }

    const cleanedPostal = postalCode.trim();
    if (!cleanedPostal || !postalCodeRegex.test(cleanedPostal)) {
      setPostalCodeError("Please enter a valid postal code.");
      return;
    }

    if (motivationWordCount < 5) {
      setError("Please write more about your motivation.");
      return;
    }
    if (motivationWordCount > 200) {
      setError("Your answer must be 200 words or fewer.");
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
        setFileError("PDF or Word documents only.");
        return;
      }
      if (file.size > 4 * 1024 * 1024) {
        setFileError("File must be 4MB or smaller.");
        return;
      }
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set("postalCode", cleanedPostal.toUpperCase());
    formData.set("phone", phone || "");

    try {
      const res = await fetch("/api/ambassador", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data.success)
        throw new Error(data.error || "Request failed");

      setSubmitted(true);
      form.reset();

      // Reset All States
      setFullName("");
      setEmail("");
      setPhone(undefined);
      setLanguages("");
      setSocialLink("");
      setMotivation("");
      setMotivationWordCount(0);
      setPostalCode("");
      setSelectedFileName(null);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handlers
  const handleFileChange = () => {
    setFileError(null);
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      setSelectedFileName(null);
      return;
    }
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      setFileError("PDF/Word only.");
      fileInputRef.current!.value = "";
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setFileError("Max 4MB.");
      fileInputRef.current!.value = "";
      return;
    }
    setSelectedFileName(file.name);
  };

  const handleRemoveFile = () => {
    fileInputRef.current!.value = "";
    setSelectedFileName(null);
    setFileError(null);
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFullName(e.target.value.replace(/[^a-zA-Z\s'-]/g, "").slice(0, 60));
  const handlePostalChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostalCodeError(null);
    setPostalCode(
      e.target.value
        .replace(/[^A-Za-z0-9\s-]/g, "")
        .slice(0, 10)
        .toUpperCase(),
    );
  };
  const handleMotivationChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value.slice(0, 2000);
    setMotivation(val);
    setMotivationWordCount(val.trim().split(/\s+/).filter(Boolean).length);
  };

  return (
    <div className="relative w-full min-h-screen bg-slate-50 py-12 px-4 flex justify-center items-center overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#020b2c 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Container - Widened to max-w-4xl for better spacing */}
      <div className="relative z-10 w-full max-w-4xl">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500 bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6 shadow-sm">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Application Received!
            </h3>
            <p className="text-slate-600 mt-3 max-w-md leading-relaxed">
              Thank you for applying. We have received your details and CV. Our
              team will review your application and contact you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-xl"
            autoComplete="on"
          >
            {/* Header */}
            <div className="text-center border-b border-slate-100 pb-6 mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Student Ambassador Application
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Join our team and inspire the next generation of students.
              </p>
            </div>

            {/* --- FORM GRID --- */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Row 1 */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={handleNameChange}
                  className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                  placeholder="you@example.com"
                />
              </div>

              {/* Row 2 */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Phone / WhatsApp
                </label>
                <div className="flex items-center w-full h-11 px-4 bg-white border border-slate-200 rounded-xl transition-all duration-200 focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-200 [&_.PhoneInputCountry]:mr-2 [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:h-full [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:text-sm [&_.PhoneInputInput]:text-slate-900 [&_.PhoneInputInput]:placeholder-slate-400">
                  <PhoneInput
                    international
                    defaultCountry="GB"
                    value={phone}
                    onChange={setPhone}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Languages Spoken
                </label>
                <input
                  name="languages"
                  type="text"
                  required
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                  className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                  placeholder="e.g. English, Thai, Mandarin"
                />
              </div>

              {/* Row 3 */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Current City & Country
                </label>
                <input
                  name="currentCityCountry"
                  type="text"
                  required
                  className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                  placeholder="e.g. Hatfield, UK"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Postal Code (ZIP)
                </label>
                <input
                  name="postalCode"
                  type="text"
                  required
                  value={postalCode}
                  onChange={handlePostalChange}
                  className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                  placeholder="e.g. AL10 9AB"
                />
                {postalCodeError && (
                  <p className="text-[10px] text-red-600">{postalCodeError}</p>
                )}
              </div>

              {/* Row 4 */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Current University
                </label>
                <select
                  name="currentStudy"
                  required
                  defaultValue=""
                  className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {universities.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Preferred Destination
                </label>
                <select
                  name="destination"
                  required
                  defaultValue=""
                  className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="UK">United Kingdom</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Row 5 - Full Width */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  LinkedIn / Social Profile (Optional)
                </label>
                <input
                  name="socialLink"
                  type="text"
                  value={socialLink}
                  onChange={(e) => setSocialLink(e.target.value)}
                  className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                  placeholder="e.g. linkedin.com/in/name"
                />
              </div>

              {/* Motivation - Full Width */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Why do you want to be an ambassador?
                </label>
                <textarea
                  name="motivation"
                  required
                  rows={4}
                  value={motivation}
                  onChange={handleMotivationChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                  placeholder="Tell us how you would support other students..."
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Max 200 words.</span>
                  <span
                    className={motivationWordCount > 200 ? "text-red-500" : ""}
                  >
                    {motivationWordCount}/200 words
                  </span>
                </div>
              </div>

              {/* File Upload - Full Width */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  CV / Resume (Optional)
                </label>
                <div className="flex items-center gap-2 p-2 border border-dashed border-slate-200 rounded-xl bg-slate-50">
                  <input
                    name="cv"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="w-full h-10 px-3 py-1.5 text-sm text-slate-700 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-yellow-400 file:text-slate-900 hover:file:bg-yellow-300 transition-all duration-200 cursor-pointer"
                  />
                  {selectedFileName && (
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="text-xs text-slate-500 hover:text-slate-800 pr-2"
                    >
                      × Remove
                    </button>
                  )}
                </div>
                {fileError && (
                  <p className="text-[10px] text-red-600">{fileError}</p>
                )}
              </div>
            </div>
            {/* --- END FORM GRID --- */}

            {/* --- FOOTER: CONSENT & SUBMIT (Side-by-Side) --- */}
            <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 px-1 max-w-sm">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-yellow-400 focus:ring-yellow-400 cursor-pointer"
                />
                <label className="text-xs text-slate-500 leading-relaxed">
                  I agree to the{" "}
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="underline hover:text-slate-900 font-medium"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and to be contacted regarding this application.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto whitespace-nowrap rounded-full bg-yellow-400 px-8 py-3 text-sm font-bold text-slate-900 shadow-lg hover:bg-yellow-300 disabled:opacity-70 transition transform hover:-translate-y-0.5"
              >
                {isSubmitting ? "Sending..." : "Submit Application"}
              </button>
            </div>

            {error && (
              <p className="text-center text-xs font-medium text-red-600 bg-red-50 py-2 rounded-lg">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
