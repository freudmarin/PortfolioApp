"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  github?: string;
  link?: string;
}

export default function ProjectCard({ title, description, github, link }: ProjectCardProps) {
  return (
    <motion.div
      className="relative w-full h-64 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <canvas className="absolute inset-0 z-0" id={`canvas-${title.replace(/\s/g, "")}`}></canvas>
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
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