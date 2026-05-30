"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const data = [
  { day: "Mon", activity: 20 },
  { day: "Tue", activity: 40 },
  { day: "Wed", activity: 35 },
  { day: "Thu", activity: 60 },
  { day: "Fri", activity: 50 },
  { day: "Sat", activity: 80 },
  { day: "Sun", activity: 70 },
];

export default function ActivitySection() {
  const chartRef = useRef(null);
  
  // useInView hook check karega ki chart kab screen par aaya (har baar)
  const isChartInView = useInView(chartRef, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={chartRef} // Card ka reference track karne ke liye
      className="bg-[#0f0f0f] rounded-2xl p-4 border border-white/10"
      
      // Scroll animation setup (Har baar chalega)
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // 👈 once: false lagaya
      
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Semantic Header */}
      <header className="mb-3">
        <h2 className="text-white text-lg font-semibold">
          Weekly Activity
        </h2>
        <p className="text-gray-400 text-sm">
          Your learning progress over the week
        </p>
      </header>

      {/* Chart Container */}
      <figure className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" stroke="#6b7280" fontSize={12} tickLine={false} />
            <YAxis stroke="#6b7280" fontSize={12} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: "8px" }}
              labelStyle={{ color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="activity"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ fill: "#8b5cf6", r: 4 }}
              activeDot={{ r: 6 }}
              
              // 👈 Recharts ki animation jo wapas scroll karne par replay hogi
              isAnimationActive={isChartInView} 
              animationDuration={1000}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </figure>

      {/* Optional caption */}
      <figcaption className="text-xs text-gray-500 mt-2">
        Auto-generated activity tracking
      </figcaption>
    </motion.section>
  );
}
