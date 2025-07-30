"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "CookSmartAI – AI for Kitchen and Diet",
      description:
        "A full-stack, AI-powered culinary platform that generates recipes based on user location, creates custom meal plans, analyzes nutrition, and scans and analyzes food images to give btter results.",
      longDescription:
        "CookSmartAI is a responsive, modern web application that combines advanced AI with culinary planning tools. Users can generate personalized recipes based on ingredients, create meal plans considering dietary preferences and budgets, and get deep nutritional analysis. The platform features an AI image scanner for food recognition, a global recipe hub with user submissions, and location-aware meal suggestions. Built with Next.js, Tailwind CSS, and Supabase, the app integrates AI models like Gemini and Pollination AI to deliver an intelligent cooking experience.",
      image: "/images/cooksmartai-cover.png",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Prisma",
        "Supabase",
        "Clerk",
        "Gemini AI",
        "Pollination AI",
        "Hugging Face",
        "cron-job.org",
      ],
      liveUrl: "https://cook-smart-ai.vercel.app",
      githubUrl: "https://github.com/DivyangP2003/CookSmartAI",
      duration: "July 2025",
      team: "Solo project",
      features: [
        "AI-powered recipe generator with dish image generation",
        "Custom meal plan creation with dietary preferences and budget options",
        "AI nutritional calculator with macro & micro nutrient breakdown",
        "AI image scanner to generate recipes or nutrition info from food photos",
        "Global recipe hub with advanced filters and user-generated content",
        "Location and time zone aware meal suggestions",
        "Favorites system with instant sharing via social platforms",
        "PDF meal plan downloads and shopping list generation",
        "Daily weighted rating updates via CRON jobs",
        "Fully responsive, cross-device compatible UI",
      ],
      challenges: [
        "Integrating multiple AI models for recipe generation and image creation",
        "Designing a flexible data model for recipes and meal plans using Prisma",
        "Building location-aware recommendations with time zone support",
        "Implementing real-time nutritional analysis with AI insights",
        "Ensuring secure authentication and seamless UX with Clerk",
      ],
    },

    {
      title: "ExpensIQ - AI-Powered Personal Finance Platform",
      description:
        "A full-stack, AI-powered platform that helps users manage income, expenses, budgets, and receive smart financial insights with feature of adding transaction by uploading relevant image.",
      longDescription:
        "ExpensIQ is a responsive, modern web application that combines AI with personal finance tools. Users can upload receipts for AI-based parsing using OCR and Gemini AI, automate recurring transactions, set budgets, and receive intelligent email reports. Features include interactive charts, smart filtering, multi-account support, secure authentication, and bot protection. Built with serverless background jobs using Inngest, and powered by a scalable PostgreSQL backend hosted on Supabase.",
      image: "/images/expensiq-cover.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Clerk",
        "Supabase",
        "Inngest",
        "Resend",
        "Recharts",
        "Arcjet",
      ],
      liveUrl: "https://expensiq.vercel.app",
      githubUrl: "https://github.com/DivyangP2003/expensiq",
      duration: "June 2025",
      team: "Solo project",
      features: [
        "AI-powered OCR receipt scanning using Gemini AI",
        "Smart transaction categorization and filtering",
        "Multi-account and custom category management",
        "Real-time budget monitoring with email alerts",
        "AI-generated monthly financial reports via Resend",
        "Recurring transaction automation using Inngest",
        "Interactive Recharts visualizations and summaries",
        "Google login via Clerk with full session security",
        "Bot and abuse protection via Arcjet",
        "Fully responsive and polished UI with ShadCN components",
      ],
      challenges: [
        "Parsing diverse receipt formats with OCR + AI",
        "Building serverless job workflows for recurring logic",
        "Designing a scalable transaction data model with Prisma",
        "Ensuring secure, protected routes with Clerk middleware",
        "Implementing budget monitoring logic with real-time alerts",
      ],
    },
    {
      title: "PulseMeet - Full-Stack Telemedicine Appointment App",
      description:
        "A telemedicine platform enabling secure video consultations, real-time scheduling, role-based access, and subscription-based billing.",
      longDescription:
        "PulseMeet is a comprehensive telemedicine app built with Next.js 14 App Router and a modern stack. It enables secure 1:1 video calls using Vonage, role-based authentication via Clerk, smart appointment booking, credit-based subscriptions, and admin controls. Patients can book real-time consultations, doctors manage availability and earnings, and admins oversee platform activity. The application features in-browser video calling, multi-role dashboards, real-time event workflows, and dark mode support—all deployed with Vercel CI/CD.",
      image: "/images/pulsemeet-cover.png",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "Prisma",
        "Clerk",
        "PostgreSQL (Neon)",
        "Vonage Video API",
        "Resend",
        "Vercel",
      ],
      liveUrl: "https://pulsemeet.vercel.app",
      githubUrl: "https://github.com/DivyangP2003/pulsemeet",
      duration: "June 2025",
      team: "Solo project",
      features: [
        "Clerk authentication with role-based dashboards (Patient, Doctor, Admin)",
        "Doctor onboarding with profile verification flow",
        "Smart scheduling and availability management",
        "Real-time appointment booking with conflict resolution",
        "Secure 1:1 video consultations powered by Vonage API",
        "Doctor notes and session metadata logging",
        "Credit-based subscriptions and billing with Clerk + Stripe",
        "Admin panel for user/doctor/transaction management",
        "Credit transaction ledger with audit trails",
        "Dark mode, mobile responsiveness, and polished UI with ShadCN",
      ],
      challenges: [
        "Building secure and scalable role-based access control",
        "Integrating Vonage API with dynamic token/session management",
        "Managing real-time scheduling logic and slot overlaps",
        "Automating credit billing workflows via Clerk and webhooks",
        "Designing a modular and scalable backend with Prisma + Neon",
      ],
    },
    {
      title: "Slooze - Inventory Optimization & Sales Analytics",
      description:
        "A data science solution for demand forecasting, inventory optimization, and sales analytics using real-world retail data.",
      longDescription:
        "Slooze Challenge is an end-to-end data analytics project focused on improving inventory efficiency and business intelligence. Built as a take-home challenge, it includes demand forecasting using time-series analysis, EOQ-based inventory optimization, ABC classification of SKUs, and data-driven insights into supplier and product performance. The solution applies exploratory data analysis, feature engineering, and custom visualizations to uncover sales trends and optimize supply chain decisions.",
      image: "/images/slooze-cover.jpeg",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
        "Time-Series Analysis",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/DivyangP2003/SloozeChallenge",
      duration: "5 days",
      team: "Solo project (Take-home challenge)",
      features: [
        "Exploratory data analysis on sales, purchase, and lead time data",
        "Time-series forecasting to predict future demand patterns",
        "Economic Order Quantity (EOQ) & reorder point calculation",
        "ABC classification of SKUs to prioritize inventory management",
        "Data-driven insights into supplier performance",
        "Visualizations of seasonal trends and sales peaks",
        "Custom functions to handle missing and outlier data",
      ],
      challenges: [
        "Preprocessing noisy and incomplete real-world retail data",
        "Building a modular and reusable EDA pipeline",
        "Designing accurate forecasting models with limited training data",
        "Balancing interpretability with statistical rigor in inventory models",
        "Communicating insights clearly through visualizations",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      longDescription:
        "A cutting-edge portfolio website built with the latest web technologies. Features smooth animations, dark mode support, responsive design, and optimized performance. The site showcases projects, skills, and professional journey with an engaging user experience.",
      image: "/images/portfolio-cover.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "JavaScript"],
      liveUrl: "https://portfolio.vercel.app",
      githubUrl: "#",
      duration: "July 2025",
      team: "Solo project",
      features: [
        "Smooth animations with Framer Motion",
        "Dark/light theme toggle",
        "SEO optimization and meta tags",
        "Fast loading with Next.js optimization",
        "Contact form with validation",
        "Project showcase with detailed modals",
        "Timeline for career journey",
      ],
      challenges: [
        "Implemented complex animations while maintaining performance",
        "Built accessible design following WCAG guidelines",
        "Optimized images and assets for fast loading",
        "Created reusable component architecture",
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of projects that showcase my skills in web development,
            design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer dark:bg-gray-700 dark:border-gray-600">
                <CardHeader className="p-0">
                  <div onClick={() => openModal(project)}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="dark:border-gray-500"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="dark:border-gray-500">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openModal(project)}
                    className="ml-auto"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
