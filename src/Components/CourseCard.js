"use client";

import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react"; 

const CourseCard = ({ title, progress, iconName }) => {

  const LucideIcon = Icons[iconName] || Icons.BookOpen;

  return (
    <motion.article
     
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="md:mt-5 relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 group transition-colors duration-300 hover:border-blue-500/50"
    >

      <div
        className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl transition-opacity duration-300 group-hover:bg-blue-500/40"
      />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-2xl w-fit mb-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
            <LucideIcon size={24} strokeWidth={2} />
          </div>

          <h2 className="mt-3 text-xl font-semibold text-zinc-100">
            {title}
          </h2>
        </div>


        <div className="mt-7">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-zinc-400">
              Progress
            </span>
            <span className="text-sm font-medium text-blue-400">
              {progress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            {/* Custom animated progress bar from 0% on view */}
            <motion.div
              className="h-full rounded-full bg-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default CourseCard;