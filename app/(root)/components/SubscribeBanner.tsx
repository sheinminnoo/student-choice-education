"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

type ToastType = "success" | "error" | "info";

type Props = {
  onSubscribe: (msg: string, type: ToastType) => void;
};

export default function SubscribeBanner({ onSubscribe }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      onSubscribe("Please enter a valid email.", "error");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "Footer Newsletter" }),
      });

      if (res.ok) {
        setSubscribed(true);
        onSubscribe("You've been subscribed successfully!", "success");
        setEmail("");
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      onSubscribe("Something went wrong. Try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div className="mt-12 w-full max-w-4xl mx-auto bg-[#03143D] rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
            <CheckCircle2 className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white">
            Welcome to the community!
          </h3>
          <p className="text-slate-300 text-sm max-w-md">
            Thanks for subscribing. We&apos;ll send the latest scholarship updates
            and guides straight to your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 w-full max-w-4xl mx-auto relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl transform rotate-1 opacity-20 blur-xl"></div>

      <div className="relative bg-[#020B2C] rounded-2xl p-8 md:p-10 border border-white/10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Mail className="w-48 h-48 text-white" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Stay Updated
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Don&apos;t miss new scholarship alerts
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Join 500+ students receiving our weekly digest on UK university
              admissions, visa tips, and exclusive guides.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-72 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3.5 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#020B2C] font-bold text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Subscribe Free <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
