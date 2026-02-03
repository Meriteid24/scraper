// app/page.tsx or app/index.tsx

"use client"

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Copy, Check, ArrowDown, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Server,
  Plug,
  Settings,
  Activity,
  Cpu,
  Wifi
} from "lucide-react";


const Index = () => {
  const [copied, setCopied] = useState(false);
  const email = "meriteidavid24@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email");
    }
  };

  const skills = [
    "Python", "Javascript", "TypeScript", "Django", "Flask",
    "React", "Next.js", "REST APIs", "PostgreSQL", "Git", "HTML5", "CSS3"
  ];

  const projects = [
    {
      title: "Inventory Management System",
      description: "A full-stack web-based inventory system using Django, integrating a machine learning model (Random Forest) to predict sales trends and generate dynamic re-order suggestions. This project is hosted on a free Render service and may take a few seconds to start if idle. Desktop experience is recommended.",
      tech: ["Django", "Flask", "Random Forest Regressor", "Python", "PostgreSQL", "REST API"],
      image: "/images/Admin dashboard.png",
      link: "https://django-inventory-yh9q.onrender.com/",
      github: "https://github.com/Meriteid24/Django-inventory"
    },
    {
      title: "Weather app",
      description: "Decoupled weather application built using a public API, demonstrating REST API integration, asynchronous data handling, and clean separation between frontend and backend logic.",
      tech: ["Next.js", "TypeScript", "shadcn/ui", "Lucide React", "Vite"],
      image: "images/weather app.png",
      link: "https://weather-c8wc4qwad-meriteid24s-projects.vercel.app/",
      github: "https://github.com/Meriteid24/weather-app"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-grey-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            David Meritei.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-8"
          >
            <a href="#home" className="text-white hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-cyan-300 transition-colors">About</a>
            <a href="#projects" className="text-white hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-cyan-300 transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black-600/20 to-blue-600/20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Backend-Focused Software
              </span>
              <br />
              Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              I build reliable web applications and backend systems using Python, Django, React, and REST APIs, with a focus on automation, clean architecture, and real-world operational needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects">
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700">
                  View My Work
                </Button>
              </a>
             {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Download CV
              </Button>*/}
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-white w-6 h-6" />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I’m a backend-focused software developer with experience building full-stack web applications and backend services. I enjoy designing clean REST APIs, optimizing server-side logic, and turning operational and business requirements into reliable, maintainable systems.
              I have hands-on experience working in Linux-based environments and supporting live applications, which has given me a strong appreciation for stability, documentation, and collaboration. I’m particularly interested in automation and process optimization, and I enjoy learning new tools that improve efficiency and reduce manual effort.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-Start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge variant="secondary" className="text-sm py-2 px-4 bg-white/10 text-white border-white/20">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Interests</h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 hover:text-white transition">
                <Server className="w-5 h-5 text-white/60" />
                <span>Backend architecture and API-driven systems</span>
              </li>

              <li className="flex items-center gap-3">
                <Plug className="w-5 h-5 text-white/80" />
                <span>REST API design and integration</span>
              </li>

              <li className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-white/80" />
                <span>Supporting and improving production applications</span>
              </li>

              <li className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-white/80" />
                <span>Process optimization and workflow improvements</span>
              </li>

              <li className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-white/80" />
                <span>Practical applications of machine learning</span>
              </li>

              <li className="flex items-center gap-3">
                <Wifi className="w-5 h-5 text-white/80" />
                <span>IoT systems and hardware–software integration</span>
              </li>
            </ul>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-300">Here are some of my recent works</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/5 border-white/10 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="secondary" className="bg-white/90 text-black">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="secondary" className="bg-white/90 text-black">
                            <Github className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-white/20 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
   {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Feel free to reach out if you have any questions
            </p>
            
            {/* Email display with copy function */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 max-w-md w-full">
                <p className="text-sm text-gray-400 mb-3">Email me directly:</p>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-medium text-white break-all">
                    {email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-green-600 text-white rounded-lg transition-all duration-200 hover:scale-105 flex-shrink-0"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/Meriteid24" },
                { icon: Mail, label: "Email", href: "mailto:meriteidavid24@gmail.com" }
              ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-teal-700/20 transition-colors"
                  >
                    <social.icon size={24} className="text-white" />
                    <span className="text-sm text-gray-400">{social.label}</span>
                  </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Portfolio. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;


