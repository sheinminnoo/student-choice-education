import type { University } from "@/data/universities";

type Props = {
  uni: University;
};

type InfoCardProps = {
  label: string;
  value: string;
  hint?: string;
};

function InfoCard({ label, value, hint }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 space-y-2 transition-transform duration-200 hover:-translate-y-0.5 hover:border-emerald-400/60">
      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400 font-semibold">
        {label}
      </p>
      <p className="text-base sm:text-lg font-semibold text-slate-50">
        {value}
      </p>
      {hint && <p className="text-xs sm:text-sm text-slate-400">{hint}</p>}
    </div>
  );
}

export default function UniversityKeyInfoGrid({ uni }: Props) {
  const { stats, ranking } = uni;

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 sm:p-6 lg:p-7 shadow-[0_22px_70px_rgba(0,0,0,0.95)] space-y-5 sm:space-y-6">
      <header className="space-y-1">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
          Key facts at a glance
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Quick numbers to help you compare programmes, campuses and graduate
          outcomes across universities.
        </p>
      </header>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          label="Programmes"
          value={stats.programmes}
          hint="Undergraduate and postgraduate options"
        />
        <InfoCard
          label="Campuses"
          value={stats.campuses}
          hint="Including main and satellite campuses"
        />
        <InfoCard
          label="Graduate employability"
          value={stats.employability}
          hint="Based on latest reported outcomes"
        />
        <InfoCard
          label="Ranking highlight"
          value={ranking.value}
          hint={ranking.label}
        />
      </div>
    </section>
  );
}
