"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useInView,
  useSpring,
  useMotionValue,
  type Variants,
} from "framer-motion";
import {
  ChevronRight,
  University,
  Award,
  Monitor,
  Star,
  Globe,
  CheckCircle,
} from "lucide-react";

const EMERALD = "#1ef7a5";
const MAX_WIDTH_CLASS = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeInUpFast: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const ContentSection: React.FC<{
  children: React.ReactNode;
  pyClass?: string;
}> = ({ children, pyClass = "py-16 sm:py-20 lg:py-24" }) => (
  <section className={`${pyClass} border-t border-white/5 last:border-b`}>
    <motion.div
      className={MAX_WIDTH_CLASS}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  </section>
);

const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}> = ({ title, subtitle, align = "center" }) => (
  <motion.div
    className={`mb-10 sm:mb-12 ${
      align === "center" ? "text-center" : "text-left"
    }`}
    variants={fadeInUpFast}
  >
    {subtitle && (
      <p className="text-emerald-300/80 font-semibold mb-2 tracking-[0.22em] uppercase text-[0.65rem] sm:text-xs">
        {subtitle}
      </p>
    )}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
      {title}
    </h2>
  </motion.div>
);

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden border-b border-white/5">
    {/* Softer background glows, optimized for mobile */}
    <div className="pointer-events-none absolute inset-0">
      <div
        className="
          absolute -top-32 right-[-20%]
          h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72
          rounded-full opacity-40
          lg:blur-2xl
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(30,247,165,0.45), transparent 65%)",
        }}
      />
      <div
        className="
          absolute -bottom-40 left-[-25%]
          h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72
          rounded-full opacity-25
          lg:blur-2xl
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,189,248,0.35), transparent 65%)",
        }}
      />
    </div>

    <motion.div
      className={`${MAX_WIDTH_CLASS} relative z-10 pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        {/* LEFT: Text / CTAs */}
        <div className="will-change-transform">
          <motion.div
            variants={fadeInUpFast}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4 text-[0.7rem] sm:text-xs text-slate-200/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Trusted guidance for international students
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.3rem] leading-tight font-extrabold tracking-tight text-white mb-4"
          >
            Find the <span className="text-emerald-300">right university</span>{" "}
            for your future.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-lg text-slate-300/90 max-w-xl mb-7"
          >
            Compare universities, discover scholarships, and explore online or
            on-campus programs — all curated for real students, real budgets,
            and real timelines.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              className="px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-xl transition duration-300 hover:translate-y-[-2px] hover:shadow-emerald-500/40 active:translate-y-[0px]"
              style={{
                background: "linear-gradient(135deg, #1ef7a5, #4ade80)",
                color: "#031015",
              }}
            >
              Start with Universities
            </button>
            <button className="px-6 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-semibold rounded-xl border border-emerald-300/60 bg-white/5 text-slate-50/95 hover:bg-white/10 hover:translate-y-[-2px] active:translate-y-[0px] transition duration-300">
              Book a Free Consultation
            </button>
          </motion.div>
        </div>

        {/* RIGHT: Snapshot card (desktop only, unchanged) */}
        <motion.div variants={fadeInUp} className="hidden lg:block">
          <div className="rounded-3xl border border-[rgba(148,255,214,0.35)] bg-slate-950/60 shadow-[0_26px_75px_rgba(0,0,0,0.9)] backdrop-blur-2xl p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/80">
                  Snapshot
                </p>
                <p className="text-sm text-slate-200/90">
                  Today&apos;s opportunities
                </p>
              </div>
              <div className="rounded-full border border-emerald-300/50 px-3 py-1 text-[0.7rem] text-emerald-200 bg-emerald-500/10">
                Live updated
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-100">
                  <University size={18} className="text-emerald-300" />
                  <span>Partner universities</span>
                </div>
                <span className="font-semibold text-emerald-200">150+</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-100">
                  <Award size={18} className="text-emerald-300" />
                  <span>Scholarships listed</span>
                </div>
                <span className="font-semibold text-emerald-200">300+</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-100">
                  <Globe size={18} className="text-emerald-300" />
                  <span>Study destinations</span>
                </div>
                <span className="font-semibold text-emerald-200">40+</span>
              </div>
            </div>

            <div className="mt-2 rounded-2xl bg-slate-900/70 border border-white/10 px-4 py-3 text-xs text-slate-200/90">
              Next step: tell us your background and budget. We&apos;ll map out
              3–5 realistic options for you — no pressure, no obligations.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  const numericPart = value.replace(/[^\d]/g, "");
  const suffix = value.replace(/[\d,]/g, "");
  const target = numericPart ? parseInt(numericPart, 10) : 0;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 20,
  });

  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (isInView && target > 0) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const rounded = Math.round(latest);
      if (!Number.isNaN(rounded) && rounded >= 0) {
        setDisplayValue(rounded.toLocaleString() + suffix);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [springValue, suffix]);

  return <span ref={ref}>{displayValue}</span>;
};

const StatsSection: React.FC = () => {
  const stats = [
    { value: "150+", label: "Partner Universities", icon: University },
    { value: "300+", label: "Scholarship Listings", icon: Award },
    { value: "40+", label: "Study Destinations", icon: Globe },
    { value: "10,000+", label: "Courses Compared", icon: Monitor },
  ];

  return (
    <ContentSection pyClass="py-12 sm:py-16">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUpFast}
            className="relative overflow-hidden rounded-2xl border shadow-[0_18px_40px_rgba(0,0,0,0.5)] border-[rgba(148,255,214,0.2)] bg-slate-900/40 backdrop-blur-xl p-4 sm:p-5 text-center"
          >
            <div className="absolute inset-x-0 -top-10 h-16 bg-gradient-to-b from-emerald-400/15 to-transparent pointer-events-none" />
            <stat.icon
              size={26}
              className="mx-auto mb-2 sm:mb-3"
              style={{ color: EMERALD }}
            />
            <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="text-[0.7rem] sm:text-xs text-slate-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </ContentSection>
  );
};

const CoreFeaturesSection: React.FC = () => {
  const features = [
    {
      icon: University,
      title: "Compare Universities",
      description:
        "Check tuition fees, rankings, entry requirements, and intakes side-by-side in minutes.",
      link: "/universities",
    },
    {
      icon: Award,
      title: "Find Scholarships",
      description:
        "Browse trusted merit-based, need-based, and country-specific scholarships that match your profile.",
      link: "/scholarships",
    },
    {
      icon: Monitor,
      title: "Explore Online Courses",
      description:
        "Discover flexible, accredited online programs and short courses from global universities.",
      link: "/online-courses",
    },
  ];

  return (
    <ContentSection>
      <SectionTitle
        title="The Right Tools for Your Future"
        subtitle="What You Can Do Here"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {features.map((feature, index) => (
          <motion.article
            key={index}
            variants={fadeInUp}
            className="
              group relative flex h-full flex-col
              rounded-2xl border border-[rgba(148,255,214,0.26)]
              bg-slate-950/60
              p-6 sm:p-7
              shadow-md md:shadow-[0_20px_60px_rgba(0,0,0,0.7)]
              will-change-transform
              transition-transform duration-300
              md:hover:-translate-y-1.5
            "
          >
            {/* subtle glow only on hover + desktop */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-2xl
                bg-gradient-to-br from-emerald-400/0 via-emerald-400/6 to-sky-400/0
                opacity-0 transition-opacity duration-300
                md:group-hover:opacity-100
              "
            />
            <div className="relative z-10">
              <feature.icon
                size={40}
                className="mb-4"
                style={{ color: EMERALD }}
              />
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300/90 mb-6">
                {feature.description}
              </p>
              <a
                href={feature.link}
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Learn More
                <ChevronRight
                  size={16}
                  className="ml-1 transition-transform md:group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </ContentSection>
  );
};

const ValuePropositionSection: React.FC = () => {
  const valueProps = [
    "Accurate, up-to-date university data, sourced directly from partners and official channels.",
    "Free, personalised guidance from study-abroad specialists who understand visa and funding.",
    "Support across the full journey: shortlisting, applications, offers, visa, and pre-departure.",
    "Designed around real international student budgets — clear and transparent cost expectations.",
  ];

  return (
    <ContentSection>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp}>
          <SectionTitle
            title="Why Choose Student Choice Education?"
            subtitle="Our Value Proposition"
            align="left"
          />

          <div className="space-y-4 sm:space-y-5">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                variants={fadeInUpFast}
                className="flex items-start"
              >
                <CheckCircle
                  size={22}
                  className="mt-0.5 sm:mt-1 flex-shrink-0"
                  style={{ color: EMERALD }}
                />
                <p className="ml-3 sm:ml-4 text-sm sm:text-lg text-slate-100/95">
                  {prop}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="hidden lg:block h-80 lg:h-96 rounded-3xl border border-[rgba(148,255,214,0.3)] bg-slate-950/50 shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),_transparent_60%)]" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 text-center text-slate-100/90 text-sm">
            <p className="uppercase tracking-[0.25em] text-[0.65rem] text-emerald-200/80 mb-3">
              FROM FIRST QUESTION TO VISA
            </p>
            <p className="text-lg font-semibold mb-3">
              One partner, all the key steps:
            </p>
            <p className="text-sm text-slate-200/90">
              Shortlist options, understand your budget, secure offers, and
              prepare documents — with one team who already knows your story.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </ContentSection>
  );
};

const DestinationsSection: React.FC = () => {
  const destinations = [
    {
      title: "United Kingdom",
      text: "World-class universities, strong graduate outcomes, and diverse campus communities.",
      image: "UK_Placeholder",
      link: "/destination/uk",
    },
    {
      title: "Europe & Ireland",
      text: "Competitive tuition fees, high living standards, and a rich mix of cultures.",
      image: "Europe_Placeholder",
      link: "/destination/europe",
    },
    {
      title: "Asia & Australia",
      text: "Fast-growing hubs for technology, business, and innovation, with work routes.",
      image: "Asia_Australia_Placeholder",
      link: "/destination/asia-aus",
    },
    {
      title: "Online & Hybrid",
      text: "Build your degree or skills remotely with flexible, fully online or blended options.",
      image: "Online_Placeholder",
      link: "/destination/online",
    },
  ];

  return (
    <ContentSection>
      <SectionTitle
        title="Explore Global Study Destinations"
        subtitle="Where Do You Want to Go?"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 shadow-[0_18px_55px_rgba(0,0,0,0.75)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="h-32 sm:h-40 bg-slate-800/60 flex items-center justify-center text-slate-300 text-[0.7rem] sm:text-xs">
              [Image: {dest.image}]
            </div>
            <div className="flex flex-col flex-grow p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {dest.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 flex-grow">
                {dest.text}
              </p>
              <a
                href={dest.link}
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-emerald-300 hover:text-emerald-200 mt-auto"
              >
                Explore destination
                <ChevronRight
                  size={16}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSection>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Aisha K.",
      destination: "BSc Business – Canada",
      quote:
        "I felt lost with options. SCE helped me narrow it down, compare offers, and secure a scholarship I didn’t know I could get.",
    },
    {
      name: "Wei L.",
      destination: "MSc Computer Science – UK",
      quote:
        "Their comparison tools and personal advice saved me weeks of research. The application process felt calm and structured.",
    },
    {
      name: "Ricardo P.",
      destination: "Online MBA – USA",
      quote:
        "I needed something flexible while working. The online programs they recommended fit my budget and schedule perfectly.",
    },
  ];

  return (
    <ContentSection>
      <SectionTitle
        title="Success Stories That Inspire"
        subtitle="Hear From Our Global Students"
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative flex h-full flex-col rounded-2xl border border-[rgba(148,255,214,0.24)] bg-slate-950/50 p-6 sm:p-7 shadow-[0_22px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-24 h-32 bg-gradient-to-b from-emerald-400/20 to-transparent" />
            <div className="relative z-10">
              <Star
                size={22}
                className="mb-3"
                style={{ color: EMERALD }}
                fill={EMERALD}
              />
              <p className="text-sm sm:text-base italic text-slate-100 mb-5">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center pt-4 border-t border-slate-700/60">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-500/25 flex items-center justify-center text-xs font-bold text-emerald-200 mr-3 flex-shrink-0">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-300/90">
                    {testimonial.destination}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSection>
  );
};

const FinalCtaStrip: React.FC = () => (
  <ContentSection pyClass="py-16 lg:py-20">
    <motion.div
      className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[rgba(148,255,214,0.35)] bg-slate-950/60 p-8 sm:p-10 md:p-14 shadow-[0_26px_75px_rgba(0,0,0,0.9)] backdrop-blur-2xl text-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.35),_transparent_60%)]" />
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to take the next step?
        </h2>
        <p className="text-sm sm:text-lg text-slate-200/95 max-w-2xl mx-auto mb-8">
          Tell us where you are now and where you want to study. We’ll help you
          move from a long list of options to a clear, realistic plan.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            className="px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg transition duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #1ef7a5, #4ade80)",
              color: "#031015",
            }}
          >
            Book Your Free Session
          </button>
          <button className="px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold rounded-full border border-emerald-300/70 text-slate-50/95 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition duration-300 backdrop-blur-sm">
            Chat with an Ambassador
          </button>
        </div>
      </div>
    </motion.div>
  </ContentSection>
);

const HomePage: React.FC = () => {
  return (
    <div
      className="font-sans min-h-full text-slate-50"
      style={{
        background:
          "radial-gradient(circle at top, #0b2342 0%, #020617 45%, #020b1b 100%)",
      }}
    >
      <HeroSection />
      <StatsSection />
      <CoreFeaturesSection />
      <ValuePropositionSection />
      {/* <DestinationsSection /> */}
      <TestimonialsSection />
      <FinalCtaStrip />
    </div>
  );
};

export default HomePage;
