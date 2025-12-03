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
    title: "Online mock tests",
    body: "Practise full IELTS papers online with realistic timing.",
    Icon: FileText,
  },
  {
    title: "Live online classes",
    body: "Join interactive lessons from home on your phone or laptop.",
    Icon: Monitor,
  },
  {
    title: "Small online groups",
    body: "Plenty of time to speak, ask questions and get help.",
    Icon: Users,
  },
  {
    title: "Flexible schedules",
    body: "Evening, weekend and intensive online options are available.",
    Icon: Timer,
  },
  {
    title: "Quick feedback",
    body: "Receive clear comments on Writing and Speaking tasks.",
    Icon: MessageCircle,
  },
  {
    title: "Recorded lessons",
    body: "Rewatch lessons if you miss a class or need revision.",
    Icon: PlayCircle,
  },
  {
    title: "Progress tracking",
    body: "See how close you are to your target band with online checks.",
    Icon: BarChart2,
  },
  {
    title: "Upgrade to 1–1",
    body: "Add private online lessons if you need extra support.",
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
            Benefits of Online IELTS Training
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Study fully online while working towards your{" "}
            <span className="font-semibold text-yellow-500">
              UK study goals
            </span>
            .
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
