import type { Metadata } from "next";
import UniversitiesClient from "./UniversitiesClient";

export const metadata: Metadata = {
  title: "Universities | Student Choice Education",
  description:
    "Explore partner universities and pathway providers in the UK and Europe. Filter by country, institution type and subject interests to find your best options.",
  alternates: {
    canonical: "/universities",
  },
  openGraph: {
    title: "Explore Universities | Student Choice Education",
    description:
      "Browse universities and pathway providers in the UK and Europe, and discover options that match your study plans.",
    url: "https://student-choice-education.com/universities",
    type: "website",
    siteName: "Student Choice Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universities | Student Choice Education",
    description:
      "Filter and explore universities and pathway providers for your study abroad journey.",
  },
};

export default function UniversitiesPage() {
  return <UniversitiesClient />;
}
