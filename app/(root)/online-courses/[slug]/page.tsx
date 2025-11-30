import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

const MAX_WIDTH_CLASS = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

type RouteParams = { slug: string };
type PageProps = { params: Promise<RouteParams> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.id === slug);

  if (!course) {
    return {
      title: "Online Course | Student Choice Education",
      description:
        "Explore online courses in Business, IT, Health & Social Care, and Mental Wellbeing.",
    };
  }

  return {
    title: `${course.title} | Online Course | Student Choice Education`,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.id === slug);

  if (!course) {
    notFound();
  }

  const categoryLabelMap: Record<string, string> = {
    Business: "Business Skills",
    IT: "IT & Cyber Security",
    "Health & Social Care": "Health & Social Care",
    "Counselling, Mental Health & Wellbeing":
      "Counselling, Mental Health & Wellbeing",
  };

  const categoryLabel = categoryLabelMap[course.category] ?? course.category;

  return (
    <div className="bg-white text-slate-900">
      {/* ================ HERO ================ */}
      <section className={`${MAX_WIDTH_CLASS} pt-10 pb-12 lg:pt-14`}>
        {/* breadcrumbs + pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/online-courses" className="hover:text-[#071a3c]">
              Online courses
            </Link>
            <span>/</span>
            <span>{categoryLabel}</span>
            <span>/</span>
            <span className="text-slate-800">{course.title}</span>
          </div>
          <span className="rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-700">
            100% online · Study at your own pace
          </span>
        </div>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          {/* LEFT HERO BLOCK */}
          <div className="animate-hero-left">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 uppercase tracking-[0.16em] text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffb800]" />
                {categoryLabel}
              </span>
              {course.level && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                  {course.level} level
                </span>
              )}
              {course.certificate && (
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                  Certificate on completion
                </span>
              )}
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {course.title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              {course.shortDescription}
            </p>

            {/* quick facts row */}
            <div className="mt-6 flex flex-wrap gap-6 text-xs sm:text-sm text-slate-600">
              {course.duration && (
                <div>
                  <p className="text-slate-500">Approx. length</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {course.duration}
                  </p>
                </div>
              )}
              <div>
                <p className="text-slate-500">Mode</p>
                <p className="mt-1 font-semibold text-slate-900">100% online</p>
              </div>
              <div>
                <p className="text-slate-500">Suitable for</p>
                <p className="mt-1 font-semibold text-slate-900">
                  Students & professionals
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE BLOCK */}
          <div className="animate-hero-right">
            <div className="relative h-[230px] w-full overflow-hidden rounded-2xl sm:h-[280px] lg:h-[320px]">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white">
                <span className="rounded-full bg-black/40 px-3 py-1">
                  Guided online course
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1">
                  Start anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================ MAIN CONTENT ================ */}
      <section className={`${MAX_WIDTH_CLASS} pb-20`}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* LEFT – TEXT SECTIONS */}
          <div className="space-y-10 text-sm text-slate-700">
            {/* What you will learn */}
            <section>
              <h2 className="text-base font-semibold text-slate-900">
                What you will learn
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb800]" />
                  <span>
                    Key ideas, language and responsibilities linked to{" "}
                    {categoryLabel.toLowerCase()}.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb800]" />
                  <span>
                    How to recognise good practice and common risks in
                    real-world examples.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb800]" />
                  <span>
                    Ways to use this knowledge in your role, studies or future
                    applications.
                  </span>
                </li>
              </ul>
            </section>

            {/* Who this course is for */}
            <section>
              <h2 className="text-base font-semibold text-slate-900">
                Who this course is for
              </h2>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb800]" />
                  <span>
                    Students preparing for university or professional training
                    in this area.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb800]" />
                  <span>
                    People in work who want an up-to-date refresh or entry-level
                    certificate.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb800]" />
                  <span>
                    Organisations looking for simple online training for staff
                    or volunteers.
                  </span>
                </li>
              </ul>
            </section>

            {/* How you will learn */}
            <section>
              <h2 className="text-base font-semibold text-slate-900">
                How you will learn
              </h2>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Format
                  </p>
                  <p className="mt-2">
                    Short online lessons, case studies and simple knowledge
                    checks.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Pace
                  </p>
                  <p className="mt-2">
                    Move module by module at a speed that fits your week.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Support
                  </p>
                  <p className="mt-2">
                    Our team can help you choose the next course or pathway.
                  </p>
                </div>
              </div>
            </section>

            {/* Example course outline */}
            <section>
              <h2 className="text-base font-semibold text-slate-900">
                Example course outline
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                The exact content can change, but a typical structure looks like
                this:
              </p>
              <ol className="mt-3 space-y-3">
                <li>
                  <p className="font-semibold text-[#071a3c]">
                    Module 1 – Foundations
                  </p>
                  <p className="text-xs text-slate-500">
                    Core ideas, key terms and why this topic matters.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-[#071a3c]">
                    Module 2 – Real-world scenarios
                  </p>
                  <p className="text-xs text-slate-500">
                    Examples from schools, workplaces or community settings.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-[#071a3c]">
                    Module 3 – Good practice
                  </p>
                  <p className="text-xs text-slate-500">
                    What good practice looks like and how to respond to risk.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-[#071a3c]">
                    Module 4 – Next steps
                  </p>
                  <p className="text-xs text-slate-500">
                    How to use this course in your CV, applications or current
                    role.
                  </p>
                </li>
              </ol>
            </section>
          </div>

          {/* RIGHT – SUMMARY / CTAs */}
          <aside className="space-y-8 text-sm text-slate-700">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Course summary
              </h3>
              <p className="mt-2 text-xs text-slate-500">
                Start this online course with support from Student Choice
                Education.
              </p>

              <dl className="mt-4 space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Category</dt>
                  <dd className="text-right">{categoryLabel}</dd>
                </div>
                {course.level && (
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-slate-500">Level</dt>
                    <dd className="text-right">{course.level}</dd>
                  </div>
                )}
                {course.duration && (
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-slate-500">Approx. length</dt>
                    <dd className="text-right">{course.duration}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Mode</dt>
                  <dd className="text-right">100% online</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Certificate</dt>
                  <dd className="text-right">
                    {course.certificate ? "Included" : "On request"}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-col gap-3">
                {course.url ? (
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#ffb800] px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-[#ffd34a]"
                  >
                    View full details and enrol
                  </a>
                ) : (
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center rounded-full bg-[#ffb800] px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-[#ffd34a]"
                  >
                    Enquire about this course
                  </Link>
                )}
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2.5 text-xs font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
                >
                  Talk to an advisor first
                </Link>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Need help choosing?
              </p>
              <p className="mt-2">
                Share your goals and we will suggest a short list of online
                courses that match your level and budget.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="rounded-full bg-[#071a3c] px-5 py-2 text-xs font-semibold text-slate-50 hover:bg-[#0c2954]"
                >
                  Talk to an advisor
                </Link>
                <Link
                  href="/online-courses"
                  className="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
                >
                  Back to all courses
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  return courses.map((course) => ({
    slug: course.id,
  }));
}
