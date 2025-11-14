"use client";

import {
  Brain,
  Layers,
  Database,
  Server,
  BarChart3,
  Workflow,
  Gauge,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm Divyang Palshetkar — a Data Scientist & Full-Stack Engineer
            building intelligent, scalable systems powered by clean data, modern
            engineering, and AI-driven automation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 gap-y-10">
          {[
            {
              icon: Brain,
              title: "AI & Data Science",
              text: "Designing autonomous AI pipelines using LLM reasoning, multimodal models, and workflow automation.",
            },
            {
              icon: Workflow,
              title: "Data Engineering",
              text: "Designing ETL/ELT pipelines, data models, orchestration workflows, and optimized storage systems.",
            },
            {
              icon: BarChart3,
              title: "Analytics & Insights",
              text: "Creating dashboards, KPIs, and decision systems that turn raw data into actionable business intelligence.",
            },
            {
              icon: Layers,
              title: "Full-Stack Engineering",
              text: "Building modern applications with clean architecture, seamless UX, and robust backend foundations.",
            },
            {
              icon: Server,
              title: "Backend & Cloud",
              text: "Engineering reliable APIs, cloud services, and distributed systems built for performance and scalability.",
            },
            {
              icon: Gauge,
              title: "Performance & Reliability",
              text: "Optimizing systems for speed, uptime, and real-world workloads across both application and data layers.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="shadow-md hover:shadow-xl transition-all border dark:border-gray-700 dark:bg-gray-800 rounded-2xl">
                <CardContent className="p-7 text-center">
                  <div className="h-14 w-14 mx-auto mb-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-blue-600 dark:text-blue-300" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
