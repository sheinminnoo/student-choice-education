"use client";

import { useActionState, useEffect, useState } from "react";
import { submitToGoogleSheet } from "@/app/actions";
import toast from "react-hot-toast";
import Link from "next/link";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const initialState = { success: false, message: "" };

// Standard styling for the other text inputs
const inputClasses = `
  w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 
  text-base text-slate-900 outline-none transition-all duration-200 
  focus:bg-white focus:border-[#020b2c] focus:ring-4 focus:ring-[#020b2c]/10 
  [&:user-invalid]:border-red-500 [&:user-invalid]:bg-red-50
`;

export default function ContactFormCard() {
  const [state, formAction, isPending] = useActionState(
    submitToGoogleSheet,
    initialState,
  );

  // We need state to handle the Phone Input dropdown
  const [phone, setPhone] = useState<string | undefined>();

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success("Message sent successfully!");
        // Reset phone state after component renders success state
        const resetPhone = () => setPhone(undefined);
        const timeoutId = setTimeout(resetPhone, 0);
        return () => clearTimeout(timeoutId);
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
            {/* Hidden Honeypot Field */}
            <div className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden">
              <input
                type="text"
                name="job_role_hidden"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name Fields */}
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className={inputClasses}
                required
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
                className={inputClasses}
                required
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /[^a-zA-Z\s\-']/g,
                    "",
                  );
                }}
              />
            </div>

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={inputClasses}
              required
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\s/g,
                  "",
                );
              }}
            />

            {/* --- NEW PROFESSIONAL PHONE INPUT --- */}
            {/* We use a hidden input to pass the 'phone' value to the Server Action */}
            <input type="hidden" name="phone" value={phone || ""} />

            {/* The styled wrapper exactly as requested */}
            <div className="space-y-1.5">
              {/* Optional: Remove this label if you want it to look like the other fields (placeholder only) */}
              <label className="text-xs font-medium uppercase tracking-wider text-slate-500 ml-1">
                Phone / WhatsApp
              </label>

              <div className="flex items-center w-full h-[54px] px-4 bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 focus-within:bg-white focus-within:border-[#020b2c] focus-within:ring-4 focus-within:ring-[#020b2c]/10 [&_.PhoneInputCountry]:mr-2 [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:h-full [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:text-base [&_.PhoneInputInput]:text-slate-900 [&_.PhoneInputInput]:placeholder-slate-400">
                <PhoneInput
                  international
                  defaultCountry="GB"
                  value={phone}
                  onChange={setPhone}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            {/* Interest Dropdown */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                What can we help you with?
              </label>
              <select
                name="interest_category"
                defaultValue=""
                className={inputClasses}
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

            {/* Year & Level Dropdowns */}
            <div className="grid gap-5 sm:grid-cols-2">
              <select
                name="start_year"
                defaultValue=""
                className={inputClasses}
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
                className={inputClasses}
                required
              >
                <option value="" disabled>
                  Study Level
                </option>
                <option>Foundation</option>

                <option>Undergraduate</option>
                <option>Postgraduate</option>
              </select>
            </div>

            {/* Destination Dropdown */}
            <select
              name="destination"
              defaultValue=""
              className={inputClasses}
              required
            >
              <option value="" disabled>
                Preferred Destination
              </option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>France</option>
              <option>Spain</option>
              <option>Germany</option>
            </select>

            {/* Message Area */}
            <textarea
              name="message"
              placeholder="Tell us about your requirements (min 10 chars)..."
              className={`${inputClasses} min-h-[120px]`}
              required
              minLength={10}
            />

            {/* Terms Checkbox */}
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

            {/* Submit Button */}
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
    </div>
  );
}
