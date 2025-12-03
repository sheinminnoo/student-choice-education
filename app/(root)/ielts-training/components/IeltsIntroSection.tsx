"use client";

import Image from "next/image";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function IeltsIntroSection() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className={MAX_WIDTH}>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Online IELTS Training for UK Study
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
              Fully <span className="font-semibold text-slate-900">online</span>
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            Our{" "}
            <span className="font-semibold text-slate-900">
              online IELTS courses
            </span>{" "}
            are designed for students who want to prepare for UK study from
            home. All lessons, feedback and mock tests are delivered online.
          </p>
          <p>
            We focus on{" "}
            <span className="font-semibold text-slate-900">
              IELTS Academic and UKVI
            </span>{" "}
            with clear practice in Listening, Reading, Writing and Speaking, so
            you can work steadily towards your target band.
          </p>
          <p>
            You can join from any country, fit classes around your current
            studies and receive support from tutors experienced with{" "}
            <span className="font-semibold text-slate-900">
              international students
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
