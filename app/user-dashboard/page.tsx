"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UserDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/signin");
  }, [status]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch("/api/user/reports");
        const data = await res.json();
        setReports(data);
      } finally {
        setLoading(false);
      }
    };
    
    if (status === "authenticated") fetchReports();
  }, [status]);

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#07D348]"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#07D348] to-[#24fe41] bg-clip-text text-transparent">
            My Reports
          </h1>
          <Link
            href="/submit-report"
            className="bg-[#07D348] px-6 py-2 rounded-lg hover:bg-[#06b33e] transition-colors"
          >
            + New Report
          </Link>
        </div>

        <div className="grid gap-4">
          {reports.map((report) => (
            <div key={report.id} className="bg-neutral-900/50 border border-[#07D348]/20 rounded-xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{report.title}</h3>
                  <p className="text-neutral-400 mt-2">{report.description}</p>
                  <div className="flex gap-4 mt-4">
                    <span className={`px-3 py-1 rounded-full ${
                      report.status === 'PENDING' ? 'bg-yellow-500/20 text-yellow-400' :
                      report.status === 'RESOLVED' ? 'bg-green-500/20 text-green-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {report.status}
                    </span>
                    <span className="text-neutral-400">
                      {new Date(report.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/track-report?reportId=${report.reportId}`}
                  className="bg-neutral-800/50 hover:bg-neutral-800 px-4 py-2 rounded-lg transition-colors"
                >
                  Track
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}