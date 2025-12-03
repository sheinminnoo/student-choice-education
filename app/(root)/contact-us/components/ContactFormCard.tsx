import React from "react";

export default function ContactFormCard() {
  return (
    <div className="w-full rounded-2xl border border-white/15 bg-white/98 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.45)] sm:rounded-3xl sm:p-7 lg:w-[52%] lg:p-8">
      <h1 className="mb-2 text-center text-2xl font-semibold text-slate-900">
        Talk to our admissions team
      </h1>
      <p className="mb-6 text-center text-sm text-slate-500">
        Fill in the form and we&apos;ll get back to you with personalised
        advice.
      </p>

      <form action="" method="POST" className="flex flex-col gap-4">
        <input type="hidden" name="oid" value="00D24000000YRPu" />

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone (with country code)"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
        />

        <select
          name="00N2400000EtJeo"
          defaultValue=""
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
        >
          <option value="" disabled>
            Preferred start year
          </option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
        </select>

        <select
          name="00N2400000Istrh"
          defaultValue=""
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
        >
          <option value="" disabled>
            Study level
          </option>
          <option>Foundation / Pathway</option>
          <option>Undergraduate</option>
          <option>Postgraduate</option>
        </select>

        <select
          name="00N2400000Istrm"
          defaultValue=""
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
        >
          <option value="" disabled>
            Target study destination
          </option>
          <option>United Kingdom (UK)</option>
          <option>United States (USA)</option>
          <option>Germany</option>
          <option>Denmark</option>
          <option>Other</option>
        </select>

        <textarea
          name="00N2400000EB8hh"
          placeholder="Tell us about your background and what you want to study."
          className="w-full min-h-[110px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#020b2c] focus:outline-none focus:ring-2 focus:ring-[#facc15]/60"
        />

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#facc15] px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-[#facc15]/40 transition-transform duration-150 hover:-translate-y-[2px] hover:bg-[#eab308] focus:outline-none focus:ring-2 focus:ring-[#facc15]/70 focus:ring-offset-2 focus:ring-offset-white"
        >
          Get your free consultation
        </button>

        <p className="mt-2 text-center text-[11px] text-slate-400">
          By submitting this form, you agree that we may contact you about study
          options and related services.
        </p>
      </form>
    </div>
  );
}
