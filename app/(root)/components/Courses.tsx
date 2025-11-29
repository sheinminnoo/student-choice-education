"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

type CourseCard = {
  title: string;
  uni: string;
  description: string;
  logo: string;
  href: string;
};

const courses: CourseCard[] = [
  {
    title: "MSc International Business",
    uni: "University of Hertfordshire",
    description:
      "A career-focused programme for students who want to build global business and management skills.",
    logo: "/home/hertfordshire.jpg",
    href: "/universities/university-of-hertfordshire",
  },
  {
    title: "MBA Global Business",
    uni: "University of Roehampton London",
    description:
      "Develop leadership, strategy and international business knowledge in the heart of London.",
    logo: "/home/Roehampton.png",
    href: "/universities/university-of-roehampton",
  },
  {
    title: "MSc Data Science",
    uni: "Ulster University London",
    description:
      "Hands-on data science training with a focus on analytics, programming and real business applications.",
    logo: "/home/Ulster.jpg",
    href: "/universities/ulster-university-london",
  },
  {
    title: "MSc Business with Analytics",
    uni: "Northumbria University London",
    description:
      "Combine business knowledge with data analytics to support decision-making in modern organisations.",
    logo: "/home/northumbria.jpg",
    href: "/universities/northumbria-university-london",
  },
  {
    title: "MSc Engineering Management",
    uni: "Arden University Berlin",
    description:
      "Ideal for engineers who want to move into management roles in international technical companies.",
    logo: "/home/arden.jpg",
    href: "/universities/arden-university-berlin",
  },
  {
    title: "International Relations & Diplomacy",
    uni: "Schiller International University, Madrid",
    description:
      "Prepare for careers in diplomacy, NGOs and international organisations with a global learning environment.",
    logo: "/home/Schiller.jpg",
    href: "/universities/schiller-international-university-madrid",
  },
];

export default function Courses() {
  return (
    <section className="bg-white py-16">
      <div className={MAX_WIDTH}>
        <motion.div
          className="space-y-3 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Explore handpicked courses for you
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            Discover popular programmes from trusted universities in the UK and
            Europe.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 28 },
            }}
            className="courses-swiper"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.title}>
                <div className="mx-auto flex h-[360px] w-full max-w-[320px] flex-col rounded-2xl bg-[#F9FAFB] text-slate-900 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:max-w-none">
                  <div className="flex items-center justify-center border-b border-slate-100 bg-[#F1F5F9] px-4 py-6">
                    <div className="relative h-24 w-full max-w-[240px]">
                      <Image
                        src={course.logo}
                        alt={course.uni}
                        fill
                        sizes="(min-width: 1024px) 240px, (min-width: 768px) 220px, 70vw"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {course.description}
                    </p>

                    <div className="mt-auto">
                      <Link
                        href={course.href}
                        className="inline-flex w-full items-center justify-center rounded-full bg-[#020B2C] px-6 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#041B5D]"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
