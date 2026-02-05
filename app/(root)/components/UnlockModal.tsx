"use client";

import { useState, FormEvent } from "react";
import { Loader2, Download, Lock, Mail, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
  guideTitle: string;
};

export default function UnlockModal({
  isOpen,
  onClose,
  onSuccess,
  guideTitle,
}: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Send to API
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `Download: ${guideTitle}` }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      onSuccess(email);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* --- CLOSE BUTTON FIXED --- */}
        {/* z-50 ensures it is clickable. Text-white ensures visibility on dark header. */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 z-50 p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-[#03143D] p-6 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>

          <div className="relative z-10 flex justify-center mb-3">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
              <Lock className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white relative z-10">
            Unlock Your Free Guide
          </h3>
          <p className="text-blue-200 text-xs mt-1 relative z-10 max-w-[250px] mx-auto">
            Enter your email to join our community and download{" "}
            <strong>{guideTitle}</strong> instantly.
          </p>
        </div>

        {/* Form */}
        <div className="p-6 pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 p-2 rounded-lg font-medium text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#020B2C] font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Unlocking...</span>
                </>
              ) : (
                <>
                  <span>Unlock & Download</span>
                  <Download className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-[10px] text-slate-400 text-center mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </div>
  );
}
