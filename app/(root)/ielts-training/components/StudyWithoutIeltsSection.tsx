"use client";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function StudyWithoutIeltsSection() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12">
      <div className={MAX_WIDTH}>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Can you study in the UK without IELTS?
        </h2>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            Sometimes <span className="font-semibold text-slate-900">yes</span>.
            Certain UK universities accept other English tests or offer{" "}
            <span className="font-semibold text-slate-900">
              pre-sessional English
            </span>{" "}
            courses.
          </p>
          <p>
            We review your background and plans, then suggest universities where
            IELTS may not be essential or where a pathway route is possible.
          </p>
        </div>

        <h3 className="mt-5 text-base font-semibold text-slate-900 sm:text-lg">
          Common alternatives to IELTS:
        </h3>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-700 sm:text-base">
          <li>
            In-house{" "}
            <span className="font-semibold text-slate-900">English tests</span>{" "}
            run by UK universities
          </li>
          <li>
            Other tests such as{" "}
            <span className="font-semibold text-slate-900">TOEFL iBT</span>,{" "}
            <span className="font-semibold text-slate-900">PTE</span> or{" "}
            <span className="font-semibold text-slate-900">Duolingo</span>
          </li>
          <li>
            <span className="font-semibold text-slate-900">
              Pre-sessional English
            </span>{" "}
            before your degree
          </li>
          <li>
            <span className="font-semibold text-slate-900">
              Foundation / pathway
            </span>{" "}
            programmes with built-in English support
          </li>
        </ul>
      </div>
    </section>
  );
}
