"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { courses, categories, type CourseCategory } from "@/data/courses";
import heroImg from "@/public/heros/oc.png";

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

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/90 to-transparent" />

        <div className={`${MAX_WIDTH} relative`}>
          <div className="flex min-h-[520px] flex-col justify-center py-16 sm:min-h-[560px] lg:min-h-[640px]">
            <motion.div
              className="max-w-2xl space-y-6"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                Build the <span className="text-[#ffb800]">right skills</span>{" "}
                with flexible online training.
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                Short, focused online courses in Business, IT, Health & Social
                Care, and Mental Wellbeing. Learn at your own pace with clear
                outcomes and certificates that support applications and career
                growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center rounded-full bg-[#ffb800] px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-[#ffd34a]"
                >
                  Browse all courses
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                >
                  Talk to our course team
                </Link>
              </div>

              <motion.div
                className="mt-4 inline-flex flex-wrap gap-8 rounded-2xl bg-black/20 px-5 py-4 text-sm text-white/85 backdrop-blur-md"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                    Main course areas
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    4 key pathways
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
        className={`border-t border-slate-200 bg-white ${MAX_WIDTH} pb-20 pt-12`}
      >
        <div className="flex flex-col gap-8 lg:flex-row">
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

          <div className="flex-1">
            <motion.div
              className="flex items-end justify-between gap-3"
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
                    ? "Browse flexible online courses in Business Skills, IT & Cyber Security, Health & Social Care, and Counselling, Mental Health & Wellbeing."
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
            </motion.div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course, index) => (
                <motion.article
                  key={course.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
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
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
