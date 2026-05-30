"use client";
import React from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const HeroCard = () => {
  return (
    <motion.article
      // Hover properties
      whileHover={{ scale: 1.02, border: '1px solid #3b82f6' }}
      
      // Scroll animation properties (Har baar chalega)
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // 👈 once: false karne se har baar scroll par chalega
      transition={{ duration: 0.6 }}
      
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-500/10 via-[#111827] to-blue-900/60 p-4 shadow-xs shadow-blue-500/10"
    >
      {/* Rocket Image with customized scroll entry */}
      <div className="hidden md:flex absolute right-0 -top-20">
        <motion.img 
          src="/Rocket.png" 
          alt="rocket" 
          className="w-80 h-100"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }} // 👈 Yeh bhi har baar animate hoga
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }} // Chhota sa delay premium feel ke liye
        />
      </div>
    
      {/* Glow */}
      <div
        className="
        absolute -right-10 
        h-52 w-52
        bg-blue-500/40
        rounded-full
        blur-3xl
        "
      />

      <div className="relative w-fit z-10 flex flex-col gap-8">
        <div className="flex w-fit items-center gap-4">
          {/* Flame Icon Container */}
          <motion.div 
            className="rounded-2xl bg-orange-500/20 p-4"
            whileInView={{ scale: [0.8, 1.1, 1] }} // Icon thoda pop-up hokar aayega
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Flame
              className="text-orange-400"
              size={30}
            />
          </motion.div>

          <div>
            <p className="text-gray-400">
              Daily Streak
            </p>
            <h2 className="md:text-3xl text-lg font-bold">
              12 Days
            </h2>
          </div>
        </div>

        {/* Heading */}
        <div>
          <p className="max-w-lg md:text-lg text-sm text-gray-400">
            Continue mastering React, Next.js and animations
            with immersive learning paths.
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default HeroCard;
