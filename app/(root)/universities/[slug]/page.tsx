"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";
import { universities } from "@/data/universities";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function UniversityDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const [heroLoaded, setHeroLoaded] = useState(false);

  const uni = useMemo(() => universities.find((u) => u.slug === slug), [slug]);

  if (!uni) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <div
          className={`${MAX_WIDTH} flex min-h-screen flex-col items-center justify-center`}
        >
          <p className="text-base font-semibold text-slate-700">
            Institution not found
          </p>
          <p className="mt-2 text-sm text-slate-500">
            The university you are looking for may have been moved or is not yet
            available.
          </p>
          <Link
            href="/universities"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/80 bg-amber-400/10 px-5 py-1.5 text-sm font-medium text-amber-600 transition hover:bg-amber-400/20"
          >
            ← Back to all universities
          </Link>
        </div>
      </div>
    );
  }

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
            className={`${MAX_WIDTH} relative z-10 min-h-[320px] sm:min-h-[380px] lg:min-h-[430px] pt-14 pb-12 sm:pt-16 sm:pb-14 lg:pt-16 lg:pb-16`}
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex flex-col gap-4 text-xs text-slate-100"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-col gap-2">
                  <Link
                    href="/universities"
                    className="inline-flex w-max items-center gap-1 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-medium text-slate-100/90 backdrop-blur"
                  >
                    <span>←</span>
                    <span>Back to all universities</span>
                  </Link>
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300/90">
                    Universities <span className="mx-1 text-slate-500">/</span>
                    <span className="text-slate-100/95">{uni.name}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {uni.rankingBadge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/20 px-3 py-1 text-[11px] font-semibold text-emerald-100 shadow-[0_0_40px_rgba(16,185,129,0.45)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      {uni.rankingBadge}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-100/90">
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
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-medium text-slate-100/90 backdrop-blur"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Featured international study destination
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.6rem]"
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
                    className="text-sm leading-relaxed text-slate-100/90 sm:max-w-xl sm:text-[0.94rem]"
                  >
                    {uni.shortDescription}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
                    className="text-[11px] text-slate-300/90"
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
                      className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1 text-xs font-semibold text-slate-950 shadow-[0_16px_40px_rgba(251,191,36,0.55)] transition hover:bg-amber-300"
                    >
                      Visit official website
                      <span className="text-[10px]">↗</span>
                    </Link>
                    <span className="text-[11px] text-slate-200/80">
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
                      className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-slate-950/80 px-3 py-2 text-[11px] text-slate-100/90 backdrop-blur"
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
                    {/* LOGO WRAPPER – fixed, responsive, object-contain */}
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
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        Institution profile
                      </p>
                      <p className="line-clamp-2 text-xs font-semibold text-slate-50">
                        {uni.name}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {uni.city}, {uni.country}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-700 pt-3 text-[11px] text-slate-100">
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Intakes
                      </p>
                      <p className="text-xs">{uni.intakes.join(" • ")}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        Study modes
                      </p>
                      <p className="text-xs">{uni.studyModes.join(" • ")}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white pb-16 pt-8 sm:pt-10">
          <div className={MAX_WIDTH}>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="space-y-3 border-b border-slate-200 pb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Overview
                </p>
                <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                  Study at {uni.name}
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-700">
                  {uni.fullDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-y-3 gap-x-10 text-xs">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="space-y-0.5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                        {fact.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-950">
                    Why this university?
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {reasons.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-950">
                    Popular programmes for international students
                  </h3>
                  <div className="space-y-1.5 text-sm text-slate-800">
                    {uni.popularPrograms.map((program) => (
                      <div
                        key={program}
                        className="flex items-center justify-between border-b border-slate-100 py-2"
                      >
                        <span className="line-clamp-1 font-medium">
                          {program}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-600">
                          In demand
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8 border-t border-slate-200 pt-8">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-slate-950">
                      Academic entry requirements
                    </h3>
                    <div className="space-y-4 text-xs text-slate-700">
                      {academicRequirements.foundation && (
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Foundation / pathway
                          </p>
                          <p className="mt-1 leading-relaxed text-sm">
                            {academicRequirements.foundation}
                          </p>
                        </div>
                      )}
                      {academicRequirements.undergraduate && (
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Undergraduate (BSc/BA)
                          </p>
                          <p className="mt-1 leading-relaxed text-sm">
                            {academicRequirements.undergraduate}
                          </p>
                        </div>
                      )}
                      {academicRequirements.postgraduate && (
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Postgraduate (Masters)
                          </p>
                          <p className="mt-1 leading-relaxed text-sm">
                            {academicRequirements.postgraduate}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-slate-950">
                      English language requirements
                    </h3>
                    <div className="space-y-3 text-xs text-slate-700">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Standard requirement
                        </p>
                        <p className="mt-1 leading-relaxed text-sm">
                          {englishRequirements.standard}
                        </p>
                      </div>
                      {englishRequirements.alternatives && (
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Alternatives
                          </p>
                          <p className="mt-1 leading-relaxed text-sm">
                            {englishRequirements.alternatives}
                          </p>
                        </div>
                      )}
                      <p className="text-[10px] text-slate-500">
                        Exact scores can change by course and intake. Your
                        counsellor will confirm what you personally need.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr),minmax(0,1.3fr)]">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-slate-950">
                      Tuition fee guide
                    </h3>
                    <p className="text-xs text-slate-600">
                      Fees below are typical bands. Exact amounts change by
                      course and year.
                    </p>
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full border-collapse text-xs">
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
                    <p className="text-[10px] text-slate-500">
                      Currency, instalment plans and deposit amounts will be
                      checked for you when you apply.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-slate-950">
                      Scholarships and discounts
                    </h3>
                    {uni.scholarships && uni.scholarships.length > 0 ? (
                      <ul className="space-y-2.5 text-xs text-slate-700">
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
                      <p className="text-xs text-slate-700">
                        This institution often provides bursaries or
                        scholarships for international students. Your counsellor
                        will confirm what is open for your intake.
                      </p>
                    )}
                    <p className="text-[10px] text-slate-500">
                      Scholarships are competitive and may require strong
                      grades, a separate application or an offer letter.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 border-t border-slate-200 pt-8">
                  <h3 className="text-sm font-semibold text-slate-950">
                    Living costs & accommodation
                  </h3>
                  <div className="grid gap-8 text-xs text-slate-700 lg:grid-cols-2">
                    <div className="space-y-2">
                      <p className="font-semibold text-slate-900">
                        Living costs in {uni.city}, {uni.country}
                      </p>
                      <p>
                        {livingCosts?.summary ??
                          "Living costs depend on your lifestyle and the part of the city where you stay, but you should plan a clear monthly budget for rent, food, travel and personal expenses."}
                      </p>
                      <p className="pt-2 text-xs font-medium text-slate-900">
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
                              <p className="text-xs text-slate-700">
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
                      <p className="pt-1 text-[10px] text-slate-500">
                        Exact prices change every year. We will give you an
                        updated budget and housing advice when you apply.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 border-t border-slate-200 pt-8 lg:grid-cols-2">
                  <div className="space-y-2 text-xs text-slate-700">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Next steps
                    </p>
                    <h3 className="text-sm font-semibold text-slate-950">
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
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-3.5 py-1.5 text-xs font-semibold text-slate-50 transition hover:bg-slate-900"
                    >
                      Talk to a counsellor
                      <span className="text-[10px]">→</span>
                    </Link>
                    <Link
                      href="/ambassadors"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950"
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
