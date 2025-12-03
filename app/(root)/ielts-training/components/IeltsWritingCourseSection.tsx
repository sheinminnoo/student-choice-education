"use client";

import Image from "next/image";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const PRIMARY_BTN =
  "inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md";

export default function IeltsWritingCourseSection() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div
        className={`${MAX_WIDTH} grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center`}
      >
        <div className="relative h-64 overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200 sm:h-80 lg:h-96">
          <Image
            src="/heros/writing.png"
            alt="Student practising IELTS writing"
            fill
            sizes="(min-width:1024px) 520px, 100vw"
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-semibold text-slate-950 shadow-sm">
            Writing &amp; Task 2 focus
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            IELTS Writing Course
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            This course is ideal if your Reading and Listening scores are strong
            but Writing is holding you back. You will learn how the{" "}
            <span className="font-semibold text-slate-900">
              IELTS Writing band descriptors
            </span>{" "}
            work and how to produce answers that match Band{" "}
            <span className="font-semibold text-slate-900">6.5+</span>.
          </p>

          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
            Practise and improve your academic writing skills
          </h3>

          <ul className="mt-1.5 space-y-1.5 text-sm text-slate-700 sm:text-base">
            <li>Understand the full IELTS Writing test format and timing</li>
            <li>
              Learn clear structures for every Task 1 and Task 2 question type
            </li>
            <li>
              Develop strong introductions, overviews and logically organised
              paragraphs
            </li>
            <li>
              Practise timed writing with line-by-line feedback from your tutor
            </li>
            <li>
              Build a bank of topic vocabulary and linking phrases for{" "}
              <span className="font-semibold text-slate-900">Band 7 style</span>{" "}
              answers
            </li>
            <li>
              Gain confidence to manage ideas, planning and checking within the
              exam time
            </li>
          </ul>

          <a href="#ielts-form" className={PRIMARY_BTN}>
            Book IELTS Writing Support
          </a>
        </div>
      </div>
    </section>
  );
}
