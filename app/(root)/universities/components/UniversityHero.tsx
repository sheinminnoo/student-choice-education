import type { University } from "@/data/universities";

type Props = {
  uni: University;
};

export default function UniversityHero({ uni }: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-2xl font-bold text-sky-700">
            {uni.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              {uni.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>{uni.type}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>{uni.ranking.value}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          <button className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <svg viewBox="0 0 20 20" className="mr-2 h-4 w-4">
              <path
                d="M5 3.5h10a1 1 0 0 1 1 1V17l-6-3-6 3V4.5a1 1 0 0 1 1-1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Save this university
          </button>
          <button className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-600">
            Enquire now
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.3fr)] items-stretch">
        {/* Hero image / gradient */}
        <div className="relative h-52 sm:h-64 lg:h-72 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-900 via-sky-700 to-emerald-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
          <div className="absolute bottom-5 left-5 max-w-md space-y-1 text-slate-50">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-100/90">
              Study in the United Kingdom
            </p>
            <p className="text-sm sm:text-base font-medium text-sky-50/90">
              Strong academic reputation, supportive international community and
              excellent career outcomes for graduates.
            </p>
          </div>
        </div>

        {/* Consultation card */}
        <div className="flex flex-col justify-between gap-5 rounded-2xl bg-[#0B2348] p-5 sm:p-6 text-slate-50">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              Free consultation for this university
            </h2>
            <p className="text-sm text-slate-200/90">
              Our counsellors can help you compare courses, entry requirements,
              tuition fees and scholarships for this university.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Stat label="Founded year" value={uni.stats.foundedYear} />
            <Stat label="Programmes" value={uni.stats.programmes} />
            <Stat label="Location" value={`${uni.city}, ${uni.country}`} />
            <Stat label="Employability rate" value={uni.stats.employability} />
          </div>

          <button className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-emerald-300">
            Talk to our student counsellors
            <span className="ml-2">
              <svg viewBox="0 0 20 20" className="h-4 w-4">
                <path
                  d="M7 4l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-900/30 px-4 py-3">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold">{value}</p>
    </div>
  );
}
