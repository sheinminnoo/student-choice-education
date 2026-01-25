"use client";

import { useState } from "react";
import {
  FileDown,
  BookOpen,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  XCircle,
} from "lucide-react";

// --- TYPES ---
type ToastType = "success" | "error" | "info";

// --- INTERNAL COMPONENT: TOAST ---
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
      className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg border shadow-lg transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
      } ${styles[type]}`}
    >
      {icons[type]}
      <span className="text-xs font-bold">{message}</span>
    </div>
  );
};

export default function ServicesGuide() {
  // --- STATE MANAGEMENT ---
  const [status, setStatus] = useState<
    "idle" | "verifying" | "downloading" | "success"
  >("idle");

  const [toast, setToast] = useState<{
    msg: string;
    type: ToastType;
    visible: boolean;
  }>({
    msg: "",
    type: "info",
    visible: false,
  });

  // --- HELPER FUNCTIONS ---
  const triggerToast = (msg: string, type: ToastType) => {
    setToast({ msg, type, visible: true });
    setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 4000);
  };

  const handleSecureDownload = async () => {
    if (status !== "idle") return;

    // 1. Verify Phase
    setStatus("verifying");
    // Simulate security check
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 2. Download Phase
    setStatus("downloading");
    try {
      // Simulate file preparation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 3. Trigger Download
      const link = document.createElement("a");
      link.href = "/downloads/choosing-an-agent.pdf"; // Your specific file
      link.setAttribute("download", "Student-Guide-Choosing-Agent.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 4. Success Phase
      setStatus("success");
      triggerToast("Download started successfully.", "success");

      // Reset after a delay
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("idle");
      triggerToast("Download failed. Please try again.", "error");
    }
  };

  return (
    <section className="py-12 bg-white border-t border-slate-100 relative">
      {/* Toast Notification Container */}
      <Toast message={toast.msg} type={toast.type} isVisible={toast.visible} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#F5C20B] p-8 sm:p-10 lg:p-12">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(#020b2c 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div className="relative z-10 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 mb-4 border border-white/20">
                <BookOpen className="h-3.5 w-3.5 text-[#020b2c]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#020b2c]">
                  Free Resource
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#020b2c] mb-3">
                Student Guide to Choosing an Education Agent
              </h2>
              <p className="text-base font-medium text-[#020b2c]/80 mb-6 max-w-xl leading-relaxed">
                Not sure where to start? Download our essential guide to
                understand what to look for in an agent and how to ensure
                you&apos;re getting the best support.
              </p>

              {/* DYNAMIC DOWNLOAD BUTTON */}
              <button
                onClick={handleSecureDownload}
                disabled={status !== "idle"}
                className={`
                  group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-xl transition-all 
                  ${
                    status === "success"
                      ? "bg-emerald-600 text-white scale-100 cursor-default"
                      : "bg-[#020b2c] text-white hover:scale-105 hover:bg-[#020b2c]/90"
                  }
                `}
              >
                {/* IDLE STATE */}
                {status === "idle" && (
                  <>
                    <FileDown className="h-4 w-4 group-hover:animate-bounce" />
                    <span>Download Guide</span>
                  </>
                )}

                {/* VERIFYING STATE */}
                {status === "verifying" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                )}

                {/* DOWNLOADING STATE */}
                {status === "downloading" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Preparing PDF...</span>
                  </>
                )}

                {/* SUCCESS STATE */}
                {status === "success" && (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Download Started</span>
                  </>
                )}
              </button>
            </div>

            {/* Right: Icon Illustration */}
            <div className="hidden lg:flex justify-end">
              <div className="relative h-52 w-40 rotate-6 rounded-2xl bg-white p-2 shadow-2xl transition-transform hover:rotate-0">
                <div className="h-full w-full rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center flex-col gap-2 p-4 text-center">
                  <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-1">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Student Choice Education
                  </p>
                  <p className="text-xs font-bold text-[#020b2c]">
                    Official Guide PDF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
