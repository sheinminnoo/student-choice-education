"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const PRIMARY_BTN =
  "inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function IeltsWritingCourseSection() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <motion.div
        className={`${MAX_WIDTH} grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="order-1 relative h-64 overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200 sm:h-80 lg:h-96">
          <Image
            src="/heros/writing.png"
            alt="Student practising IELTS writing online"
            fill
            sizes="(min-width:1024px) 520px, 100vw"
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-semibold text-slate-950 shadow-sm">
            Online Writing &amp; Task 2 focus
          </div>
        </div>

        <div className="order-2 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Online IELTS Writing Course
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Ideal if Writing is weaker than your other skills. Learn how{" "}
            <span className="font-semibold text-slate-900">
              IELTS Writing bands
            </span>{" "}
            are decided and how to write clear, organised answers for Band 6.5+.
          </p>

          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
            Improve your writing from home
          </h3>

          <ul className="mt-1.5 space-y-1.5 text-sm text-slate-700 sm:text-base">
            <li>Understand the Writing test format and timing</li>
            <li>Use simple but effective structures for Task 1 and Task 2</li>
            <li>Practise timed writing with tutor feedback online</li>
            <li>Build useful academic vocabulary for common IELTS topics</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
