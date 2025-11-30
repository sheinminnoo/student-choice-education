import Image from "next/image";
import Link from "next/link";
import type { University } from "@/data/universities";

type Props = {
  uni: University;
};

export default function UniversityRow({ uni }: Props) {
  return (
    <article
      className="
        animate-row group relative rounded-3xl border border-slate-200/80 bg-white/95
        px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)]
        transition-transform transition-shadow duration-200 ease-out
        sm:px-5 sm:py-5
        lg:px-6 lg:py-6
        md:hover:-translate-y-0.5 md:hover:shadow-[0_20px_55px_rgba(15,23,42,0.07)]
      "
    >
      {/* subtle left accent */}
      <div className="pointer-events-none absolute inset-y-3 left-0 w-[3px] rounded-full bg-gradient-to-b from-amber-300 via-emerald-400 to-sky-400 opacity-80" />

      <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        {/* LEFT: logo + basic info */}
        <div className="flex flex-1 items-start gap-3 sm:gap-4 lg:max-w-[40%] lg:gap-5">
          <div
            className="
              relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl
              bg-white ring-1 ring-slate-200
              shadow-[0_10px_25px_rgba(15,23,42,0.16)]
              sm:h-[72px] sm:w-[72px]
              lg:h-[88px] lg:w-[88px]
            "
          >
            {uni.logo ? (
              <Image
                src={uni.logo}
                alt={`${uni.name} logo`}
                fill
                className="
                  object-contain p-2.5
                  grayscale
                  md:group-hover:grayscale-0
                  md:group-hover:scale-[1.02]
                  transition-[filter,transform] duration-200 ease-out
                "
                sizes="(max-width: 640px) 64px, (max-width: 1024px) 72px, 88px"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-900">
                <span className="text-[22px] font-semibold tracking-tight text-white/90">
                  {uni.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-1.5 lg:space-y-2">
            <h2 className="text-sm font-semibold tracking-tight text-slate-900 sm:text-[15px] lg:text-[16px]">
              {uni.name}
            </h2>
            <p className="text-[11px] text-slate-600 sm:text-xs">
              {uni.city}, {uni.country} · {uni.campus}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-700">
                {uni.category}
              </span>
              {uni.rankingBadge && (
                <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-medium text-amber-900 ring-1 ring-amber-200/80">
                  {uni.rankingBadge}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* MIDDLE: description + tags */}
        <div className="flex-1 space-y-2 lg:max-w-[38%]">
          <p className="text-[11px] leading-relaxed text-slate-600 sm:text-xs lg:text-[13px]">
            {uni.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {uni.popularPrograms?.slice(0, 3).map((prog) => (
              <span
                key={prog}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-700"
              >
                {prog}
              </span>
            ))}
            {uni.studyModes?.slice(0, 2).map((mode) => (
              <span
                key={mode}
                className="rounded-full bg-slate-50 px-2.5 py-0.5 text-[10px] text-slate-500 ring-1 ring-slate-200"
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: meta + actions */}
        <div
          className="
            mt-3 flex flex-1 flex-col gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-600
            sm:mt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:border-t-0 sm:pt-0
            lg:mt-0 lg:max-w-[22%] lg:flex-col lg:items-end lg:justify-between
          "
        >
          <div className="space-y-0.5 text-left leading-snug sm:text-right">
            {uni.intakes && uni.intakes.length > 0 && (
              <p>
                Intakes{" "}
                <span className="font-medium text-slate-900">
                  {uni.intakes.join(" · ")}
                </span>
              </p>
            )}
            <p>
              Established{" "}
              <span className="font-medium text-slate-900">
                {uni.established}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 sm:justify-end lg:flex-col lg:items-end lg:gap-1.5">
            <Link
              href={`/universities/${uni.slug}`}
              className="
                inline-flex items-center justify-center rounded-full
                bg-[#020B2C] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white
                shadow-[0_8px_22px_rgba(15,23,42,0.35)]
                transition-colors duration-200
                hover:bg-[#02051a]
              "
            >
              <span className="mr-1.5">View details</span>
              <span className="text-[11px]">→</span>
            </Link>

            {uni.website && (
              <a
                href={uni.website}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-medium text-slate-500 underline-offset-2 hover:text-slate-800 hover:underline"
              >
                Official website
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
