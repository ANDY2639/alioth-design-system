"use client";

import Navbar from "@/components/layout/Navbar";
import DashboardContent from "@/components/DashboardContent";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <DashboardContent />
    </div>
  );
}
