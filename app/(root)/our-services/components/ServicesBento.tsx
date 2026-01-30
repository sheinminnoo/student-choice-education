import Link from "next/link";
import {
  GraduationCap,
  FileCheck,
  Banknote,
  Home,
  PlaneLanding,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesBento() {
  return (
    <section id="services-grid" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#020b2c]">
            Full Service Suite
          </h2>
          <p className="text-slate-600 mt-2">
            Everything you need, under one roof.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(220px,auto)]">
          {/* 1. HERO TILE: Admissions */}
          <Link
            href="/our-services/university-admissions"
            className="group relative overflow-hidden rounded-[2rem] bg-slate-50 p-8 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 hover:-translate-y-1 active:scale-[0.98] active:bg-slate-100"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>

            <div className="relative z-10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-[#020b2c] shadow-md group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#020b2c] mb-2">
                University Admissions
              </h3>
              <p className="text-slate-600 max-w-md mb-6 leading-relaxed text-sm">
                We handle the entire application process for free. From
                shortlisting universities to submitting error-free applications.
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#020b2c] bg-white px-4 py-2 rounded-full border border-slate-200 group-hover:border-yellow-400 transition-colors shadow-sm">
                Start Application <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>

          {/* 2. TALL TILE: Visa */}
          <Link
            href="/our-services/visa-guidance"
            className="group relative overflow-hidden rounded-[2rem] bg-yellow-50 p-8 shadow-sm border border-yellow-200 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 hover:-translate-y-1 active:scale-[0.98] active:bg-yellow-100"
          >
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-200/50 rounded-tl-full -mr-10 -mb-10 transition-transform group-hover:scale-110"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#020b2c] shadow-sm">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#020b2c] mb-2">
                  Visa Guidance
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  98% Success rate. Simplified checklists, interview prep, and
                  UKVI compliance checks.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-[#020b2c] underline decoration-yellow-400 decoration-2 underline-offset-4">
                Check Requirements <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>

          {/* 3. STANDARD TILES - Refined for Mobile Affordance */}

          {/* Scholarships */}
          <Link
            href="/our-services/scholarships"
            className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 hover:-translate-y-1 active:scale-[0.98] active:bg-slate-50"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#020b2c] group-hover:bg-yellow-400 transition-colors">
              <Banknote className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#020b2c] mb-1">
              Scholarships
            </h3>
            <div className="flex justify-between items-end gap-2">
              <p className="text-xs text-slate-600 leading-relaxed">
                Unlock financial aid. We identify bursaries matched to your
                profile.
              </p>
              <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-yellow-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
            </div>
          </Link>

          {/* Accommodation */}
          <Link
            href="/our-services/accommodation"
            className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 hover:-translate-y-1 active:scale-[0.98] active:bg-slate-50"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#020b2c] group-hover:bg-yellow-400 transition-colors">
              <Home className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#020b2c] mb-1">
              Accommodation
            </h3>
            <div className="flex justify-between items-end gap-2">
              <p className="text-xs text-slate-600 leading-relaxed">
                Safe housing recommendations near your campus and budget.
              </p>
              <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-yellow-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
            </div>
          </Link>

          {/* Arrival */}
          <Link
            href="/our-services/arrival-support"
            className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 hover:-translate-y-1 active:scale-[0.98] active:bg-slate-50"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#020b2c] group-hover:bg-yellow-400 transition-colors">
              <PlaneLanding className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-[#020b2c] mb-1">
              Arrival Support
            </h3>
            <div className="flex justify-between items-end gap-2">
              <p className="text-xs text-slate-600 leading-relaxed">
                Professional airport pickup and settling-in assistance.
              </p>
              <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-yellow-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
