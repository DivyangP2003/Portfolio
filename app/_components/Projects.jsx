"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Github } from "lucide-react";
import { Zap, Users, Code } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="py-20 bg-[#0B0F19] text-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        {/* FILTER BAR */}
        <div className="flex flex-wrap gap-4 mb-10">
          {["All", "AI/ML", "Data Engineering", "Data Science", "Full-Stack"].map(
            (cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(cat)}
                className={`
          px-4 py-2 rounded-full text-sm font-medium border transition 
          ${
            activeFilter === cat
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
          }
        `}
              >
                {cat}
              </motion.button>
            )
          )}
        </div>

        {/* GRID — 3 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects
            .filter(
              (p) => activeFilter === "All" || p.category === activeFilter
            )
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111827] rounded-2xl overflow-hidden border border-white/5 shadow-xl cursor-pointer hover:shadow-2xl hover:scale-[1.01] transition"
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail */}
                <div className="relative w-full h-52">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-blue-400">{project.subtitle}</p>
                  </div>

                  <p className="text-gray-300 text-sm">
                    {project.descriptionShort}
                  </p>

                  {/* Impact Bar (Flagship Style) */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 text-xs">
                    <span className="font-semibold">📊 Impact:</span>{" "}
                    {project.impact.join(" | ")}
                  </div>

                  {/* FEATURE CARDS — EXACT FLAGSHIP STYLE */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {project.features?.map((feat, idx) => (
                      <div
                        key={idx}
                        className="
                        flex flex-col items-center justify-center text-center
                        py-4 px-4
                        rounded-xl
                        bg-white/5 border border-white/10
                        hover:bg-white/10 transition
                        h-24
                      "
                      >
                        <feat.icon className="h-5 w-5 text-blue-400 mb-2" />
                        <span className="text-sm text-gray-200 leading-tight">
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* TECH STACK — FLAGSHIP STYLE CHIPS */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="
                        px-3 py-1 text-xs rounded-full
                        bg-blue-900/30 border border-blue-700/30
                        text-blue-200
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS — FLAGSHIP STYLE */}
                  <div className="flex gap-3 mt-4">
                    {/* Live Demo */}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="
                        flex-1 flex items-center justify-center gap-2
                        px-4 py-2 rounded-lg font-medium text-sm
                        bg-gradient-to-r from-blue-600 to-purple-600
                        hover:opacity-90 transition
                      "
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                    {/* Code */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="
                        flex-1 flex items-center justify-center gap-2
                        px-4 py-2 rounded-lg font-medium text-sm
                        bg-white/5 border border-white/10
                        hover:bg-white/10 transition
                      "
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
