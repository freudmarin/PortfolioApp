"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import ContactSection from "./ContactSection";
import { ReactNode } from "react";
import DashboardCard from "./DashboardCard";

type MotionButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
};

export function Button({ children, className = "", ...props }: MotionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(59,130,246,0.4)" }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-2xl font-medium transition text-lg bg-blue-600 text-white hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Animated Project Card
function ProjectCard({ title, description, github, link }: { title: string; description: string; github?: string; link?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black cursor-pointer hover:scale-105 transition-transform"
    >
      <div className="p-6 flex flex-col justify-between h-full z-10 relative">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>
        <div className="flex gap-4">
          {github && (
            <a href={github} target="_blank" className="flex items-center gap-2 text-blue-400 hover:underline">
              <Github className="w-5 h-5" />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" className="flex items-center gap-2 text-blue-400 hover:underline">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Skill Bubble with motion
function SkillBubble({ skill, color }: { skill: string; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: 5 }}
      className="px-5 py-3 rounded-full font-semibold text-white shadow-lg cursor-pointer transition-transform"
      style={{ backgroundColor: color }}
    >
      {skill}
    </motion.div>
  );
}

export default function Page() {
  const skills = [
    { name: "Java", color: "#1f6e5f" },
    { name: "Kotlin", color: "#2563eb" },
    { name: "Spring Boot", color: "#15803d" },
    { name: "Spring Cloud", color: "#0d9488" },
    { name: "GraphQL", color: "#3b82f6" },
    { name: "PostgreSQL", color: "#0f766e" },
    { name: "MongoDB", color: "#166534" },
    { name: "Docker", color: "#0369a1" },
    { name: "Azure", color: "#0284c7" },
  ];

  const projects = [
    {
      title: "Trading Intelligence Platform at Adus Technologies",
      description: "Backend for crypto & forex signals with RabbitMQ, WebSockets, push notifications, Coinbase API integration, and community chat.",
      link: "https://linkedin.com/in/marin-dulja",
    },
    {
      title: "Tiger Project at Candidatis",
      description: "Web Crawler for automating job ads extraction and processing",
      link: "https://www.candidatis.net/crawler.html",
    },
    {
      title: "Therapism",
      description: "Mental health platform, built with Java, Spring Boot, PostgreSQL, and Spring AI.",
      github: "https://github.com/freudmarin/Therapism",
    },
    {
      title: "Quotes Social Network",
      description: "Quote sharing platform with authentication, posting, commenting, and liking features.",
      github: "https://github.com/freudmarin/QuotesSocialNetworkBE",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white scroll-smooth">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Marin Dulja
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 z-10 max-w-2xl"
        >
          Backend Engineer specializing in Kotlin & Java, Cloud & Microservices. Skilled in building scalable, reliable distributed systems.
        </motion.p>
        <motion.div className="mt-8 flex gap-4 z-10">
          <Button>Download CV</Button>
        </motion.div>
      </section>

      <DashboardCard></DashboardCard>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-semibold mb-10 text-center">Skills</h2>
        <motion.div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <SkillBubble key={i} skill={skill.name} color={skill.color} />
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-950 py-20 px-6">
        <h2 className="text-4xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-10">Certificates</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            Azure Developer Associate (AZ-204)
          </a>
          <a href="#" className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            Spring Boot Microservices (Udemy)
          </a>
          <a href="#" className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            Algorithms (Coursera)
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}