import Image from "next/image";
import Link from "next/link";
import type { University } from "@/data/universities";

type Props = {
  uni: University;
  featured?: boolean;
};

const countryGradients: Record<University["country"], string> = {
  UK: "from-[#FFF7D1] via-[#FFFFFF] to-[#E7F1FF]",
  Germany: "from-[#FFF7D1] via-[#FFFFFF] to-[#E6F7F1]",
  France: "from-[#FFF7D1] via-[#FFFFFF] to-[#ECE6FF]",
  Spain: "from-[#FFF7D1] via-[#FFFFFF] to-[#FFE7EC]",
  Malta: "from-[#FFF7D1] via-[#FFFFFF] to-[#E7F7FF]",
};

export default function UniversityRow({ uni, featured = false }: Props) {
  const gradient =
    countryGradients[uni.country] ??
    "from-[#FFF7D1] via-[#FFFFFF] to-[#F3F6FF]";

  return (
    <article
      className={`
        group relative rounded-3xl border
        border-amber-200/70
        bg-gradient-to-r ${gradient}
        px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6
        shadow-[0_14px_40px_rgba(15,23,42,0.12)]
        backdrop-blur-[3px]
        transition-all duration-200 ease-out
        md:hover:-translate-y-1 md:hover:shadow-[0_24px_70px_rgba(15,23,42,0.22)]
      `}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-1.5 rounded-b-full bg-amber-300/80 blur-[3px]" />
      <div className="pointer-events-none absolute inset-y-3 left-0 w-[3px] rounded-full bg-gradient-to-b from-amber-400 via-amber-300 to-amber-200/70 opacity-80" />

      <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex flex-1 items-start gap-3 sm:gap-4 lg:max-w-[40%] lg:gap-5">
          <div className="relative h-16 w-16 shrink-0 sm:h-[72px] sm:w-[72px] lg:h-[88px] lg:w-[88px]">
            <div className="absolute -inset-1 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.55),_transparent_60%)] opacity-90" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white ring-2 ring-amber-100 shadow-[0_14px_32px_rgba(15,23,42,0.25)]">
              {uni.logo ? (
                <Image
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  fill
                  className="
                    object-contain p-2.5
                    grayscale
                    md:group-hover:grayscale-0
                    md:group-hover:scale-[1.04]
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
          </div>

          <div className="space-y-1.5 lg:space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <h2 className="text-sm font-semibold tracking-tight text-slate-900 sm:text-[15px] lg:text-[16px]">
                {uni.name}
              </h2>
              {featured && (
                <span className="inline-flex items-center rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-[0_8px_22px_rgba(245,158,11,0.55)]">
                  Featured
                </span>
              )}
            </div>

            <p className="text-[11px] text-slate-800/90 sm:text-xs">
              {uni.city}, {uni.country} · {uni.campus}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="inline-flex items-center rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-medium text-slate-700 ring-1 ring-slate-200/70">
                {uni.category}
              </span>
              {uni.rankingBadge && (
                <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-medium text-amber-900 ring-1 ring-amber-300/80">
                  {uni.rankingBadge}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-2 lg:max-w-[38%]">
          <p className="text-[11px] leading-relaxed text-slate-800 sm:text-xs lg:text-[13px]">
            {uni.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {uni.popularPrograms?.slice(0, 3).map((prog) => (
              <span
                key={prog}
                className="rounded-full bg-white/85 px-2.5 py-0.5 text-[10px] font-medium text-slate-900/90 ring-1 ring-slate-200/80"
              >
                {prog}
              </span>
            ))}
            {uni.studyModes?.slice(0, 2).map((mode) => (
              <span
                key={mode}
                className="rounded-full bg-slate-900/5 px-2.5 py-0.5 text-[10px] text-slate-700 ring-1 ring-slate-200/70"
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

        <div
          className="
            mt-3 flex flex-1 flex-col gap-2 border-t border-amber-100/70 pt-3 text-[11px] text-slate-800
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
                shadow-[0_10px_28px_rgba(15,23,42,0.7)]
                transition-all duration-200
                hover:bg-[#02051a]
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.9)]
              "
            >
              <span className="mr-1.5">View details</span>
              <span className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            {uni.website && (
              <a
                href={uni.website}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-medium text-slate-800 underline-offset-2 hover:text-slate-950 hover:underline"
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
