import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsentBanner from "./components/CookieConsentBanner";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Student Choice Education",
  description: "Empowering Students Worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased bg-[#020b1b]">
        {children}
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
