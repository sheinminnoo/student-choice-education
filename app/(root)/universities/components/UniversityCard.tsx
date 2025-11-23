import Link from "next/link";
import type { University } from "@/data/universities";

type Props = {
  uni: University;
};

export default function UniversityCard({ uni }: Props) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-500 via-emerald-400 to-sky-500" />

      <div className="pl-4 pr-4 sm:pr-5 lg:pr-6 py-4 sm:py-5 lg:py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-lg font-bold text-sky-700">
              {uni.name.charAt(0)}
            </div>
            <div>
              <Link
                href={`/universities/${uni.slug}`}
                className="inline-flex items-center gap-1 text-base sm:text-lg font-semibold text-slate-900 hover:text-sky-700"
              >
                <span>{uni.name}</span>
              </Link>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                {uni.type} • {uni.city}, {uni.country}
              </p>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-sky-800">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                <span>{uni.ranking.label}</span>
                <span className="text-sky-900">· {uni.ranking.value}</span>
              </div>
            </div>
          </div>

          <button className="inline-flex items-center gap-1 self-start rounded-full border border-slate-200 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-slate-600 hover:border-sky-400 hover:text-sky-700">
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5">
              <path
                d="M5 3.5h10a1 1 0 0 1 1 1V17l-6-3-6 3V4.5a1 1 0 0 1 1-1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Save</span>
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[11px] text-slate-700">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5">
                <path
                  d="M5 4h10v12H5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M8 7h4M8 10h4M8 13h3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Programmes
              </p>
              <p className="mt-0.5 font-medium">{uni.stats.programmes}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[11px] text-slate-700">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5">
                <path
                  d="M4 8.5C4 5.5 6.5 3 10 3s6 2.5 6 5.5c0 3.5-3.5 6.5-6 8.5-2.5-2-6-5-6-8.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Location
              </p>
              <p className="mt-0.5 font-medium">
                {uni.city}, {uni.region}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[11px] text-slate-700">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5">
                <path
                  d="M4 11c1.5 1.5 3.25 2.25 5.25 2.25S13 12.5 14.5 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle
                  cx="10"
                  cy="8"
                  r="3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Employability
              </p>
              <p className="mt-0.5 font-medium">{uni.stats.employability}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
          <p className="hidden text-xs text-slate-500 sm:block">
            {uni.overview}
          </p>
          <Link
            href={`/universities/${uni.slug}`}
            className="inline-flex items-center text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800"
          >
            View details
            <span className="ml-1.5">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5">
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
          </Link>
        </div>
      </div>
    </article>
  );
}
