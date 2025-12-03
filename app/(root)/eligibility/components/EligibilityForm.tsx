"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EligibilityFormData } from "./types";
import PersonalDetailsStep from "./steps/PersonalDetailsStep";
import EducationStep from "./steps/EducationStep";
import StudyPlansStep from "./steps/StudyPlansStep";
import ExtraDetailsStep from "./steps/ExtraDetailsStep";

type Step = 1 | 2 | 3 | 4;

const MAX_WORDS_EXTRA = 200;

// TODO: paste your real Google Apps Script web app URL here
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/XXXXXXXXXXXXXXX/exec";

const initialData: EligibilityFormData = {
  fullName: "",
  email: "",
  phone: "",
  nationality: "",
  highestEducation: "",
  grades: "",
  englishTest: "",
  destination: "",
  intake: "",
  courseInterest: "",
  budget: "",
  extraInfo: "",
  consent: false,
};

export default function EligibilityForm() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<EligibilityFormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const wordCount = useMemo(() => {
    if (!data.extraInfo.trim()) return 0;
    return data.extraInfo.trim().split(/\s+/).filter(Boolean).length;
  }, [data.extraInfo]);

  const progress = (step / 4) * 100;

  const handleChange = (
    field: keyof EligibilityFormData,
    value: string | boolean
  ) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step === 1 && (!data.fullName || !data.email)) return;
    if (step === 2 && !data.highestEducation) return;
    if (step === 3 && !data.destination) return;
    if (step < 4) setStep((prev) => (prev + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (wordCount > MAX_WORDS_EXTRA) {
      setError("Please reduce the extra details to within 200 words.");
      return;
    }

    if (!data.consent) {
      setError("Please confirm that we can contact you about your results.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);

        if (res.status === 429) {
          setError(
            "You have submitted too many requests in a short time. Please wait and try again."
          );
        } else {
          setError(
            json?.message ||
              "Something went wrong while submitting your assessment. Please try again."
          );
        }
      } else {
        setSuccess(
          "Thank you. Your eligibility assessment has been submitted. Our team will contact you within 1–2 business days."
        );
        setData(initialData);
        setStep(1);
      }
    } catch {
      setError(
        "We could not reach the server. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white/95 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.55)] backdrop-blur sm:p-7 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Step {step} of 4
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
            {step === 1 && "Tell us a bit about you"}
            {step === 2 && "Your education background"}
            {step === 3 && "Your study plans"}
            {step === 4 && "Extra details and consent"}
          </h2>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            It usually takes less than 3 minutes to complete.
          </p>
        </div>

        <div className="flex w-full items-center gap-2 sm:w-60">
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[#facc15]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-medium text-slate-500">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.22 }}
            className="space-y-4"
          >
            {step === 1 && (
              <PersonalDetailsStep data={data} onChange={handleChange} />
            )}
            {step === 2 && (
              <EducationStep data={data} onChange={handleChange} />
            )}
            {step === 3 && (
              <StudyPlansStep data={data} onChange={handleChange} />
            )}
            {step === 4 && (
              <ExtraDetailsStep
                data={data}
                onChange={handleChange}
                wordCount={wordCount}
                maxWords={MAX_WORDS_EXTRA}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Back
              </button>
            )}

            {step < 4 && (
              <button
                type="button"
                onClick={nextStep}
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-xl bg-[#041744] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md hover:bg-[#020b2c] disabled:cursor-not-allowed disabled:opacity-60"
              >
                Next step
              </button>
            )}

            {step === 4 && (
              <button
                type="submit"
                disabled={submitting || wordCount > MAX_WORDS_EXTRA}
                className="inline-flex items-center justify-center rounded-xl bg-[#facc15] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-md shadow-[#facc15]/50 hover:bg-[#eab308] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Get my eligibility result"}
              </button>
            )}
          </div>

          <p className="text-[11px] text-slate-500">
            This assessment is free, secure and handled by our team in the UK.
          </p>
        </div>

        <div className="space-y-1 text-[11px]">
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-emerald-600">{success}</p>}
        </div>
      </form>
    </div>
  );
}
