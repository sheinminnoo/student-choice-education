"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnershipSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#f4f7fc]">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* LEFT CONTENT */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Image
              src="/home/bc-logo.jpg"
              alt="British Council Logo"
              width={64}
              height={64}
              className="object-contain"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Accreditations
            </h3>
          </div>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
            We are proud partners of the British Council, supporting global
            education and international student opportunities for learners
            worldwide.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <Image
            src="/home/badge.png"
            alt="British Council Accreditation Badge"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain rounded-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
