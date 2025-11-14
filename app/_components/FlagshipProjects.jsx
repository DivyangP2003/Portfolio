"use client";

import { ExternalLink, Github, Zap, Users, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FlagshipProjects() {
  const flagshipProjects = [
    {
      title: "CookSmartAI",
      subtitle: "AI-Powered Culinary Platform",
      description: "Full-stack AI platform generating recipes, meal plans, and nutritional analysis with image scanning capabilities.",
      impact: "500+ users | 2000+ recipes generated",
      technologies: ["Next.js", "Supabase", "Gemini AI", "Tailwind CSS"],
      image: "/images/cooksmartai-cover.png",
      liveUrl: "https://cook-smart-ai.vercel.app",
      githubUrl: "https://github.com/DivyangP2003/CookSmartAI",
      highlightIcons: [Zap, Users, Code],
      highlightTexts: ["AI Recipe Generation", "Custom Meal Plans", "Nutrition Analysis"],
    },
    {
      title: "ExpensIQ",
      subtitle: "AI Finance Management Platform",
      description: "Intelligent expense tracker with AI-powered receipt scanning, budget monitoring, and automated financial reports.",
      impact: "Real-time insights | Smart categorization",
      technologies: ["Next.js", "Prisma", "Clerk", "Inngest"],
      image: "/images/expensiq-cover.png",
      liveUrl: "https://expensiq.vercel.app",
      githubUrl: "https://github.com/DivyangP2003/expensiq",
      highlightIcons: [Zap, Users, Code],
      highlightTexts: ["OCR Receipt Scanning", "Budget Alerts", "AI Reports"],
    },
  ];

  return (
    <section id="flagship" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Flagship Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My most impactful work showcasing full-stack expertise, AI integration, and user-centric design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {flagshipProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Project Image */}
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay with Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-200">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Project Details Card */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    📊 Impact: <span className="text-blue-600 dark:text-blue-400">{project.impact}</span>
                  </p>
                </div>

                {/* Key Highlights - Fixed dynamic icon rendering */}
                <div className="grid grid-cols-3 gap-3">
                  {project.highlightIcons.map((IconComponent, hIndex) => (
                    <motion.div
                      key={hIndex}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700"
                    >
                      <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {project.highlightTexts[hIndex]}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
