"use client";

import {
  FileText,
  Monitor,
  Users,
  Timer,
  MessageCircle,
  PlayCircle,
  BarChart2,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const benefits = [
  {
    title: "Mock tests",
    body: "Practise with online mock tests that closely mirror the official IELTS exam.",
    Icon: FileText,
  },
  {
    title: "Online classes",
    body: "Join live lessons from wherever you are, with UK time zone friendly schedules.",
    Icon: Monitor,
  },
  {
    title: "Small group tutorials",
    body: "Work in small groups so you have time to ask questions and practise speaking.",
    Icon: Users,
  },
  {
    title: "Flexible and self-paced",
    body: "Study steadily or intensively depending on your visa timeline and target intake.",
    Icon: Timer,
  },
  {
    title: "Immediate feedback",
    body: "Receive clear, practical comments on each writing and speaking task you submit.",
    Icon: MessageCircle,
  },
  {
    title: "Video and audio resources",
    body: "Access recorded explanations, model answers and pronunciation practice anytime.",
    Icon: PlayCircle,
  },
  {
    title: "Track your progress",
    body: "Band predictions and regular check-ins show how close you are to your target.",
    Icon: BarChart2,
  },
  {
    title: "Upgrade options",
    body: "Move from group classes to one-to-one support if you need extra help before the test.",
    Icon: ArrowUpRight,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function IeltsBenefitsGridSection() {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className={MAX_WIDTH}>
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-slate-900">
            Benefits of studying IELTS with us
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            A flexible programme built around your{" "}
            <span className="font-semibold text-yellow-500">
              UK study goals
            </span>
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, body, Icon }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="
                relative rounded-2xl bg-slate-900 p-5
                border border-slate-800
                shadow-[0_10px_30px_rgba(15,23,42,0.25)]
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_22px_55px_rgba(15,23,42,0.45)]
              "
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400">
                  <Icon className="h-4.5 w-4.5 text-slate-900" />
                </div>
                <h3 className="text-sm font-semibold sm:text-base text-white">
                  {title}
                </h3>
              </div>

              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
