"use client";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function IeltsCoursesOverviewSection() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12">
      <div className={MAX_WIDTH}>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Our Online IELTS Courses
        </h2>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            Every programme is{" "}
            <span className="font-semibold text-slate-900">100% online</span>,
            so you can prepare for IELTS without travelling to a classroom.
          </p>
          <p>
            We offer{" "}
            <span className="font-semibold text-slate-900">
              full 4-skills courses
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-900">
              focused Writing & Speaking support
            </span>
            , with homework and mock tests checked by your tutor.
          </p>
          <p>
            Most students aim for{" "}
            <span className="font-semibold text-amber-600">6.0–6.5+</span>. We
            help you understand your current level and choose an online schedule
            that fits your deadline.
          </p>
        </div>
      </div>
    </section>
  );
}
