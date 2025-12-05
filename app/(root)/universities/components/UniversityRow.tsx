import Image from "next/image";
import Link from "next/link";
import type { University } from "@/data/universities";

type Props = {
  uni: University;
  featured?: boolean;
};

export default function UniversityRow({ uni, featured = false }: Props) {
  return (
    <article
      className={`
        group relative rounded-3xl border
        ${
          featured
            ? "border-amber-400/80 shadow-[0_16px_48px_rgba(245,158,11,0.18)]"
            : "border-slate-200/80 shadow-[0_12px_36px_rgba(15,23,42,0.06)]"
        }
        bg-gradient-to-br from-[#F4F7FB] via-white to-[#EAF0F8]
        px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6
        transition-all duration-200 ease-out
        md:hover:-translate-y-1 md:hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)]
      `}
    >
      {/* Left Accent Bar */}
      <div
        className={`
          pointer-events-none absolute inset-y-3 left-0 w-[3px] rounded-full opacity-90
          ${
            featured
              ? "bg-gradient-to-b from-amber-500 via-amber-400 to-amber-300"
              : "bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100"
          }
        `}
      />

      <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        {/* LOGO + NAME */}
        <div className="flex flex-1 items-start gap-3 sm:gap-4 lg:max-w-[40%] lg:gap-5">
          {/* LOGO WRAPPER */}
          <div className="relative h-16 w-16 sm:h-[72px] sm:w-[72px] lg:h-[88px] lg:w-[88px]">
            {/* Glow Behind Logo (static, no animation) */}
            <div
              className="
                absolute -inset-1 rounded-3xl
                bg-[radial-gradient(circle_at_top_left,_rgba(255,223,140,0.30),_transparent_70%)]
              "
            />

            {/* Logo Box */}
            <div
              className="
                relative h-full w-full overflow-hidden rounded-2xl bg-white
                ring-1 ring-slate-200 shadow-[0_10px_26px_rgba(15,23,42,0.16)]
              "
            >
              {uni.logo ? (
                <Image
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  fill
                  className="
                    object-contain p-2.5
                    transition-transform duration-200 ease-out
                    md:group-hover:scale-[1.05]
                  "
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

          {/* NAME + BADGES */}
          <div className="space-y-1.5 lg:space-y-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <h2 className="text-sm font-semibold text-slate-900 sm:text-[15px] lg:text-[16px]">
                {uni.name}
              </h2>

              {featured && (
                <span
                  className="
                    inline-flex items-center rounded-full
                    bg-gradient-to-r from-amber-500 to-amber-400
                    px-2.5 py-0.5 text-[10px] font-semibold uppercase
                    tracking-wide text-slate-900 shadow-[0_10px_24px_rgba(245,158,11,0.32)]
                  "
                >
                  Premium
                </span>
              )}
            </div>

            <p className="text-[11px] text-slate-700/90 sm:text-xs">
              {uni.city}, {uni.country} · {uni.campus}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-medium text-slate-700 ring-1 ring-slate-200/70">
                {uni.category}
              </span>

              {uni.rankingBadge && (
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-medium text-amber-900 ring-1 ring-amber-300/80">
                  {uni.rankingBadge}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="flex-1 space-y-2 lg:max-w-[38%]">
          <p className="text-[11px] leading-relaxed text-slate-800 sm:text-xs lg:text-[13px]">
            {uni.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {uni.popularPrograms?.slice(0, 3).map((prog) => (
              <span
                key={prog}
                className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-medium text-slate-900 ring-1 ring-slate-200"
              >
                {prog}
              </span>
            ))}
            {uni.studyModes?.slice(0, 2).map((mode) => (
              <span
                key={mode}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] text-slate-700 ring-1 ring-slate-200"
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            mt-3 flex flex-1 flex-col gap-2 border-t border-slate-200/70 pt-3 text-[11px] text-slate-800
            sm:mt-3 sm:flex-row sm:items-center sm:justify-between sm:border-t-0 sm:pt-0
            lg:mt-0 lg:max-w-[22%] lg:flex-col lg:items-end lg:justify-between
          "
        >
          <div className="space-y-0.5 text-left leading-snug sm:text-right">
            {uni.intakes?.length > 0 && (
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

          {/* CTA BUTTON */}
          <div className="flex items-center gap-2 sm:justify-end lg:flex-col lg:items-end lg:gap-1.5">
            <Link
              href={`/universities/${uni.slug}`}
              className="
                inline-flex items-center justify-center rounded-full
                bg-amber-400 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-slate-900
                shadow-[0_8px_22px_rgba(245,158,11,0.40)]
                transition-all duration-200
                hover:bg-amber-500 hover:shadow-[0_12px_30px_rgba(245,158,11,0.52)]
                hover:-translate-y-[2px]
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
