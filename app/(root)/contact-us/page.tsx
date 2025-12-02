import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Student Choice Education",
  description:
    "Contact Student Choice Education for free advice on courses, universities, scholarships and student visas. Our admissions team replies within 1–2 business days.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Student Choice Education",
    description:
      "Share your study plans and our admissions team will help you choose the right course, university and country.",
    url: "https://student-choice-education.com/contact-us",
    type: "website",
    siteName: "Student Choice Education",
    images: [
      {
        url: "https://student-choice-education.com/og/contact-us-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Student Choice Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Student Choice Education",
    description: "Talk to our admissions team about your study abroad options.",
  },
};

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function ContactUsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020b2c]">
      <div className="absolute inset-0">
        <Image
          src="/home/contactbuilding.png"
          alt="Modern education and office building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#020b2c]/60 lg:bg-gradient-to-r lg:from-[#020b2c]/85 lg:via-[#020b2c]/55 lg:to-[#020b2c]/25" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-70 hidden md:block">
        <div className="absolute -top-40 -left-32 h-64 w-64 rounded-full bg-[#facc15]/18 blur-3xl" />
        <div className="absolute -bottom-40 right-[-10%] h-72 w-72 rounded-full bg-sky-400/18 blur-3xl" />
      </div>

      <div
        className={`${MAX_WIDTH} animate-section relative z-10 flex min-h-screen flex-col items-center gap-10 py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:py-20`}
      >
        <div className="w-full text-white lg:w-[45%]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#facc15]">
            Contact us
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.5rem]">
            Let&apos;s plan your study journey together.
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-100/90 sm:text-base">
            Share your details and our admissions team will reach out with
            tailored advice on courses, universities, scholarships and student
            visas. No pressure, just honest guidance.
          </p>

          <div className="mt-6 grid gap-4 text-sm text-slate-100/90 sm:max-w-lg sm:grid-cols-2">
            <div className="rounded-xl border border-white/12 bg-white/5 px-4 py-3">
              <p className="text-[0.8rem] font-semibold uppercase tracking-wide text-[#facc15]">
                Response time
              </p>
              <p className="mt-1 text-sm">Within 1–2 business days</p>
            </div>
            <div className="rounded-xl border border-white/12 bg-white/5 px-4 py-3">
              <p className="text-[0.8rem] font-semibold uppercase tracking-wide text-[#facc15]">
                Preferred channels
              </p>
              <p className="mt-1 text-sm">Email, WhatsApp & online call</p>
            </div>
          </div>

          <p className="mt-5 text-xs text-slate-200/80">
            We never share your contact details with third parties.
          </p>
        </div>

        <div className="w-full rounded-2xl border border-white/15 bg-white/98 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.45)] sm:rounded-3xl sm:p-7 lg:w-[52%] lg:p-8">
          <h1 className="mb-2 text-center text-2xl font-semibold text-slate-900">
            Talk to our admissions team
          </h1>
          <p className="mb-6 text-center text-sm text-slate-500">
            Fill in the form and we&apos;ll get back to you with personalised
            advice.
          </p>

          <form action="" method="POST" className="flex flex-col gap-4">
            <input type="hidden" name="oid" value="00D24000000YRPu" />

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone (with country code)"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
            />

            <select
              name="00N2400000EtJeo"
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
            >
              <option value="" disabled>
                Preferred start year
              </option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
            </select>

            <select
              name="00N2400000Istrh"
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
            >
              <option value="" disabled>
                Study level
              </option>
              <option>Foundation / Pathway</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
            </select>

            <select
              name="00N2400000Istrm"
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
            >
              <option value="" disabled>
                Target study destination
              </option>
              <option>United Kingdom (UK)</option>
              <option>United States (USA)</option>
              <option>Germany</option>
              <option>Denmark</option>
              <option>Other</option>
            </select>

            <textarea
              name="00N2400000EB8hh"
              placeholder="Tell us about your background and what you want to study."
              className="w-full min-h-[110px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
            />

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#facc15] px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#facc15]/40 transition-transform duration-150 hover:-translate-y-[2px] hover:bg-[#eab308] focus:outline-none focus:ring-2 focus:ring-[#facc15]/70 focus:ring-offset-2 focus:ring-offset-white"
            >
              Get your free consultation
            </button>

            <p className="mt-2 text-center text-[11px] text-slate-400">
              By submitting this form, you agree that we may contact you about
              study options and related services.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
