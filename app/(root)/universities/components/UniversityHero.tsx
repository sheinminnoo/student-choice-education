import Image from "next/image";
import Link from "next/link";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function UniversitiesHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/heros/university-h.png"
          alt="International students at university campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35 sm:bg-black/45 lg:bg-gradient-to-r lg:from-[#020B2C]/85 lg:via-[#020B2C]/60 lg:to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`${MAX_WIDTH} relative z-10 pt-16 pb-18 sm:pt-18 sm:pb-20 lg:py-24`}
      >
        <div className="max-w-3xl space-y-4 sm:space-y-5 animate-hero-left">
          <p className="inline-flex items-center rounded-full bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FACC15]">
            Universities · Pathway providers · UK & Europe
          </p>

          <h1 className="text-[26px] font-bold tracking-tight text-white sm:text-[32px] lg:text-[2.6rem] lg:leading-tight">
            Discover trusted universities and pathway partners for your
            international study journey.
          </h1>

          <p className="max-w-2xl text-[13px] leading-relaxed text-slate-100 sm:text-[14px]">
            Explore campuses, pathway routes, intakes and study modes in one
            place. Every institution listed is a verified partner that welcomes
            international students and works with Student Choice Education.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1.5 sm:pt-2">
            <a
              href="#universities-list"
              className="inline-flex items-center justify-center rounded-full bg-[#FACC15] px-6 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#111827] shadow-[0_12px_26px_rgba(0,0,0,0.35)] transition hover:bg-[#e0b80d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B2C]"
            >
              Browse all universities
            </a>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-6 py-3 text-[11px] font-semibold uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(15,23,42,0.2)] transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020B2C]"
            >
              Talk to our admissions team
            </Link>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-100/90">
            <span className="animate-hero-stat inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
              UK & European destinations
            </span>
            <span
              className="animate-hero-stat inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-1"
              style={{ ["--stat-delay" as string]: "260ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Pathways · Direct entry · Foundation
            </span>
            <span
              className="animate-hero-stat inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-1"
              style={{ ["--stat-delay" as string]: "380ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              Application support with no extra fee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
