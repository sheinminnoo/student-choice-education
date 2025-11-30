"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

type Partner = {
  name: string;
  logo: string;
  alt?: string;
  certificateImage?: string;
  certificateTitle?: string;
  certificateSummary?: string;
};

const partners: Partner[] = [
  {
    name: "British Council",
    logo: "/partners/bc.jpg",
    alt: "British Council logo",
    certificateImage: "/partners/bc_certificate.png",
    certificateTitle: "British Council partnership",
    certificateSummary:
      "This area will be updated with our confirmed partnership details and reference number once finalised.",
  },
];

export default function Partners() {
  const [activePartner, setActivePartner] = useState<Partner | null>(null);

  return (
    <section className="bg-slate-50 py-14 lg:py-20">
      <div className={MAX_WIDTH}>
        {/* ===== TEXT ===== */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#facc15]">
            Partnerships & trust
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Working with recognised education partners.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            We collaborate with trusted organisations in the UK and
            internationally. This section will be updated with confirmed
            partnership and accreditation details as they are finalised.
          </p>
        </motion.div>

        {/* ===== PARTNER CARDS ===== */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {partners.map((partner) => (
            <button
              key={partner.name}
              type="button"
              onClick={() => setActivePartner(partner)}
              className="
                group
                w-full 
                max-w-[260px] 
                sm:max-w-[320px]
                lg:max-w-[380px]
                rounded-3xl
                border border-slate-200
                bg-white
                px-7 py-7
                sm:px-10 sm:py-9
                shadow-sm
                transition
                hover:border-slate-300 hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#facc15]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-slate-50
              "
            >
              <div className="flex flex-col items-center gap-5">
                {/* ✅ Bigger logo */}
                <div className="relative h-16 w-44 sm:h-20 sm:w-52 lg:h-24 lg:w-60">
                  <Image
                    src={partner.logo}
                    alt={partner.alt ?? partner.name}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 208px, 176px"
                    className="object-contain"
                  />
                </div>

                {/* ✅ Bigger name */}
                <p className="text-sm font-semibold text-slate-800 sm:text-base lg:text-lg">
                  {partner.name}
                </p>

                <span className="text-xs text-slate-400 group-hover:text-slate-500">
                  View details
                </span>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {activePartner && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/55 backdrop-blur-sm pt-10 sm:pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePartner(null)}
          >
            <motion.div
              className="mx-4 w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-7 lg:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="relative h-8 w-32 sm:h-9 sm:w-36">
                  <Image
                    src={activePartner.logo}
                    alt={activePartner.alt ?? activePartner.name}
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setActivePartner(null)}
                  className="rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {activePartner.certificateTitle ?? activePartner.name}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {activePartner.certificateSummary}
              </p>

              <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-4 py-5">
                <div className="relative mx-auto h-32 max-w-xs sm:h-40">
                  <Image
                    src={activePartner.certificateImage ?? activePartner.logo}
                    alt={activePartner.name}
                    fill
                    sizes="260px"
                    className="object-contain"
                  />
                </div>

                <p className="mt-3 text-center text-xs text-slate-500">
                  Certificate / membership visual placeholder. Official artwork
                  and references will be updated when available.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
