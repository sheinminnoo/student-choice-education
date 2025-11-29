"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function EligibilityBanner() {
  return (
    <section className="bg-[#020b1b] py-10 text-white">
      <motion.div
        className={`${MAX_WIDTH} flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">
            Test your admission eligibility for local and overseas universities
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-200 sm:text-base">
            Get a clear indication of your chances in the UK, USA, Canada,
            Australia, Europe and more.
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/eligibility"
            // Color changed to yellow
            className="inline-flex items-center justify-center rounded-full bg-[#facc15] px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-[#eab308]"
          >
            Check your eligibility
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
