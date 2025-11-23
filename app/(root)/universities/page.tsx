import { universities } from "@/data/universities";
import UniversityCard from "./components/UniversityCard";
import UniversityFilters from "./components/UniversityFilters";

export default function UniversitiesPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          {universities.length} Universities in the UK
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-slate-600">
          Explore a curated selection of UK universities partnered with Student
          Choice Education. Compare locations, rankings and key facts, then open
          each profile for more details.
        </p>
      </header>

      <UniversityFilters />

      <div className="grid gap-4 lg:gap-6">
        {universities.map((uni) => (
          <UniversityCard key={uni.slug} uni={uni} />
        ))}
      </div>
    </div>
  );
}
