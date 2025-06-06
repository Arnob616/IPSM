"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useMemo } from "react";
import { Report, ReportStatus, ReportType } from "@prisma/client";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();
  const [reports, setReports] = useState<Report[]>([]);
  const [filter, setFilter] = useState<ReportStatus | "ALL">("ALL");
  const [typeFilter, setTypeFilter] = useState<ReportType | "ALL">("ALL");
  const [isLoading, setIsLoading] = useState(true);
  const [classifications, setClassifications] = useState<Record<string, string>>({});

  const filteredReports = useMemo(() => 
    reports.filter((report) => {
      const statusMatch = filter === "ALL" || report.status === filter;
      const typeMatch = typeFilter === "ALL" || report.type === typeFilter;
      return statusMatch && typeMatch;
    }),
  [reports, filter, typeFilter]);

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {
    const classifyReports = async () => {
      for (const report of filteredReports) {
        if (!classifications[report.id]) {
          await classifyIncident(report.id, report.description);
        }
      }
    };

    classifyReports();
  }, [filteredReports]);

  const fetchReports = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/reports");
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const classifyIncident = async (reportId: string, description: string) => {
    try {
      const response = await fetch("/api/ai/classify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });
      
      const { department } = await response.json();
      setClassifications(prev => ({
        ...prev,
        [reportId]: department || "General"
      }));
    } catch (error) {
      console.error("Classification error:", error);
      setClassifications(prev => ({
        ...prev,
        [reportId]: "Classification Failed"
      }));
    }
  };

  const updateReportStatus = async (reportId: string, newStatus: ReportStatus) => {
    try {
      const response = await fetch(`/api/reports/${reportId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) fetchReports();
    } catch (error) {
      console.error("Error updating report:", error);
    }
  };

  const getStatusColor = (status: ReportStatus) => {
    const colors = {
      PENDING: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      IN_PROGRESS: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      RESOLVED: "bg-green-500/10 text-green-500 border-green-500/20",
      DISMISSED: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20",
    };
    return colors[status];
  };

  const getDepartmentColor = (department: string) => {
    const colors: { [key: string]: string } = {
      Fire: "bg-red-500/10 text-red-400 border-red-500/20",
      Medical: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      Police: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      Traffic: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      Crime: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      Disaster: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      General: "bg-neutral-800/50 text-neutral-400 border-neutral-700/20",
    };
    return colors[department] || "bg-neutral-800/50 text-neutral-400 border-neutral-700/20";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-neutral-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-white bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <div className="flex items-center gap-6">
              <span className="text-neutral-400">
                {session?.user?.name || "Admin"}
              </span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 text-sm font-medium text-neutral-300 bg-neutral-900 rounded-lg hover:bg-neutral-800 border border-neutral-800 transition-all hover:border-neutral-700"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as ReportStatus | "ALL")}
              className="bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500/20 focus:border-green-600/30 transition-all"
            >
              <option value="ALL">All Statuses</option>
              {Object.values(ReportStatus).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as ReportType | "ALL")}
              className="bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500/20 focus:border-green-500/20 transition-all"
            >
              <option value="ALL">All Types</option>
              {Object.values(ReportType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="text-neutral-400">
            {filteredReports.length} Reports
          </div>
        </div>

        <div className="grid gap-4">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all group"
            >
              <div className="flex justify-between items-start gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-medium text-neutral-200">
                      {report.title}
                    </h2>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        report.status
                      )}`}
                    >
                      {report.status}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    {report.description}
                  </p>
                  
                  {!classifications[report.id] ? (
                    <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                      Analyzing report...
                    </div>
                  ) : (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-neutral-500">Assigned to:</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getDepartmentColor(
                          classifications[report.id]
                        )}`}
                      >
                        {classifications[report.id]} Department
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
                      </div>
                      {report.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
                      </div>
                      {report.location || "N/A"}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-neutral-600"></div>
                      </div>
                      {new Date(report.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {report.image && (
                    <div className="mt-4 relative w-full h-48 rounded-lg border border-neutral-800 overflow-hidden">
                      <Image
                        src={report.image}
                        alt="Report evidence"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>

                <select
                  value={report.status}
                  onChange={(e) => updateReportStatus(report.id, e.target.value as ReportStatus)}
                  className="bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 hover:border-neutral-700 transition-colors"
                >
                  {Object.values(ReportStatus).map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          {filteredReports.length === 0 && (
            <div className="text-center py-12 text-neutral-500 bg-neutral-900/50 rounded-xl border border-neutral-800">
              No reports found matching the selected filters.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}