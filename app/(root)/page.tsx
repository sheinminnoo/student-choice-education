import Courses from "./components/Courses";
import EligibilityBanner from "./components/EligibilityBanner";
import ForStudents from "./components/ForStudents";
import ForUniversities from "./components/ForUniversities";
import HeroAdmissionExpert from "./components/HeroAdmissionExpert";
import HeroRecruitment from "./components/HeroRecruitment";
import Testimonials from "./components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Choice Education | Global Admission & Recruitment",
  description:
    "End-to-end student recruitment and admission support for local and international students. Find the best courses and universities in the UK and worldwide.",
  openGraph: {
    title: "Student Choice Education | Global Admission & Recruitment",
    description:
      "We connect students, agents and universities to make admission easy for everyone.",
    url: "https://student-choice-education.vercel.app",
    type: "website",
  },
  alternates: {
    canonical: "https://student-choice-education.vercel.app",
  },
};

const PAGE_WRAPPER = "pb-16 lg:pb-24";

export default function HomePage() {
  return (
    <div className={PAGE_WRAPPER}>
      <HeroRecruitment />
      <ForUniversities />
      <Courses />
      <Testimonials />
      <EligibilityBanner />
    </div>
  );
}
