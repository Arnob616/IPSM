"use client";

import SafetyChatbot from "@/components/SafetyChatbot";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

export default function Home() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="relative px-6 pt-20 md:pt-7 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-48 -left-24 w-96 h-96 bg-gradient-to-r from-[#07D348]/20 to-[#24fe41]/10 
                     dark:from-[#07D348]/20 dark:to-[#24fe41]/10 
                     light:from-[#07D348]/30 light:to-[#24fe41]/20
                     rounded-full blur-3xl opacity-50 animate-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 -right-48 w-96 h-96 bg-gradient-to-l from-[#07D348]/20 to-[#24fe41]/10 
                     dark:from-[#07D348]/20 dark:to-[#24fe41]/10
                     light:from-[#07D348]/25 light:to-[#24fe41]/15
                     rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/2 w-[200vw] h-48 bg-gradient-to-t from-[#07D348]/5 to-transparent 
                     dark:from-[#07D348]/5 light:from-[#07D348]/8 -translate-x-1/2"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#07D348] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl relative">
        {/* Enhanced Hero Section */}
        <motion.div 
          className="flex flex-col items-center text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[#07D348]/30 
                       bg-[#07D348]/10 dark:bg-[#07D348]/10 light:bg-[#07D348]/20
                       px-5 text-sm text-[#07D348] backdrop-blur-sm transition-all 
                       hover:border-[#07D348]/50 hover:bg-[#07D348]/20 hover:scale-105"
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 0 20px rgba(7, 211, 72, 0.3)",
              scale: 1.05 
            }}
          >
            <motion.svg 
              className="h-4 w-4" 
              viewBox="0 0 24 24" 
              fill="none"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            Secure & Anonymous Reporting
          </motion.div>

          <motion.h1 
            className="mt-8 bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-white/80 
                       light:from-gray-900 light:to-gray-700 bg-clip-text text-5xl font-bold tracking-tight 
                       text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
            variants={itemVariants}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Report Incident
            </motion.span>
            <motion.span 
              className="block mt-3 bg-gradient-to-r from-[#fdfc47] to-[#24fe41] 
                         dark:from-[#fdfc47] dark:to-[#24fe41]
                         light:from-[#059669] light:to-[#10b981]
                         bg-clip-text text-transparent relative text-3xl"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Protect Public Safety
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#fdfc47] to-[#24fe41] 
                           dark:from-[#fdfc47] dark:to-[#24fe41]
                           light:from-[#059669] light:to-[#10b981]
                           opacity-10 blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed 
                       text-gray-600 dark:text-zinc-300 light:text-gray-700"
            variants={itemVariants}
          >
            Your voice matters. Help create safer communities while maintaining 
            complete anonymity through our military-grade encrypted reporting system.
          </motion.p>

          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Link href={"/submit-report"}>
              <motion.button 
                className="group relative flex h-12 items-center justify-center gap-2 rounded-xl 
                           bg-gradient-to-r from-[#07D348] to-[#24fe41] px-8 text-sm font-medium 
                           text-white transition-all hover:shadow-lg hover:shadow-[#07D348]/30 
                           overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(7, 211, 72, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Make Report</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#07D348] to-[#24fe41] 
                             opacity-0 transition-opacity"
                  whileHover={{ opacity: 1 }}
                />
                <motion.svg
                  className="h-4 w-4 transition-transform relative z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  whileHover={{ x: 5 }}
                >
                  <path
                    d="M5 12H19M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </Link>
            <Link href={"/auth/signin"}>
              <motion.button 
                className="flex h-12 items-center justify-center gap-2 rounded-xl border 
                           border-[#07D348]/30 bg-white/5 dark:bg-white/5 light:bg-white/80
                           px-8 text-sm font-medium text-gray-900 dark:text-white light:text-gray-900
                           backdrop-blur-sm transition-all hover:border-[#24fe41]/50 
                           hover:bg-[#07D348]/10 hover:shadow-[0_0_20px_-5px_#07D348] group"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: theme === 'dark' ? 'rgba(7, 211, 72, 0.1)' : 'rgba(7, 211, 72, 0.05)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Login to Dashboard</span>
                <motion.div 
                  className="w-0 h-[2px] bg-[#07D348] transition-all"
                  whileHover={{ width: 16 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div 
          className="mt-32 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              title: "Anonymous & Verified Reporting",
              description: "Submit reports anonymously or choose to verify for follow-ups — your identity, your control.",
              icon: (
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-[#07D348] blur-xl opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <svg className="h-6 w-6 text-[#07D348] relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.656 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              ),
            },
            {
              title: "AI-Powered Report Classification",
              description: "Automatically route incidents to the right authorities using smart categorization.",
              icon: (
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-[#07D348] blur-xl opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <svg className="h-6 w-6 text-[#07D348] relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h13M3 6h18M3 12h6m6 0v6" />
                  </svg>
                </div>
              ),
            },
            {
              title: "One-Click Location Sharing",
              description: "Share your real-time location instantly with responders in one tap.",
              icon: (
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-[#07D348] blur-xl opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  <svg className="h-6 w-6 text-[#07D348] relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c1.485 0 2.9-.324 4.162-.9L22 22l-1.1-5.838A9.955 9.955 0 0022 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
              ),
            },
            {
              title: "Live Report Tracking",
              description: "Follow your report in real-time from submission to resolution.",
              icon: (
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-[#07D348] blur-xl opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  />
                  <svg className="h-6 w-6 text-[#07D348] relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1l3 8h11l3-6H9" />
                  </svg>
                </div>
              ),
            },
            {
              title: "AI-Assisted Reporting",
              description: "Generate titles, descriptions, and classify incidents with the help of AI.",
              icon: (
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-[#07D348] blur-xl opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  />
                  <svg className="h-6 w-6 text-[#07D348] relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              ),
            },   
            {
              title: "Hate Speech Detection",
              description: "AI automatically flags hate speech for moderation and safety.",
              icon: (
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-[#07D348] blur-xl opacity-30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
                  />
                  <svg className="h-6 w-6 text-[#07D348] relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856C19.12 19 20 18.104 20 17V7c0-1.104-.88-2-1.938-2H5.938C4.88 5 4 5.896 4 7v10c0 1.104.88 2 1.938 2z" />
                  </svg>
                </div>
              ),
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/20 dark:border-white/10 
                         bg-white/50 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent 
                         light:bg-white/80 light:border-gray-300/30
                         p-8 transition-all hover:border-[#07D348]/30 hover:bg-[#07D348]/5 
                         hover:shadow-[0_0_30px_-10px_#07D348] card-hover"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-5 inline-flex rounded-xl bg-white/5 dark:bg-white/5 light:bg-white/50 
                               p-3 backdrop-blur-sm group-hover:bg-[#07D348]/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white light:text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-md leading-relaxed text-gray-600 dark:text-zinc-300 light:text-gray-700">
                  {feature.description}
                </p>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#07D348]/5 to-transparent opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="mt-32 rounded-3xl border border-gray-200/20 dark:border-white/10 light:border-gray-300/30
                     bg-white/50 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent 
                     light:bg-white/80 p-12 backdrop-blur-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="absolute -top-20 -right-20 w-64 h-64 bg-[#07D348]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="grid gap-y-12 sm:grid-cols-3 relative z-10">
            {[
              { value: "250K+", label: "Secure Reports", metric: "and counting" },
              { value: "100%", label: "Anonymity", metric: "guaranteed" },
              { value: "24/7", label: "Support", metric: "coverage" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className={`text-center ${i < 2 ? 'sm:border-r border-gray-200/20 dark:border-white/10 light:border-gray-300/30' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-4xl font-bold text-[#07D348] mb-2"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(7, 211, 72, 0)",
                      "0 0 10px rgba(7, 211, 72, 0.3)",
                      "0 0 0px rgba(7, 211, 72, 0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg text-gray-600 dark:text-zinc-300 light:text-gray-700 font-medium">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-zinc-500 light:text-gray-600 mt-1">
                  {stat.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Trust Badges */}
        <motion.div 
          className="mt-32 mb-20 flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 rounded-full border border-gray-200/20 dark:border-white/10 
                       light:border-gray-300/30 bg-white/50 dark:bg-white/5 light:bg-white/80 
                       px-6 py-3 text-sm text-gray-600 dark:text-zinc-300 light:text-gray-700 
                       backdrop-blur-xl transition-all hover:border-[#07D348]/30 hover:bg-[#07D348]/10 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex space-x-2">
              <motion.span 
                className="relative flex h-2 w-2"
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#07D348] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#07D348]"></span>
              </motion.span>
            </div>
            Trusted by Law Enforcement Nationwide
          </motion.div>
        </motion.div>
      </div>
      <SafetyChatbot/>
    </main>
  );
}