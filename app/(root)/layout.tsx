"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#f4f6fb] text-slate-900">
      <Navbar />
      <main className="flex-1 pt-14 lg:pt-[5.5rem]">{children}</main>
      <Footer />
    </div>
  );
}
