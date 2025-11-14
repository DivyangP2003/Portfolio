"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export default function Timeline() {
  const timelineData = [
    {
      type: "education",
      title: "Master of Technology",
      organization: "Indian Institute Of Technology (IIT), Jodhpur",
      period: "2025–2026",
      description: "Department Rank: 1",
      icon: GraduationCap,
    },

    {
      type: "internship",
      title: "AI & Traffic Analytics Intern",
      organization: "AICOE Project, Ministry of Education",
      period: "May 2024 – July 2024",
      description: [
        "Developed a large-scale computer vision and analytics pipeline to process 150+ hours of traffic footage across 16 smart-city locations, enabling automated extraction of vehicle counts, speed profiles, congestion levels, and flow metrics.",
        "Applied statistical modelling, clustering, and anomaly detection to identify traffic patterns, peak-load behaviors, and irregular mobility events for data-driven urban planning.",
        "Experimented with generative AI and agent-based digital-twin simulations to model traffic flows and support predictive infrastructure planning.",
      ],
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Bachelor of Technology",
      organization: "Indian Institute Of Technology (IIT), Jodhpur",
      period: "2021–2025",
      description:
        "Graduated with a CGPA of 8.24. Achieved Department Rank: 4.",
      icon: GraduationCap,
    },
    {
      type: "achievement",
      title: "JEE Advanced: Top 1% Qualifier",
      organization: "",
      period: "2021",
      description:
        "Qualified among the top 1% of over one million candidates in India's most competitive engineering entrance exam.",
      icon: Award,
    },
    {
      type: "education",
      title: "Senior Secondary (Class XII)",
      organization: "Jaipuriar School, Navi Mumbai (CBSE)",
      period: "2018–2020",
      description: "Scored 94.6% in the Science stream.",
      icon: GraduationCap,
    },
    {
      type: "education",
      title: "Matriculation (Class X)",
      organization: "Jindal Vidya Mandir, Salav (CBSE)",
      period: "2017–2018",
      description:
        "Scored 97.4% and received the CBSE Certificate of Merit for being in the top 0.1%.",
      icon: GraduationCap,
    },
  ];

  const typeColor = {
    education: "from-blue-500 to-cyan-500",
    internship: "from-yellow-500 to-yellow-300",
    achievement: "from-green-500 to-emerald-500",
  };

  return (
    <section id="journey" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            A timeline of my academic path, technical experiences, and
            achievements.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12 ml-16">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Node */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`absolute -left-[3.1rem] top-2 w-8 h-8 rounded-full shadow-lg border-4 border-white dark:border-gray-900 bg-gradient-to-r ${typeColor[item.type]}`}
                ></motion.div>

                {/* Card */}
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all cursor-default">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${typeColor[item.type]} mb-4`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {item.organization}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {item.period}
                  </p>

                  {/* Bullet description */}
                  {Array.isArray(item.description) ? (
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc ml-4">
                      {item.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
