"use client";

import { useState } from "react";
import Image from "next/image";

type GuideKey = "bachelor" | "graduate" | "counselor";
type GuideType = GuideKey | null;

const GuidesSection = () => {
  const [loading, setLoading] = useState<GuideType>(null);
  const [success, setSuccess] = useState<GuideType>(null);

  const handleDownload = async (type: GuideType) => {
    if (!type) return;
    setSuccess(null);
    setLoading(type);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(null);
      setSuccess(type);

      setTimeout(() => {
        setSuccess((prev) => (prev === type ? null : prev));
      }, 2000);
    } catch {
      setLoading(null);
    }
  };

  const guides = [
    {
      key: "bachelor",
      title: "Bachelor's Guide",
      badge: "Undergraduate",
      img: "/home/guidebook.jpg",
      text: "Planning to study in the UK for your bachelor's degree but not sure where to begin? This guide gives you a clear step-by-step overview to start with confidence.",
    },
    {
      key: "graduate",
      title: "Graduate Guide",
      badge: "Postgraduate",
      img: "/home/guidebook.jpg",
      text: "Already completed your bachelor's degree? This guide helps you prepare for your Master's or PhD journey in the UK with clarity and direction.",
    },
    {
      key: "counselor",
      title: "College Counselor's Guide",
      badge: "For Counselors",
      img: "/home/guidebook.jpg",
      text: "Support your students in achieving their study abroad goals with a practical guide created for college counselors and education advisors.",
    },
  ] as const;

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-10 w-full mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="text-[28px] sm:text-[34px] font-bold mb-3 text-[#020B2C]">
          The UK Study Expert “What to Expect” Guides
        </h2>

        <p className="max-w-2xl mx-auto text-[15px] sm:text-[16px] text-slate-600 mb-14 leading-relaxed">
          Feeling overwhelmed by the UK university application process? Start
          your journey with one of our carefully designed FREE study guides.
        </p>

        <div
          className="
            flex gap-6 overflow-x-auto pb-5
            md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0
          "
        >
          {guides.map((guide) => {
            const isLoading = loading === guide.key;
            const isSuccess = success === guide.key;

            return (
              <div
                key={guide.key}
                className="
                  bg-gradient-to-br from-[#020B2C] via-[#041B5D] to-[#020B2C]
                  text-white rounded-2xl shadow-2xl
                  shrink-0 w-[88%] max-w-[360px] p-8 
                  flex flex-col mx-auto
                  md:w-full md:max-w-none
                "
              >
                {/* Badge */}
                <div className="mb-4 flex">
                  <span className="inline-flex items-center rounded-full bg-[#e7e7e7] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#020B2C]">
                    {guide.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
                  <Image
                    src={guide.img}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-[20px] font-bold text-white">
                  {guide.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] mt-4 mb-6 leading-relaxed text-slate-200 flex-grow">
                  {guide.text}
                </p>

                {/* ✅ STRONG VISIBLE YELLOW HOVER BUTTON */}
                <button
                  onClick={() => handleDownload(guide.key)}
                  disabled={isLoading}
                  className={`
                    mt-2 inline-flex w-full items-center justify-center rounded-full 
                    px-6 py-3 text-xs font-semibold uppercase 
                    tracking-wide transition-colors duration-300
                    disabled:opacity-70 disabled:cursor-not-allowed
                    ${
                      isSuccess
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                        : "bg-white text-[#020B2C] hover:bg-[#FACC15]"
                    }
                  `}
                >
                  {isLoading && (
                    <span className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  )}
                  {isSuccess && !isLoading && (
                    <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-emerald-600 text-[10px]">
                      ✓
                    </span>
                  )}
                  <span>
                    {isLoading
                      ? "PREPARING..."
                      : isSuccess
                      ? "READY – DOWNLOAD STARTED"
                      : "DOWNLOAD FREE GUIDE"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
