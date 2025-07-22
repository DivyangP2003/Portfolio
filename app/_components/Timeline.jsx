"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export default function Timeline() {
  const timelineData = [
    {
      type: "education",
      title: "Master of Technology",
      organization: "Indian Institute Of Technology (IIT), Jodhpur",
      period: "2025–2026 (Expected)",
      description: "",
      icon: GraduationCap,
    },

    {
      type: "internship",
      title: "AI & Traffic Analysis",
      organization: "AICOE Project, Ministry of Education",
      period: "May 2024 – July 2024",
      description:
        "Analyzed 150+ hours of real-time traffic footage using TRAZER, applied Generative Causal AI for digital twin modeling, and integrated models into a React & Node.js dashboard to improve infrastructure planning by 40%.",
      icon: Briefcase,
    },
    {
      type: "internship",
      title: "Geospatial Analytics and Groundwater Recharging",
      organization: "Jal Jeevan Mission, Ministry of Jal Shakti",
      period: "May 2024 – July 2024",
      description:
        "Mapped 40+ dry borewells using QGIS and Global Mapper, developed 3D groundwater recharge systems, and created REST APIs for GIS-integrated analytics dashboards.",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Bachelor of Technology",
      organization: "Indian Institute Of Technology (IIT), Jodhpur",
      period: "2021–2025",
      description: "Achieved CGPA of 8.24 with Departmental Rank of 4.",
      icon: GraduationCap,
    },
    {
      type: "achievement",
      title: "JEE Advanced: Top 1% Qualifier",
      organization: "",
      period: "2021",
      description:
        "Qualified among the top 1% of over 1 million aspirants in India's most competitive engineering entrance exam.",
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
        "Scored 97.4% and was awarded a CBSE Certificate of Merit for being in the top 0.1%.",
      icon: GraduationCap,
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "education":
        return "from-blue-500 to-cyan-500";
      case "work":
        return "from-purple-500 to-pink-500";
      case "achievement":
        return "from-green-500 to-emerald-500";
      case "internship":
        return "from-yellow-500 to-yellow-500/30";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A timeline of my education and key achievements in the world of
            technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${getTypeColor(
                        item.type
                      )} mb-3`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {item.organization}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {item.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-4 h-4 bg-gradient-to-r ${getTypeColor(
                    item.type
                  )} rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10`}
                ></motion.div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
