"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SLIDE_DURATION = 5;

const slides = [
  {
    id: "academic",
    badge: "IELTS Training",
    title: "Academic IELTS Preparation",
    subtitle:
      "Prepare for UK universities with expert IELTS Academic training led by British Council–certified advisers.",
    points: [
      "For Foundation, Undergraduate & Postgraduate study",
      "Strong focus on Writing & Speaking",
      "Real exam practice with structured feedback",
    ],
    image: "/heros/ielts-1.png",
  },
  {
    id: "ukvi",
    badge: "IELTS for visa",
    title: "UKVI IELTS for Study Visa",
    subtitle:
      "Specialist UKVI IELTS preparation designed around UK student visa and immigration requirements.",
    points: [
      "Approved UKVI preparation format",
      "Intensive options for urgent test dates",
      "Visa-focused exam strategies and score planning",
    ],
    image: "/heros/ielts-2.png",
  },
];

const variants = {
  enter: { x: 16, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -16, opacity: 0 },
};

export default function IELTSHeroSlider() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (nextIndex: number) => {
    const len = slides.length;
    const safeIndex = ((nextIndex % len) + len) % len;
    setIndex(safeIndex);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    const threshold = 50;
    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION * 1000);
    return () => clearTimeout(timer);
  }, [index]);

  const slide = slides[index];

  return (
    <section
      className="relative min-h-[80vh] overflow-hidden bg-slate-900 text-slate-900"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority={index === 0}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-slate-900/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.22)_0,_transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-2xl rounded-3xl border border-white/50 bg-white/65 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.35)] backdrop-blur-lg sm:p-8 lg:p-10"
          >
            <span className="inline-flex items-center rounded-full bg-amber-400/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              {slide.badge}
            </span>

            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {slide.title}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {slide.subtitle}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-800 sm:text-base">
              {slide.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#ielts-form"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300 hover:shadow-md"
              >
                Request Training
              </a>
              <Link
                href="/universities"
                className="text-sm font-medium text-slate-800 underline-offset-4 hover:text-slate-950 hover:underline"
              >
                Explore UK Universities
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-amber-300 md:flex lg:left-8"
      >
        <span className="-translate-x-[1px] text-lg">‹</span>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-amber-300 md:flex lg:right-8"
      >
        <span className="translate-x-[1px] text-lg">›</span>
      </button>

      <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-amber-400" : "bg-white/60"
              }`}
            />
          ))}
        </div>

        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/40 sm:w-56">
          <motion.div
            key={index}
            className="h-full rounded-full bg-amber-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: SLIDE_DURATION, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
