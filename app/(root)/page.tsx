import type { Metadata } from "next";

import HeroRecruitment from "./components/HeroRecruitment";
import GuidesSection from "./components/GuidesSection";
import ForUniversities from "./components/ForUniversities";
import Courses from "./components/Courses";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import EligibilityBanner from "./components/EligibilityBanner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Student Choice Education | Global Admission & Recruitment",
  description:
    "End-to-end student recruitment and admission support for local and international students. Discover the best universities, courses, and scholarships worldwide.",
  openGraph: {
    title: "Student Choice Education | Global Admission & Recruitment",
    description:
      "We connect students, agents, and universities to make admissions simple, transparent, and reliable.",
    url: "https://student-choice-education.vercel.app",
    siteName: "Student Choice Education",
    type: "website",
  },
  alternates: {
    canonical: "https://student-choice-education.vercel.app",
  },
};

const PAGE_WRAPPER = "pb-4 lg:pb-6";

export default function HomePage() {
  return (
    <main className={PAGE_WRAPPER}>
      <HeroRecruitment />
      <GuidesSection />
      <ForUniversities />
      <Courses />
      <Partners />
      <Testimonials />
      <EligibilityBanner />
    </main>
  );
}
