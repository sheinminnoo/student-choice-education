import type { Metadata } from "next";
import AmbassadorClient from "./AmbassadorClient";

export const metadata: Metadata = {
  title: "Student Ambassador Programme | Student Choice Education",
  description:
    "Become a Student Choice Ambassador and help students study abroad with confidence. Gain real experience, rewards, and professional training.",
  alternates: {
    canonical: "/ambassadors",
  },
  openGraph: {
    title: "Student Ambassador Programme | Student Choice Education",
    description:
      "Join the Student Choice Ambassador Programme and help students worldwide choose the right university.",
    url: "https://student-choice-education.com/ambassadors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Ambassador Programme | Student Choice Education",
    description:
      "Become a Student Choice Ambassador and build your global education profile.",
  },
};

export default function AmbassadorPage() {
  return <AmbassadorClient />;
}
