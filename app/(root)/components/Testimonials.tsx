"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import testimonialBg from "../../../public/home/testimonials-bg.png";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const people = [
  {
    name: "Nguyen Minh Anh",
    role: "Business Management Student, UK (Vietnam)",
    text: "Minh Anh from Vietnam dreamed of studying business in the UK. With our guidance, she successfully secured admission to a leading university.",
    image: "/home/student-1.png",
  },
  {
    name: "Chen Wei Ting",
    role: "MBA Student, UK (Taiwan)",
    text: "Wei Ting from Taiwan is now studying MBA in the UK. We supported her throughout the entire admission process.",
    image: "/home/student-2.png",
  },
  {
    name: "Tan Jun Hao",
    role: "Computer Science Student, UK (Singapore)",
    text: "Jun Hao from Singapore received offers from multiple top universities and is now studying computer science in the UK.",
    image: "/home/student-3.png",
  },
];

function StarIcon() {
  return (
    <svg
      viewBox="0 0 22 20"
      className="h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
        fill="#FF532E"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={testimonialBg}
          alt="Testimonials background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className={`${MAX_WIDTH} relative z-10 py-16 lg:py-20`}>
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold sm:text-3xl">Testimonials</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-100 sm:text-base">
            Real experiences from students who have studied abroad through our
            programmes.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-wrap items-stretch justify-center gap-8">
          {people.map((p, index) => (
            <motion.article
              key={p.name}
              className="w-full max-w-xs rounded-2xl border border-slate-200 bg-white pt-2 pb-8 text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="relative flex flex-col items-center px-5 pt-10">
                <div className="absolute -top-12 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="pt-10">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {p.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">{p.role}</p>
                </div>
              </div>

              <p className="px-6 pt-4 pb-2 text-sm leading-relaxed text-slate-600">
                {p.text}
              </p>

              <div className="mt-4 flex justify-center">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
