"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AmbassadorForm from "./components/AmbassadorForm";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function AmbassadorPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden border-b border-slate-200">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/ambassador/ambassador-community.png"
            alt="Student ambassador talking with other students"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          {/* Stronger gradient so text is very clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/90 to-white/30" />
        </div>

        <motion.div
          className={`${MAX_WIDTH} relative z-10 flex flex-col justify-center gap-8 py-10 lg:flex-row lg:items-center lg:py-14`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* LEFT – TEXT */}
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500">
              Student Choice Ambassador
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
              Become the friendly face of studying abroad in your community.
            </h1>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Help other students discover the right course and destination,
              share your experience, and get rewarded with free online courses,
              scholarship guidance and exclusive training from our team.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#ambassador-form"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Apply to be an ambassador
              </a>
              <Link
                href="/universities"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Explore Universities
              </Link>
            </div>

            <div className="mt-6 grid gap-4 text-xs text-slate-700 sm:grid-cols-3 sm:text-sm">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                  Rewards
                </p>
                <p className="mt-1 font-semibold">
                  Free short courses and exclusive ambassador training
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                  Scholarships
                </p>
                <p className="mt-1 font-semibold">
                  Priority support for scholarship and bursary applications
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                  Experience
                </p>
                <p className="mt-1 font-semibold">
                  Real marketing, events and mentoring experience for your CV
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT – SMALL INFO CARD */}
          <motion.div
            className="relative mt-6 flex flex-1 items-center justify-center lg:mt-0 lg:justify-end lg:pr-4"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-full max-w-sm rounded-3xl bg-white/96 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Ambassador network
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Join ambassadors across the UK, Europe and Asia.
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Share your story, support other students and grow your future
                while gaining real experience for your CV.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className={`${MAX_WIDTH} space-y-10 py-12 lg:py-16`}>
        <div className="grid gap-10 lg:grid-cols-[1.5fr,1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What you get as a Student Choice Ambassador
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              The ambassador programme is designed to be rewarding, flexible and
              built around your studies. The more you support your community,
              the more benefits you unlock.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow-500">
                  Learning & scholarships
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Free access to selected short online courses</li>
                  <li>Invitations to live webinars and masterclasses</li>
                  <li>
                    Extra guidance for scholarship and bursary applications
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-500">
                  Experience & CV
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Real marketing, events and mentoring experience</li>
                  <li>Certificate and reference letter from our team</li>
                  <li>Clear stories you can share in job interviews</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  Community & networking
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Join a network of ambassadors in different countries</li>
                  <li>Be the first to hear about new partner universities</li>
                  <li>Co-host events, webinars and Q&A sessions</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-500">
                  Rewards & recognition
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Performance-based rewards and recognition</li>
                  <li>Spotlights on our website and social media</li>
                  <li>Priority invitations to Student Choice events</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Who can apply?
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Current high school, college or university students</li>
              <li>Recent graduates who want to guide future students</li>
              <li>
                Comfortable speaking to other students in person or online
              </li>
              <li>
                Interested in studying abroad in the UK or other countries
              </li>
              <li>
                Able to spend a few hours each month supporting activities
              </li>
            </ul>

            <div className="mt-3 rounded-2xl bg-white p-4 text-xs text-slate-600">
              <p>
                You do not need to be an influencer. We welcome friendly
                students who care about helping others make better study
                choices. Training and materials are provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FORM ========== */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 lg:py-16">
        <div
          className={`${MAX_WIDTH} grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-start`}
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ambassador application form
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Tell us a bit about yourself and your study plans. Our team will
              review your application and contact you with the next steps if
              there is a good match for your location and interests.
            </p>

            <AmbassadorForm />
          </div>

          <div className="space-y-5">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-white shadow-md">
              <Image
                src="/ambassador/ambassador-hero.png"
                alt="Student ambassadors leading an information session"
                fill
                className="object-cover"
              />
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                What happens after you apply?
              </h3>
              <ol className="mt-3 space-y-3 text-sm text-slate-700">
                <li>
                  <span className="font-semibold text-yellow-500">Step 1:</span>{" "}
                  Our team reviews your application and checks the fit with our
                  current ambassador needs.
                </li>
                <li>
                  <span className="font-semibold text-yellow-500">Step 2:</span>{" "}
                  If selected, you will receive an email invitation for a short
                  online chat to get to know you better.
                </li>
                <li>
                  <span className="font-semibold text-yellow-500">Step 3:</span>{" "}
                  You join the ambassador onboarding session, receive your
                  welcome pack and start your journey.
                </li>
              </ol>

              <p className="mt-4 text-xs text-slate-500">
                We aim to reply to all applications within 7–10 working days. If
                you have urgent questions, you can also contact our team at{" "}
                <a
                  href="mailto:hi@studentchoice.com"
                  className="font-semibold text-slate-900 underline-offset-2 hover:underline"
                >
                  hi@studentchoice.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
