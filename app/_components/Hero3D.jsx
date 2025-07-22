"use client";

import { useRef, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

// Tech-themed floating elements
class TechElement {
  constructor(canvas, theme, type) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.theme = theme;
    this.type = type;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 20 + 15;
    this.opacity = Math.random() * 0.3 + 0.1;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.01;
    this.pulsePhase = Math.random() * Math.PI * 2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotationSpeed;
    this.pulsePhase += 0.02;

    // Wrap around screen
    if (this.x < -50) this.x = this.canvas.width + 50;
    if (this.x > this.canvas.width + 50) this.x = -50;
    if (this.y < -50) this.y = this.canvas.height + 50;
    if (this.y > this.canvas.height + 50) this.y = -50;

    // Pulsing effect
    this.currentOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.1;
  }

  draw() {
    this.ctx.save();
    this.ctx.globalAlpha = this.currentOpacity;
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.rotation);

    const isDark = this.theme === "dark";
    const primaryColor = isDark ? "#60A5FA" : "#3B82F6";
    const secondaryColor = isDark ? "#A78BFA" : "#8B5CF6";
    const accentColor = isDark ? "#34D399" : "#10B981";

    this.ctx.strokeStyle = primaryColor;
    this.ctx.fillStyle = primaryColor;
    this.ctx.lineWidth = 2;

    switch (this.type) {
      case "brackets":
        this.drawBrackets();
        break;
      case "circuit":
        this.drawCircuit();
        break;
      case "binary":
        this.drawBinary();
        break;
      case "hexagon":
        this.drawHexagon();
        break;
      case "arrow":
        this.drawArrow();
        break;
      case "gear":
        this.drawGear();
        break;
      default:
        this.drawCode();
    }

    this.ctx.restore();
  }

  drawBrackets() {
    const size = this.size;
    this.ctx.beginPath();
    // Left bracket
    this.ctx.moveTo(-size / 2, -size / 2);
    this.ctx.lineTo(-size / 3, -size / 2);
    this.ctx.moveTo(-size / 2, -size / 2);
    this.ctx.lineTo(-size / 2, size / 2);
    this.ctx.moveTo(-size / 2, size / 2);
    this.ctx.lineTo(-size / 3, size / 2);

    // Right bracket
    this.ctx.moveTo(size / 2, -size / 2);
    this.ctx.lineTo(size / 3, -size / 2);
    this.ctx.moveTo(size / 2, -size / 2);
    this.ctx.lineTo(size / 2, size / 2);
    this.ctx.moveTo(size / 2, size / 2);
    this.ctx.lineTo(size / 3, size / 2);

    this.ctx.stroke();
  }

  drawCircuit() {
    const size = this.size;
    this.ctx.beginPath();
    // Circuit pattern
    this.ctx.moveTo(-size / 2, 0);
    this.ctx.lineTo(-size / 4, 0);
    this.ctx.lineTo(-size / 4, -size / 4);
    this.ctx.lineTo(size / 4, -size / 4);
    this.ctx.lineTo(size / 4, size / 4);
    this.ctx.lineTo(size / 2, size / 4);

    // Circuit nodes
    this.ctx.fillRect(-size / 4 - 2, -2, 4, 4);
    this.ctx.fillRect(size / 4 - 2, -size / 4 - 2, 4, 4);
    this.ctx.fillRect(size / 4 - 2, size / 4 - 2, 4, 4);

    this.ctx.stroke();
  }

  drawBinary() {
    const size = this.size;
    this.ctx.font = `${size / 2}px monospace`;

    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    const binary = Math.random() > 0.5 ? "1" : "0";
    this.ctx.fillText(binary, 0, 0);
  }

  drawHexagon() {
    const size = this.size / 2;
    this.ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const x = Math.cos(angle) * size;
      const y = Math.sin(angle) * size;
      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawArrow() {
    const size = this.size;
    this.ctx.beginPath();
    // Arrow shaft
    this.ctx.moveTo(-size / 2, 0);
    this.ctx.lineTo(size / 4, 0);
    // Arrow head
    this.ctx.moveTo(size / 4, 0);
    this.ctx.lineTo(size / 4 - size / 6, -size / 6);
    this.ctx.moveTo(size / 4, 0);
    this.ctx.lineTo(size / 4 - size / 6, size / 6);
    this.ctx.stroke();
  }

  drawGear() {
    const size = this.size / 2;
    const teeth = 8;
    this.ctx.beginPath();

    for (let i = 0; i < teeth * 2; i++) {
      const angle = (i * Math.PI) / teeth;
      const radius = i % 2 === 0 ? size : size * 0.8;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }
    this.ctx.closePath();
    this.ctx.stroke();

    // Inner circle
    this.ctx.beginPath();
    this.ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  drawCode() {
    const size = this.size;
    this.ctx.font = `${size / 2}px monospace`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    const symbols = ["</>", "{}", "[]", "();", "=>", "!=", "==", "&&", "||"];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    this.ctx.fillText(symbol, 0, 0);
  }
}

// Simple floating dots for connection lines
class ConnectionDot {
  constructor(canvas, theme) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.theme = theme;
    this.reset();
    this.connections = [];
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = 3;
    this.opacity = 0.4;
  }

  update(dots) {
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around
    if (this.x < 0) this.x = this.canvas.width;
    if (this.x > this.canvas.width) this.x = 0;
    if (this.y < 0) this.y = this.canvas.height;
    if (this.y > this.canvas.height) this.y = 0;

    // Find nearby dots for connections
    this.connections = [];
    dots.forEach((dot) => {
      if (dot !== this) {
        const dx = this.x - dot.x;
        const dy = this.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          this.connections.push({ dot, distance });
        }
      }
    });
  }

  draw() {
    const isDark = this.theme === "dark";
    const dotColor = isDark ? "#60A5FA" : "#3B82F6";
    const lineColor = isDark
      ? "rgba(96, 165, 250, 0.2)"
      : "rgba(59, 130, 246, 0.2)";

    // Draw connections
    this.ctx.strokeStyle = lineColor;
    this.ctx.lineWidth = 1;
    this.connections.forEach(({ dot, distance }) => {
      const opacity = (150 - distance) / 150;
      this.ctx.globalAlpha = opacity * 0.3;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.lineTo(dot.x, dot.y);
      this.ctx.stroke();
    });

    // Draw dot
    this.ctx.globalAlpha = this.opacity;
    this.ctx.fillStyle = dotColor;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

export default function Hero3D() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const elementsRef = useRef([]);
  const dotsRef = useRef([]);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initElements = () => {
      elementsRef.current = [];
      dotsRef.current = [];

      // Tech elements
      const techTypes = [
        "brackets",
        "circuit",
        "binary",
        "hexagon",
        "arrow",
        "gear",
        "code",
      ];
      for (let i = 0; i < 15; i++) {
        const type = techTypes[i % techTypes.length];
        elementsRef.current.push(new TechElement(canvas, theme, type));
      }

      // Connection dots
      for (let i = 0; i < 8; i++) {
        dotsRef.current.push(new ConnectionDot(canvas, theme));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connection dots first (background)
      dotsRef.current.forEach((dot) => {
        dot.theme = theme;
        dot.update(dotsRef.current);
        dot.draw();
      });

      // Update and draw tech elements
      elementsRef.current.forEach((element) => {
        element.theme = theme;
        element.update();
        element.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initElements();

    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
    >
      {/* Tech Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 shadow-2xl border-4 border-white/10 backdrop-blur-sm"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Divyang Palshetkar
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Full-Stack Developer & UI/UX Designer passionate about creating
            beautiful, functional web experiences that make a difference.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  (window.location.href = "mailto:palshetkardivyang@gmail.com")
                }
                size="lg"
                className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white shadow-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  window.open("https://github.com/DivyangP2003", "_blank")
                }
                variant="outline"
                size="lg"
                className="dark:border-gray-600 dark:text-gray-300 bg-transparent backdrop-blur-sm"
              >
                <Github className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/DivyangP2003" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/divyang-palshetkar-11198a338/",
              },
              { icon: Mail, href: "mailto:palshetkardivyang@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            onClick={scrollToAbout}
            className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
