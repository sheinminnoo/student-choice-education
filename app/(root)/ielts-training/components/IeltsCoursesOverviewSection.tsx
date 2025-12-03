"use client";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function IeltsCoursesOverviewSection() {
  return (
    <section className="bg-slate-50 py-10 sm:py-12">
      <div className={MAX_WIDTH}>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Our IELTS Preparation Courses
        </h2>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            When planning to study in the UK, it is essential to know the{" "}
            <span className="font-semibold text-slate-900">
              minimum IELTS score
            </span>{" "}
            required by your chosen course. We help you compare your current
            English level with these requirements and design a study plan that
            closes any gaps.
          </p>
          <p>
            For many students,{" "}
            <span className="font-semibold text-slate-900">Writing</span> and{" "}
            <span className="font-semibold text-slate-900">Speaking</span> are
            the most challenging papers. Our courses give extra time to essay
            structure, academic vocabulary and real-life speaking practice so
            you feel confident on test day.
          </p>
          <p>
            UK universities usually ask for bands between{" "}
            <span className="font-semibold text-amber-600">5.0 and 7.0</span>,
            depending on the subject and level. The most common requirement is{" "}
            <span className="font-semibold text-slate-900">
              IELTS 6.5 overall
            </span>{" "}
            with{" "}
            <span className="font-semibold text-slate-900">
              no skill below 6.0
            </span>
            .
          </p>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
            <h3 className="text-lg font-semibold tracking-tight">
              Typical UK band requirements
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700 sm:text-base">
              <li>
                Foundation courses:{" "}
                <span className="font-semibold text-slate-900">
                  IELTS 4.5–5.0
                </span>{" "}
                overall
              </li>
              <li>
                Bachelor&apos;s degrees:{" "}
                <span className="font-semibold text-slate-900">
                  IELTS 6.0–6.5
                </span>{" "}
                overall
              </li>
              <li>
                Pre-master&apos;s programmes:{" "}
                <span className="font-semibold text-slate-900">
                  IELTS 5.0–5.5
                </span>{" "}
                overall
              </li>
              <li>
                Master&apos;s degrees:{" "}
                <span className="font-semibold text-slate-900">
                  IELTS 6.5–7.0
                </span>{" "}
                overall
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
            <h3 className="text-lg font-semibold tracking-tight">
              Higher bands for competitive subjects
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-700 sm:text-base">
              <li>
                Law, Medicine and Health programmes may require{" "}
                <span className="font-semibold text-amber-600">7.0–7.5</span>{" "}
                with higher writing scores
              </li>
              <li>
                Some universities accept alternative tests such as{" "}
                <span className="font-semibold text-slate-900">PTE</span> or{" "}
                <span className="font-semibold text-slate-900">Duolingo</span>
              </li>
              <li>
                We always check the{" "}
                <span className="font-semibold text-slate-900">
                  exact entry requirement
                </span>{" "}
                for your offer before planning your training
              </li>
              <li>
                Band estimates are guidance only and may vary between
                institutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
