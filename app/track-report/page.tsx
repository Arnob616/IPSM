"use client";
import { ReportTracker } from "@/components/report/ReportTracker";

export default function TrackReportPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#000000] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#07D348]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -right-20 w-72 h-72 bg-[#24fe41]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <div className="w-full max-w-5xl space-y-8">
          {/* Header Section */}

          {/* Tracker Container */}
          <div className="relative group backdrop-blur-xl rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl hover:shadow-[0_0_40px_-15px_#07D348]/30 transition-all duration-300">
            <ReportTracker />
          </div>
        </div>
      </div>
    </div>
  );
}
