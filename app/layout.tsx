import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsentBanner from "./components/CookieConsentBanner";
import NextTopLoader from "nextjs-toploader";
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
        <NextTopLoader
          color="#facc15" // Your yellow brand color
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false} // Keep it clean (no spinning circle)
          easing="ease"
          speed={200}
          shadow="0 0 10px #facc15,0 0 5px #facc15"
        />
        {children}
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
