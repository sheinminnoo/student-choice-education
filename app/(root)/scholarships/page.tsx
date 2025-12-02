import type { Metadata } from "next";
import ScholarshipsClient from "./ScholarshipsClient";

export const metadata: Metadata = {
  title: "Scholarships for UK & EU Studies | Student Choice Education",
  description:
    "Explore verified scholarships, bursaries and fee discounts for UK and EU universities. Filter by country, study level and funding type to find options that match your study plans.",
  keywords: [
    "UK scholarships",
    "EU scholarships",
    "international student scholarships",
    "study in UK funding",
    "European university bursaries",
    "tuition fee discounts",
    "Student Choice Education scholarships",
  ],
  openGraph: {
    title: "Scholarships for UK & EU Studies | Student Choice Education",
    description:
      "Discover real scholarships, bursaries and early-bird discounts from trusted UK and EU universities.",
    url: "https://yourdomain.com/scholarships", // change to your real domain
    siteName: "Student Choice Education",
    images: [
      {
        url: "/heros/scholarship-hero.png",
        width: 1200,
        height: 630,
        alt: "Students exploring scholarships and funding opportunities",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholarships for UK & EU Studies | Student Choice Education",
    description:
      "Browse curated scholarships and fee discounts for international students in the UK and Europe.",
    images: ["/heros/scholarship-hero.png"],
  },
};

export default function ScholarshipsPage() {
  return <ScholarshipsClient />;
}
