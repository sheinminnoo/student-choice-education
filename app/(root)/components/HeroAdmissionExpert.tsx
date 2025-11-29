// app/(root)/components/HeroAdmissionExpert.tsx

import Link from "next/link";
import Image from "next/image";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function HeroAdmissionExpert() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div
        className={`${MAX_WIDTH} grid gap-10 py-14 lg:grid-cols-[1.2fr,1fr] lg:py-20`}
      >
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#facc15]">
            Expert admission guidance
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem]">
            Speak to real admission experts who understand both students and
            universities.
          </h2>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Our team has supported hundreds of students from different countries
            to secure offers from UK and international universities. We help you
            understand your options, choose the right course and submit a strong
            application on time.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-4">
              <p className="text-lg font-semibold text-slate-900">
                1:1 Support
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Get personalised guidance based on your grades, budget and
                goals.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-4">
              <p className="text-lg font-semibold text-slate-900">
                Application Check
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Review of your forms, documents and statements before you
                submit.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-4">
              <p className="text-lg font-semibold text-slate-900">
                Offer to Enrolment
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Support with offers, CAS, visa steps and arrival at your
                university.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/eligibility"
              className="inline-flex items-center rounded-full bg-[#020b2c] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#020417]"
            >
              Book a free consultation
            </Link>

            <Link
              href="/ourservices"
              className="text-sm font-semibold text-slate-800 underline-offset-4 hover:text-[#020b2c] hover:underline"
            >
              See how our service works
            </Link>

            <p className="text-xs text-slate-500 sm:text-sm">
              No fees for most students. We are paid by partner universities.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Typical student journey
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  From first chat to enrolment
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                Guided step by step
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <StepItem
                step="1"
                label="Tell us your goals"
                detail="Share your grades, preferred country and budget."
              />
              <StepItem
                step="2"
                label="Get course suggestions"
                detail="We match you with suitable universities and programmes."
              />
              <StepItem
                step="3"
                label="Prepare your documents"
                detail="We help you organise transcripts, references and statements."
              />
              <StepItem
                step="4"
                label="Submit applications"
                detail="Applications are checked before sending to universities."
              />
              <StepItem
                step="5"
                label="Confirm your offer"
                detail="Support with offer conditions, CAS and next steps."
              />
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500">
              <span>Average response time: under 24 hours</span>
              <span className="font-medium text-slate-800">
                WhatsApp &amp; email support
              </span>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#facc15] text-xs font-semibold text-[#020b2c] shadow-md sm:flex">
              Real team,
              <br />
              not a chatbot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StepItemProps = {
  step: string;
  label: string;
  detail: string;
};

function StepItem({ step, label, detail }: StepItemProps) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
        {step}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        <p className="text-xs text-slate-500">{detail}</p>
      </div>
    </div>
  );
}
