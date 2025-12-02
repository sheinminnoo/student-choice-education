"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PartnershipSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        w-full py-12 md:py-16 bg-[#f4f7fc]
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4">
        {/* LEFT CONTENT */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Image
              src="/home/bc-logo.jpg"
              alt="British Council Logo"
              width={64}
              height={64}
              className="object-contain"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Official Partnership
            </h3>
          </div>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
            We are proud partners of the British Council, supporting global
            education and international student opportunities for learners
            worldwide.
          </p>
        </div>

        {/* RIGHT IMAGE - FIXED FULL SIZE & CLEAR */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <Image
            src="/home/badge.png"
            alt="British Council Partnership Badge"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
