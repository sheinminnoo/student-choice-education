import React from "react";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div>Course Detail Page - {slug} </div>;
}

export default page;
