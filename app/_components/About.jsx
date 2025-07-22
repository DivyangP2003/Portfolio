"use client";

import { Code, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm Divyang Palshetkar, a full-stack developer and tech enthusiast
            from IIT Jodhpur. I love crafting high-performance, AI-driven
            applications with elegant UI and robust backends. My focus is on
            blending design, data, and interactivity to solve real-world
            problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in web development began with a curiosity to understand
              how websites are built. As I explored HTML, CSS, and JavaScript, I
              became excited about creating simple web pages and slowly started
              building more interactive projects.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              While I’m still learning and growing as a developer, I enjoy
              experimenting with new technologies, working on small personal
              projects, and learning from the developer community through blogs,
              videos, and open-source code.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "Supabase",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                icon: Code,
                title: "Clean Code",
                description:
                  "Writing maintainable, scalable code that follows best practices and industry standards.",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description:
                  "Creating intuitive interfaces that provide exceptional user experiences across all devices.",
                color: "text-purple-600 dark:text-purple-400",
              },
              {
                icon: Zap,
                title: "Performance",
                description:
                  "Optimizing applications for speed, accessibility, and search engine visibility.",
                color: "text-yellow-600 dark:text-yellow-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700">
                  <CardContent className="p-6">
                    <item.icon className={`h-12 w-12 ${item.color} mb-4`} />
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
