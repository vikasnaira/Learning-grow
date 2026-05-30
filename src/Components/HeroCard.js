"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const HeroCard = () => {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-500/10 via-[#111827] to-blue-900/60 p-4 shadow-xs shadow-blue-500/10"
    >
      <div className="absolute -right-10 h-52 w-52 bg-blue-500/40 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <motion.div
            className="rounded-2xl bg-orange-500/20 p-4"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            viewport={{ once: false }}
          >
            <Flame className="text-orange-400" size={30} />
          </motion.div>

          <div>
            <p className="text-gray-400">Daily Streak</p>

            <h2 className="md:text-3xl text-lg font-bold">
              7 Days
            </h2>
          </div>
        </div>

        <p className="max-w-lg md:text-lg text-sm text-gray-400">
          Continue mastering React, Next.js and animations
          with immersive learning paths.
        </p>
      </div>
    </motion.article>
  );
};

export default HeroCard;