"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import testimonial from "../../../public/home/testimonials-bg.png";
const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const people = [
  {
    name: "Biswajit Saha",
    text: "Biswajit, an India student, dreamed of studying law in the UK. With our guidance, he secured admission to a prestigious university.",
  },
  {
    name: "Jysona Roy",
    text: "Jysona, an India student, is studying MBA in the UK. With our support, she secured admission to a leading university.",
  },
  {
    name: "Satyajit Mondal",
    text: "Satyajit, an India student, is studying computer science in the UK and got admission to a top university.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={testimonial}
          alt="City skyline at dusk"
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold sm:text-3xl">Testimonials</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-100 sm:text-base">
            Real experiences from students who have studied abroad through our
            programmes.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {people.map((p, index) => (
            <motion.article
              key={p.name}
              className="flex flex-col items-center rounded-3xl bg-white p-6 text-center text-slate-900 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full bg-slate-200">
                <Image
                  src="/testimonials-bg.png"
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-slate-700">{p.text}</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {p.name}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
