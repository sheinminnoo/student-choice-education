"use client";

import { universityCountries, universityCategories } from "@/data/universities";
import type { CountryFilter, CategoryFilter } from "../types";
import { XCircle, Search } from "lucide-react";

type FilterBarProps = {
  stats: { total: number };
  countryFilter: CountryFilter;
  categoryFilter: CategoryFilter;
  search: string;
  onCountryChange: (value: CountryFilter) => void;
  onCategoryChange: (value: CategoryFilter) => void;
  onSearchChange: (value: string) => void;
  onClearAll: () => void;
  resultCount: number;
};

export default function UniversitiesFilterBar({
  stats,
  countryFilter,
  categoryFilter,
  search,
  onCountryChange,
  onCategoryChange,
  onSearchChange,
  onClearAll,
  resultCount,
}: FilterBarProps) {
  const hasActiveFilters =
    countryFilter !== "All" || categoryFilter !== "All" || search.length > 0;

  return (
    <section
      className="animate-section w-full space-y-5"
      aria-labelledby="filter-heading"
    >
      {/* ========== HEADER ========== */}
      <header className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Find Your Institution
          </p>
          <h2
            id="filter-heading"
            className="text-2xl font-bold tracking-tight text-[#020b2c] sm:text-3xl"
          >
            Explore Partner Universities
          </h2>
        </div>

        {/* Result Counter Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs text-slate-600 shadow-sm">
          <span>Showing</span>
          <span className="font-bold text-[#020b2c]">{resultCount}</span>
          <span>of</span>
          <span className="font-bold text-[#020b2c]">{stats.total}</span>
          <span className="hidden sm:inline">institutions</span>
        </div>
      </header>

      {/* ========== CONTROLS ========== */}
      <div className="space-y-6 pt-1">
        {/* Row 1: Search + Clear Button */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full space-y-2 sm:max-w-md">
            <label
              htmlFor="uni-search"
              className="text-[11px] font-bold uppercase tracking-wider text-slate-500"
            >
              Search Universities
            </label>
            <div className="relative group">
              <input
                id="uni-search"
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Type university name, city or campus..."
                className="
                  peer w-full rounded-xl border border-slate-200 bg-white 
                  pl-10 pr-4 py-3 text-sm font-medium text-[#020b2c] 
                  placeholder:text-slate-400 shadow-sm transition-all duration-200
                  focus:border-[#020b2c] focus:outline-none focus:ring-4 focus:ring-[#020b2c]/5
                  group-hover:border-slate-300
                "
              />
              {/* Search Icon inside input */}
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors peer-focus:text-[#020b2c]" />
            </div>
          </div>

          {/* Conditional Clear Button with Fade Effect */}
          <div
            className={`transition-opacity duration-300 ${hasActiveFilters ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <button
              type="button"
              onClick={onClearAll}
              className="group flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <XCircle className="h-4 w-4" />
              <span>Clear filters</span>
            </button>
          </div>
        </div>

        {/* Row 2: Filter Chips */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Destination Filter */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Destination
            </span>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                active={countryFilter === "All"}
                onClick={() => onCountryChange("All")}
              >
                All destinations
              </FilterChip>
              {universityCountries.map((country) => (
                <FilterChip
                  key={country}
                  active={countryFilter === country}
                  onClick={() => onCountryChange(country)}
                >
                  {country}
                </FilterChip>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Institution Type
            </span>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                active={categoryFilter === "All"}
                onClick={() => onCategoryChange("All")}
              >
                All types
              </FilterChip>
              {universityCategories.map((category) => (
                <FilterChip
                  key={category}
                  active={categoryFilter === category}
                  onClick={() => onCategoryChange(category)}
                >
                  {category}
                </FilterChip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== SUB-COMPONENT ==========

type FilterChipProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function FilterChip({ active, onClick, children }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        relative overflow-hidden rounded-lg px-3.5 py-1.5 text-[12px] font-medium transition-all duration-200
        active:scale-[0.97]
        ${
          active
            ? "border border-[#020b2c] bg-[#020b2c] text-white shadow-md ring-1 ring-[#020b2c]/20"
            : "border border-slate-200 bg-white text-slate-600 hover:border-[#020b2c]/30 hover:bg-slate-50 hover:text-[#020b2c]"
        }
      `}
    >
      {children}
    </button>
  );
}
