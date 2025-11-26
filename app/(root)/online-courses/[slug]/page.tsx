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
    <div className="bg-[#f4f6fb] text-slate-900">
      <section className={`${MAX_WIDTH_CLASS} pt-10 pb-8 lg:pt-12 lg:pb-10`}>
        {/* breadcrumb */}
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
          <span className="rounded-full bg-white/80 px-3 py-1 font-semibold text-slate-700 ring-1 ring-slate-200/70">
            100% online · Study at your own pace
          </span>
        </div>

        <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] lg:items-start">
          {/* main content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 ring-1 ring-slate-200/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffb800]" />
              {categoryLabel}
            </span>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              {course.shortDescription}
            </p>

            {/* badges */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              {course.level && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-slate-800 ring-1 ring-slate-200/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb800]" />
                  {course.level} level
                </span>
              )}
              {course.duration && (
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-slate-800 ring-1 ring-slate-200/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Approx. {course.duration} of study
                </span>
              )}
              {course.certificate && (
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Certificate on completion
                </span>
              )}
            </div>

            {/* content sections – flat, no boxes */}
            <div className="mt-8 grid gap-8 border-t border-slate-200/70 pt-8 md:grid-cols-2">
              <div>
                <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                  What you will learn
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
                      How to recognise good practice and common risks in real
                      examples.
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
              </div>

              <div>
                <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Who this course is for
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
                      People in work who need an up-to-date refresh or entry-
                      level certificate.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb800]" />
                    <span>
                      Organisations that want simple online training for staff
                      or volunteers.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-200/70 pt-8">
              <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                How you will learn
              </h2>
              <div className="mt-4 grid gap-6 text-sm text-slate-700 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Format
                  </p>
                  <p className="mt-2">
                    Short online lessons, case studies and knowledge checks.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Pace
                  </p>
                  <p className="mt-2">
                    Move module by module at a speed that fits your week.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Support
                  </p>
                  <p className="mt-2">
                    Guidance from our team if you need help choosing next steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-200/70 pt-8">
              <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                Example course outline
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                The exact content can change, but a typical structure looks like
                this:
              </p>
              <ol className="mt-3 space-y-3 text-sm text-slate-700">
                <li>
                  <span className="font-semibold text-[#071a3c]">
                    Module 1 – Foundations
                  </span>
                  <p className="text-xs text-slate-500">
                    Core ideas, key terms and why this topic matters.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-[#071a3c]">
                    Module 2 – Real-world scenarios
                  </span>
                  <p className="text-xs text-slate-500">
                    Examples from schools, workplaces or community settings.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-[#071a3c]">
                    Module 3 – Good practice
                  </span>
                  <p className="text-xs text-slate-500">
                    What good practice looks like and how to respond to risk.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-[#071a3c]">
                    Module 4 – Next steps
                  </span>
                  <p className="text-xs text-slate-500">
                    How to use this course in your CV, applications or current
                    role.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* right column – keep one clean card for summary */}
          <aside className="space-y-6 lg:pt-1">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative h-48 w-full sm:h-56">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 360px, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Course summary
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  Start this online course with support from Student Choice
                  Education.
                </p>

                <dl className="mt-4 space-y-3 text-sm text-slate-700">
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
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-[#ffb800] px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-[#ffd34a]"
                    >
                      Enquire about this course
                    </Link>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
                  >
                    Talk to an advisor first
                  </Link>
                </div>

                <p className="mt-4 text-[11px] text-slate-500">
                  Group or organisational bookings are available. We can help
                  you build a simple training plan for teams, schools or
                  community groups.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 p-5 text-sm text-slate-700 border border-slate-200/70">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Need help choosing?
              </p>
              <p className="mt-2 text-sm">
                Share your goals and we will suggest a short list of online
                courses that match your level and budget.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#071a3c] px-5 py-2 text-xs font-semibold text-slate-50 hover:bg-[#0c2954]"
                >
                  Talk to an advisor
                </Link>
                <Link
                  href="/online-courses"
                  className="rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
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
