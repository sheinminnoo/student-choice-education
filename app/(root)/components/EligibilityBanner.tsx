"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function EligibilityBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0b2451] py-10 sm:py-12 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-[-60px] h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(56,189,248,0.35), transparent 65%)",
          }}
        />
        <div
          className="absolute -right-32 bottom-[-80px] h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(250,204,21,0.35), transparent 65%)",
          }}
        />
      </div>

      <motion.div
        className={`${MAX_WIDTH} relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between`}
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center gap-6">
          <motion.div
            className="relative flex h-20 w-20 items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.span
              className="absolute inset-0 rounded-full border border-cyan-300/35"
              animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-100/60 bg-white/10 shadow-[0_0_24px_rgba(34,211,238,0.6)]">
              <CheckCircle2 className="h-9 w-9 text-cyan-100" />
            </div>
          </motion.div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-100/90">
              Fast & Free Assessment
            </div>

            <h2 className="text-lg font-semibold leading-snug sm:text-xl lg:text-2xl">
              Check your university eligibility in just a few minutes
            </h2>

            <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-[15px]">
              Answer simple questions and instantly see your chances for the UK,
              Germany, France, Spain, Malta and more — based on real entry
              requirements.
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <Link
            href="/check-eligibility"
            className="inline-flex items-center justify-center rounded-full bg-[#facc15] px-10 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-lg transition hover:bg-[#eab308]"
          >
            Check your eligibility
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
