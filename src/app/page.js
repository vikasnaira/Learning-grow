import ActivityCard from "@/Components/ActivityCard";
import CourseCard from "@/Components/CourseCard";
import HeroCard from "@/Components/HeroCard";
import SidebarWrap from "@/Components/SidebarWrap";
import ActivityChart from "@/Components/ActivityChart";
import { SunMoon, Search, Bell } from "lucide-react";



import { supabase } from "@/lib/supabaseClient"; 


export default async function Home() {


  // Supabase se data fetch kar rahe hain
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");
  console.log(courses);
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
  
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500">
        Error loading courses: {error.message}
      </div>
    );
  }

  return (
    <div className="flex text-white max-h-screen overflow-hidden">
      
      {/* Sidebar navigation */}
      <SidebarWrap/>

      {/* Main Content Area */}
      <main className="flex-1 md:p-6 p-6 md:mt-0  mt-10 overflow-y-auto"> {/* overflow-y-scroll ko auto kiya taaki bura scrollbar na dikhe */}

        {/* Header Section */}
        <header className="mb-8 flex  flex-col  md:flex-row  items-start justify-between rounded-lg py-2 md:px-4 px-2">

          <div className="flex items-start flex-col gap-4 ">
            <h1 className="md:text-4xl text-2xl font-bold leading-tight">
              Welcome Back <br />
              User-Name
            </h1>
            <p className="mt-2 text-gray-400">
              Continue your learning journey
            </p>
          </div>

          <div className="md:flex hidden items-center gap-8">
            <button aria-label="Search"><Search /></button>
            <button aria-label="Notifications"><Bell /></button>
            <button aria-label="Toggle theme" className="p-2 rounded-2xl border-gray-300 border bg-gray-700">
              <SunMoon />
            </button>
          </div>
        </header>

        {/* Hero Banner Section */}
        <section>
          <HeroCard />
        </section>

        {/* Dynamic Courses Cards Section */}
        <section className="mt-5 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
            />
          ))}
        </section>

        {/* Activity Section (Aapne isme props nahi diye the, maine dummy placeholder diya hai) */}
        <section className="mt-5">
          <ActivityCard 
            title="Current Progress Summary" 
            progress={75} 
            Image="/Rocket.png" 
            alt="Activity tracking status icon" 
          />
        </section>

        {/* Weekly Chart Analytics Section */}
        <section className="rounded-2xl p-3 border border-white/10 mt-5 bg-[#0f0f0f]">
          <h2 className="text-white mb-2 font-semibold px-2">Analytics Overview</h2>
          <ActivityChart />
        </section>

      </main>
    </div>
  );
}