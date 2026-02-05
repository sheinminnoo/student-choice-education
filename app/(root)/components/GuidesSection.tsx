"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  FileText,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Lock,
} from "lucide-react";
import UnlockModal from "./UnlockModal";
import SubscribeBanner from "./SubscribeBanner";

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

// --- TOAST COMPONENT ---
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
      className={`fixed top-4 right-4 z-[110] flex items-center gap-2 px-4 py-3 rounded-lg border shadow-lg transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} ${styles[type]}`}
    >
      {icons[type]}
      <span className="text-xs font-bold">{message}</span>
    </div>
  );
};

// --- GUIDE CARD ---
const GuideCard = ({
  guide,
  onDownloadClick,
}: {
  guide: Guide;
  onDownloadClick: (guide: Guide) => void;
}) => {
  return (
    <div className="group relative bg-[#03143D] text-white rounded-2xl w-full max-w-[320px] min-h-[400px] p-5 flex flex-col items-center text-center mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/10 overflow-hidden">
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
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full">
            <Lock className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow w-full">
        <h3 className="text-[17px] font-bold text-white leading-tight mb-3">
          {guide.title}
        </h3>
        <p className="text-[13px] text-slate-300 leading-relaxed mb-6 font-light flex-grow">
          {guide.text}
        </p>
        <button
          onClick={() => onDownloadClick(guide)}
          className="relative w-full overflow-hidden rounded-lg py-3 px-4 mt-auto text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-md bg-white text-[#03143D] hover:bg-yellow-400 hover:text-[#020B2C]"
        >
          <Lock className="w-3 h-3" />
          <span>Download Guide</span>
        </button>
      </div>
    </div>
  );
};

// --- COMING SOON ---
const ComingSoonCard = () => (
  <div className="group relative border border-dashed border-slate-300 bg-slate-50 rounded-2xl w-full max-w-[320px] min-h-[400px] p-5 flex flex-col items-center justify-center text-center mx-auto hover:bg-white hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
      <FileText className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
    </div>
    <h3 className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-2">
      In Production
    </h3>
    <p className="text-[12px] text-slate-400 px-2 leading-relaxed">
      Guides on <strong className="text-slate-600">Visa Applications</strong> &{" "}
      <strong className="text-slate-600">Uni Selection</strong> coming soon.
    </p>
  </div>
);

// --- MAIN SECTION ---
const GuidesSection = () => {
  const [toast, setToast] = useState<{
    msg: string;
    type: ToastType;
    visible: boolean;
  }>({ msg: "", type: "info", visible: false });
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const triggerToast = (msg: string, type: ToastType) => {
    setToast({ msg, type, visible: true });
    setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 4000);
  };

  const handleUnlockSuccess = (email: string) => {
    if (!selectedGuide) return;
    const guideToDownload = selectedGuide;
    setSelectedGuide(null);
    triggerToast("Success! Downloading file...", "success");

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = guideToDownload.fileUrl;
      link.setAttribute("download", `${guideToDownload.title}.pdf`);
      document.body.appendChild(link);
      link.addEventListener("click", (e) => e.stopPropagation()); // Prevents yellow loading bar
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <section className="relative bg-white overflow-hidden py-16 border-t border-slate-100">
      <Toast message={toast.msg} type={toast.type} isVisible={toast.visible} />

      <UnlockModal
        isOpen={!!selectedGuide}
        onClose={() => setSelectedGuide(null)}
        onSuccess={handleUnlockSuccess}
        guideTitle={selectedGuide?.title || ""}
      />

      <div className="relative z-10 w-full mx-auto max-w-6xl px-4 text-center">
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

        <div className="flex flex-wrap justify-center gap-6">
          {guides.map((guide) => (
            <GuideCard
              key={guide.key}
              guide={guide}
              onDownloadClick={setSelectedGuide}
            />
          ))}
          <ComingSoonCard />
        </div>
        {/*         <SubscribeBanner onSubscribe={triggerToast} />
         */}
      </div>
    </section>
  );
};

export default GuidesSection;
