"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  XCircle,
  BookOpen,
  FileText,
} from "lucide-react";

// --- TYPES ---
type Guide = {
  key: string;
  title: string;
  badge: string;
  img: string;
  text: string;
  fileUrl: string;
};

type ToastType = "success" | "error" | "info";

// --- DATA ---
const guides: Guide[] = [
  {
    key: "agent-guide",
    title: "Guide to Choosing an Agent",
    badge: "Official SCE Guide",
    img: "/home/guidebook.png",
    text: "Ensure you choose a high-quality agent with our official checklist. Includes critical questions on fees, ethics, and British Council certification.",
    fileUrl: "/downloads/choosing-an-agent.pdf",
  },
];

// --- COMPONENT: TOAST ---
const Toast = ({
  message,
  type,
  isVisible,
}: {
  message: string;
  type: ToastType;
  isVisible: boolean;
}) => {
  if (!isVisible) return null;
  const styles = {
    success: "bg-emerald-50 text-emerald-900 border-emerald-200",
    error: "bg-red-50 text-red-900 border-red-200",
    info: "bg-blue-50 text-blue-900 border-blue-200",
  };
  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
    error: <XCircle className="w-4 h-4 text-red-600" />,
    info: <ShieldCheck className="w-4 h-4 text-blue-600" />,
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg border shadow-lg transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} ${styles[type]}`}
    >
      {icons[type]}
      <span className="text-xs font-bold">{message}</span>
    </div>
  );
};

// --- COMPONENT: GUIDE CARD (TALLER VERSION) ---
const GuideCard = ({
  guide,
  showToast,
}: {
  guide: Guide;
  showToast: (msg: string, type: ToastType) => void;
}) => {
  const [status, setStatus] = useState<
    "idle" | "verifying" | "downloading" | "success"
  >("idle");

  const handleSecureDownload = async () => {
    if (status !== "idle") return;
    setStatus("verifying");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("downloading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const link = document.createElement("a");
      link.href = guide.fileUrl;
      link.setAttribute("download", `${guide.title}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setStatus("success");
      showToast("Download started.", "success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("idle");
      showToast("Download failed.", "error");
    }
  };

  return (
    // Added min-h-[400px] to force the card to be taller
    <div className="group relative bg-[#03143D] text-white rounded-2xl w-full max-w-[320px] min-h-[400px] p-5 flex flex-col items-center text-center mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/10 overflow-hidden">
      {/* Image Area: Increased height to h-[160px].
         This is the "Sweet Spot" - tall enough to see faces, short enough to stay compact.
      */}
      <div className="relative w-full h-[160px] rounded-xl overflow-hidden mb-5 shadow-lg z-10 bg-slate-800">
        <div className="absolute top-2.5 left-2.5 z-20 backdrop-blur-md bg-white/95 px-2.5 py-1 rounded-md shadow-sm border border-white/50 flex items-center gap-1.5">
          <BookOpen className="w-3 h-3 text-[#03143D]" />
          <span className="text-[#03143D] text-[9px] font-extrabold uppercase tracking-widest">
            {guide.badge}
          </span>
        </div>
        <Image
          src={guide.img}
          alt={guide.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content - Flex grow pushes the button to the bottom if text is short */}
      <div className="relative z-10 flex flex-col flex-grow w-full">
        <h3 className="text-[17px] font-bold text-white leading-tight mb-3">
          {guide.title}
        </h3>

        <p className="text-[13px] text-slate-300 leading-relaxed mb-6 font-light flex-grow">
          {guide.text}
        </p>

        {/* Button */}
        <button
          onClick={handleSecureDownload}
          disabled={status !== "idle"}
          className={`
            relative w-full overflow-hidden rounded-lg py-3 px-4 mt-auto
            text-[10px] font-bold uppercase tracking-widest transition-all duration-300
            flex items-center justify-center gap-2 shadow-md
            ${
              status === "success"
                ? "bg-emerald-500 text-white cursor-default"
                : "bg-white text-[#03143D] hover:bg-yellow-400 hover:text-[#020B2C]"
            }
          `}
        >
          {status === "idle" && (
            <>
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </>
          )}
          {status === "verifying" && (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          )}
          {status === "downloading" && (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          )}
          {status === "success" && <CheckCircle2 className="w-3.5 h-3.5" />}
        </button>

        {/* Footer Link */}
        <div className="mt-4 flex items-center justify-center gap-1.5 opacity-40 group-hover:opacity-80 transition-opacity">
          <ShieldCheck className="w-3 h-3" />
          <span className="text-[9px] uppercase tracking-widest">
            Official SCE Resource
          </span>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: COMING SOON (Matched Height) ---
const ComingSoonCard = () => {
  return (
    <div className="group relative border border-dashed border-slate-300 bg-slate-50 rounded-2xl w-full max-w-[320px] min-h-[400px] p-5 flex flex-col items-center justify-center text-center mx-auto hover:bg-white hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
        <FileText className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
      </div>
      <h3 className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-2">
        In Production
      </h3>
      <p className="text-[12px] text-slate-400 px-2 leading-relaxed">
        Guides on <strong className="text-slate-600">Visa Applications</strong>{" "}
        & <strong className="text-slate-600">Uni Selection</strong> coming soon.
      </p>
    </div>
  );
};

// --- MAIN SECTION ---
const GuidesSection = () => {
  const [toast, setToast] = useState<{
    msg: string;
    type: ToastType;
    visible: boolean;
  }>({
    msg: "",
    type: "info",
    visible: false,
  });

  const triggerToast = (msg: string, type: ToastType) => {
    setToast({ msg, type, visible: true });
    setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 4000);
  };

  return (
    <section className="relative bg-white overflow-hidden py-16 border-t border-slate-100">
      <Toast message={toast.msg} type={toast.type} isVisible={toast.visible} />

      <div className="relative z-10 w-full mx-auto max-w-6xl px-4 text-center">
        {/* HEADER SECTION */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-3">
            <span className="py-1 px-3 rounded-full border border-[#03143D]/10 bg-slate-50 text-[#03143D] text-[9px] font-bold uppercase tracking-[0.15em]">
              Student Choice Education
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-[#020B2C] tracking-tight leading-tight">
            Your Essential Guide to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#03143D] to-[#2563EB]">
              Studying in the UK
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-sm text-slate-500 leading-relaxed font-light">
            Discover key insights, helpful tips, and all the information you
            need to pursue your education in the UK.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {guides.map((guide) => (
            <GuideCard key={guide.key} guide={guide} showToast={triggerToast} />
          ))}
          <ComingSoonCard />
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
