import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { scholarships } from "@/data/scholarships";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const scholarship = scholarships.find((s) => s.id === slug);

  if (!scholarship) {
    return {
      title: "Scholarship not found | Student Choice Education",
      description: "The scholarship you are looking for does not exist.",
    };
  }

  return {
    title: `${scholarship.name} | ${scholarship.universityName}`,
    description: scholarship.overview,
    openGraph: {
      title: scholarship.name,
      description: scholarship.overview,
      images: [scholarship.campusImage],
    },
  };
}

export default async function ScholarshipDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const scholarship = scholarships.find((s) => s.id === slug);

  if (!scholarship) return notFound();

  const readableFundingType = scholarship.fundingType
    .replaceAll("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const audienceLabel = (aud: (typeof scholarship.audiences)[number]) => {
    switch (aud) {
      case "international":
        return "International students";
      case "eu":
        return "EU students";
      case "home-uk":
        return "Home / UK students";
      case "all":
        return "All students";
      default:
        return aud;
    }
  };

  const tagLabel = (tag: NonNullable<typeof scholarship.tags>[number]) => {
    switch (tag) {
      case "merit-based":
        return "Merit-based";
      case "need-based":
        return "Need-based";
      case "country-specific":
        return "Country-specific";
      case "automatic":
        return "Automatic";
      case "early-bird":
        return "Early-bird / early payment";
      case "alumni":
        return "Alumni-related";
      case "government-linked":
        return "Government / national scheme";
      default:
        return (tag as string).replace("-", " ");
    }
  };

  return (
    <main className="bg-white text-slate-900">
      {/* ========= HERO ========= */}
      <section className="relative h-[320px] w-full overflow-hidden">
        <Image
          src={scholarship.campusImage}
          alt={scholarship.universityName}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 py-10">
          <Link
            href="/scholarships"
            className="inline-flex w-fit items-center text-sm font-medium text-slate-700 hover:text-slate-900 hover:underline"
          >
            ← Back to Scholarships
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src={scholarship.universityLogo}
                alt={scholarship.universityName}
                fill
                sizes="56px"
                className="object-contain p-2"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold sm:text-3xl">
                {scholarship.name}
              </h1>
              <p className="text-sm text-slate-600">
                {scholarship.universityName} • {scholarship.campusLabel}
              </p>

              {/* Audiences + tags badges */}
              <div className="mt-2 flex flex-wrap gap-2">
                {scholarship.audiences.map((aud) => (
                  <span
                    key={aud}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 bg-white/70 backdrop-blur"
                  >
                    {audienceLabel(aud)}
                  </span>
                ))}

                {scholarship.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm"
                  >
                    {tagLabel(tag)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= CONTENT ========= */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-12 md:grid-cols-3 lg:gap-16 lg:py-16">
        {/* LEFT COLUMN */}
        <div className="space-y-8 md:col-span-2">
          {/* Overview */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-sm text-slate-600 mb-2">{scholarship.tagline}</p>
            <p className="text-slate-700 leading-relaxed">
              {scholarship.overview}
            </p>
          </div>

          {/* Eligibility */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Who is eligible?</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              {scholarship.keyEligibility.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Application Guidance */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">How do I apply?</h2>
            <p className="text-slate-700 leading-relaxed">
              {scholarship.applicationGuidance}
            </p>
          </div>

          {/* Disclaimer */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
            Information on this page is a summary for guidance only. Scholarship
            values, eligibility rules and deadlines can change each year. Always
            check the official university website and your offer letter for the
            latest, confirmed details.
          </div>
        </div>

        {/* RIGHT COLUMN / INFO PANEL */}
        <aside className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Funding type
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              {readableFundingType}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Maximum value
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              {scholarship.maxValue}
            </p>
            {scholarship.isPercentage && scholarship.maxPercentage && (
              <p className="text-xs text-slate-500">
                Up to {scholarship.maxPercentage}% of tuition fees.
              </p>
            )}
            <p className="mt-2 text-sm text-slate-600">
              {scholarship.typicalValueDescription}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Study levels
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {scholarship.studyLevels.join(", ")}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Main intakes
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {scholarship.mainIntakes.join(", ")}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Automatic consideration
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {scholarship.automaticConsideration ? "Yes" : "No"}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              If &quot;Yes&quot;, usually you are assessed as part of the
              admissions process.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Can combine with other awards?
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {scholarship.canCombineWithOtherAwards === "no" && "No"}
              {scholarship.canCombineWithOtherAwards === "limited" &&
                "Sometimes (limited)"}
              {scholarship.canCombineWithOtherAwards === "unknown" &&
                "Check with university"}
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-4 space-y-2">
            <Link
              href="/contact-us"
              className="block w-full rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact us about this scholarship
            </Link>

            <a
              href={scholarship.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-yellow-400 hover:border-yellow-400"
            >
              View official scholarship details
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}
