"use client";

import Image from "next/image";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function IeltsIntroSection() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className={MAX_WIDTH}>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            IELTS Training Centre for UK Study
          </h2>
          <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700">
            <span className="relative flex h-5 w-8 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
              <Image
                src="/heros/bc.png"
                alt="British Council partner"
                fill
                sizes="32px"
                className="object-contain p-0.5"
              />
            </span>
            <span>
              Focused on{" "}
              <span className="font-semibold text-slate-900">
                UK universities
              </span>
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            The International English Language Testing System (
            <span className="font-semibold text-slate-900">IELTS</span>) is the
            most widely recognised English test for UK universities and
            colleges. A strong result does more than meet entry requirements –
            it can also support your{" "}
            <span className="font-semibold text-amber-600">visa</span> and{" "}
            <span className="font-semibold text-amber-600">scholarship</span>{" "}
            applications.
          </p>
          <p>
            For academic study you usually take{" "}
            <span className="font-semibold text-slate-900">IELTS Academic</span>
            . The test covers four skills: Listening, Reading, Writing and
            Speaking. You receive an individual band score for each skill plus
            an overall band from{" "}
            <span className="font-semibold text-amber-600">1.0 to 9.0</span>.
          </p>
          <p>
            Our IELTS and academic English tutors specialise in exam preparation
            for{" "}
            <span className="font-semibold text-slate-900">
              international students
            </span>
            . With a mix of one-to-one and small-group options, you can study at
            your own pace and work towards the{" "}
            <span className="font-semibold text-slate-900">
              exact band score
            </span>{" "}
            needed for your UK course.
          </p>
        </div>
      </div>
    </section>
  );
}
