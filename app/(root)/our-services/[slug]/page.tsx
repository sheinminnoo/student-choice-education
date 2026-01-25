import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import Link from "next/link";
import Image from "next/image"; // Import Image
import { CheckCircle2, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-slate-50 text-[#020b2c]">
      {/* 1. SERVICE HERO (COMPACT & VISUAL) */}
      {/* UPDATED: Reduced padding (py-14 lg:py-20) */}
      <section className="relative h-[400px] lg:h-[450px] flex items-center overflow-hidden">
        {/* BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0 bg-[#020b2c]">
          {service.image && (
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover opacity-30" // Subtle image visibility
              priority
            />
          )}
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2c] via-[#020b2c]/90 to-[#020b2c]/60" />

          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-yellow-400 mb-6 transition-colors text-xs font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Services
          </Link>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* UPDATED: Smaller Icon Box (h-16 w-16) */}
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-[#020b2c] shadow-lg shadow-yellow-400/20">
              <Icon className="h-8 w-8" />
            </div>

            <div className="max-w-2xl">
              {/* UPDATED: Tighter Line Height and Size */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
                {service.title}
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED CONTENT */}
      {/* UPDATED: Reduced padding (py-12 instead of 20) */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            {/* Left: Main Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-[#020b2c] mb-4">
                  Overview
                </h2>
                <p className="text-body text-slate-600 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-[#020b2c] mb-5">
                  What&apos;s Included
                </h3>
                <div className="grid gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 flex-shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Sidebar CTA */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-2xl bg-[#020b2c] p-8 shadow-xl text-white relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>

                <h3 className="text-lg font-bold mb-2 relative z-10">
                  Ready to start?
                </h3>
                <p className="text-sm text-slate-300 mb-6 relative z-10">
                  Book a free consultation to discuss your {service.title}{" "}
                  needs.
                </p>

                <Link
                  href="/contact-us"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-bold text-[#020b2c] transition-all hover:bg-yellow-300 hover:shadow-lg hover:-translate-y-0.5 relative z-10"
                >
                  {service.ctaText}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <p className="mt-4 text-center text-[10px] uppercase font-bold tracking-widest text-slate-400/60 relative z-10">
                  No hidden fees • 100% Free
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
