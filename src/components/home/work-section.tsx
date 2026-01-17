"use client";

import { RESUME_DATA } from "@/data/resume-data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function WorkSection() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-32 text-white md:px-16">
      <div className="mx-auto max-w-6xl space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-neutral-500 md:text-5xl"
        >
          Work
        </motion.h2>

        <div className="space-y-0 divide-y divide-neutral-800 border-b border-t border-neutral-800">
          {/* Handle case where projects are nested in work[0] */}
          {RESUME_DATA.work[0].projects?.map((project, index) => (
            <WorkItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkItem({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex cursor-pointer flex-col items-baseline justify-between px-4 py-12 transition-colors hover:bg-white/5 md:flex-row"
    >
      <div className="space-y-2">
        <h3 className="text-3xl font-bold transition-transform duration-300 group-hover:translate-x-4 md:text-5xl">
          {project.title}
        </h3>
        <p className="max-w-xl text-neutral-500 transition-colors group-hover:text-neutral-300">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-col items-end gap-4 md:mt-0">
        <div className="flex flex-wrap justify-end gap-2">
          {(project.techStack as string[])?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neutral-800 px-2 py-1 font-mono text-xs text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link?.href && (
          <a
            href={project.link.href}
            target="_blank"
            className="flex items-center gap-2 text-neutral-500 transition-colors hover:text-white"
          >
            <span>Visit</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
