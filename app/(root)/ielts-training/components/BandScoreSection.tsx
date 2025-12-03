"use client";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const bands = [
  { skill: "Listening", current: 5.5, target: 6.5 },
  { skill: "Reading", current: 6.0, target: 6.5 },
  { skill: "Writing", current: 5.0, target: 6.5 },
  { skill: "Speaking", current: 5.5, target: 6.5 },
];

const maxBand = 9;

export default function BandScoreSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-10 sm:py-12">
      <div className={MAX_WIDTH}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-500">
              Band score planning
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              See how our training lifts your IELTS score
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              At the start of your course we complete a short level check in all
              four skills and map this against the{" "}
              <span className="font-semibold text-slate-900">
                required band
              </span>{" "}
              for your chosen university. Together we agree a realistic timeline
              to reach your goal.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              With consistent study, most students improve by{" "}
              <span className="font-semibold text-amber-600">0.5–1.0 band</span>{" "}
              in their weaker skills. Your tutor gives regular progress updates
              and sample band predictions so you know exactly where you stand
              before booking the test.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
            {bands.map((band) => {
              const currentPercent = (band.current / maxBand) * 100;
              const targetPercent = (band.target / maxBand) * 100;

              return (
                <div key={band.skill} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                    <span>{band.skill}</span>
                    <span>
                      <span className="font-semibold text-slate-900">
                        {band.current.toFixed(1)}
                      </span>{" "}
                      →{" "}
                      <span className="font-semibold text-slate-900">
                        {band.target.toFixed(1)}
                      </span>{" "}
                      Band
                    </span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-slate-300"
                      style={{ width: `${currentPercent}%` }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-amber-400"
                      style={{ width: `${targetPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
            <p className="pt-1 text-[11px] text-slate-500">
              Example scores for illustration only. Your plan is based on your
              own level check and confirmed university requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
