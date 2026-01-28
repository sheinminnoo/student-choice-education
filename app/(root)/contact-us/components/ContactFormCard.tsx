"use client";

import { useActionState, useEffect } from "react";
import { submitToGoogleSheet } from "@/app/actions";
import toast from "react-hot-toast";
import Link from "next/link";

const initialState = { success: false, message: "" };

export default function ContactFormCard() {
  const [state, formAction, isPending] = useActionState(
    submitToGoogleSheet,
    initialState,
  );

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error(state.message, {
          duration: 4000,
          style: { background: "#fff", color: "#ef4444", fontWeight: "500" },
        });
      }
    }
  }, [state]);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
      {state.success ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
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
            Message Received Successfully!
          </h3>
          <p className="text-slate-600 mt-3 max-w-md leading-relaxed">
            Thank you for reaching out. We have sent a confirmation email to
            you, and our team will contact you shortly.
          </p>
        </div>
      ) : (
        <>
          <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">
            Get in touch
          </h2>
          <p className="mb-8 text-center text-slate-600">
            Select a topic below and tell us how we can help you.
          </p>

          <form action={formAction} className="flex flex-col gap-5">
            <div className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden">
              <input
                type="text"
                name="job_role_hidden"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="input-field"
                required
                // ALLOW: Letters (a-z), Spaces, Hyphens (-), Apostrophes (')
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /[^a-zA-Z\s\-']/g,
                    "",
                  );
                }}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="input-field"
                required
                // ALLOW: Letters (a-z), Spaces, Hyphens (-), Apostrophes (')
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /[^a-zA-Z\s\-']/g,
                    "",
                  );
                }}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input-field"
              required
              // BLOCK: Spaces (Emails cannot have spaces)
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\s/g,
                  "",
                );
              }}
            />

            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="+44 7123 456789"
                className="input-field pl-3"
                required
                maxLength={20}
                // ALLOW: Numbers, Plus (+), Space
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /[^0-9+\s]/g,
                    "",
                  );
                }}
              />
              <p className="text-[11px] text-slate-400 mt-1 ml-1">
                Must include country code (e.g. +44)
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                What can we help you with?
              </label>
              <select
                name="interest_category"
                defaultValue=""
                className="input-field"
                required
              >
                <option value="" disabled>
                  Select a topic...
                </option>
                <option value="Universities">University Admissions</option>
                <option value="Scholarships">
                  Scholarships & Financial Aid
                </option>
                <option value="Online Courses">Online IELTS / Courses</option>
                <option value="Our Services">Visa & General Services</option>
                <option value="Other">Other Enquiry</option>
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <select
                name="start_year"
                defaultValue=""
                className="input-field"
                required
              >
                <option value="" disabled>
                  Preferred Start Year
                </option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>
              <select
                name="study_level"
                defaultValue=""
                className="input-field"
                required
              >
                <option value="" disabled>
                  Study Level
                </option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
              </select>
            </div>

            <select
              name="destination"
              defaultValue=""
              className="input-field"
              required
            >
              <option value="" disabled>
                Preferred Destination
              </option>
              <option>United Kingdom</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your requirements (min 10 chars)..."
              className="input-field min-h-[120px]"
              required
              minLength={10}
            />

            <div className="flex items-start gap-3 px-1">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#020b2c] focus:ring-[#020b2c] cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-xs text-slate-500 leading-relaxed cursor-pointer"
              >
                By submitting this form, I agree to the{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 hover:text-[#020b2c]"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 hover:text-[#020b2c]"
                >
                  Privacy Policy
                </Link>
                . I consent to being contacted by Student Choice Education via
                email, phone, or WhatsApp.
              </label>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="mt-2 w-full rounded-xl bg-[#facc15] px-6 py-4 text-base font-bold text-slate-900 shadow-lg hover:bg-[#eab308] disabled:opacity-50 transition-all hover:-translate-y-0.5"
            >
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </>
      )}

      <style jsx>{`
        .input-field {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          background-color: #f8fafc;
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          color: #0f172a;
          outline: none;
          transition: all 0.2s;
        }
        .input-field:focus {
          background-color: white;
          border-color: #020b2c;
          box-shadow: 0 0 0 4px rgba(2, 11, 44, 0.1);
        }
        .input-field:user-invalid {
          border-color: #ef4444;
          background-color: #fef2f2;
        }
      `}</style>
    </div>
  );
}
