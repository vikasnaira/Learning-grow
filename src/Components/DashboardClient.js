"use client";

import { useState } from "react";
import SidebarWrapper from "./SidebarWrap";
import HeroCard from "./HeroCard";
import CourseCard from "./CourseCard";
import ActivityChart from "./ActivityChart";
import { SunMoon, Search, Bell } from "lucide-react";

export default function DashboardClient({ courses }) {
  const [currentUser] = useState("Alex");

  return (
    <div className="flex h-screen w-screen text-white overflow-hidden bg-black">
      {/* Responsive Sidebar Wrapper */}
      <SidebarWrapper />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto h-full w-full custom-scrollbar">
        
        {/* Header Section */}
        <header className="mb-8 mt-12 md:mt-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-lg py-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Welcome Back, <span className="text-blue-400">{currentUser}</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              Continue your learning journey
            </p>
          </div>

          {/* Top Actions (Desktop Only) */}
          <div className="hidden md:flex items-center gap-6">
            <button aria-label="Search" className="hover:text-blue-400 transition-colors">
              <Search size={22} />
            </button>
            <button aria-label="Notifications" className="hover:text-blue-400 transition-colors">
              <Bell size={22} />
            </button>
            <button
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-white/10 bg-zinc-900 hover:border-blue-500 transition-all"
            >
              <SunMoon size={20} />
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="mb-6">
          <HeroCard />
        </section>

        {/* Courses Grid */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4 px-1">Your Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses && courses.length > 0 ? (
              courses
                .filter((course, index, self) => 
                  self.findIndex((c) => c.id === course.id) === index
                )
                .slice(0, 4) 
                .map((course) => (
                  <CourseCard
                    key={course.id} 
                    title={course.title} 
                    progress={course.progress} 
                    iconName={course.icon_name} 
                  />
                ))
            ) : (
              <p className="text-zinc-500 col-span-full py-8 text-center bg-zinc-900/30 rounded-2xl border border-white/5">
                No courses found.
              </p>
            )}
          </div>
        </section>

        {/* Analytics Section */}
        <section className="rounded-2xl p-4 border border-white/10 mt-6 bg-[#0f0f0f]">
          <h2 className="text-white mb-4 font-semibold px-2">
            Analytics Overview
          </h2>
          <ActivityChart />
        </section>
        
      </main>
    </div>
  );
}