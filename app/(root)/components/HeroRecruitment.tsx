"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

type HeroSlide = {
  imgSrc: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

const heroSlides: HeroSlide[] = [
  {
    imgSrc: "/home/hero-1.png",
    alt: "Students on campus smiling",
    eyebrow: "Start your study journey",
    title: "Find the course that fits your future.",
    description:
      "Compare subjects, entry requirements and tuition fees in one place.",
    primaryCta: { label: "Check your eligibility", href: "/eligibility" },
    secondaryCta: { label: "Browse courses", href: "/online-courses" },
  },
  {
    imgSrc: "/home/hero-2.png",
    alt: "Students walking across university grounds",
    eyebrow: "Study in the UK, Europe and beyond",
    title: "Apply to trusted universities with local support.",
    description:
      "Get personalised shortlists, application help and visa guidance.",
    primaryCta: { label: "See partner universities", href: "/universities" },
    secondaryCta: { label: "Talk to an advisor", href: "/contact-us" },
  },
  {
    imgSrc: "/home/hero-3.png",
    alt: "Students celebrating graduation",
    eyebrow: "From first enquiry to enrolment",
    title: "Make your admission simple and stress-free.",
    description:
      "We stay with you from choosing a course to getting your offer and visa.",
    primaryCta: { label: "Book free consultation", href: "/eligibility" },
    secondaryCta: { label: "How it works", href: "/ourservices" },
  },
];

export default function HeroRecruitment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          className="hero-swiper h-full w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="!h-full">
              <div className="relative h-full w-full">
                <Image
                  src={slide.imgSrc}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className={`${MAX_WIDTH} relative z-10 flex h-[380px] items-center py-8 sm:h-[420px] lg:h-[480px] lg:py-12 pointer-events-none`}
      >
        <motion.div
          className="max-w-xl space-y-5 pointer-events-none"
          key={activeSlide.title}
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#facc15]">
            {activeSlide.eyebrow}
          </p>

          <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            {activeSlide.title}
          </h1>

          <p className="text-sm text-slate-100 sm:text-base">
            {activeSlide.description}
          </p>

          <div className="flex flex-wrap gap-3 pointer-events-auto">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={activeSlide.primaryCta.href}
                className="inline-flex items-center rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-[#020b2c] shadow-md transition hover:bg-[#eab308]"
              >
                {activeSlide.primaryCta.label}
              </Link>
            </motion.div>

            <Link
              href={activeSlide.secondaryCta.href}
              className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              {activeSlide.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-3 flex gap-8 text-xs text-slate-100/80 sm:text-sm">
            <div>
              <p className="font-semibold text-white">
                20+ partner institutions
              </p>
              <p>UK, Europe and more</p>
            </div>
            <div>
              <p className="font-semibold text-white">End-to-end support</p>
              <p>From enquiry to enrolment</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-slate-200 bg-white" />
    </section>
  );
}
