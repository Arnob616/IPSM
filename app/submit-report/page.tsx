'use client'; // Add this directive at the top

import { useEffect, useState } from "react";
import { ReportWizard } from "@/components/report/ReportWizard";
import dynamic from "next/dynamic";

// Client-side only components
const ClientOnlyGradient = dynamic(
  () => import("@/components/ClientOnlyGradient"),
  { ssr: false }
);

export default function SubmitReport() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <ClientOnlyGradient />

      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <SecureBadge />
            
            <h1 className="mt-8 bg-white bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              Submit Anonymous Report
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Your safety is our priority. All submissions are encrypted and
              anonymized.
            </p>
          </div>

          <div className="mt-16 bg-zinc-900/50 rounded-2xl border border-white/5 p-6">
            <ReportWizard />
          </div>
        </div>
      </main>
    </div>
  );
}

// Extracted component for client-side security badge
function SecureBadge() {
  return (
    <div className="inline-flex h-10 items-center gap-2 rounded-full border border-[#07D348]/30 bg-[#07D348]/10 px-5 text-sm text-[#07D348] backdrop-blur-sm transition-all hover:border-[#07D348]/50 hover:bg-[#07D348]/20 animate-fade-in">
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
      Secure & Anonymous
    </div>
  );
}