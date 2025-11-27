"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { courses, categories, type CourseCategory } from "@/data/courses";
import heroImg from "@/public/heros/online-courses-hero.png";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

type FilterCategory = CourseCategory | "All";

export default function OnlineCoursesPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="bg-white text-slate-900">
      {/* ================ HERO ================ */}
      <section className={`${MAX_WIDTH} pt-10 pb-14 lg:pt-14`}>
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* LEFT CONTENT */}
          <div className="animate-hero-left">
            <div className="inline-flex items-center text-[11px] font-medium text-slate-600">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#ffb800]" />
              Online training designed for real students and staff
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl xl:text-[2.6rem]">
              Online courses to build the{" "}
              <span className="text-[#ffb800]">right skills</span> at the right
              time.
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-600">
              Explore short online courses in Business, IT, Health & Social
              Care, and Mental Wellbeing. Learn at your own pace with clear
              outcomes and certificates that support applications and career
              growth.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#courses"
                className="rounded-full bg-[#ffb800] px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-[#ffd34a]"
              >
                Browse all courses
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
              >
                Book a free consultation
              </Link>
            </div>

            <dl className="mt-8 flex flex-wrap gap-10 text-sm">
              <div>
                <dt className="text-slate-500">Main course areas</dt>
                <dd className="mt-1 text-lg font-semibold">4 key pathways</dd>
              </div>
              <div>
                <dt className="text-slate-500">Study style</dt>
                <dd className="mt-1 text-lg font-semibold">
                  100% online · self-paced
                </dd>
              </div>
            </dl>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="animate-hero-right">
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[320px] lg:h-[360px]">
              <Image
                src={heroImg}
                alt="Online courses"
                fill
                className="object-cover"
                priority
              />

              {/* soft transparent overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/15 to-transparent" />

              <div className="absolute inset-0 flex items-end p-6">
                <div className="max-w-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    Online learning
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    Learn anytime, anywhere.
                  </h2>
                  <p className="mt-1 text-sm text-white/90">
                    Flexible online courses with real-world skills and
                    certificates to support your next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================ COURSE LIST ================ */}
      <section
        id="courses"
        className={`border-t border-slate-200 bg-white ${MAX_WIDTH} pb-20 pt-12`}
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* FILTER SIDEBAR */}
          <aside className="w-full lg:w-72">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Course areas
            </p>

            <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
              <button
                onClick={() => setActiveCategory("All")}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  activeCategory === "All"
                    ? "bg-[#071a3c] text-white"
                    : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                }`}
              >
                All courses
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    activeCategory === category.id
                      ? "bg-[#071a3c] text-white"
                      : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-600">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Need help?
              </p>
              <p className="mt-2">
                Tell us your role, country and goals and we will suggest the
                best courses for you.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex rounded-full bg-[#071a3c] px-4 py-2 text-[11px] font-semibold text-white hover:bg-[#0c2a55]"
              >
                Get free guidance
              </Link>
            </div>
          </aside>

          {/* COURSES GRID (no animation) */}
          <div className="flex-1">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Online courses
                </p>
                <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
                  Learn in a way that fits your life.
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  {activeCategory === "All"
                    ? "All available online courses across Business, IT, Health & Social Care, and Mental Wellbeing."
                    : categories.find((c) => c.id === activeCategory)
                        ?.description}
                </p>
              </div>

              <p className="text-xs text-slate-600">
                Showing{" "}
                <span className="font-semibold text-[#071a3c]">
                  {filteredCourses.length}
                </span>{" "}
                course(s)
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course) => (
                <article
                  key={course.id}
                  className="group flex flex-col overflow-hidden border border-slate-200 hover:border-slate-300 transition"
                >
                  <div className="relative h-40 w-full sm:h-44">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <div className="absolute bottom-3 left-3 flex gap-2 text-[11px] text-white">
                      <span className="rounded-full bg-black/40 px-3 py-1">
                        {course.category}
                      </span>
                      {course.level && (
                        <span className="rounded-full bg-black/40 px-3 py-1">
                          {course.level} level
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="text-base font-semibold sm:text-lg">
                        {course.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {course.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        href={`/online-courses/${course.id}`}
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
