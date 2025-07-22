"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Divyang Palshetkar
            </h3>
            <p className="text-gray-400 mt-2">Full-Stack Developer & UI/UX Designer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/DivyangP2003", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/divyang-palshetkar-11198a338/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:palshetkardivyang@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Divyang Palshetkar. Always building. Always learning.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
