"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MAX_WIDTH = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

type Step = 1 | 2 | 3 | 4;

export default function EligibilitySection() {
  const [step, setStep] = useState<Step>(1);
  const [showForm, setShowForm] = useState(false);

  const nextStep = () =>
    setStep((prev) => (prev < 4 ? ((prev + 1) as Step) : prev));
  const prevStep = () =>
    setStep((prev) => (prev > 1 ? ((prev - 1) as Step) : prev));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to your API / CRM here
    alert("Thank you! Our team will contact you soon.");
  };

  return (
    <section className="relative bg-[#041744] py-10 sm:py-12 lg:py-14">
      {/* CTA BANNER */}
      <div className={`${MAX_WIDTH}`}>
        <div className="relative overflow-hidden rounded-3xl bg-[#071e57] px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="absolute -right-28 bottom-0 h-48 w-48 rounded-full bg-yellow-400/15 blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 ring-2 ring-sky-400/50">
                <span className="text-xl text-sky-300">✓</span>
              </div>

              <div>
                <p className="inline-flex items-center rounded-full bg-white/8 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-sky-100">
                  FAST & FREE ASSESSMENT
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                  Check your university eligibility in just a few minutes
                </h2>
                <p className="mt-1.5 max-w-2xl text-xs text-slate-100/85 sm:text-sm">
                  Answer simple questions and instantly see your chances for the
                  UK, USA, Canada, Australia, Europe and more — based on real
                  entry requirements.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowForm((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full bg-[#facc15] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-[0_18px_45px_rgba(250,204,21,0.45)] transition hover:-translate-y-[2px] hover:bg-[#eab308]"
            >
              {showForm ? "Hide eligibility form" : "Check your eligibility"}
            </button>
          </div>
        </div>
      </div>

      {/* MULTI-STEP FORM */}
      <AnimatePresence initial={false}>
        {showForm && (
          <motion.div
            key="eligibility-form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.24 }}
            className={`${MAX_WIDTH} mt-6 sm:mt-8`}
          >
            <div className="rounded-3xl bg-white/95 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.55)] backdrop-blur sm:p-7 lg:p-8">
              {/* Step header + progress */}
              <div className="mb-6 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Step {step} of 4
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
                    {step === 1 && "Tell us a bit about you"}
                    {step === 2 && "Your education background"}
                    {step === 3 && "Your study plans"}
                    {step === 4 && "Contact & final details"}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    It usually takes less than 3 minutes to complete.
                  </p>
                </div>

                <div className="flex w-full items-center gap-2 sm:w-60">
                  <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-[#facc15]"
                      style={{ width: `${(step / 4) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {Math.round((step / 4) * 100)}%
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP CONTENT */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22 }}
                    className="space-y-4"
                  >
                    {step === 1 && (
                      <>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1 block text-xs font-medium text-slate-700">
                              Full name
                            </label>
                            <input
                              name="fullName"
                              required
                              placeholder="Eg. Aung Min"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                            />
                          </div>

                          <div>
                            <label className="mb-1 block text-xs font-medium text-slate-700">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="you@example.com"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1 block text-xs font-medium text-slate-700">
                              Phone (with country code)
                            </label>
                            <input
                              name="phone"
                              placeholder="+44 7xxx xxx xxx"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                            />
                          </div>

                          <div>
                            <label className="mb-1 block text-xs font-medium text-slate-700">
                              Nationality
                            </label>
                            <input
                              name="nationality"
                              placeholder="Eg. Myanmar"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div>
                          <label className="mb-1 block text-xs font-medium text-slate-700">
                            Highest level of education
                          </label>
                          <select
                            name="highestEducation"
                            defaultValue=""
                            required
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                          >
                            <option value="" disabled>
                              Select one
                            </option>
                            <option>High school (completed)</option>
                            <option>High school (studying)</option>
                            <option>Diploma</option>
                            <option>Bachelor&apos;s degree</option>
                            <option>Master&apos;s degree</option>
                          </select>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1 block text-xs font-medium text-slate-700">
                              Recent grades / GPA (if known)
                            </label>
                            <input
                              name="grades"
                              placeholder="Eg. 3.2 / 4.0 or 75%"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                            />
                          </div>

                          <div>
                            <label className="mb-1 block text-xs font-medium text-slate-700">
                              English test
                            </label>
                            <select
                              name="englishTest"
                              defaultValue=""
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                            >
                              <option value="" disabled>
                                Select one
                              </option>
                              <option>No test yet</option>
                              <option>IELTS</option>
                              <option>PTE</option>
                              <option>TOEFL</option>
                              <option>Duolingo</option>
                              <option>Other / local test</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1 block text-xs font-medium text-slate-700">
                              Preferred study destination
                            </label>
                            <select
                              name="destination"
                              defaultValue=""
                              required
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                            >
                              <option value="" disabled>
                                Choose a country
                              </option>
                              <option>United Kingdom (UK)</option>
                              <option>United States (USA)</option>
                              <option>Canada</option>
                              <option>Australia</option>
                              <option>Europe (Germany, etc.)</option>
                              <option>Not sure yet</option>
                            </select>
                          </div>

                          <div>
                            <label className="mb-1 block text-xs font-medium text-slate-700">
                              When do you want to start?
                            </label>
                            <select
                              name="intake"
                              defaultValue=""
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                            >
                              <option value="" disabled>
                                Select intake
                              </option>
                              <option>Jan / Feb 2026</option>
                              <option>May / Jun 2026</option>
                              <option>Sep / Oct 2026</option>
                              <option>2027 or later</option>
                              <option>Not sure</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="mb-1 block text-xs font-medium text-slate-700">
                            What do you want to study?
                          </label>
                          <input
                            name="courseInterest"
                            placeholder="Eg. Computer Science, Business, Nursing"
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                          />
                        </div>

                        <div>
                          <label className="mb-1 block text-xs font-medium text-slate-700">
                            Budget per year (tuition + living)
                          </label>
                          <select
                            name="budget"
                            defaultValue=""
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                          >
                            <option value="" disabled>
                              Choose a range
                            </option>
                            <option>Under £12,000</option>
                            <option>£12,000 – £18,000</option>
                            <option>£18,000 – £25,000</option>
                            <option>More than £25,000</option>
                            <option>Not sure / depends on scholarship</option>
                          </select>
                        </div>
                      </>
                    )}

                    {step === 4 && (
                      <>
                        <div>
                          <label className="mb-1 block text-xs font-medium text-slate-700">
                            Anything else we should know?
                          </label>
                          <textarea
                            name="extraInfo"
                            rows={4}
                            placeholder="Eg. gap years, visa history, work experience, special requirements..."
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#041744] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
                          />
                        </div>

                        <div className="flex items-start gap-2 rounded-2xl bg-slate-50 px-4 py-3">
                          <input
                            id="consent"
                            type="checkbox"
                            required
                            className="mt-1 h-4 w-4 rounded border-slate-300 text-[#041744] focus:ring-[#facc15]"
                          />
                          <label
                            htmlFor="consent"
                            className="text-xs text-slate-600 sm:text-[13px]"
                          >
                            I agree that Student Choice Education may contact me
                            by email, phone or WhatsApp with eligibility
                            results, study options and related services. I
                            understand my details will not be sold to third
                            parties.
                          </label>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* ACTION BUTTONS */}
                <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-2">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                      >
                        Back
                      </button>
                    )}

                    {step < 4 && (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center justify-center rounded-xl bg-[#041744] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md hover:bg-[#020b2c]"
                      >
                        Next step
                      </button>
                    )}

                    {step === 4 && (
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-xl bg-[#facc15] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-md shadow-[#facc15]/50 hover:bg-[#eab308]"
                      >
                        Get my eligibility result
                      </button>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-500">
                    This assessment is{" "}
                    <span className="font-semibold">100% free</span> and does
                    not affect your visa or credit score.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
