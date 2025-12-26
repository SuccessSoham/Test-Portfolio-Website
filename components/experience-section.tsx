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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-white mb-6">Experience</h2>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            A journey through data-driven innovation and strategic problem-solving
          </p>
        </motion.div>

        <div className="space-y-8 relative">
           {/* Vertical Timeline Line */}
           <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-2.5 top-8 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] hidden md:block" />
              
              <Card className="glass-card border-0 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">{exp.title}</h3>
                      <p className="text-lg text-emerald-400 font-medium mb-2">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit bg-white/15 text-white hover:bg-white/25 border-0 px-3 py-1">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-slate-200 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-white/10 text-slate-100 bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
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
  )
}
