import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { universities } from "@/data/universities";
import UniversityDetailsClient from "./UniversityDetailsClient";

type RouteParams = { slug: string };
type PageProps = { params: Promise<RouteParams> };

const baseUrl = "https://student-choice-education.com";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const uni = universities.find((u) => u.slug === slug);

  if (!uni) {
    return {
      title: "University not found | Student Choice Education",
      description:
        "Explore universities and pathway providers in the UK and Europe with Student Choice Education.",
    };
  }

  const title = `${uni.name} | Study in ${uni.city}, ${uni.country} | Student Choice Education`;

  return {
    title,
    description: uni.shortDescription,
    alternates: {
      canonical: `/universities/${uni.slug}`,
    },
    openGraph: {
      title,
      description: uni.shortDescription,
      url: `${baseUrl}/universities/${uni.slug}`,
      type: "website",
      siteName: "Student Choice Education",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: uni.shortDescription,
    },
  };
}

export default async function UniversityDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const uni = universities.find((u) => u.slug === slug);

  if (!uni) {
    notFound();
  }

  return <UniversityDetailsClient uni={uni} />;
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  return universities.map((u) => ({ slug: u.slug }));
}
