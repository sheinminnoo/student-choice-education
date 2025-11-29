"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

const data = [
  { name: "Course fees", UK: 18000, India: 7000 },
  { name: "Part-time earning", UK: 12000, India: 4000 },
  { name: "Salary after completion", UK: 35000, India: 15000 },
  { name: "Living cost", UK: 12000, India: 5000 },
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "+ More Countries",
];

export default function ForStudents() {
  return (
    <section className="bg-[#020617] py-14 lg:py-18">
      <div className={MAX_WIDTH}>
        <motion.div
          className="space-y-10 rounded-3xl bg-[#020b2c] p-6 shadow-xl ring-1 ring-slate-700/60 lg:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold text-[#facc15] sm:text-3xl">
              For students
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-200 sm:text-base">
              Start your college and university admission here. We help you
              reduce stress, research time and admission work.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Chart side */}
            <div className="rounded-2xl bg-[#020617] p-4 text-slate-50 shadow-inner sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Country wise comparison (GBP)
              </p>
              <p className="mt-1 text-[13px] text-slate-200">
                Course fees, part-time earning and salary after completion.
              </p>

              <div className="mt-4 rounded-xl bg-[#020b2c] p-3">
                <div className="w-full overflow-x-auto">
                  <div className="h-[260px] min-w-[520px]">
                    <BarChart
                      width={520}
                      height={260}
                      data={data}
                      layout="vertical"
                      barSize={18}
                    >
                      <XAxis
                        type="number"
                        tick={{ fill: "#e5e7eb", fontSize: 11 }}
                      />
                      <YAxis
                        type="category"
                        dataKey="name"
                        tick={{ fill: "#e5e7eb", fontSize: 11 }}
                        width={140}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#020617",
                          border: "1px solid #1f2937",
                          borderRadius: 12,
                          fontSize: 12,
                        }}
                        labelStyle={{ color: "#e5e7eb" }}
                      />
                      <Legend
                        wrapperStyle={{ fontSize: 12, color: "#e5e7eb" }}
                        iconType="circle"
                      />
                      <Bar dataKey="UK" fill="#38bdf8" radius={[4, 4, 4, 4]} />
                      <Bar
                        dataKey="India"
                        fill="#fb7185"
                        radius={[4, 4, 4, 4]}
                      />
                    </BarChart>
                  </div>
                </div>
              </div>
            </div>

            {/* Question side */}
            <div className="rounded-2xl bg-[#020617] p-6 shadow-inner ring-1 ring-slate-700/60 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#facc15]">
                Start your journey now
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">
                Question 1 of 15
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Where do you want to study?
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {countries.map((country) => (
                  <button
                    key={country}
                    type="button"
                    className="rounded-full border border-slate-600 bg-[#020b2c] px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-[#facc15] hover:text-[#facc15]"
                  >
                    {country}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#facc15] px-6 py-2.5 text-sm font-semibold text-[#020617] shadow-lg transition hover:bg-[#eab308]"
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
