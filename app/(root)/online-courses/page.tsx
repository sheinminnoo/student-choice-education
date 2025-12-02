import type { Metadata } from "next";
import OnlineCoursesClient from "./OnlineCoursesClient";

export const metadata: Metadata = {
  title: "Online Courses | Student Choice Education",
  description:
    "Browse flexible online courses in Business, IT & Cyber Security, Health & Social Care, and Mental Wellbeing. 100% online, self-paced and CPD-friendly.",
  alternates: {
    canonical: "/online-courses",
  },
  openGraph: {
    title: "Online Courses | Student Choice Education",
    description:
      "Focused short courses with clear outcomes and certificates to support your applications and career growth.",
    url: "https://student-choice-education.com/online-courses",
    type: "website",
    siteName: "Student Choice Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Courses | Student Choice Education",
    description:
      "Explore self-paced online courses in Business, IT, Health and Wellbeing.",
  },
};

export default function OnlineCoursesPage() {
  return <OnlineCoursesClient />;
}
