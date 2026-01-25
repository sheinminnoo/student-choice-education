"use client";

import Link from "next/link";
import {
  GraduationCap,
  FileCheck,
  Plane,
  Globe2,
  BookOpen,
  Users,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Admissions",
    desc: "Direct access to 500+ top-ranked universities in the UK, USA, Canada, and Australia.",
    tags: ["Application Review", "SOP Writing", "Interview Prep"],
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    desc: "Expert guidance on documentation, financial proof, and interview techniques to maximize success.",
    tags: ["Document Check", "Mock Interviews", "Appeals"],
  },
  {
    icon: Globe2,
    title: "Scholarship Guidance",
    desc: "We help you identify and apply for merit-based scholarships and financial aid opportunities.",
    tags: ["Merit Awards", "Bursaries", "Funding Checks"],
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefing",
    desc: "Get ready for your new life with advice on accommodation, banking, and cultural adaptation.",
    tags: ["Accommodation", "Travel Sims", "Airport Pickup"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#020b2c]">
      {/* ========== HERO ========== */}
      <section className="animate-hero-left pt-20 pb-16 text-center max-w-4xl mx-auto px-4">
        <p className="text-mini font-bold uppercase tracking-widest text-slate-500 mb-4">
          Our Expertise
        </p>
        <h1 className="text-hero text-[#020b2c] mb-6">
          Comprehensive services for <br className="hidden sm:block" />
          <span className="text-slate-400">international students.</span>
        </h1>
        <p className="text-body text-slate-600 max-w-2xl mx-auto">
          Whether you are just starting to explore your options or ready to
          apply, our tailored services cover every aspect of your study abroad
          journey.
        </p>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="animate-section pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-[#020b2c]/20 hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#020b2c]/5 text-[#020b2c] transition-colors group-hover:bg-[#020b2c] group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-400 group-hover:text-[#020b2c]">
                    ↗
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#020b2c] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-micro font-medium uppercase tracking-wider rounded-md bg-slate-50 px-2.5 py-1.5 text-slate-500 border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="animate-row bg-[#020b2c] py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to start your application?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Book a free 1-on-1 session with our education counsellors and get a
            personalized roadmap for your study abroad success.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 text-sm font-bold text-[#020b2c] transition-transform hover:scale-105 hover:bg-yellow-300"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
