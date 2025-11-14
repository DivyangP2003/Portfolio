"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Database,
  BarChart3,
  Server,
  Workflow,
} from "lucide-react";

export default function SkillsMatrix() {
  const skills = [
    {
      category: "AI & Data Science",
      icon: Brain,
      color: "from-blue-500/15 to-blue-700/5 border-blue-400/30",
      items: [
        "Python",
        "Pandas / NumPy",
        "LLMs (Gemini, Llama, OpenAI)",
        "AI Agents / LangChain",
        "Data Visualization",
        "ML Workflows",
      ],
    },
    {
      category: "Data Engineering",
      icon: Workflow,
      color: "from-purple-500/15 to-purple-700/5 border-purple-400/30",
      items: [
        "ETL / ELT Pipelines",
        "SQL (PostgreSQL, MSSQL)",
        "BigQuery",
        "Snowflake",
        "Data Modeling (Star Schema)",
        "Orchestration (Inngest / Cron)",
      ],
    },
    {
      category: "Backend & Cloud",
      icon: Server,
      color: "from-green-500/15 to-green-700/5 border-green-400/30",
      items: [
        "Node.js / Express",
        "REST APIs",
        "Prisma ORM",
        "Supabase / Firebase",
        "Cloud Storage",
        "Authentication (Clerk)",
      ],
    },
    {
      category: "Full-Stack Development",
      icon: Code2,
      color: "from-amber-500/15 to-amber-700/5 border-amber-400/30",
      items: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "State Management",
        "Responsive UI / UX",
      ],
    },
    {
      category: "Analytics & BI",
      icon: BarChart3,
      color: "from-cyan-500/15 to-cyan-700/5 border-cyan-400/30",
      items: ["Power BI", "Tableau", "DAX / M", "Dashboards", "KPIs", "Reporting"],
    },
    {
      category: "Databases & Storage",
      icon: Database,
      color: "from-red-500/15 to-red-700/5 border-red-400/30",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Cloud DBs",
        "Data Warehousing",
        "Schema Design",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
        </motion.div>

        {/* PREMIUM SKILL GRID (masonry style) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {skills.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              <div
                className={`p-6 rounded-2xl shadow-lg 
                border bg-gradient-to-br ${cat.color}
                dark:bg-gray-800/40 backdrop-blur-sm
                hover:shadow-2xl transition-all`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon className="h-7 w-7 text-gray-800 dark:text-gray-100" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full 
                      bg-gray-200/70 dark:bg-gray-700/60
                      text-gray-900 dark:text-gray-200
                      hover:bg-gray-300/80 dark:hover:bg-gray-600
                      transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* METRIC BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-xl"
        >
          <div className="grid md:grid-cols-3 text-center gap-10">
            <div>
              <div className="text-4xl font-bold">12+</div>
              <p className="text-blue-100">AI & Data Engineering Tools</p>
            </div>
            <div>
              <div className="text-4xl font-bold">20+</div>
              <p className="text-blue-100">Full-Stack & Backend Technologies</p>
            </div>
            <div>
              <div className="text-4xl font-bold">35+</div>
              <p className="text-blue-100">Total Skills & Frameworks</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
