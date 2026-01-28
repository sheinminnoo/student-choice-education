"use client";

import { useActionState, useEffect } from "react";
import { submitToGoogleSheet } from "@/app/actions";
import toast from "react-hot-toast";

const initialState = { success: false, message: "" };

export default function ContactFormCard() {
  const [state, formAction, isPending] = useActionState(
    submitToGoogleSheet,
    initialState,
  );

  // Watch for server responses and show Toasts
  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success(state.message, { duration: 5000 });
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
      <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">
        Get in touch
      </h2>
      <p className="mb-8 text-center text-slate-600">
        Select a topic below and tell us how we can help you.
      </p>

      {state.success ? (
        <div className="flex flex-col items-center justify-center py-10 animate-in fade-in zoom-in">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            Message Received!
          </h3>
          <p className="text-slate-600 mt-2">
            We will get back to you shortly.
          </p>
        </div>
      ) : (
        <form action={formAction} className="flex flex-col gap-5">
          {/* Honeypot Field (Hidden) */}
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
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="input-field"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input-field"
            required
          />

          <div className="relative">
            <input
              type="text"
              name="phone"
              placeholder="+44 7123 456789"
              className="input-field pl-3"
              required
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
              <option value="Scholarships">Scholarships & Financial Aid</option>
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

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 w-full rounded-xl bg-[#facc15] px-6 py-4 text-base font-bold text-slate-900 shadow-lg hover:bg-[#eab308] disabled:opacity-50 transition-all hover:-translate-y-0.5"
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      {/* --- CSS: Fixes Red Border Issue using :user-invalid --- */}
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
        /* Shows red ONLY if the user has touched the field and it's still invalid */
        .input-field:user-invalid {
          border-color: #ef4444;
          background-color: #fef2f2;
        }
      `}</style>
    </div>
  );
}
