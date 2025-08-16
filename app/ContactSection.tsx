"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_9d1p24c",  // Replace with your EmailJS Service ID
        "template_b9i7qrm", // Replace with your EmailJS Template ID
        formRef.current,
        "im9zhJF-HdAReZia5"   // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
          setSending(false);
        },
        (error) => {
          alert("Failed to send message: " + error.text);
          setSending(false);
        }
      );
  };

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-10">Get in Touch</h2>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 bg-gray-900 p-8 rounded-2xl shadow-xl"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          required
        />
        <button
          type="submit"
          className={`px-6 py-3 rounded-2xl font-medium text-lg bg-blue-600 text-white hover:bg-blue-700 transition ${
            sending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      <div className="flex justify-center gap-6 mt-10">
        <a href="https://github.com/freudmarin" target="_blank">
          <Github className="w-8 h-8 hover:text-blue-400 transition" />
        </a>
        <a href="https://linkedin.com/in/marin-dulja" target="_blank">
          <Linkedin className="w-8 h-8 hover:text-blue-400 transition" />
        </a>
        
      </div>
    </section>
  );
}