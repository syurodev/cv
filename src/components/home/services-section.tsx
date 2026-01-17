"use client";

import { motion } from "framer-motion";
import { Award, Code2, Terminal } from "lucide-react";

const services = [
  {
    title: "<Coding />",
    description: "I build scalable backend systems using modern technologies.",
    icon: <Code2 className="h-6 w-6" />,
    items: ["Java", "Spring Boot", "NestJS", "Go", "Kafka"],
  },
  {
    title: "[ Infrastructure ]",
    description: "Optimizing deployment and CI/CD pipelines.",
    icon: <Terminal className="h-6 w-6" />,
    items: ["Docker", "Kubernetes", "AWS", "CI/CD"],
  },
  {
    title: "Certifications",
    description: "Continuously learning and validating skills.",
    icon: <Award className="h-6 w-6" />,
    items: ["AWS Certified", "Professional Scrum Master"],
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-32 text-white md:px-16">
      <div className="mx-auto max-w-6xl space-y-16">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-neutral-500 md:text-5xl"
          >
            Services
          </motion.h2>
          <p className="max-w-xl text-lg text-neutral-400">
            Thinking about working with me? Check out what I can do below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-start justify-between border-t border-neutral-800 px-4 py-8 transition-colors hover:bg-neutral-900/30 md:flex-row md:items-center"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="transform font-mono text-3xl font-bold text-neutral-300 transition-transform group-hover:translate-x-2">
            {service.title}
          </span>
        </div>
        <p className="text-neutral-500">{service.description}</p>
      </div>

      <div className="right-0 mt-4 md:mt-0">
        <div className="flex gap-4 font-mono text-sm text-neutral-500">
          {service.items.map((item: string) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
