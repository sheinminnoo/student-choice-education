"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroAdmission from "../../../public/home/hero-admission.png"; // update path if needed

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function HeroAdmissionExpert() {
  return (
    <section className="relative overflow-hidden py-14 text-slate-50 lg:py-20">
      <div
        className={`${MAX_WIDTH} grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center`}
      >
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#facc15]">
            For schools, colleges & universities
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Admission experts for growing your student numbers.
          </h2>
          <p className="text-sm text-slate-200 sm:text-base">
            We support your admissions team with qualified enquiries, document
            checking and local market insights, so you can focus on selecting
            the right students.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>• Targeted promotion in key countries</li>
            <li>• Pre-screened student profiles and documents</li>
            <li>• End-to-end support from enquiry to enrolment</li>
          </ul>

          <motion.div
            className="pt-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#facc15] px-8 py-3 text-sm font-semibold text-[#020617] shadow-lg transition hover:bg-[#eab308]"
            >
              Talk to our admission team
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[260px] overflow-hidden rounded-[2rem] border border-[#facc15]/40 bg-[#020617] sm:h-[320px] lg:h-[360px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={heroAdmission}
            alt="Students working together"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/80 via-transparent to-[#020617]/40" />
        </motion.div>
      </div>
    </section>
  );
}
