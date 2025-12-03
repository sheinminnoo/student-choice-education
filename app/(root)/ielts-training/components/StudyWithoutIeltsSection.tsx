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
            In some cases the answer is{" "}
            <span className="font-semibold text-slate-900">yes</span>. A number
            of UK universities can accept alternative English language evidence
            or offer a{" "}
            <span className="font-semibold text-slate-900">
              pre-sessional English course
            </span>{" "}
            before your main programme.
          </p>
          <p>
            We review your academic background, any previous test scores and
            your study plans, then suggest UK universities where IELTS may not
            be essential or where you can join a pathway route.
          </p>
        </div>

        <h3 className="mt-5 text-base font-semibold text-slate-900 sm:text-lg">
          Common alternatives to IELTS include:
        </h3>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-700 sm:text-base">
          <li>
            Taking an in-house{" "}
            <span className="font-semibold text-slate-900">English test</span>{" "}
            run by a UK university
          </li>
          <li>
            Providing another recognised test such as{" "}
            <span className="font-semibold text-slate-900">TOEFL iBT</span>,{" "}
            <span className="font-semibold text-slate-900">PTE Academic</span>{" "}
            or{" "}
            <span className="font-semibold text-slate-900">
              Duolingo English Test
            </span>
          </li>
          <li>
            Joining a{" "}
            <span className="font-semibold text-slate-900">
              pre-sessional English
            </span>{" "}
            course on campus before your degree
          </li>
          <li>
            Studying a{" "}
            <span className="font-semibold text-slate-900">
              foundation or pathway
            </span>{" "}
            programme that includes intensive English preparation
          </li>
        </ul>
      </div>
    </section>
  );
}
