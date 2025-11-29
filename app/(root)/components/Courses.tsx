"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const courses = [
  {
    title: "Doctor of Business Administration (DBA)",
    uni: "University of Wales Trinity Saint David",
  },
  {
    title: "MSc by Research – Built Environment",
    uni: "University of South Wales",
  },
  {
    title: "MSc by Research – Environmental Sustainability",
    uni: "Cranfield University",
  },
];

export default function Courses() {
  return (
    <section className="bg-white">
      <div className={MAX_WIDTH}>
        <motion.div
          className="space-y-3 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Browse your best courses
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            Browse from the options to get involved with your desired course.
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.title}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-5 text-slate-900 shadow-md ring-1 ring-slate-200">
                  <div className="h-20 rounded-2xl bg-[#f5f7fb]" />
                  <h3 className="mt-4 text-sm font-semibold sm:text-base">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    {course.uni}
                  </p>
                  <button className="mt-5 inline-flex items-center justify-center rounded-full bg-[#020b2c] px-5 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-black">
                    Learn more
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
