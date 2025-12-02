"use client";

import { useMemo, useState } from "react";
import { universities } from "@/data/universities";

import type { CountryFilter, CategoryFilter } from "./types";
import UniversitiesHero from "./components/UniversityHero";
import UniversitiesFilterBar from "./components/UniversitiesFilterBar";
import UniversityRow from "./components/UniversityRow";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function UniversitiesClient() {
  const [countryFilter, setCountryFilter] = useState<CountryFilter>("All");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("All");
  const [search, setSearch] = useState("");

  const stats = useMemo(() => {
    const total = universities.length;
    return { total };
  }, []);

  const filteredUniversities = useMemo(() => {
    return universities.filter((u) => {
      if (countryFilter !== "All" && u.country !== countryFilter) return false;
      if (categoryFilter !== "All" && u.category !== categoryFilter)
        return false;

      if (search.trim()) {
        const term = search.toLowerCase();
        const haystack = [
          u.name,
          u.city,
          u.campus,
          u.country,
          u.shortDescription,
          ...(u.popularPrograms || []),
        ]
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(term)) return false;
      }

      return true;
    });
  }, [countryFilter, categoryFilter, search]);

  return (
    <div className="bg-slate-50 pb-16">
      <UniversitiesHero />

      <section className="bg-white pb-6 pt-4">
        <div className={MAX_WIDTH}>
          <UniversitiesFilterBar
            stats={stats}
            countryFilter={countryFilter}
            categoryFilter={categoryFilter}
            search={search}
            onCountryChange={setCountryFilter}
            onCategoryChange={setCategoryFilter}
            onSearchChange={setSearch}
            onClearAll={() => {
              setCountryFilter("All");
              setCategoryFilter("All");
              setSearch("");
            }}
            resultCount={filteredUniversities.length}
          />
        </div>
      </section>

      <section id="universities-list" className="pt-6">
        <div className={MAX_WIDTH}>
          {filteredUniversities.length === 0 ? (
            <div className="flex min-h-[200px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white py-10 text-center">
              <p className="text-sm font-semibold text-slate-700">
                No institutions match your filters.
              </p>
              <p className="mt-1 max-w-md text-xs text-slate-500">
                Try removing one of the filters or using a broader keyword such
                as &quot;Business&quot; or &quot;Computer Science&quot;.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredUniversities.map((u) => (
                <UniversityRow key={u.slug} uni={u} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
