"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

function ImageSlider({ images, onZoom }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full">
      <Image
        src={images[index]}
        alt="Project image"
        fill
        onClick={() => onZoom(images[index])}
        className="object-cover cursor-pointer transition-all duration-300"
      />

      {/* Prev Button */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 
                   bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 
                   bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState("overview");

  const [zoomImage, setZoomImage] = useState(null); // <-- ADDED

  const tabs = project.tabs || [];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="
          relative bg-[#0B0F19] text-white 
          w-[92%] max-w-6xl h-[90vh]
          rounded-2xl border border-white/10 shadow-2xl 
          overflow-hidden flex flex-col
        "
      >
        {/* ============================== TOP FIXED SECTION ============================== */}
        <div className="p-6 border-b border-white/10">
          {/* HEADER */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-blue-400 text-sm mt-1">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition text-gray-400"
            >
              <X size={22} />
            </button>
          </div>

          {/* MAIN IMAGE / IMAGE SLIDER */}
          {(project.images?.length > 0 || project.image) && (
            <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10">
              {project.images?.length > 1 ? (
                <ImageSlider images={project.images} onZoom={setZoomImage} />
              ) : (
                <Image
                  src={
                    project.images?.length ? project.images[0] : project.image
                  }
                  alt={project.title}
                  fill
                  onClick={() =>
                    setZoomImage(
                      project.images?.length
                        ? project.images[0]
                        : project.image
                    )
                  }
                  className="object-cover cursor-pointer"
                />
              )}
            </div>
          )}

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies?.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 mt-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                className="flex-1 text-center py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
              >
                🌐 Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="flex-1 text-center py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
              >
                💻 GitHub Repo
              </a>
            )}
          </div>
        </div>

        {/* ============================== BOTTOM SECTION ============================== */}
        <div className="flex flex-1 overflow-hidden">
          {/* SIDEBAR */}
          <aside
            className="
              w-64 bg-[#111827] border-r border-white/10 
              p-6 overflow-y-auto
            "
          >
            <nav className="space-y-2">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition
                    ${
                      activeTab === t.key
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-white/5"
                    }
                  `}
                >
                  {t.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* CONTENT PANEL */}
          <main className="flex-1 p-8 overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4">
              {tabs.find((t) => t.key === activeTab)?.label}
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              {project.descriptionSections?.[activeTab]?.map((line, idx) => {
                const isBullet = line.startsWith("•");
                return (
                  <div key={idx} className="flex gap-3">
                    {isBullet && <span className="text-blue-400 mt-1">•</span>}
                    <p>{line.replace("• ", "")}</p>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </motion.div>

      {/* ============================== FULLSCREEN IMAGE POPUP ============================== */}
      {zoomImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex justify-center items-center"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative w-[90%] max-w-4xl h-[80%]">
            <Image
              src={zoomImage}
              alt="zoomed"
              fill
              className="object-contain"
            />

            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white"
            >
              <X size={28} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
