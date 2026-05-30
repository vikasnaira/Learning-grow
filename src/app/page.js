import DashboardClient from "@/Components/DashboardClient";
import { supabase } from "@/lib/supabaseClient";

export default async function Home() {
  const
    { data: courses, error: coursesError }  = await supabase.from("courses").select("*");

  if (coursesError) {
    return (
      <div className="flex h-screen items-center  justify-center text-red-500">
        Error loading data
      </div>
    );
  }
  return (
    <DashboardClient
      courses={courses || []}
    />
  );
}