"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import forUniversities from "../../../public/home/university-audience.png";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function ForUniversities() {
  return (
    <section className="bg-[#020b2c] py-14 lg:py-18">
      <div className={MAX_WIDTH}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr,1.1fr] lg:items-center">
          <motion.div
            className="space-y-4 text-slate-50"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#facc15]">
              For universities & colleges
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Find motivated students from local and international markets.
            </h2>
            <p className="text-sm text-slate-200 sm:text-base">
              Connect with high-intent candidates who are ready to apply. We
              work with schools, agents and communities to promote your
              programmes and pre-qualify applicants.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>• Visibility in multiple countries with one partner</li>
              <li>• Applications checked for eligibility and documentation</li>
              <li>• Transparent updates on offers, deposits and enrolments</li>
            </ul>
          </motion.div>

          <motion.div
            className="relative h-[260px] overflow-hidden rounded-[2rem] border-4 border-[#facc15] bg-[#020617] sm:h-[320px] lg:h-[360px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={forUniversities} // use your real image path
              alt="Lecture hall with students"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/75 via-transparent to-[#020617]/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
