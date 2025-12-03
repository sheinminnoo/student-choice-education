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

export default function IeltsSpeakingCourseSection() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <motion.div
        className={`${MAX_WIDTH} grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* ✅ IMAGE — top on mobile, RIGHT on desktop */}
        <div className="order-1 lg:order-2 relative h-64 overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200 sm:h-80 lg:h-96">
          <Image
            src="/heros/speaking.png"
            alt="Student practising IELTS speaking online"
            fill
            sizes="(min-width:1024px) 520px, 100vw"
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-semibold text-slate-950 shadow-sm">
            Online Speaking practice
          </div>
        </div>

        {/* ✅ TEXT — below image on mobile, LEFT on desktop */}
        <div className="order-2 lg:order-1 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Online IELTS Speaking Course
          </h2>

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Perfect for students who feel shy or nervous in{" "}
            <span className="font-semibold text-slate-900">IELTS Speaking</span>
            . You will practise real exam questions online and build confidence
            step by step.
          </p>

          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
            Speak with confidence and clarity
          </h3>

          <ul className="mt-1.5 space-y-1.5 text-sm text-slate-700 sm:text-base">
            <li>Live practice for all three parts of the test</li>
            <li>Simple structures for Part 2 long turn and follow-up</li>
            <li>Fluency, pronunciation and coherence improvement</li>
            <li>Real-time online feedback after speaking tasks</li>
            <li>Common topics and high-scoring example ideas</li>
          </ul>

          <a href="#ielts-form" className={PRIMARY_BTN}>
            Book online Speaking practice
          </a>
        </div>
      </motion.div>
    </section>
  );
}
