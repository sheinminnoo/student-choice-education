"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_NAME = "sce_cookie_consent";

type ConsentValue = "accepted" | "essential";

function readConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`)
  );
  if (!match) return null;
  const value = decodeURIComponent(match[1]);
  if (value === "accepted" || value === "essential") return value;
  return null;
}

function setConsent(value: ConsentValue) {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    value
  )}; Max-Age=${maxAge}; Path=/; SameSite=Lax; Secure`;
}

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(() => {
    const consent = readConsent();
    return !consent;
  });

  useEffect(() => {
    // Effect cleanup or other side effects can go here
  }, []);

  const handleConsent = (value: ConsentValue) => {
    setConsent(value);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8">
      <div className="pointer-events-auto flex-1 max-w-3xl rounded-2xl border border-slate-800/70 bg-slate-950/95 px-4 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.85)] backdrop-blur-md sm:px-5 sm:py-4">
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
              us understand how students use our site. You can learn more in our{" "}
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
