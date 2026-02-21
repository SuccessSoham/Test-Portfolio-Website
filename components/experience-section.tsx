"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Gen AI and LLM Engineer",
      company: "Cognizant",
      period: "May 2025 - Present",
      description: "Leading data strategy initiatives and implementing GenAI/LLM solutions for Fortune 500 clients.",
      technologies: ["Python", "GCP", "Azure", "GenAI/LLM", "Prompt Engineering"],
    },
    {
      title: "Senior Prompt Engineer",
      company: "Oneforma (Centific)",
      period: "Jan 2025 - Apr 2025",
      description: "Designed and optimized prompts for large language models, improving response quality by 40%.",
      technologies: ["GPT-4", "Claude", "Prompt Design", "NLP", "Python"],
    },
    {
      title: "AI/LLM Analyst",
      company: "Soul AI (Outlier)",
      period: "Jan 2024 - Dec 2024",
      description: "Implemented Multimodal LLMs for statistical and mathematical domain processing 1M+ user queries per day.",
      technologies: ["Python", "Vertex AI", "LangChain", "FAISS", "Mistral"],
    },
    {
      title: "Lead Data Analyst",
      company: "Capgemini",
      period: "Sep 2021 - Dec 2023",
      description: "Developed predictive models and automated reporting systems for business intelligence.",
      technologies: ["Python", "Pandas", "SQL", "Power BI", "NumPy"],
    },
    {
      title: "Senior Data Analyst",
      company: "MSH Talent Solutions",
      period: "Feb 2019 - Sep 2021",
      description: "Developed dashboards and automated reporting systems for business intelligence.",
      technologies: ["Python", "Advanced Excel", "SQL", "Power BI", "Tableau"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-widest">[EXP_MODULES]</h2>
          <p className="text-lg text-hud-cyan/60 max-w-2xl mx-auto">
            A history of data-driven innovation and strategic problem-solving
          </p>
        </motion.div>

        <div className="space-y-12 relative">
           {/* Vertical Timeline Line */}
           <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-hud-cyan/20 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 top-8 w-4 h-4 border border-hud-cyan bg-black rounded-none rotate-45 shadow-[0_0_10px_rgba(0,229,255,0.5)] hidden md:block z-20" />
              
              <div className="hud-glass-card hover:border-hud-cyan/40 transition-all duration-300 p-6 sm:p-8 reticle-corners-inner">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6 gap-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 tracking-wide font-sans">{exp.title}</h3>
                    <p className="text-lg text-hud-cyan font-medium mb-2">{exp.company}</p>
                  </div>
                  <div className="w-fit bg-hud-cyan/10 text-hud-cyan border border-hud-cyan/30 px-3 py-1 text-xs tracking-widest">
                    {exp.period}
                  </div>
                </div>
                <p className="text-slate-300 mb-8 leading-relaxed font-sans relative z-10">{exp.description}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-[10px] text-hud-cyan/60 border border-hud-cyan/20 px-2 py-1 bg-black/40 tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
