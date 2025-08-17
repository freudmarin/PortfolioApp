import { motion } from "framer-motion";
import { Code, Briefcase, CheckCircle, Award } from "lucide-react";

const stats = [
  { icon: <Briefcase />, value: "3+", label: "Years Experience" },
  { icon: <CheckCircle />, value: "7+", label: "Projects Completed" },
  { icon: <Code />, value: "Java, Kotlin, Spring Boot", label: "Tech Stack" },
  { icon: <Award />, value: "Freelancer", label: "Status" } 
];

export default function DashboardCard() {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-8 shadow-2xl grid grid-cols-2 gap-6 text-white max-w-xl mx-auto">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-xl shadow-lg"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}