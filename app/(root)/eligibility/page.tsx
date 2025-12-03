import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Clock3 } from "lucide-react";
import EligibilityForm from "./components/EligibilityForm";

export const metadata: Metadata = {
  title: "Free Eligibility Check | Student Choice Education",
  description:
    "Check your eligibility for universities abroad in just a few minutes with our simple, free assessment.",
  alternates: {
    canonical: "/eligibility",
  },
};

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function EligibilityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 via-white to-white">
        <div
          className={`${MAX_WIDTH} relative flex flex-col gap-10 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-18`}
        >
          <div className="max-w-2xl space-y-5">
            <p className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-[11px] font-semibold tracking-[0.2em]">
              FREE &amp; SECURE ELIGIBILITY ASSESSMENT
            </p>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
              Check your university eligibility in just a few minutes.
            </h1>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Answer a few quick questions and we&apos;ll tell you which
              universities and courses are realistic for your profile.
            </p>

            {/* small icon row */}
            <div className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </span>
                <span className="text-xs font-medium text-slate-700">
                  Based on real entry rules
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50">
                  <ShieldCheck className="h-4 w-4 text-sky-500" />
                </span>
                <span className="text-xs font-medium text-slate-700">
                  Secure &amp; private
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50">
                  <Clock3 className="h-4 w-4 text-amber-500" />
                </span>
                <span className="text-xs font-medium text-slate-700">
                  Takes under 3 minutes
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              Your answers are encrypted in transit and never sold. You can ask
              us to delete your data at any time.
            </p>
          </div>

          {/* right side card */}
          <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              WHAT YOU&apos;LL RECEIVE
            </p>
            <ul className="mt-3 space-y-2 text-xs text-slate-600">
              <li>• A realistic view of your chances for key destinations.</li>
              <li>
                • Suggested study levels and intakes that fit your profile.
              </li>
              <li>• Option to book a free call with an adviser.</li>
            </ul>
            <p className="mt-3 text-[11px] text-slate-500">
              Completing this form does not create any agreement or application.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className={`${MAX_WIDTH} py-8 sm:py-10 lg:py-12`}>
        <EligibilityForm />
      </section>
    </main>
  );
}
