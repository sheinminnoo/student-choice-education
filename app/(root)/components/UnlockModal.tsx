"use client";

import { useState, FormEvent } from "react";
import { Loader2, Download, Lock, Mail, X, CheckSquare } from "lucide-react";

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
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Double check validation (even though button is disabled)
    if (!marketingConsent) {
      setError("Please agree to the newsletter to unlock the guide.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: `Download: ${guideTitle}`,
          marketingConsent,
        }),
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
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 z-50 p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-[#03143D] p-6 text-center relative overflow-hidden">
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
            Enter your email below to unlock <strong>{guideTitle}</strong>.
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

            {/* --- MANDATORY CHECKBOX --- */}
            {/* Added a red border if user tries to submit without checking? (Optional, but kept simple here) */}
            <div
              className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                !marketingConsent
                  ? "bg-amber-50 border-amber-200"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex h-5 items-center">
                <input
                  id="marketing-consent"
                  type="checkbox"
                  required // HTML5 validation
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
              </div>
              <label
                htmlFor="marketing-consent"
                className="text-xs text-slate-700 leading-tight cursor-pointer select-none"
              >
                <span className="font-semibold text-slate-900">Required:</span>{" "}
                I agree to join the community and receive study tips to unlock
                this guide.
              </label>
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 p-2 rounded-lg font-medium text-center">
                {error}
              </p>
            )}

            {/* --- BUTTON DISABLED UNTIL CHECKED --- */}
            <button
              type="submit"
              disabled={loading || !marketingConsent}
              className="w-full py-3.5 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#020B2C] font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Unlocking...</span>
                </>
              ) : (
                <>
                  {/* Change text based on state to guide user */}
                  <span>
                    {!marketingConsent
                      ? "Agree above to Unlock"
                      : "Unlock & Download"}
                  </span>
                  {!marketingConsent ? (
                    <Lock className="w-3 h-3 opacity-50" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                </>
              )}
            </button>
          </form>

          <p className="text-[10px] text-slate-400 text-center mt-4">
            By unlocking, you agree to our{" "}
            <a href="/privacy" className="underline hover:text-slate-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
