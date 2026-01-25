"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Star } from "lucide-react";

export default function AboutHero() {
  return (
    // UPDATED: Tighter padding (pt-8 pb-12 / lg:pt-12 lg:pb-16) saves ~60px height
    <section className="relative border-b border-slate-100 pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-yellow-400/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Text Content */}
          <div className="animate-hero-left relative z-10">
            {/* Floating Star */}
            <div className="absolute -top-8 -left-8 animate-bounce duration-[3000ms] hidden lg:block">
              <Star className="h-8 w-8 text-yellow-400 fill-yellow-400 rotate-12 drop-shadow-lg" />
            </div>

            {/* UPDATED: Reduced mb-6 to mb-4 */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1 mb-4 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <span className="text-mini font-bold uppercase tracking-widest text-yellow-700">
                A Warm Welcome
              </span>
            </div>

            {/* UPDATED: Reduced mb-5 to mb-4 */}
            <h1 className="text-hero mb-4 text-[#020b2c] leading-tight">
              Your journey to a <br />
              <span className="relative whitespace-nowrap inline-block">
                <span className="relative z-10">world-class education.</span>
                <span className="absolute bottom-1.5 left-0 right-0 -z-10 h-3 bg-yellow-300/60 -rotate-1 rounded-sm"></span>
              </span>
            </h1>

            {/* UPDATED: Reduced mb-8 to mb-6 */}
            <div className="space-y-3 text-body text-slate-600 mb-6 leading-relaxed max-w-lg">
              <p>
                Finding the right course and securing admission to the ideal
                university can feel overwhelming. At{" "}
                <strong>Student Choice Education</strong>, we are here to
                support you every step of the way.
              </p>
              <p>
                We help you identify the course and university that best align
                with your goals. Best of all, applying through us is{" "}
                <strong className="text-[#020b2c]">
                  completely free of charge
                </strong>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#020b2c] px-7 py-3 text-sm font-bold text-white shadow-xl shadow-blue-900/10 transition-all duration-300 hover:bg-[#020b2c]/90 hover:-translate-y-1 hover:shadow-2xl"
              >
                Book Free Consultation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Image & Stickers */}
          <div className="animate-hero-right relative mt-6 lg:mt-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl rotate-1 transition-transform duration-700 hover:rotate-0">
              <Image
                src="/home/university-audience.png"
                alt="Student Choice Education advisor"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Sticker 1: Bottom Left */}
            <div className="absolute -bottom-4 -left-4 z-20 animate-hero-stat">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-transform hover:scale-105">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                  <GraduationCap className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Our Experts
                  </p>
                  <p className="text-xs font-bold text-[#020b2c]">UCL Alumni</p>
                </div>
              </div>
            </div>

            {/* Sticker 2: Top Right */}
            <div
              className="absolute -top-5 -right-2 z-20 animate-hero-stat"
              style={{ animationDelay: "200ms" }}
            >
              <div className="rounded-2xl bg-[#020b2c] p-3.5 shadow-2xl text-white transition-transform hover:scale-105 hover:rotate-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <Award className="h-4 w-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-lg font-bold leading-none">10+</p>
                    <p className="text-[10px] font-medium opacity-80 uppercase tracking-wide">
                      Years Exp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
