import { universities } from "@/data/universities";
import UniversityCard from "./components/UniversityCard";
import UniversityFilters from "./components/UniversityFilters";

const MAX_WIDTH_CLASS = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function UniversitiesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),transparent_55%),linear-gradient(to_bottom,#020617,#020617)]" />

      <div className={`${MAX_WIDTH_CLASS} pt-10 pb-20 space-y-6 sm:space-y-8`}>
        <header className="space-y-3">
          <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.22em] text-emerald-300/80 font-semibold">
            United Kingdom • Partner universities
          </p>

          <div className="flex flex-wrap items-end justify-between gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
              {universities.length} Universities in the UK
            </h1>
            <span className="text-xs sm:text-sm text-slate-400">
              Curated by Student Choice Education
            </span>
          </div>

          <p className="max-w-2xl text-sm sm:text-base text-slate-300">
            Explore a curated selection of UK universities partnered with
            Student Choice Education. Compare locations, rankings and key facts,
            then open each profile for more details.
          </p>
        </header>

        <UniversityFilters />

        <div className="grid gap-4 lg:gap-6 xl:grid-cols-2">
          {universities.map((uni) => (
            <UniversityCard key={uni.slug} uni={uni} />
          ))}
        </div>
      </div>
    </div>
  );
}
