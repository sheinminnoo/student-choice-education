"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitEligibility } from "@/app/actions";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";

// --- DYNAMIC DATA CONFIGURATION ---

const STEPS = [
  {
    id: "level",
    title: "Current Education",
    question: "What is your highest qualification so far?",
  },
  {
    id: "grades",
    title: "Academic Score",
    question: "Select your approximate final grade.",
  },
  {
    id: "english",
    title: "English Proficiency",
    question: "Do you have an IELTS or TOEFL score?",
  },
  {
    id: "preferences",
    title: "Study Plans",
    question: "Where and what do you want to study?",
  },
  {
    id: "contact",
    title: "Get Your Results",
    question: "Where should we send your report?",
  },
];

const GRADE_OPTIONS: Record<string, string[]> = {
  "High School": [
    "A-Levels (A*AA - ABB)",
    "A-Levels (BBB - CCC)",
    "IB Diploma (30+ Points)",
    "IB Diploma (< 30 Points)",
    "American High School (GPA 3.0+)",
    "CBSE / ICSE (75%+)",
    "Other / Not Listed",
  ],
  "Bachelor Degree": [
    "UK 1st Class Honours",
    "UK 2:1 Honours",
    "UK 2:2 Honours",
    "GPA 3.5 - 4.0",
    "GPA 3.0 - 3.49",
    "GPA 2.5 - 2.99",
    "Other",
  ],
  "Master Degree": [
    "Distinction / High Merit",
    "Pass / Merit",
    "GPA 3.0+",
    "Other",
  ],
  Diploma: ["Distinction", "Merit", "Pass", "Other"],
};

const DEFAULT_GRADES = [
  "Top Tier (High Grades)",
  "Middle Tier (Average)",
  "Lower Tier",
  "Other",
];

export default function EligibilityWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    educationLevel: "",
    grades: "",
    englishLevel: "",
    destination: "",
    subject: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelection = (field: string, value: string) => {
    if (field === "educationLevel") {
      setFormData((prev) => ({ ...prev, [field]: value, grades: "" }));
    } else {
      updateField(field, value);
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 0:
        return !!formData.educationLevel;
      case 1:
        return !!formData.grades;
      case 2:
        return !!formData.englishLevel;
      case 3:
        return !!formData.destination && !!formData.subject;
      case 4:
        return (
          !!formData.fullName.trim() &&
          formData.email.includes("@") &&
          formData.phone.length > 8
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!isStepComplete()) return;
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));

    const result = await submitEligibility(
      { success: false, message: "" },
      data,
    );
    if (result.success) {
      setIsSuccess(true);
    }
    setIsSubmitting(false);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition-all focus:bg-white focus:border-[#020b2c] focus:ring-4 focus:ring-[#020b2c]/10";

  const getDynamicGradeOptions = () => {
    const level = formData.educationLevel;
    if (level.includes("High School")) return GRADE_OPTIONS["High School"];
    if (level.includes("Bachelor")) return GRADE_OPTIONS["Bachelor Degree"];
    if (level.includes("Master")) return GRADE_OPTIONS["Master Degree"];
    if (level.includes("Diploma")) return GRADE_OPTIONS["Diploma"];
    return DEFAULT_GRADES;
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-xl mx-auto rounded-3xl bg-white p-10 text-center shadow-xl border border-slate-200">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 shadow-sm animate-in zoom-in duration-300">
          <span className="text-5xl">🎉</span>
        </div>
        <h3 className="text-3xl font-bold text-slate-900">
          Assessment Complete
        </h3>
        <div className="mt-6 space-y-4 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <p className="text-slate-700 leading-relaxed">
            Based on your profile, you have strong potential for universities in{" "}
            <strong className="text-[#020b2c]">{formData.destination}</strong>.
          </p>
          <hr className="border-slate-200" />
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Next Steps
            </p>
            <p className="text-sm text-slate-600">
              We have emailed this report to <strong>{formData.email}</strong>.
              Our team will review your details and contact you via WhatsApp
              shortly.
            </p>
            <p className="text-sm text-slate-600 mt-2">
              <span className="text-yellow-600 font-semibold">💡 Tip:</span>{" "}
              Please have a photo or PDF of your transcripts ready for when our
              counsellor contacts you.
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-8 inline-block w-full rounded-xl bg-[#facc15] py-4 text-sm font-bold text-slate-900 shadow-md transition hover:bg-[#eab308] hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
          <span>Step {currentStep + 1} / 5</span>
          <span>{Math.round(((currentStep + 1) / 5) * 100)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <motion.div
            className="h-full bg-[#facc15]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / 5) * 100}%` }}
            transition={{ duration: 0.5, ease: "circOut" }}
          />
        </div>
      </div>

      {/* DESIGN FIX: Added 'border border-slate-200' and 'shadow-xl' 
         so the white card stands out against the white/dot background.
      */}
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-200 min-h-[480px] flex flex-col">
        <div className="p-8 md:p-10 flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {STEPS[currentStep].title}
              </h3>
              <p className="text-slate-500 mb-8 font-medium">
                {STEPS[currentStep].question}
              </p>

              {/* STEP 1: EDUCATION LEVEL */}
              {currentStep === 0 && (
                <div className="space-y-3">
                  {[
                    "High School (Year 12/13/GED)",
                    "Bachelor Degree",
                    "Master Degree",
                    "Diploma / Other",
                  ].map((level) => (
                    <button
                      key={level}
                      onClick={() => handleSelection("educationLevel", level)}
                      className={`group w-full rounded-2xl border-2 px-6 py-4 text-left text-sm font-semibold transition-all duration-200 
                        ${
                          formData.educationLevel === level
                            ? "border-[#020b2c] bg-[#020b2c] text-white shadow-lg scale-[1.02]"
                            : "border-slate-100 bg-slate-50 text-slate-600 hover:border-[#020b2c]/30 hover:bg-white hover:shadow-md"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        {level}
                        {formData.educationLevel === level && <span>✓</span>}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 2: GRADES */}
              {currentStep === 1 && (
                <div className="space-y-3">
                  {getDynamicGradeOptions().map((gradeOption) => (
                    <button
                      key={gradeOption}
                      onClick={() => handleSelection("grades", gradeOption)}
                      className={`group w-full rounded-2xl border-2 px-6 py-4 text-left text-sm font-semibold transition-all duration-200 
                        ${
                          formData.grades === gradeOption
                            ? "border-[#020b2c] bg-[#020b2c] text-white shadow-lg scale-[1.02]"
                            : "border-slate-100 bg-slate-50 text-slate-600 hover:border-[#020b2c]/30 hover:bg-white hover:shadow-md"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        {gradeOption}
                        {formData.grades === gradeOption && <span>✓</span>}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 3: ENGLISH */}
              {currentStep === 2 && (
                <div className="space-y-3">
                  {[
                    "Native Speaker",
                    "IELTS 6.5+ / TOEFL 90+",
                    "IELTS 6.0",
                    "IELTS 5.5 or lower",
                    "Not taken yet",
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelection("englishLevel", opt)}
                      className={`group w-full rounded-2xl border-2 px-6 py-4 text-left text-sm font-semibold transition-all duration-200 
                        ${
                          formData.englishLevel === opt
                            ? "border-[#020b2c] bg-[#020b2c] text-white shadow-lg scale-[1.02]"
                            : "border-slate-100 bg-slate-50 text-slate-600 hover:border-[#020b2c]/30 hover:bg-white hover:shadow-md"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        {opt}
                        {formData.englishLevel === opt && <span>✓</span>}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 4: PREFERENCES */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Destination
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["UK", "USA", "Canada", "Australia"].map((dest) => (
                        <button
                          key={dest}
                          onClick={() => handleSelection("destination", dest)}
                          className={`rounded-xl border-2 px-4 py-4 text-sm font-bold transition-all duration-200
                            ${
                              formData.destination === dest
                                ? "border-[#020b2c] bg-[#020b2c] text-white shadow-md"
                                : "border-slate-100 bg-slate-50 text-slate-600 hover:bg-white hover:border-slate-300"
                            }`}
                        >
                          {dest}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Subject Interest
                    </label>
                    <select
                      className={`${inputClass} cursor-pointer`}
                      value={formData.subject}
                      onChange={(e) => updateField("subject", e.target.value)}
                    >
                      <option value="" disabled>
                        Select a subject...
                      </option>
                      <option value="Business & Management">
                        Business & Management
                      </option>
                      <option value="Engineering">Engineering</option>
                      <option value="Computer Science">
                        Computer Science / IT
                      </option>
                      <option value="Health & Medicine">
                        Health & Medicine
                      </option>
                      <option value="Arts & Design">Arts & Design</option>
                      <option value="Law">Law</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 5: CONTACT */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={inputClass}
                    />
                    <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#020b2c]/10 focus-within:border-[#020b2c] transition-all [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:bg-transparent">
                      <PhoneInput
                        international
                        defaultCountry="GB"
                        value={formData.phone}
                        onChange={(val) => updateField("phone", val || "")}
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 text-center leading-relaxed px-4">
                    By clicking &quot;Check Eligibility&quot;, you agree to our{" "}
                    <Link
                      href="/privacy"
                      className="underline hover:text-slate-600"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FOOTER */}
        <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`text-sm font-bold text-slate-500 hover:text-slate-800 disabled:opacity-0 transition-all px-4 py-2`}
          >
            ← Back
          </button>
          {currentStep === STEPS.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !isStepComplete()}
              className="rounded-xl bg-[#facc15] px-8 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-yellow-400/20 hover:bg-[#eab308] hover:shadow-yellow-400/40 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5"
            >
              {isSubmitting ? "Analyzing..." : "Get Results"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className="rounded-xl bg-[#020b2c] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 hover:bg-[#0f1b45] hover:shadow-blue-900/40 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transition-all transform hover:-translate-y-0.5"
            >
              Next Step →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
