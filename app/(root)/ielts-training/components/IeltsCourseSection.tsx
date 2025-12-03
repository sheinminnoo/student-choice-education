"use client";

import Image from "next/image";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const PRIMARY_BTN =
  "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all hover:bg-amber-400 hover:text-slate-900 hover:shadow-amber-300/40 hover:shadow-xl focus:ring-2 focus:ring-amber-400";

type Props = {
  badge: string;
  title: string;
  image: string;
  description: string;
  points: string[];
  reverse?: boolean;
};

export default function IeltsCourseSection({
  badge,
  title,
  image,
  description,
  points,
  reverse,
}: Props) {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div
        className={`${MAX_WIDTH} grid gap-8 lg:grid-cols-2 lg:items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* FULL WIDTH IMAGE SIDE */}
        <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-slate-200 sm:h-[360px] lg:h-[420px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width:1024px) 600px, 100vw"
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-semibold text-slate-950 shadow-sm">
            {badge}
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            {description}
          </p>

          <ul className="mt-1.5 space-y-1.5 text-sm text-slate-700 sm:text-base">
            {points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a href="#ielts-form" className={PRIMARY_BTN}>
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
