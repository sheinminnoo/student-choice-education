import type { University } from "@/data/universities";

type Props = {
  uni: University;
};

export default function UniversityKeyInfoGrid({ uni }: Props) {
  return (
    <section id="key-information" className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">
        Key information
      </h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <InfoCard title={uni.ranking.label} value={uni.ranking.value} />
        <InfoCard title="Programmes" value={uni.stats.programmes} />
        <InfoCard title="Number of campus" value={uni.stats.campuses} />
        <InfoCard title="Study mode" value={uni.studyMode} />
        <InfoCard
          title="Schedule preferences"
          value={uni.schedulePreferences}
        />
        <InfoCard title="Student support" value={uni.support} />
      </div>
    </section>
  );
}

type CardProps = { title: string; value: string };

function InfoCard({ title, value }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-xs">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}
