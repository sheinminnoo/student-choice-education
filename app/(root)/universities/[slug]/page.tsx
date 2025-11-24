import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { universities, type University } from "@/data/universities";
import UniversityHero from "../components/UniversityHero";
import UniversityKeyInfoGrid from "../components/UniversityKeyInfoGrid";
import UniversitySideMenu from "./components/UniversitySideMenu";
import { ArrowLeft, ArrowUpRight, GraduationCap } from "lucide-react";

// Refined for spacious, premium layout
const MAX_WIDTH_CLASS = "mx-auto max-w-7xl px-4 sm:px-8 lg:px-12";

type RouteParams = { slug: string };
type PageProps = { params: Promise<RouteParams> };

// ... (Metadata function remains unchanged)

export default async function UniversityDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const uni = universities.find((u) => u.slug === slug) as
    | University
    | undefined;

  if (!uni) notFound();

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "key-information", label: "Key Stats" }, // Shorter label for menu clarity
    { id: "programmes", label: "Programmes" },
    { id: "admissions", label: "Admissions" },
    { id: "scholarships", label: "Scholarships" },
    { id: "location", label: "Location" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background: Deeper, textured dark background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-950 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.06),transparent_60%),radial-gradient(circle_at_bottom_left,_rgba(129,140,248,0.06),transparent_60%)]" />

      {/* --- Main Content Container --- */}
      <div className={`${MAX_WIDTH_CLASS} pt-8 pb-32 lg:pb-20 space-y-12`}>
        {/* --- Breadcrumb & Back Button --- */}
        <nav className="flex items-center gap-4">
          <Link
            href="/universities"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-300 hover:border-sky-400 hover:text-sky-300 transition-colors shadow-lg shadow-black/30"
          >
            <ArrowLeft size={14} />
            Universities
          </Link>
          <span className="text-slate-600 hidden sm:inline">/</span>
          <span className="max-w-xs sm:max-w-md truncate text-sm font-semibold text-slate-400 hidden sm:inline">
            {uni.name}
          </span>
        </nav>

        <div className="space-y-12">
          {/* Hero component (assumed to be responsive) */}
          <UniversityHero uni={uni} />

          {/* --- Content Grid: Side Menu (250px) | Main Content (rest) --- */}
          <section className="grid gap-12 lg:gap-14 lg:grid-cols-[250px_minmax(0,1fr)] items-start">
            {/* --- SIDE MENU (Sticky on Desktop) --- */}
            <div className="hidden lg:block lg:sticky lg:top-28">
              <UniversitySideMenu sections={sections} />
            </div>

            {/* --- MAIN CONTENT COLUMN --- */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 sm:p-10 lg:p-12 shadow-3xl shadow-black/70 backdrop-blur-xl space-y-12">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={
                    index > 0
                      ? "pt-10 border-t border-slate-800/70 space-y-5"
                      : "space-y-5"
                  }
                >
                  {/* --- Section Header (Cleaned and Polished) --- */}
                  <div className="flex items-center gap-3">
                    <span className="text-[0.6rem] font-medium uppercase tracking-widest text-indigo-400/90">
                      SECTION 0{index + 1}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 via-slate-700/50 to-transparent" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-50">
                    {/* Dynamic titles for professional feel */}
                    {section.id === "overview" &&
                      `Discover ${uni.name}: Vision & Culture`}
                    {section.id === "key-information" &&
                      `Essential Statistics at a Glance`}
                    {section.id === "programmes" &&
                      `Academic Offerings & Study Areas`}
                    {section.id === "admissions" &&
                      `Entry Requirements & Application Process`}
                    {section.id === "scholarships" &&
                      `Financial Aid & Funding Opportunities`}
                    {section.id === "location" &&
                      `Campus Location & Student Life`}
                  </h2>

                  {/* --- Content based on section ID (Using real-world content structure) --- */}
                  {section.id === "overview" && (
                    <div className="space-y-4">
                      <p className="text-base text-slate-300 leading-relaxed font-light">
                        {uni.overview}
                      </p>
                      <p className="text-base text-slate-300 leading-relaxed font-light">
                        The university offers a wide range of programmes at
                        undergraduate and postgraduate level, with strong links
                        to industry and professional bodies. Students benefit
                        from modern facilities, research-active academics and a
                        campus environment designed to support both academic
                        success and wellbeing.
                      </p>
                    </div>
                  )}

                  {section.id === "key-information" && (
                    <UniversityKeyInfoGrid uni={uni} />
                  )}

                  {section.id === "programmes" && (
                    <div className="space-y-4">
                      <p className="text-base text-slate-300">
                        Typical study areas at this university include:
                      </p>
                      <ul className="mt-4 grid gap-3 text-sm text-slate-100 sm:grid-cols-2">
                        <li className="rounded-xl border border-slate-700/80 bg-slate-800/70 px-4 py-3 font-medium hover:border-sky-400/50 transition">
                          Computer science and information technology
                        </li>
                        <li className="rounded-xl border border-slate-700/80 bg-slate-800/70 px-4 py-3 font-medium hover:border-sky-400/50 transition">
                          Business, management and marketing
                        </li>
                        <li className="rounded-xl border border-slate-700/80 bg-slate-800/70 px-4 py-3 font-medium hover:border-sky-400/50 transition">
                          Engineering and technology
                        </li>
                        <li className="rounded-xl border border-slate-700/80 bg-slate-800/70 px-4 py-3 font-medium hover:border-sky-400/50 transition">
                          Health, nursing and life sciences
                        </li>
                        <li className="rounded-xl border border-slate-700/80 bg-slate-800/70 px-4 py-3 font-medium hover:border-sky-400/50 transition">
                          Arts, design and creative industries
                        </li>
                        <li className="rounded-xl border border-slate-700/80 bg-slate-800/70 px-4 py-3 font-medium hover:border-sky-400/50 transition">
                          Social sciences and humanities
                        </li>
                      </ul>
                    </div>
                  )}

                  {section.id === "admissions" && (
                    <div className="space-y-4">
                      <p className="text-base text-slate-300">
                        Entry requirements vary by course, but most programmes
                        expect a strong academic background, English language
                        proficiency and a clear statement of purpose.
                      </p>
                      <ul className="list-disc pl-5 text-base text-slate-200 space-y-2">
                        <li>
                          Academic transcripts and graduation certificates
                        </li>
                        <li>
                          English test results such as IELTS or equivalent
                        </li>
                        <li>Academic reference or letter of recommendation</li>
                        <li>
                          Personal statement outlining goals and motivation
                        </li>
                      </ul>
                      <p className="text-sm text-indigo-300/80 font-medium pt-2">
                        <Link
                          href="/admissions"
                          className="inline-flex items-center hover:underline"
                        >
                          Check detailed requirements per country{" "}
                          <ArrowUpRight size={14} className="ml-1" />
                        </Link>
                      </p>
                    </div>
                  )}

                  {section.id === "scholarships" && (
                    <div className="space-y-4">
                      <p className="text-base text-slate-300">
                        Many UK universities offer scholarships or bursaries for
                        high-achieving international students or for specific
                        subjects.
                      </p>
                      <ul className="list-disc pl-5 text-base text-slate-200 space-y-2">
                        <li>
                          Academic excellence scholarships based on grades
                        </li>
                        <li>Early tuition fee payment discounts</li>
                        <li>Faculty or subject-specific awards</li>
                      </ul>
                      <p className="text-base text-slate-300">
                        Student Choice Education can help you understand which
                        scholarships you may qualify for and how to prepare a
                        strong application portfolio.
                      </p>
                    </div>
                  )}

                  {section.id === "location" && (
                    <div className="space-y-4">
                      <p className="text-base text-slate-300">
                        **{uni.name}** is based in **{uni.city}**, {uni.region},{" "}
                        {uni.country}. The city offers good transport links, a
                        range of student accommodation and, for eligible
                        students, part-time work opportunities.
                      </p>
                      {/* Real-world map visualization for premium feel */}
                      <div className="h-60 w-full rounded-xl bg-slate-800/70 border-2 border-slate-700 overflow-hidden mt-6">
                        [Image of University Campus Location Map Placeholder]
                      </div>
                    </div>
                  )}
                </section>
              ))}

              {/* --- FINAL PRODUCTION CTA BLOCK (Must-Have for EDU sites) --- */}
              <div className="border-t border-slate-800 pt-10">
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-indigo-500/40 shadow-xl shadow-black/50 space-y-4">
                  <div className="flex items-center gap-4">
                    <GraduationCap
                      size={32}
                      className="text-indigo-400 shrink-0"
                    />
                    <h3 className="text-xl font-bold text-slate-50">
                      Ready to Apply to {uni.name}?
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300">
                    Our expert counselors can streamline your application,
                    manage documents, and secure your offer letter.
                  </p>
                  <Link
                    href={`/apply?uni=${uni.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/50"
                  >
                    Start My Free Application <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* --- Mobile Menu (Fixed Bottom) --- */}
      <div className="fixed inset-x-0 bottom-0 lg:hidden z-30">
        <UniversitySideMenu sections={sections} mobileFixed={true} />
      </div>
    </div>
  );
}
