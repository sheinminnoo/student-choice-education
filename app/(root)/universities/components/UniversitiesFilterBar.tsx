import { universityCountries, universityCategories } from "@/data/universities";
import type { CountryFilter, CategoryFilter } from "../types";

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
  return (
    <div className="animate-section space-y-5">
      {/* Top row: heading + count */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            UNIVERSITIES
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Find the right university for your study plans.
          </h2>
          <p className="max-w-2xl text-[13px] text-slate-600 sm:text-[14px]">
            Browse partner universities and pathway providers in the UK,
            Germany, France, Spain and Malta. Filter by destination, institution
            type and keywords.
          </p>
        </div>

        <p className="text-[11px] text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-900">{resultCount}</span> of{" "}
          <span className="font-semibold text-slate-900">{stats.total}</span>{" "}
          institutions
        </p>
      </div>

      {/* FILTER CONTROLS – flat, full-width, no card */}
      <div className="space-y-4 pt-1">
        {/* Search row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Search universities
            </p>
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Type university name, city or campus"
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-xs text-slate-800 shadow-sm placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
            />
          </div>

          <button
            type="button"
            onClick={onClearAll}
            className="mt-1 text-[11px] font-semibold text-slate-500 underline-offset-2 hover:text-slate-900 hover:underline sm:mt-7"
          >
            Clear all filters
          </button>
        </div>

        {/* Destination + Institution type chips */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Destination country */}
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Destination country
            </p>
            <div className="flex flex-wrap gap-1.5">
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

          {/* Institution type */}
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Institution type
            </p>
            <div className="flex flex-wrap gap-1.5">
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
    </div>
  );
}

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
      className={[
        "rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-colors",
        active
          ? "bg-[#020B2C] text-white shadow-[0_8px_20px_rgba(15,23,42,0.35)]"
          : "border border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
