"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "sce_cookie_consent"; // Student Choice Education

type ConsentValue = "accepted" | "essential";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = window.localStorage.getItem(STORAGE_KEY);
    if (!existing) {
      // This is the line ESLint complains about.
      // It's safe here because we're just syncing from localStorage once.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    setIsVisible(false);
    // hook for analytics later if needed
  };

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8">
      <div className="pointer-events-auto max-w-3xl flex-1 rounded-2xl border border-slate-800/70 bg-slate-950/95 px-4 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.85)] backdrop-blur-md sm:px-5 sm:py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-[0.18em] text-yellow-300/90 uppercase">
              Cookies & Privacy
            </p>
            <p className="text-sm font-medium text-slate-50">
              We use cookies to run our website and improve your experience.
            </p>
            <p className="text-xs text-slate-300">
              Essential cookies are always on. Optional analytics cookies help
              us understand how students use our site. You can change your
              choice at any time in our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-yellow-300 underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-2 sm:pt-0 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => handleConsent("essential")}
              className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 shadow-sm transition hover:border-slate-400 hover:bg-slate-800"
            >
              Only essential cookies
            </button>
            <button
              type="button"
              onClick={() => handleConsent("accepted")}
              className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold text-slate-900 shadow-md transition hover:bg-yellow-300"
            >
              Accept all cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
