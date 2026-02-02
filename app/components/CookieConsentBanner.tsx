"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "sce_cookie_consent";

type ConsentState = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  hasResponded: boolean;
};

const defaultConsent: ConsentState = {
  essential: true,
  analytics: false,
  marketing: false,
  hasResponded: false,
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, string | boolean>,
    ) => void;
  }
}

// Helper function to get initial consent state
const getInitialConsent = (): ConsentState => {
  if (typeof window === "undefined") return defaultConsent;

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return defaultConsent;
    }
  }
  return defaultConsent;
};

// Helper to update Google consent
const updateGoogleConsent = (consent: ConsentState) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.marketing ? "granted" : "denied",
      ad_user_data: consent.marketing ? "granted" : "denied",
      ad_personalization: consent.marketing ? "granted" : "denied",
    });
  }
};

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(getInitialConsent);

  // Apply saved consent on mount and show banner if needed
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const savedConsent = JSON.parse(saved);
        // Apply saved consent to Google Analytics
        updateGoogleConsent(savedConsent);
      } catch (error) {
        console.error("Error parsing saved consent:", error);
      }
    } else {
      // No saved consent, show banner immediately
      setTimeout(() => setShowBanner(true), 0);
    }
  }, []);

  // Save consent and update Google Analytics
  const saveConsent = (newConsent: ConsentState) => {
    const finalState = { ...newConsent, hasResponded: true };
    setConsent(finalState);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(finalState));
    setShowBanner(false);
    setShowPreferences(false);

    // Update Google Analytics consent
    updateGoogleConsent(finalState);

    // Optional: Log for debugging
    console.log("Cookie consent updated:", {
      analytics: finalState.analytics ? "granted" : "denied",
      marketing: finalState.marketing ? "granted" : "denied",
    });
  };

  const acceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      hasResponded: true,
    });
  };

  const rejectOptional = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
      hasResponded: true,
    });
  };

  const savePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    saveConsent(consent);
  };

  const toggleCategory = (category: keyof ConsentState) => {
    if (category === "essential") return;
    setConsent((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  return (
    <>
      {/* --- FLOATING RE-OPEN BUTTON (Visible when banner is closed) --- */}
      {!showBanner && !showPreferences && (
        <button
          onClick={openPreferences}
          className="fixed bottom-4 left-4 z-40 rounded-full bg-white/10 p-2 text-slate-400 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
          title="Cookie Preferences"
          aria-label="Open Cookie Preferences"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
          </svg>
        </button>
      )}

      <AnimatePresence>
        {/* --- MAIN BANNER (FULL WIDTH) --- */}
        {showBanner && (
          <motion.div
            key="cookie-banner"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed inset-x-0 bottom-0 z-50"
          >
            <div className="w-full border-t border-slate-800 bg-[#020b2c]/95 px-6 py-5 shadow-2xl backdrop-blur-md sm:px-8">
              <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2 text-sm text-slate-300 md:max-w-2xl">
                  <h3 className="text-base font-bold text-white">
                    We value your privacy 🍪
                  </h3>
                  <p>
                    We use cookies to enhance your browsing experience, serve
                    personalized content, and analyze our traffic. By clicking
                    &quot;Accept All&quot;, you consent to our use of cookies.
                  </p>
                  <div className="flex gap-4 text-xs font-medium text-slate-400">
                    <Link
                      href="/privacy"
                      className="hover:text-yellow-400 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms"
                      className="hover:text-yellow-400 hover:underline"
                    >
                      Terms of Service
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-shrink-0">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    Customize
                  </button>
                  <button
                    onClick={rejectOptional}
                    className="rounded-lg border border-slate-700 bg-transparent px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={acceptAll}
                    className="rounded-lg bg-yellow-400 px-6 py-2.5 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-yellow-300"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- PREFERENCES MODAL --- */}
        {showPreferences && (
          <motion.div
            key="preferences-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setShowPreferences(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-b border-slate-100 bg-slate-50 px-6 py-4 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-slate-400 hover:text-slate-600 transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-sm text-slate-600">
                  Manage your consent preferences for cookies on Student Choice
                  Education.
                </p>

                {/* Essential (Locked) */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">Essential</p>
                    <p className="text-xs text-slate-500">
                      Required for the website to function.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="h-5 w-5 accent-slate-900 opacity-50"
                    aria-label="Essential cookies (always enabled)"
                  />
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">Analytics</p>
                    <p className="text-xs text-slate-500">
                      Help us improve our website by collecting anonymous usage
                      data.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={() => toggleCategory("analytics")}
                    className="h-5 w-5 accent-yellow-400 cursor-pointer"
                    aria-label="Analytics cookies"
                  />
                </div>

                {/* Marketing */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">Marketing</p>
                    <p className="text-xs text-slate-500">
                      Used to show you relevant ads on other platforms.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={() => toggleCategory("marketing")}
                    className="h-5 w-5 accent-yellow-400 cursor-pointer"
                    aria-label="Marketing cookies"
                  />
                </div>
              </div>

              <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex justify-end gap-3">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={savePreferences}
                  className="rounded-lg bg-slate-900 px-6 py-2 text-sm font-bold text-white hover:bg-slate-800 transition"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
