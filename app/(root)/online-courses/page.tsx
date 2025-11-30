"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  courses,
  categories,
  type CourseCategory,
  type CourseLevel,
} from "@/data/courses";
import heroImg from "@/public/heros/oc.png";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

type FilterCategory = CourseCategory | "All";
type FilterLevel = CourseLevel | "All";
type SortOption =
  | "recommended"
  | "title-asc"
  | "title-desc"
  | "duration-asc"
  | "duration-desc";

const sortOptions: { value: SortOption; label: string; helper: string }[] = [
  {
    value: "recommended",
    label: "Recommended",
    helper: "Default order based on course mix",
  },
  {
    value: "title-asc",
    label: "Title A–Z",
    helper: "Alphabetical by course name",
  },
  {
    value: "title-desc",
    label: "Title Z–A",
    helper: "Reverse alphabetical",
  },
  {
    value: "duration-asc",
    label: "Duration: Short to long",
    helper: "Quick courses first",
  },
  {
    value: "duration-desc",
    label: "Duration: Long to short",
    helper: "In-depth courses first",
  },
];

function getDurationValue(duration?: string): number {
  if (!duration) return Number.POSITIVE_INFINITY;
  const match = duration.match(/\d+/);
  if (!match) return Number.POSITIVE_INFINITY;
  return parseInt(match[0], 10);
}

export default function OnlineCoursesPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<FilterLevel>("All");
  const [sortOption, setSortOption] = useState<SortOption>("recommended");
  const [sortOpen, setSortOpen] = useState(false);

  const levels = useMemo<CourseLevel[]>(
    () =>
      Array.from(
        new Set(
          courses
            .map((c) => c.level)
            .filter((v): v is CourseLevel => v !== undefined)
        )
      ),
    []
  );

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = courses.filter((course) => {
      const matchCategory =
        activeCategory === "All" ? true : course.category === activeCategory;

      const matchLevel =
        levelFilter === "All" ? true : course.level === levelFilter;

      const matchSearch =
        query.length === 0
          ? true
          : course.title.toLowerCase().includes(query) ||
            course.shortDescription.toLowerCase().includes(query);

      return matchCategory && matchLevel && matchSearch;
    });

    const sorted = [...filtered];

    switch (sortOption) {
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "duration-asc":
        sorted.sort(
          (a, b) => getDurationValue(a.duration) - getDurationValue(b.duration)
        );
        break;
      case "duration-desc":
        sorted.sort(
          (a, b) => getDurationValue(b.duration) - getDurationValue(a.duration)
        );
        break;
      case "recommended":
      default:
        break;
    }

    return sorted;
  }, [activeCategory, searchQuery, levelFilter, sortOption]);

  const currentSort = sortOptions.find((o) => o.value === sortOption)!;

  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Students learning online"
            fill
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/35" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/90 to-transparent" />

        <div className={`${MAX_WIDTH} relative`}>
          <div className="flex min-h-[520px] flex-col justify-center py-16 sm:min-h-[560px] lg:min-h-[640px]">
            <motion.div
              className="max-w-2xl space-y-6"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#ffb800] backdrop-blur-sm">
                Online training · CPD-friendly
              </p>

              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                Build the <span className="text-[#ffb800]">right skills</span>{" "}
                with flexible online courses.
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                Focused short courses in Business, IT & Cyber, Health & Social
                Care, and Mental Wellbeing. Study 100% online with clear
                outcomes and certificates that support applications and career
                growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center rounded-full bg-[#ffb800] px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-[#ffd34a]"
                >
                  Browse all courses
                </a>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                >
                  Talk to our course team
                </Link>
              </div>

              <motion.div
                className="mt-4 inline-flex flex-wrap gap-6 rounded-2xl bg-black/25 px-5 py-4 text-sm text-white/85 backdrop-blur-md sm:gap-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Course areas
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Business · IT · Health · Wellbeing
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Study style
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    100% online · self-paced
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Ideal for
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Students, staff & professionals
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="courses"
        className={`${MAX_WIDTH} border-t border-slate-200 bg-white pb-20 pt-12`}
      >
        <div className="space-y-6">
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Online courses
              </p>
              <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
                Find the right online course for your goals.
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {activeCategory === "All"
                  ? "Browse flexible online courses in Business, IT & Cyber Security, Health & Social Care, and Counselling, Mental Health & Wellbeing."
                  : categories.find((c) => c.id === activeCategory)
                      ?.description}
              </p>
            </div>

            <div className="flex flex-col items-end gap-2 text-xs text-slate-600">
              <p>
                Showing{" "}
                <span className="font-semibold text-[#071a3c]">
                  {filteredCourses.length}
                </span>{" "}
                course{filteredCourses.length === 1 ? "" : "s"}
              </p>

              <div className="flex items-center gap-2">
                <span className="hidden text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:inline">
                  Sort by
                </span>

                <div
                  className="relative"
                  tabIndex={-1}
                  onBlur={(e) => {
                    if (
                      !e.currentTarget.contains(e.relatedTarget as Node | null)
                    ) {
                      setSortOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSortOpen((prev) => !prev)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-800 shadow-sm hover:border-slate-400 focus:border-[#071a3c] focus:outline-none focus:ring-2 focus:ring-[#071a3c]/20"
                    aria-haspopup="listbox"
                    aria-expanded={sortOpen}
                  >
                    <span>{currentSort.label}</span>
                    <span className="text-[10px] text-slate-400">
                      • {currentSort.helper.split(".")[0]}
                    </span>
                    <span
                      className={`ml-1 inline-flex transform items-center transition-transform ${
                        sortOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className="h-3 w-3 text-slate-500"
                      >
                        <path
                          d="M5.25 7.5L10 12.25L14.75 7.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {sortOpen && (
                    <div className="absolute right-0 z-20 mt-2 w-64 rounded-2xl border border-slate-200 bg-white/95 p-1 text-[11px] text-slate-800 shadow-lg ring-1 ring-black/5 backdrop-blur">
                      <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Sort courses
                      </p>
                      <div className="space-y-1">
                        {sortOptions.map((option) => {
                          const isActive = option.value === sortOption;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setSortOption(option.value);
                                setSortOpen(false);
                              }}
                              className={`flex w-full items-start gap-2 rounded-xl px-3 py-2 text-left transition ${
                                isActive
                                  ? "bg-[#071a3c]/5 text-[#071a3c]"
                                  : "hover:bg-slate-50"
                              }`}
                              role="option"
                              aria-selected={isActive}
                            >
                              <span className="mt-[2px] h-2 w-2 rounded-full border border-slate-300">
                                {isActive && (
                                  <span className="block h-full w-full rounded-full bg-[#071a3c]" />
                                )}
                              </span>
                              <span>
                                <span className="block text-[11px] font-semibold">
                                  {option.label}
                                </span>
                                <span className="mt-0.5 block text-[10px] text-slate-500">
                                  {option.helper}
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex-1 space-y-1">
                <label
                  htmlFor="course-search"
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500"
                >
                  Search courses
                </label>
                <input
                  id="course-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type course name or keyword"
                  className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#071a3c] focus:outline-none focus:ring-2 focus:ring-[#071a3c]/20"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                  setLevelFilter("All");
                  setSortOption("recommended");
                }}
                className="text-[11px] font-medium text-slate-500 underline underline-offset-4 hover:text-slate-700 md:self-end"
              >
                Clear all filters
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Course area
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveCategory("All")}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      activeCategory === "All"
                        ? "bg-[#071a3c] text-white"
                        : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    All courses
                  </button>

                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                        activeCategory === category.id
                          ? "bg-[#071a3c] text-white"
                          : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {levels.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Level
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setLevelFilter("All")}
                      className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${
                        levelFilter === "All"
                          ? "bg-slate-900 text-white"
                          : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                      }`}
                    >
                      Any level
                    </button>
                    {levels.map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setLevelFilter(level)}
                        className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${
                          levelFilter === level
                            ? "bg-slate-900 text-white"
                            : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <p className="mt-6 text-sm text-slate-500">
              No courses match your filters yet. Try removing one of the filters
              or search terms, or contact our team for recommendations.
            </p>
          ) : (
            <div className="mt-2 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course, index) => (
                <motion.article
                  key={course.id}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.03,
                  }}
                >
                  <div className="relative h-40 w-full sm:h-44">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10" />

                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 text-[11px] text-white">
                      <span className="rounded-full bg-black/45 px-3 py-1">
                        {course.category}
                      </span>
                      {course.level && (
                        <span className="rounded-full bg-black/45 px-3 py-1">
                          {course.level} level
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                        {course.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {course.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        href={`/online-courses/${course.id}`}
                        aria-label={`View details for ${course.title}`}
                        className="rounded-full bg-[#071a3c] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0c2a55]"
                      >
                        View course details
                      </Link>

                      {course.url ? (
                        <a
                          href={course.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] font-medium text-[#d6a200] hover:underline"
                        >
                          Partner site
                        </a>
                      ) : (
                        <span className="text-[11px] text-slate-500">
                          Details on request
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
