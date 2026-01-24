"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function ForUniversities() {
  return (
    <section className="relative overflow-hidden bg-[#020b2c]">
      <div className="absolute inset-0">
        <Image
          src="/home/university-audience.png"
          alt="University lecture hall with students"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 backdrop-blur-[2.5px] bg-[#020b2c]/40 sm:bg-gradient-to-r sm:from-[#020b2c]/55 sm:via-[#020b2c]/35 sm:to-[#020b2c]/15" />
      </div>

      <div className="relative z-10 py-14 sm:py-16 lg:py-20">
        <div className={MAX_WIDTH}>
          <motion.div
            className="max-w-2xl text-slate-50"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#facc15]">
              For universities & colleges
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Grow your international enrolments with a trusted local partner.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
              We connect you with motivated students who are ready to apply. Our
              team works closely with agents, schools and communities to promote
              your programmes and deliver well-prepared applications.
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-[15px]">
              <div>
                <p className="font-semibold text-slate-50">
                  • Quality over quantity
                </p>
                <p className="text-xs text-slate-200 sm:text-sm">
                  Every applicant is pre-checked for eligibility and intent
                  before reaching your admissions team.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-50">
                  • One partner, multiple markets
                </p>
                <p className="text-xs text-slate-200 sm:text-sm">
                  Reach students across different regions through one organised
                  channel.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-50">
                  • Full visibility from enquiry to enrolment
                </p>
                <p className="text-xs text-slate-200 sm:text-sm">
                  Track offers, deposits and enrolments with clear, transparent
                  updates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
