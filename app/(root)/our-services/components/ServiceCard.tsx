import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-emerald-400 to-sky-500" />

      <div className="flex-1 px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-800">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
          <span>Student support service</span>
        </div>

        {/* Title */}
        <h2 className="mt-3 text-base sm:text-lg font-semibold text-slate-900">
          {service.name}
        </h2>

        {/* Short description */}
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Highlight box */}
        {service.highlight && (
          <p className="mt-3 rounded-xl bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
            {service.highlight}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 px-5 py-3.5 sm:px-6 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-500">
          {service.showApplyForm && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5">
              Includes application form
            </span>
          )}
          {service.showAccommodationList && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5">
              Accommodation options
            </span>
          )}
          {service.showPickupForm && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5">
              Arrival support
            </span>
          )}
        </div>

        <Link
          href={`/ourservices/${service.slug}`}
          className="inline-flex items-center text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800"
        >
          View details
          <span className="ml-1.5">
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true">
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
    </article>
  );
}
