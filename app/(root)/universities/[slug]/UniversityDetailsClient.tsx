"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";
import type { University } from "@/data/universities";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

type Props = {
  uni: University;
};

export default function UniversityDetailsClient({ uni }: Props) {
  const [heroLoaded, setHeroLoaded] = useState(false);

  const quickFacts = [
    { label: "Country", value: uni.country },
    { label: "City", value: uni.city },
    { label: "Campus", value: uni.campus },
    { label: "Category", value: uni.category },
    { label: "Established", value: uni.established.toString() },
  ];

  const {
    academicRequirements,
    englishRequirements,
    tuitionFees,
    livingCosts,
    accommodationOptions,
    whyThisUniversity,
  } = uni;

  const reasons =
    whyThisUniversity && whyThisUniversity.length > 0
      ? whyThisUniversity
      : uni.highlights;

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: uni.name,
    url: uni.website,
    description: uni.fullDescription,
    foundingDate: uni.established,
    address: {
      "@type": "PostalAddress",
      addressLocality: uni.city,
      addressCountry: uni.country,
    },
    image: uni.campusImage,
    sameAs: [uni.website],
  };

  return (
    <>
      <Script
        id={`ld-json-${uni.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      <div className="min-h-screen bg-white text-slate-900">
        {/* ========== HERO ========== */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <Image
              src={uni.campusImage}
              alt={`${uni.name} campus image`}
              fill
              priority
              sizes="100vw"
              onLoadingComplete={() => setHeroLoaded(true)}
              className={`object-cover object-center md:object-[50%_40%] transition-opacity duration-500 ${
                heroLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/10" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>

          <div
            className={`${MAX_WIDTH} relative z-10 min-h-[320px] pt-14 pb-12 sm:min-h-[380px] sm:pt-16 sm:pb-14 lg:min-h-[430px] lg:pt-16 lg:pb-16`}
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex flex-col gap-4 text-sm text-slate-100 md:text-base"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <Link
                    href="/universities"
                    className="inline-flex w-max items-center gap-1 rounded-full bg-slate-950/90 px-3 py-1 text-xs font-medium text-slate-100/90 sm:text-sm backdrop-blur"
                  >
                    <span>←</span>
                    <span>Back to all universities</span>
                  </Link>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300/90 sm:text-[0.8rem]">
                    Universities <span className="mx-1 text-slate-500">/</span>
                    <span className="text-slate-100/95">{uni.name}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {uni.rankingBadge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100 shadow-[0_0_40px_rgba(16,185,129,0.45)] sm:text-[0.8rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      {uni.rankingBadge}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-100/90 sm:text-[0.8rem]">
                    {uni.country} • {uni.city}
                  </span>
                </div>
              </div>

              <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,2.5fr),minmax(0,1.7fr)] lg:items-end">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06,
                      duration: 0.55,
                      ease: "easeOut",
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950/90 px-3 py-1 text-xs font-medium text-slate-100/90 sm:text-sm backdrop-blur"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Featured international study destination
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.7rem]"
                  >
                    {uni.name}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.14,
                      duration: 0.55,
                      ease: "easeOut",
                    }}
                    className="text-base leading-relaxed text-slate-100/90 sm:max-w-xl sm:text-lg md:text-[1.1rem]"
                  >
                    {uni.shortDescription}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
                    className="text-xs text-slate-300/90 sm:text-sm md:text-[0.95rem]"
                  >
                    Public institution • Est. {uni.established} •{" "}
                    {uni.intakes.join(" / ")} intakes
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.18,
                      duration: 0.55,
                      ease: "easeOut",
                    }}
                    className="mt-1 flex flex-wrap items-center gap-3"
                  >
                    <Link
                      href={uni.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(251,191,36,0.55)] transition hover:bg-amber-300 sm:text-base"
                    >
                      Visit official website
                      <span className="text-[0.7rem]">↗</span>
                    </Link>
                    <span className="text-xs text-slate-200/80 sm:text-sm md:text-[0.95rem]">
                      Application support available via Student Choice Education
                    </span>
                  </motion.div>

                  {uni.showGeduLogo && (
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.22,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-slate-950/80 px-3 py-2 text-xs text-slate-100/90 sm:text-sm md:text-[0.95rem] backdrop-blur"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-[13px] text-emerald-300">
                        G
                      </span>
                      <span>
                        Delivered in partnership with global education group
                      </span>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 22, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.14, duration: 0.55, ease: "easeOut" }}
                  className="relative ml-auto w-full max-w-xs rounded-3xl bg-slate-950/90 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.95)] backdrop-blur sm:max-w-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white sm:h-14 sm:w-14">
                      <Image
                        src={uni.logo}
                        alt={`${uni.name} logo`}
                        width={56}
                        height={56}
                        className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                      />
                    </div>

                    <div className="space-y-0.5">
                      <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                        Institution profile
                      </p>
                      <p className="line-clamp-2 text-sm font-semibold text-slate-50 sm:text-base">
                        {uni.name}
                      </p>
                      <p className="text-[0.7rem] text-slate-400 sm:text-xs">
                        {uni.city}, {uni.country}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-700 pt-3 text-xs text-slate-100 sm:text-sm">
                    <div className="space-y-0.5">
                      <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                        Intakes
                      </p>
                      <p className="text-sm sm:text-base">
                        {uni.intakes.join(" • ")}
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 sm:text-xs">
                        Study modes
                      </p>
                      <p className="text-sm sm:text-base">
                        {uni.studyModes.join(" • ")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========== MAIN CONTENT ========== */}
        <section className="bg-white pb-16 pt-8 sm:pt-10">
          <div className={MAX_WIDTH}>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="space-y-10 text-[0.97rem] md:text-[1.05rem]"
            >
              {/* Overview */}
              <div className="space-y-3 border-b border-slate-200 pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 sm:text-sm">
                  Overview
                </p>
                <h2 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl md:text-[1.6rem]">
                  Study at {uni.name}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-slate-700 md:text-[1.08rem]">
                  {uni.fullDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-y-3 gap-x-10 text-sm md:text-[1.02rem]">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="space-y-0.5">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-[0.8rem]">
                        {fact.label}
                      </p>
                      <p className="text-base font-semibold text-slate-900 md:text-[1.08rem]">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why + Popular programmes */}
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-slate-950 sm:text-lg md:text-xl">
                    Why this university?
                  </h3>
                  <ul className="space-y-2.5 text-base text-slate-700 md:text-[1.08rem]">
                    {reasons.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-slate-950 sm:text-lg md:text-xl">
                    Popular programmes for international students
                  </h3>
                  <div className="space-y-1.5 text-base text-slate-800 md:text-[1.05rem]">
                    {uni.popularPrograms.map((program) => (
                      <div
                        key={program}
                        className="flex items-center justify-between border-b border-slate-100 py-2"
                      >
                        <span className="line-clamp-1 font-medium">
                          {program}
                        </span>
                        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-emerald-600 sm:text-xs">
                          In demand
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Requirements + English */}
              <div className="space-y-8 border-t border-slate-200 pt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Academic */}
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-slate-950 sm:text-lg md:text-xl">
                      Academic entry requirements
                    </h3>
                    <div className="space-y-4 text-sm text-slate-700 md:text-[1.02rem]">
                      {academicRequirements.foundation && (
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[0.8rem]">
                            Foundation / pathway
                          </p>
                          <p className="mt-1 leading-relaxed text-base md:text-[1.08rem]">
                            {academicRequirements.foundation}
                          </p>
                        </div>
                      )}
                      {academicRequirements.undergraduate && (
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[0.8rem]">
                            Undergraduate (BSc/BA)
                          </p>
                          <p className="mt-1 leading-relaxed text-base md:text-[1.08rem]">
                            {academicRequirements.undergraduate}
                          </p>
                        </div>
                      )}
                      {academicRequirements.postgraduate && (
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[0.8rem]">
                            Postgraduate (Masters)
                          </p>
                          <p className="mt-1 leading-relaxed text-base md:text-[1.08rem]">
                            {academicRequirements.postgraduate}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* English */}
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-slate-950 sm:text-lg md:text-xl">
                      English language requirements
                    </h3>
                    <div className="space-y-3 text-sm text-slate-700 md:text-[1.02rem]">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[0.8rem]">
                          Standard requirement
                        </p>
                        <p className="mt-1 leading-relaxed text-base md:text-[1.08rem]">
                          {englishRequirements.standard}
                        </p>
                      </div>
                      {englishRequirements.alternatives && (
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[0.8rem]">
                            Alternatives
                          </p>
                          <p className="mt-1 leading-relaxed text-base md:text-[1.08rem]">
                            {englishRequirements.alternatives}
                          </p>
                        </div>
                      )}
                      {/* IMPORTANT line – amber */}
                      <p className="text-sm font-semibold text-amber-700 md:text-[0.98rem]">
                        Exact scores can change by course and intake. Your
                        counsellor will confirm what you personally need.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tuition + Scholarships */}
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr),minmax(0,1.3fr)]">
                  {/* Tuition */}
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-slate-950 sm:text-lg md:text-xl">
                      Tuition fee guide
                    </h3>
                    <p className="text-sm text-slate-600 md:text-[0.98rem]">
                      Fees below are typical bands. Exact amounts change by
                      course and year.
                    </p>
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full border-collapse text-sm md:text-base">
                        <thead className="border-b border-slate-200 bg-slate-50">
                          <tr>
                            <th className="px-3 py-2 text-left font-medium text-slate-700">
                              Level
                            </th>
                            <th className="px-3 py-2 text-left font-medium text-slate-700">
                              UK/EU students
                            </th>
                            <th className="px-3 py-2 text-left font-medium text-slate-700">
                              International students
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100">
                            <td className="px-3 py-2 font-semibold text-slate-900">
                              Undergraduate
                            </td>
                            <td className="px-3 py-2">
                              {tuitionFees.undergraduate.home}
                            </td>
                            <td className="px-3 py-2">
                              {tuitionFees.undergraduate.international}
                            </td>
                          </tr>
                          {tuitionFees.postgraduate && (
                            <tr className="border-b border-slate-100">
                              <td className="px-3 py-2 font-semibold text-slate-900">
                                Postgraduate
                              </td>
                              <td className="px-3 py-2">
                                {tuitionFees.postgraduate.home}
                              </td>
                              <td className="px-3 py-2">
                                {tuitionFees.postgraduate.international}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                    {/* IMPORTANT line – amber */}
                    <p className="text-sm font-semibold text-amber-700 md:text-[0.98rem]">
                      Currency, instalment plans and deposit amounts will be
                      checked for you when you apply.
                    </p>
                  </div>

                  {/* Scholarships */}
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-slate-950 sm:text-lg md:text-xl">
                      Scholarships and discounts
                    </h3>
                    {uni.scholarships && uni.scholarships.length > 0 ? (
                      <ul className="space-y-2.5 text-sm text-slate-700 md:text-[1.02rem]">
                        {uni.scholarships.map((s) => (
                          <li key={s.name} className="space-y-0.5">
                            <p className="font-semibold text-slate-900">
                              {s.name}
                            </p>
                            <p>{s.description}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-slate-700 md:text-[1.02rem]">
                        This institution often provides bursaries or
                        scholarships for international students. Your counsellor
                        will confirm what is open for your intake.
                      </p>
                    )}
                    {/* IMPORTANT line – amber and stronger */}
                    <p className="text-sm font-semibold text-amber-700 md:text-[0.98rem]">
                      Scholarships are competitive and may require strong
                      grades, a separate application or an offer letter.
                    </p>
                  </div>
                </div>

                {/* Living & accommodation */}
                <div className="space-y-6 border-t border-slate-200 pt-8">
                  <h3 className="text-base font-semibold text-slate-950 sm:text-lg md:text-xl">
                    Living costs & accommodation
                  </h3>
                  <div className="grid gap-8 text-sm text-slate-700 md:grid-cols-2 md:text-[1.02rem]">
                    <div className="space-y-2">
                      <p className="font-semibold text-slate-900">
                        Living costs in {uni.city}, {uni.country}
                      </p>
                      <p>
                        {livingCosts?.summary ??
                          "Living costs depend on your lifestyle and the part of the city where you stay, but you should plan a clear monthly budget for rent, food, travel and personal expenses."}
                      </p>
                      <p className="pt-2 text-sm font-semibold text-slate-900 md:text-[1.02rem]">
                        Typical monthly total
                      </p>
                      <p>
                        {livingCosts?.typicalMonthlyTotal ??
                          "Many international students spend somewhere between £900–£1,300 per month (or local currency equivalent)."}
                      </p>

                      {(livingCosts?.onCampusFrom ||
                        livingCosts?.privateRentFrom) && (
                        <div className="space-y-1 pt-2">
                          {livingCosts?.onCampusFrom && (
                            <p>
                              <span className="font-semibold">On-campus: </span>
                              {livingCosts.onCampusFrom}
                            </p>
                          )}
                          {livingCosts?.privateRentFrom && (
                            <p>
                              <span className="font-semibold">
                                Private/shared housing:{" "}
                              </span>
                              {livingCosts.privateRentFrom}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-slate-900">
                        Accommodation options
                      </p>
                      {accommodationOptions &&
                      accommodationOptions.length > 0 ? (
                        <ul className="space-y-1.5">
                          {accommodationOptions.map((opt) => (
                            <li key={opt.name}>
                              <p className="font-medium text-slate-900">
                                {opt.name}
                              </p>
                              <p className="text-sm text-slate-700 md:text-[1.02rem]">
                                {opt.description}
                              </p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>
                          The university and our counsellors can help you
                          explore campus accommodation and private options such
                          as shared flats, homestays or student residences.
                        </p>
                      )}
                      {/* IMPORTANT line – amber */}
                      <p className="pt-1 text-sm font-semibold text-amber-700 md:text-[0.98rem]">
                        Exact prices change every year. We will give you an
                        updated budget and housing advice when you apply.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Next steps */}
                <div className="grid gap-6 border-t border-slate-200 pt-8 lg:grid-cols-2">
                  <div className="space-y-2 text-sm text-slate-700 md:text-[1.02rem]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 sm:text-sm">
                      Next steps
                    </p>
                    <h3 className="text-base font-semibold text-slate-950 sm:text-lg md:text-xl">
                      Get tailored advice for {uni.name}
                    </h3>
                    <p>
                      Share your background and study goals and our counsellors
                      can advise on the best intake, programme and application
                      route for you.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-3.5 py-1.5 text-sm font-semibold text-slate-50 transition hover:bg-slate-900 md:text-base"
                    >
                      Talk to a counsellor
                      <span className="text-[0.7rem]">→</span>
                    </Link>
                    <Link
                      href="/ambassadors"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 md:text-base"
                    >
                      Connect with student ambassadors
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
