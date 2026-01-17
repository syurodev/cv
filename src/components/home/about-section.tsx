"use client";

import { RESUME_DATA } from "@/data/resume-data";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-32 text-white md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-16 md:flex-row">
        <div className="flex-1 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-neutral-500 md:text-5xl"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl font-light leading-relaxed md:text-2xl"
          >
            Hello, I&apos;m {RESUME_DATA.name}, a {RESUME_DATA.name} based in{" "}
            {RESUME_DATA.location}. {RESUME_DATA.summary}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="h-64 w-64 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 grayscale transition-all duration-500 hover:grayscale-0 md:h-80 md:w-80">
            <img
              src={RESUME_DATA.avatarUrl}
              alt={RESUME_DATA.name}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
