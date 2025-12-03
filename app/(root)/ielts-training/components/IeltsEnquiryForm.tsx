"use client";

import { useState } from "react";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const PRIMARY_BTN =
  "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all hover:bg-amber-400 hover:text-slate-900 hover:shadow-amber-400/40 hover:shadow-xl focus:ring-2 focus:ring-amber-400";

const RATE_LIMIT_MS = 60_000; // 1 minute

export default function IeltsEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "rate-limited"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    if (typeof window !== "undefined") {
      const lastSubmit = window.localStorage.getItem("ielts_form_last_submit");
      if (lastSubmit && Date.now() - Number(lastSubmit) < RATE_LIMIT_MS) {
        setStatus("rate-limited");
        return;
      }
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honey = formData.get("website");
    if (honey) {
      setStatus("success"); // silently ignore bot
      form.reset();
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch("https://docs.google.com/forms/d/YOUR_FORM_ID/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "ielts_form_last_submit",
          String(Date.now())
        );
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="ielts-form" className="bg-slate-900 py-10 text-white sm:py-12">
      <div className={`${MAX_WIDTH} max-w-3xl`}>
        <p className="text-xs uppercase tracking-[0.18em] text-amber-400">
          IELTS enquiry
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Request IELTS Training
        </h2>

        <p className="mt-2 text-sm text-slate-200 sm:text-base">
          Share a few details and our UK education advisers will contact you
          with the most suitable IELTS Academic or UKVI option.
        </p>

        {/* status messages */}
        {status === "success" && (
          <p className="mt-3 rounded-xl bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            Thank you. Your enquiry has been received – we will contact you
            shortly.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 rounded-xl bg-red-500/10 px-4 py-2 text-sm text-red-300">
            Something went wrong. Please check your connection and try again.
          </p>
        )}
        {status === "rate-limited" && (
          <p className="mt-3 rounded-xl bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
            You recently submitted this form. Please wait a moment before
            sending another enquiry.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
          autoComplete="off"
        >
          {/* Honeypot (hidden from humans) */}
          <div className="hidden">
            <label>
              Website
              <input name="website" type="text" />
            </label>
          </div>

          <input
            name="entry.name"
            required
            maxLength={80}
            placeholder="Full name"
            autoComplete="name"
            className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-amber-400"
          />

          <input
            name="entry.email"
            type="email"
            required
            maxLength={120}
            placeholder="Email address"
            autoComplete="email"
            className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-amber-400"
          />

          <input
            name="entry.phone"
            required
            maxLength={30}
            placeholder="WhatsApp / mobile number"
            inputMode="tel"
            autoComplete="tel"
            className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-amber-400"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <select
              name="entry.ieltsType"
              className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-amber-400"
              defaultValue="Academic IELTS"
            >
              <option>Academic IELTS</option>
              <option>UKVI IELTS</option>
              <option>Not sure yet</option>
            </select>

            <select
              name="entry.targetBand"
              className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-amber-400"
              defaultValue="Target band"
            >
              <option>Target band</option>
              <option>5.5</option>
              <option>6.0</option>
              <option>6.5</option>
              <option>7.0</option>
              <option>7.5+</option>
            </select>
          </div>

          <textarea
            name="entry.message"
            rows={4}
            maxLength={1000}
            placeholder="Tell us about your study plans, target intake and any deadlines (for example visa or offer conditions)."
            className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-amber-400"
          />

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${PRIMARY_BTN} w-full justify-center disabled:cursor-not-allowed disabled:opacity-70`}
            >
              {isSubmitting ? "Sending..." : "Submit enquiry"}
            </button>

            <p className="text-[11px] text-slate-400">
              By submitting this form you agree that we may contact you about
              IELTS training and UK study options. Your details will not be
              shared with third parties for marketing.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
