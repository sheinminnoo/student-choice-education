import Link from "next/link";
import { MapPin, GraduationCap, ArrowRight, Bookmark } from "lucide-react";
import type { University } from "@/data/universities"; // Assuming this is correct

type Props = {
  uni: University;
};

export default function UniversityCardPremium({ uni }: Props) {
  const initial = uni.name.charAt(0).toUpperCase();

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out hover:border-sky-500/60 hover:shadow-sky-500/20">
      {/* --- Top Accent Bar & Subtle Outer Glow (Premium Effect) --- */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-400/90 via-indigo-500/90 to-cyan-400/90" />

      {/* --- Inner Radial Shadow/Glow on Hover --- */}
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-10 animate-pulse bg-radial-gradient from-sky-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex flex-col gap-6">
        {/* --- Header Section (Logo, Title, Actions) --- */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            {/* --- Initial/Logo Placeholder (Enhanced) --- */}
            <div className="mt-1 h-12 w-12 shrink-0 rounded-xl bg-slate-800 border border-slate-700 text-sky-300 flex items-center justify-center text-lg font-bold shadow-inner shadow-slate-900/50">
              {initial}
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-50 leading-tight tracking-tight">
                {uni.name}
              </h2>
              <p className="text-sm text-slate-400 mt-0.5">
                <GraduationCap
                  size={14}
                  className="inline mr-1 text-indigo-400"
                />
                {uni.type} • {uni.city}, {uni.country}
              </p>

              {/* --- Ranking Badge (Clearer Focus) --- */}
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200 border border-slate-700/80 shadow-md">
                <span className="inline-flex h-2 w-2 rounded-full bg-sky-400/90 shadow-lg shadow-sky-500/50" />
                <span className="font-semibold text-sky-200">
                  {uni.ranking.label}
                </span>
                <span className="text-slate-500">•</span>
                <span>#{uni.ranking.value}</span>
              </div>
            </div>
          </div>

          {/* --- Action Buttons --- */}
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <button className="text-sm inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-slate-400 hover:border-indigo-400 hover:text-indigo-300 transition duration-300">
              <Bookmark size={16} />
              Save
            </button>

            <Link
              href={`/universities/${uni.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-indigo-400 transition duration-300 shadow-lg shadow-indigo-500/40 transform active:scale-95"
            >
              Details
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* --- Stats/Features Grid (More Spacing, Cleaner Look) --- */}
        <div className="grid gap-6 pt-2 text-sm text-slate-200 md:grid-cols-3 border-t border-slate-800/70">
          <div className="space-y-1">
            <p className="text-[0.7rem] uppercase tracking-widest font-medium text-indigo-400">
              Programmes
            </p>
            <p className="text-lg font-extrabold text-slate-50">
              {uni.stats.programmes}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Undergraduate and postgraduate options
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[0.7rem] uppercase tracking-widest font-medium text-indigo-400">
              Location
            </p>
            <p className="inline-flex items-center gap-1.5 text-lg font-extrabold text-slate-50">
              <MapPin size={16} className="text-sky-300" />
              {uni.city}, {uni.country}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {uni.region}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[0.7rem] uppercase tracking-widest font-medium text-indigo-400">
              Employability
            </p>
            <p className="text-lg font-extrabold text-slate-50">
              {uni.stats.employability}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Graduate outcomes and career support
            </p>
          </div>
        </div>

        {/* --- Overview/Description (Refined Separator) --- */}
        <p className="border-t border-slate-800 pt-5 text-sm text-slate-300 line-clamp-3 leading-relaxed">
          {uni.overview}
        </p>
      </div>
    </article>
  );
}
