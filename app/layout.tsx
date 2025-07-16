import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { ThemeProvider } from "@/lib/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CivicSafe - Integrated public safety and service management system",
  description: "Securely report crimes to law enforcement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative min-h-screen bg-gray-50 dark:bg-black light:bg-gray-50 
                         selection:bg-sky-500/20 transition-colors duration-300">
            {/* Enhanced Gradient Background */}
            <div className="fixed inset-0 -z-10 min-h-screen">
              {/* Light mode gradients */}
              <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(7,211,72,0.06),transparent_50%)] 
                            dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]
                            light:bg-[radial-gradient(circle_at_center,rgba(7,211,72,0.08),transparent_60%)]" />
              <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(36,254,65,0.04),transparent_70%)] 
                            dark:bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]
                            light:bg-[radial-gradient(circle_at_center,rgba(36,254,65,0.06),transparent_80%)]" />
              
              {/* Animated mesh gradient */}
              <div className="absolute inset-0 opacity-20 dark:opacity-20 light:opacity-25">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-[#07D348]/15 to-[#24fe41]/8 
                              rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-l from-[#24fe41]/15 to-[#07D348]/8 
                              rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-[#07D348]/12 to-[#24fe41]/12 
                              rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
              </div>
            </div>
            
            <Navbar />
            <main className="pt-16">
              <Providers>{children}</Providers>
              
              {/* Enhanced Footer */}
              <footer className="border-t border-gray-300/30 dark:border-[#07D348]/20 light:border-gray-300/40 
                               py-12 bg-white/80 dark:bg-black/50 light:bg-gray-100/90 backdrop-blur-sm">
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="grid md:grid-cols-4 gap-8 text-gray-700 dark:text-zinc-300 light:text-gray-800">
                  <div className="grid md:grid-cols-4 gap-8 text-gray-700 dark:text-zinc-300 light:text-[#1A1A1A]">
                    <div>
                      <h3 className="text-[#07D348] mb-4 text-lg font-semibold">Emergency 999</h3>
                      <p className="text-sm text-gray-700 dark:text-zinc-300 light:text-[#121212]">24/7 Nationwide Emergency Response Service</p>
                    </div>
                    <div>
                      <h4 className="text-[#07D348] mb-4 text-lg font-semibold">Quick Links</h4>
                      <ul className="space-y-2 text-sm">
                        <li><button className="text-gray-700 dark:text-zinc-300 light:text-[#121212] hover:text-[#07D348] transition-colors">Service Status</button></li>
                        <li><button className="text-gray-700 dark:text-zinc-300 light:text-[#121212] hover:text-[#07D348] transition-colors">Safety Guidelines</button></li>
                        <li><button className="text-gray-700 dark:text-zinc-300 light:text-[#121212] hover:text-[#07D348] transition-colors">Privacy Policy</button></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#07D348] mb-4 text-lg font-semibold">Contact</h4>
                      <p className="text-sm text-gray-700 dark:text-zinc-300 light:text-[#121212]">Hotline: 999</p>
                      <p className="text-sm text-gray-700 dark:text-zinc-300 light:text-[#121212]">Email: emergency@gov.bd</p>
                    </div>
                    <div>
                      <h4 className="text-[#07D348] mb-4 text-lg font-semibold">Follow Us</h4>
                      <div className="flex gap-4">
                        <button className="p-2 rounded-lg bg-[#07D348]/10 hover:bg-[#07D348]/20 text-gray-700 dark:text-zinc-300 light:text-[#121212]
                                         light:bg-[#07D348]/15 light:hover:bg-[#07D348]/25 transition-colors">
                          Twitter
                        </button>
                        <button className="p-2 rounded-lg bg-[#07D348]/10 hover:bg-[#07D348]/20 text-gray-700 dark:text-zinc-300 light:text-[#121212]
                                         light:bg-[#07D348]/15 light:hover:bg-[#07D348]/25 transition-colors">
                          Facebook
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
  )
}