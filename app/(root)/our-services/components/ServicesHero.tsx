"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Trophy, Star } from "lucide-react";

export default function ServicesHero() {
  return (
    // UPDATED: Exact padding match to About Us (pt-8 pb-12 lg:pt-12 lg:pb-16)
    <section className="relative overflow-hidden bg-white pt-8 pb-12 lg:pt-12 lg:pb-16">
      {/* 1. PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fff_0%,#fff_50%,#f8fafc_100%)]"></div>

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#020b2c 1px, transparent 1px), linear-gradient(to right, #020b2c 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Soft Focused Glows */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-yellow-300/20 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#020b2c]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* 2. TRUST BADGE */}
        {/* UPDATED: Reduced mb-6 to mb-4 */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1 mb-4 shadow-sm backdrop-blur-sm animate-hero-stat hover:border-yellow-400/50 transition-colors cursor-default">
          <Trophy className="h-3.5 w-3.5 text-yellow-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            #1 Rated Education Consultancy
          </span>
        </div>

        {/* 3. MAIN HEADING */}
        {/* UPDATED: Reduced mb-5 to mb-4 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#020b2c] mb-4 tracking-tight leading-[1.1] animate-hero-left">
          We handle the paperwork. <br className="hidden sm:block" />
          <span className="relative inline-block">
            You start the adventure.
            {/* Hand-drawn style underline */}
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 -z-10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </span>
        </h1>

        {/* UPDATED: Reduced mb-8 to mb-6 */}
        <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed animate-hero-right font-medium">
          Get accepted to top UK universities with
          <span className="text-[#020b2c] font-bold px-1">
            100% free guidance
          </span>
          from experts who have been in your shoes.
        </p>

        {/* 4. BUTTONS */}
        {/* UPDATED: Reduced mb-10 to mb-8 */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-hero-right mb-8"
          style={{ animationDelay: "150ms" }}
        >
          <Link
            href="/contact-us"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 text-sm font-bold text-[#020b2c] shadow-[0_4px_14px_0_rgba(250,204,21,0.39)] transition-all hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_6px_20px_rgba(250,204,21,0.23)]"
          >
            Start Your Free Journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#services-grid"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300"
          >
            Explore Services
          </Link>
        </div>

        {/* 5. SOCIAL PROOF */}
        <div
          className="inline-flex flex-col sm:flex-row items-center gap-4 animate-hero-right"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex -space-x-3">
            <div className="h-9 w-9 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
              JP
            </div>
            <div className="h-9 w-9 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-500">
              AS
            </div>
            <div className="h-9 w-9 rounded-full border-2 border-white bg-yellow-100 flex items-center justify-center text-[10px] font-bold text-yellow-600">
              MR
            </div>
            <div className="h-9 w-9 rounded-full border-2 border-white bg-[#020b2c] flex items-center justify-center text-[10px] font-bold text-white">
              +2k
            </div>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-xs font-medium text-slate-500">
              <span className="font-bold text-[#020b2c]">2,000+ Students</span>{" "}
              placed in UK Uni&apos;s
            </p>
          </div>
        </div>
      </div>

      {/* 6. FLOATING UI ELEMENTS (Adjusted top/bottom positions for new height) */}

      {/* Floating Card Left */}
      <div className="absolute top-[20%] left-[5%] lg:left-[8%] hidden xl:block animate-bounce duration-[6000ms]">
        <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">
              Status
            </p>
            <p className="text-xs font-bold text-[#020b2c]">Visa Approved</p>
          </div>
        </div>
      </div>

      {/* Floating Card Right */}
      <div className="absolute bottom-[25%] right-[5%] lg:right-[8%] hidden xl:block animate-bounce duration-[8000ms]">
        <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105 rotate-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
            <Sparkles className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">
              Uni Offer
            </p>
            <p className="text-xs font-bold text-[#020b2c]">Received</p>
          </div>
        </div>
      </div>
    </section>
  );
}
