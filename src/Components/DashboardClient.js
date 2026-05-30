"use client";

import { useState } from "react";
import SidebarWrap from "./SidebarWrap";
import HeroCard from "./HeroCard";
import CourseCard from "./CourseCard";
import ActivityChart from "./ActivityChart";
import { SunMoon, Search, Bell } from "lucide-react";

export default function DashboardClient({ courses }) {
  const [currentUser, setCurrentUser] = useState("Alex");

  return (
    <div className="flex text-white max-h-screen overflow-hidden">
      <SidebarWrap />

      <main className="flex-1 md:p-6 p-6 md:mt-0 mt-10 overflow-y-auto">
        
        {/* Header Section */}
        <header className="mb-8 flex flex-col md:flex-row items-start justify-between rounded-lg py-2 md:px-4 px-2">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-4xl text-2xl font-bold leading-tight">
              Welcome Back
              <br />
              {currentUser}
            </h1>
            <p className="text-gray-400">
              Continue your learning journey
            </p>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button aria-label="Search">
              <Search />
            </button>
            <button aria-label="Notifications">
              <Bell />
            </button>
            <button
              aria-label="Toggle theme"
              className="p-2 rounded-2xl border border-white/10 bg-zinc-900"
            >
              <SunMoon />
            </button>
          </div>
        </header>

        <section>
          <HeroCard />
        </section>

  

            <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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
                <p className="text-zinc-500 col-span-full py-4 text-center">
                  No courses found.
                </p>
              )}
            </section>
                <section className="rounded-2xl p-3 border border-white/10 mt-5 bg-[#0f0f0f]">
                  <h2 className="text-white mb-2 font-semibold px-2">
                    Analytics Overview
                  </h2>
                  <ActivityChart />
                </section>
      </main>
    </div>
  );
}