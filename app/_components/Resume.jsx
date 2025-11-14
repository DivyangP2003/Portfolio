"use client";

import { useState } from "react";
import {
  Download,
  Eye,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");

  const personalInfo = {
    name: "Divyang Deepak Palshetkar",
    phone: "+91-9359849585",
    email: "palshetkardivyang@gmail.com",
    linkedin: "https://www.linkedin.com/in/divyang-palshetkar-11198a338/",
    github: "https://github.com/DivyangP2003",
    degree: "B.Tech-M.Tech (Dual Degree)",
    institute: "Indian Institute of Technology Jodhpur",
    CGPA: "8.24/10",
    deptRank: "1",
  };

  const education = [
    {
      degree: "M.Tech",
      institute: "Indian Institute of Technology Jodhpur",
      board: "IIT JODHPUR",
      score: "Pursuing",
      year: "2025",
      highlight: "Department Rank: 1",
    },
    {
      degree: "B.Tech",
      institute: "Indian Institute of Technology Jodhpur",
      board: "IIT JODHPUR",
      score: "8.24 CGPA",
      year: "2021-25",
      highlight: "Dept. Rank: 4",
    },
    {
      degree: "Senior Secondary",
      institute: "Jaipuriar School, Navi Mumbai",
      board: "CBSE",
      score: "94.6%",
      year: "2019-20",
    },
    {
      degree: "Matriculation",
      institute: "Jindal Vidya Mandir, Salav",
      board: "CBSE",
      score: "97.4%",
      year: "2017-18",
    },
  ];

  const workExperience = [
    {
      title: "AI & Traffic Analytics Intern",
      role: "Internship",
      location: "IIT Jodhpur",
      duration: "May 2024 – July 2024",
      certificate: true,
      achievements: [
        "Built a large-scale computer vision and analytics pipeline to process 150+ hours of traffic footage from 16 smart-city locations.",
        "Automated extraction of actionable traffic metrics including vehicle counts, speed profiles, congestion levels, and lane-flow behavior.",
        "Performed statistical modeling, clustering, and anomaly detection to uncover mobility patterns and peak-hour traffic dynamics.",
        "Explored generative AI and agent-based digital-twin simulations to model traffic flows and support predictive infrastructure planning.",
      ],
    },
    // {
    //   title: "Jal Jeevan Mission, Ministry of Jal Shakti",
    //   role: "Internship",
    //   location: "Rajasthan",
    //   duration: "May 2024 - July 2024",
    //   certificate: true,
    //   achievements: [
    //     "Conducted water surveys and mapped 40+ dry borewells using GPS, QGIS, and Global Mapper to optimize groundwater recharge",
    //     "Ensured compliance with environmental standards for sustainable water resource management",
    //     "Designed 3D filtration models and horizontal recharge techniques, improving groundwater replenishment efficiency by 30%",
    //     "Developed REST APIs to integrate GIS data with an analytics dashboard",
    //   ],
    // },
  ];

  const projects = [
    // 1. MOST IMPORTANT — Agentic + Financial AI
    {
      category: "AI",
      title:
        "AI Market Intelligence Platform — Multi-Agent Financial Analytics System",
      date: "Oct 2025",
      type: "AI + Financial Data Science",
      technologies: [
        "Python",
        "Gemini",
        "LLMs",
        "Streamlit",
        "Pandas",
        "Statsmodels",
        "Plotly",
      ],
      liveDemo: "https://aifinanceagentllm.streamlit.app/",
      github: "https://github.com/DivyangP2003/ai_finance_agent_llm",
      description: [
        "Built a multi-agent financial intelligence system (Market, Risk, Sentiment, Fundamentals, News, Portfolio) enabling analysts to generate insights 10× faster.",
        "Engineered automated data pipelines for 500+ tickers using OHLCV data, macro indicators, news streams, and corporate fundamentals.",
        "Implemented volatility modeling, VaR/CVaR risk metrics, drawdowns, and portfolio optimization simulations improving analytical accuracy by 35%.",
        "Developed rich Plotly dashboards enabling real-time exploratory financial analysis.",
      ],
    },

    // 2. Agentic AI System
    {
      category: "AI",
      title: "Multimodal AI Travel Planning Agent",
      date: "Jul 2025",
      type: "Agentic AI",
      technologies: ["Python", "LangChain", "Llama", "Geopy"],
      github: "https://github.com/DivyangP2003/ai-agent-travel-planner",
      description: [
        "Developed an autonomous LLM agent capable of multi-step reasoning and tool calling for optimized itinerary generation.",
        "Integrated geo-data, travel APIs, routing constraints, and preference scoring to produce contextual travel plans.",
        "Implemented agent memory, dynamic task decomposition, and real-time environment awareness.",
      ],
    },

    // 3. Data Engineering — High relevance
    {
      category: "Data Engineering",
      title: "Swiggy — End-to-End Data Engineering Pipeline",
      date: "Aug 2025",
      type: "Data Engineering / ETL Project",
      technologies: [
        "Python",
        "SQL",
        "Snowflake",
        "ETL",
        "Medallion Architecture",
      ],
      github: "https://github.com/DivyangP2003/SloozeChallenge.git",
      description: [
        "Designed a production-grade ETL pipeline with Medallion Architecture (Bronze → Silver → Gold).",
        "Built dimension/fact models with incremental loading & audit logging, reducing pipeline latency by 40%.",
        "Created automated KPI pipelines for delivery efficiency analyses enabling BI dashboards with <1s query time.",
      ],
    },

    // 4. Data Warehouse Project
    {
      category: "Data Engineering",
      title: "Data Warehouse & Analytics Project",
      date: "Jul 2025",
      type: "Analytics Engineering",
      technologies: ["MS SQL Server", "ETL", "Star Schema"],
      github: "https://github.com/DivyangP2003/sql-data-warehouse",
      description: [
        "Architected a scalable DWH with Bronze-Silver-Gold structured modeling.",
        "Designed star-schema fact/dimension tables optimized for analytical workloads.",
        "Implemented SQL performance optimizations improving query speed by 60%.",
      ],
    },

    // 5. Data Science — Forecasting
    {
      category: "Data Science",
      title: "Inventory Optimization & Sales Analytics",
      date: "Apr 2025",
      type: "Forecasting",
      technologies: ["Python", "Pandas", "Time-Series"],
      github: "https://github.com/DivyangP2003/SloozeChallenge.git",
      description: [
        "Built a demand forecasting pipeline with EOQ optimization and seasonal decomposition.",
        "Performed ABC classification and peak-season analysis reducing simulated stockouts by 25%.",
      ],
    },

    // 6. Full-Stack + AI in Finance
    {
      category: "Full-Stack",
      title: "ExpensIQ — AI-Powered Personal Finance",
      date: "Oct 2025",
      type: "Full-Stack + AI",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Supabase",
        "Gemini AI",
        "OCR",
        "Inngest",
      ],
      liveDemo: "https://expensiq.vercel.app",
      github: "https://github.com/DivyangP2003/expensiq",
      description: [
        "Built an AI-powered finance automation app with OCR for expense extraction and personalized budgeting.",
        "Implemented ETL-style recurring workflows using Inngest for automated data processing.",
        "Designed analytical dashboards providing monthly financial insights.",
      ],
    },

    // 7. Multimodal AI — Image + LLM
    {
      category: "Full-Stack",
      title: "CookSmartAI — Multimodal AI Platform",
      date: "Aug 2025",
      type: "AI + Full-Stack",
      technologies: [
        "Next.js",
        "Prisma",
        "Supabase",
        "Gemini",
        "Hugging Face",
        "Pollination AI",
      ],
      liveDemo: "https://cook-smart-ai.vercel.app",
      github: "https://github.com/DivyangP2003/CookSmartAI",
      description: [
        "Developed a multimodal AI system for recipe generation, nutrition inference, and meal planning.",
        "Implemented image-based ingredient recognition using HuggingFace and Pollination AI.",
      ],
    },

    // 8. Deep Learning Project
    {
      category: "Data Science",
      title: "Fake News Detection — LSTM",
      date: "May 2025",
      type: "Deep Learning",
      technologies: ["Python", "TensorFlow", "NLP"],
      github:
        "https://github.com/DivyangP2003/Fake-News-Detection-with-TensorFlow",
      description: [
        "Trained an LSTM classifier achieving >90% accuracy for fake news classification.",
        "Built preprocessing pipelines including tokenization, lemmatization, and embedding generation.",
      ],
    },

    // 9. BI + Analytics Dashboard
    {
      category: "Data Science",
      title: "Spotify Streaming Analytics Dashboard",
      date: "May 2025",
      type: "BI + Analytics",
      technologies: ["Power BI", "DAX", "SQL"],
      description: [
        "Built a BI dashboard analyzing global streaming trends and popularity metrics.",
        "Designed SQL + DAX transformations improving dashboard refresh time by 35%.",
      ],
    },

    // 10. Telemedicine full-stack project
    {
      category: "Full-Stack",
      title: "PulseMeet — Telemedicine Platform",
      date: "Jun 2025",
      type: "Full-Stack Engineering",
      technologies: ["Next.js", "Prisma", "Vonage", "Clerk", "Stripe"],
      liveDemo: "https://pulsemeet.vercel.app",
      github: "https://github.com/DivyangP2003/pulsemeet",
      description: [
        "Developed a secure telemedicine system enabling real-time video consultations.",
        "Integrated role-based access control, payments, and appointment scheduling.",
      ],
    },

    // 11. ML + UI Project
    {
      category: "AI",
      title: "DrawAI — iPad Math Clone",
      date: "Jun 2025",
      type: "ML + Frontend",
      technologies: ["Next.js", "Canvas", "TensorFlow.js"],
      github: "https://github.com/DivyangP2003/draw-ai",
      liveDemo: "https://draw-ai-ecru.vercel.app/",
      description: [
        "Built a real-time handwriting recognition canvas using TensorFlow.js.",
        "Implemented mathematical parsing and instant equation solving.",
      ],
    },
  ];

  const skills = {
    "AI & Data Science": [
      "Python",
      "Pandas",
      "NumPy",
      "LLMs (Gemini, Llama, OpenAI)",
      "AI Agents",
      "LangChain",
      "OCR",
      "Data Visualization",
    ],
    "Data Engineering": [
      "SQL",
      "PostgreSQL",
      "MSSQL",
      "BigQuery",
      "Snowflake",
      "ETL/ELT Pipelines",
      "Data Modeling",
      "Inngest",
      "Orchestration",
    ],
    "Backend & Infrastructure": [
      "Node.js",
      "Express",
      "REST APIs",
      "Prisma",
      "Supabase",
      "Firebase",
    ],
    "Frontend & Full-Stack": [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
    ],
    Tools: [
      // "QGIS", "TRAZER",
      "Git",
      "Vercel",
      "Clerk",
      "Arcjet",
      "Stripe",
      "Cron Jobs",
    ],
  };

  const positions = [
    {
      title: "Festival Chief",
      organization: "Ganeshotsav '24 IIT Jodhpur",
      description:
        "Organized cultural events, leading a team of 200+ volunteers",
      year: "2024",
    },
    {
      title: "Head",
      organization: "Public Relation Team, EDIFICIO",
      year: "2023",
    },
  ];

  const achievements = [
    {
      title: "JEE-Advanced (2021)",
      description: "Qualified in top 1% among 1 million JEE aspirants",
      year: "2021",
    },
    {
      title: "District Topper, Class X",
      year: "2018",
    },
    {
      title: "Certificate of Merit from CBSE",
      description:
        "For being in top 0.1 percent candidates of CBSE Board Exam 2017-18",
      year: "2018",
    },
    {
      title: "Rank-26, Maharashtra Talent Search Examination (MTSE)",
      year: "2017",
    },
  ];

  const sections = [
    { id: "overview", label: "Overview", icon: Eye },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Award },
    { id: "achievements", label: "Achievements", icon: Trophy },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/DivyangPalshetkar_Resume_FullStack.pdf"; // File placed in public folder
    link.download = "Divyang_Palshetkar_Resume_FullStack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my education, experience, and
            achievements in technology and engineering.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24 dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <CardTitle className="dark:text-white">Sections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                        : "hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <section.icon className="mr-3 h-4 w-4" />
                    {section.label}
                  </motion.button>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {/* Overview Section */}
            {activeSection === "overview" && (
              <Card className="dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="text-2xl dark:text-white">
                    {personalInfo.name}
                  </CardTitle>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {personalInfo.degree}, {personalInfo.institute}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    CGPA : {personalInfo.CGPA} | Dept. Rank:{" "}
                    {personalInfo.deptRank}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Phone className="mr-3 h-4 w-4" />
                      {personalInfo.phone}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Mail className="mr-3 h-4 w-4" />
                      {personalInfo.email}
                    </div>

                    <div className="flex items-center">
                      <Github className="mr-3 h-4 w-4 text-gray-600 dark:text-gray-300" />
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        GitHub Profile
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="mr-3 h-4 w-4 text-gray-600 dark:text-gray-300" />
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Education Section */}
            {activeSection === "education" && (
              <Card className="dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="dark:text-white">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-blue-500 pl-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {edu.institute}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {edu.board}
                          </p>
                          {edu.highlight && (
                            <Badge className="mt-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                              {edu.highlight}
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-blue-600 dark:text-blue-400">
                            {edu.score}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {edu.year}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Experience Section */}
            {activeSection === "experience" && (
              <Card className="dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Work Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {workExperience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-purple-500 pl-4"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400">
                            {exp.role}
                          </p>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                            <MapPin className="mr-1 h-3 w-3" />
                            {exp.location}
                            {exp.certificate && (
                              <Badge className="ml-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                                Certificate
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.duration}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                          >
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Projects Section */}
            {activeSection === "projects" && (
              <Card className="dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="dark:text-white">Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-green-500 pl-4"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold dark:text-white">
                            {project.title}
                          </h3>
                          <p className="text-green-600 dark:text-green-400">
                            {project.type}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="dark:border-gray-500"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {project.date}
                          </p>
                          <div className="flex gap-2 mt-2">
                            {project.liveDemo && (
                              <Button size="sm" variant="outline" asChild>
                                <a
                                  href={project.liveDemo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            <Button size="sm" variant="outline" asChild>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                GitHub
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {project.description.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                          >
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Skills Section */}
            {activeSection === "skills" && (
              <Card className="dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="dark:text-white">Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(skills).map(
                    ([category, skillList], index) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h3 className="text-lg font-semibold dark:text-white mb-3">
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <motion.div
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-gray-200">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )
                  )}
                </CardContent>
              </Card>
            )}

            {/* Achievements Section */}
            {activeSection === "achievements" && (
              <Card className="dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Achievements & Positions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white mb-4">
                      Positions of Responsibility
                    </h3>
                    <div className="space-y-4">
                      {positions.map((position, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-l-4 border-orange-500 pl-4"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold dark:text-white">
                                {position.title}
                              </h4>
                              <p className="text-orange-600 dark:text-orange-400">
                                {position.organization}
                              </p>
                              {position.description && (
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                                  {position.description}
                                </p>
                              )}
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {position.year}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Separator className="dark:bg-gray-600" />

                  <div>
                    <h3 className="text-lg font-semibold dark:text-white mb-4">
                      Miscellaneous Achievements
                    </h3>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-l-4 border-yellow-500 pl-4"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold dark:text-white">
                                {achievement.title}
                              </h4>
                              {achievement.description && (
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                                  {achievement.description}
                                </p>
                              )}
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {achievement.year}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
