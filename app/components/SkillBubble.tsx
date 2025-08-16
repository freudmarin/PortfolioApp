"use client";
import { motion } from "framer-motion";

interface SkillBubbleProps {
  skill: string;
  color: string;
}

export default function SkillBubble({ skill, color }: SkillBubbleProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="px-5 py-3 rounded-full font-semibold text-white shadow-lg cursor-pointer"
      style={{ backgroundColor: color }}
    >
      {skill}
    </motion.div>
  );
}