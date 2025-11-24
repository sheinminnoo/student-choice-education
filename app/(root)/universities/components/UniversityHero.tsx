import type { University } from "@/data/universities";

type Props = {
  uni: University;
};

export default function UniversityHero({ uni }: Props) {
  return (
    <section className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-5 sm:p-6 lg:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.95)] space-y-5 sm:space-y-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-60 bg-gradient-to-l from-emerald-500/10 via-sky-500/5 to-transparent" />

      <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="mt-1 h-12 w-12 rounded-2xl bg-emerald-500/15 text-emerald-200 flex items-center justify-center text-lg font-semibold">
            {uni.name.charAt(0).toUpperCase()}
          </div>

          <div className="space-y-2">
            <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.22em] text-emerald-300/80 font-semibold">
              {uni.type}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
              {uni.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              {uni.city}, {uni.country} • {uni.region}
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-xs sm:text-sm text-emerald-100 max-w-xs md:max-w-sm">
          <p className="uppercase tracking-[0.18em] text-[0.65rem] text-emerald-200 font-semibold">
            Ranking highlight
          </p>
          <p className="mt-1 font-medium text-emerald-50">
            {uni.ranking.label}
          </p>
          <p className="text-emerald-100/90">{uni.ranking.value}</p>
        </div>
      </div>

      <p className="relative text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
        {uni.overview}
      </p>
    </section>
  );
}
