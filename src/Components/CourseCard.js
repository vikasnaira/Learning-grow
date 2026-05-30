"use client";
import React from "react";
import { motion } from "framer-motion";

const ActivityCard = ({ title, progress, Image, alt }) => {
  return (
    <motion.article
      // Hover properties
      whileHover={{ scale: 1.02, border: '1px solid #3b82f6' }}
      
      // Scroll animation properties
      initial={{ opacity: 0, y: 30 ,  }} // 👈 Start with opacity 0 and slightly down
      whileInView={{ opacity: 1, y: 0, }} // 👈 Animate ki jagah whileInView use kiya
      viewport={{ once:false, amount: 0.2  }} // 👈 Screen par 20% aate hi animation trigger hoga (sirf ek baar)
      
      // Transition setup
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 40
      }}
      className="md:mt-5
      relative overflow-hidden rounded-[28px]
      border border-white/10
      bg-white/5
      p-6"
    >
      {/* Glow */}
      <div
        className="
        absolute right-0 top-0
        h-32 w-32
        rounded-full
        bg-blue-500/50
        blur-3xl
        "
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <img src={Image} alt={alt} />

          <h2 className="mt-3 text-xl font-semibold">
            {title}
          </h2>
        </div>

        {/* Progress */}
        <div className="mt-7">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">
              Progress
            </span>
            <span className="text-sm font-medium text-blue-400">
              {progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            {/* Progress bar ko bhi zero se fill hota hua scroll par animate kiya */}
            <motion.div
              className="h-full rounded-full bg-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once:false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ActivityCard;
