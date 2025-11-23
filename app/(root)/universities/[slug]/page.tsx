import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { universities, type University } from "@/data/universities";
import UniversityHero from "../components/UniversityHero";
import UniversitySideMenu from "../components/UniversitySideMenu";
import UniversityKeyInfoGrid from "../components/UniversityKeyInfoGrid";

type RouteParams = { slug: string };
type PageProps = { params: Promise<RouteParams> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const uni = universities.find((u) => u.slug === slug);

  if (!uni) {
    return {
      title: "University | Student Choice Education",
    };
  }

  return {
    title: `${uni.name} | Student Choice Education`,
    description: uni.overview,
  };
}

export default async function UniversityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const uni = universities.find((u) => u.slug === slug);

  if (!uni) notFound();

  const sections = [
    { id: "key-information", label: "Key information" },
    { id: "about-university", label: "About university" },
    { id: "programs", label: "Programs" },
    { id: "scholarship", label: "Scholarship" },
    { id: "review", label: "Review" },
    { id: "location", label: "Location" },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Breadcrumb */}
      <nav className="pt-1 text-xs sm:text-sm text-slate-500">
        <Link href="/universities" className="hover:text-slate-800">
          Universities
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">{uni.name}</span>
      </nav>

      <UniversityHero uni={uni as University} />

      <section className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.4fr)]">
        <UniversitySideMenu sections={sections} />

        <div className="space-y-10">
          <UniversityKeyInfoGrid uni={uni as University} />

          {/* ABOUT */}
          <section id="about-university" className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              About university
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              {uni.overview}
            </p>
            <p className="text-sm sm:text-base text-slate-700">
              The university offers a wide range of programmes at undergraduate
              and postgraduate level, with strong links to industry and
              professional bodies. Students benefit from modern facilities,
              research-active academics and a campus environment designed to
              support both academic success and wellbeing.
            </p>
          </section>

          {/* PROGRAMS */}
          <section id="programs" className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Programs
            </h2>
            <p className="text-sm text-slate-700">
              Typical study areas at this university include:
            </p>
            <ul className="mt-1 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>Computer science and information technology</li>
              <li>Business, management and marketing</li>
              <li>Engineering and technology</li>
              <li>Health, nursing and life sciences</li>
              <li>Arts, design and creative industries</li>
              <li>Social sciences and humanities</li>
            </ul>
            <p className="mt-2 text-sm text-slate-700">
              A full list of programmes with entry requirements and tuition fees
              is available on request. Our team can help you shortlist courses
              based on your grades, budget and career goals.
            </p>
          </section>

          {/* SCHOLARSHIP */}
          <section id="scholarship" className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Scholarship
            </h2>
            <p className="text-sm text-slate-700">
              Many UK universities offer scholarships or bursaries for
              high-achieving international students or for specific subjects.
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1.5">
              <li>Academic excellence scholarships based on grades</li>
              <li>Early tuition fee payment discounts</li>
              <li>Faculty or subject-specific awards</li>
            </ul>
            <p className="text-sm text-slate-700">
              Student Choice Education can help you understand which
              scholarships you may qualify for and how to prepare a strong
              application.
            </p>
          </section>

          {/* REVIEW */}
          <section id="review" className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Student experience and review
            </h2>
            <p className="text-sm text-slate-700">
              Students often highlight supportive teaching staff, modern
              facilities and a welcoming international community. Dedicated
              careers teams help students prepare for internships and graduate
              roles.
            </p>
          </section>

          {/* LOCATION */}
          <section id="location" className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Location
            </h2>
            <p className="text-sm text-slate-700">
              {uni.name} is based in {uni.city}, {uni.region}, {uni.country}.
              The city offers good transport links, student accommodation and,
              for eligible students, part-time work opportunities.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
