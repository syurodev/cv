"use client";

import { RESUME_DATA } from "@/data/resume-data";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="flex min-h-[90vh] flex-col justify-center bg-[#0a0a0a] px-4 pb-16 pt-32 text-white md:px-16">
      <div className="max-w-4xl space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold leading-[0.9] tracking-tighter sm:text-7xl md:text-9xl"
        >
          {RESUME_DATA.name.toLowerCase()}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-light text-neutral-400 md:text-3xl">
            {RESUME_DATA.about}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-500">
            {RESUME_DATA.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
