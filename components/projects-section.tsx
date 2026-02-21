"use client"

import { ExternalLink, Github, Fingerprint, ShieldAlert, Cpu, ActivitySquare } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const projects = [
    {
      title: "Sovereign AI Partner: Jarvis",
      description:
        "An autonomous digital partner with a cryptographic Decentralized Identity (DID) using Agentfield. Runs on edge hardware with high-fidelity creative pulses.",
      icon: <Fingerprint className="w-8 h-8 text-hud-cyan" />,
      technologies: ["Agentfield", "DID", "Edge AI", "LLMs"],
      githubUrl: "https://github.com/SuccessSoham/Jarvis",
      status: "ACTIVE_NODE"
    },
    {
      title: "Enterprise Security Hardening",
      description:
        "Critical 'Default Deny' security protocols contributed to the OpenClaw core (PR #16320). Audited by industry leaders for safe LLM tool orchestration.",
      icon: <ShieldAlert className="w-8 h-8 text-hud-red" />,
      technologies: ["Security", "OpenClaw", "Protocol Design"],
      githubUrl: "https://github.com/SuccessSoham/OpenClaw",
      status: "VERIFIED"
    },
    {
      title: "Quantum Mastery Labs",
      description:
        "Hands-on implementation of Quantum circuits including Bell State entanglement and Bloch Sphere visualizations using Qiskit and AWS Braket.",
      icon: <Cpu className="w-8 h-8 text-hud-cyan" />,
      technologies: ["Qiskit", "AWS Braket", "Quantum Mechanics"],
      githubUrl: "https://github.com/SuccessSoham/Quantum-Labs",
      status: "EXPERIMENTAL"
    },
    {
      title: "Cloud Sentinel (Cognizant)",
      description:
        "Proactive AWS monitoring agent utilizing hardened global DIDs to detect usage spikes across CloudWatch/CloudTrail logs.",
      icon: <ActivitySquare className="w-8 h-8 text-hud-cyan" />,
      technologies: ["AWS", "CloudWatch", "Event-Driven Analytics"],
      githubUrl: "https://github.com/SuccessSoham",
      status: "DEPLOYED"
    }
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end gap-6 border-b border-hud-cyan/20 pb-4"
        >
          <div className="text-4xl font-bold text-white tracking-widest uppercase">
            [PROJECT_MANIFEST]
          </div>
          <div className="text-sm text-hud-cyan/60 hidden md:block">
            SCANNING... 4 HIGHSNR TARGETS IDENTIFIED
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group h-full"
            >
              <div className="hud-glass-card h-full p-6 flex flex-col justify-between overflow-hidden">
                {/* Background scanning effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hud-cyan/5 to-transparent h-[200%] -translate-y-[100%] group-hover:animate-scan-line pointer-events-none" />

                <div className="reticle-corners" />

                <div className="space-y-6 relative z-10 flex-grow">
                  <div className="flex justify-between items-start">
                    <div className="p-3 border border-hud-cyan/20 bg-black/50 backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <div className={`text-[10px] sm:text-xs tracking-widest px-2 py-1 border backdrop-blur-sm ${
                      project.status === "VERIFIED" 
                        ? "text-hud-red bg-hud-red/10 border-hud-red/30 group-hover:animate-glitch" 
                        : "text-hud-cyan/80 bg-hud-cyan/10 border-hud-cyan/30"
                    }`}>
                      STAT: {project.status}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-hud-cyan transition-colors tracking-wide font-sans">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs text-hud-cyan/60 border border-hud-cyan/20 px-2 py-1 bg-black/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 relative z-10 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white hover:text-hud-cyan transition-colors border-b border-transparent hover:border-hud-cyan pb-1"
                  >
                    <Github className="w-4 h-4" />
                    <span>[ ACCESS_SRC ]</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
