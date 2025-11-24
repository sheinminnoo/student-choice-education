"use client";

import { useState } from "react";

const countries = ["All countries", "United Kingdom", "Europe", "Asia"];
const rankingFilters = ["All", "Highest ranking", "Public universities"];

export default function UniversityFilters() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All countries");

  return (
    <section className="rounded-3xl border border-slate-800/80 bg-slate-950/90 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6 shadow-[0_18px_60px_rgba(0,0,0,0.9)] space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
            Refine results
          </p>
          <p className="text-xs sm:text-sm text-slate-300">
            Filter by ranking, region and country. More filters can be added
            later.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="inline-flex flex-wrap gap-2">
          {rankingFilters.map((label) => {
            const isActive = activeFilter === label;

            return (
              <button
                key={label}
                type="button"
                onClick={() => setActiveFilter(label)}
                className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition border ${
                  isActive
                    ? "border-emerald-400 bg-emerald-500/15 text-emerald-200 shadow-[0_0_0_1px_rgba(16,185,129,0.4)]"
                    : "border-slate-600/70 bg-slate-900/70 text-slate-300 hover:bg-slate-800/80 hover:text-slate-50"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end w-full lg:w-auto">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="h-10 rounded-full border border-slate-700 bg-slate-900/90 px-4 text-xs sm:text-sm text-slate-100 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
          >
            {countries.map((country) => (
              <option key={country} value={country} className="bg-slate-900">
                {country}
              </option>
            ))}
          </select>

          <div className="relative w-full sm:w-56 lg:w-64">
            <input
              type="text"
              placeholder="Search by university name"
              className="h-10 w-full rounded-full border border-slate-700 bg-slate-900/90 px-4 pr-10 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
            />
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-slate-500">
              ⌕
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
