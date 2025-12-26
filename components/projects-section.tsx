"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const projects = [
    {
      title: "Agentic AI Web Search Summarizer",
      description:
        "A multi-agent Agentic AI system that performs autonomous web searches and summarizes articles, providing concise and relevant information.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "AI Agents", "Web Scraping", "LLMs"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuccessSoham/agentic_ai_websearch_summarizer",
    },
    {
      title: "AI Multimedia Suite",
      description:
        "A comprehensive suite for processing and generating multimedia content using advanced AI models.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["TypeScript", "Multimedia Processing", "AI Models"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuccessSoham/AI-Multimedia-Suite",
    },
    {
      title: "Gen AI Notebooks",
      description:
        "A collection of Google Colab notebooks exploring various Generative AI techniques, model fine-tuning, and experiments.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Jupyter Notebook", "Python", "GenAI", "Deep Learning"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuccessSoham/Gen-AI",
    },
    {
      title: "Data Analytics Agent",
      description:
        "An intelligent agent designed for automated data analytics and visualization, turning raw data into actionable insights.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Data Analysis", "Visualization", "Pandas"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuccessSoham/Data-Analytics-Agent",
    },
    {
      title: "Resume Analyzer",
      description:
        "AI-powered tool to analyze resumes against job descriptions, providing scores and improvement suggestions.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Jupyter Notebook", "NLP", "Resume Parsing"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuccessSoham/resume-analyzer",
    },
    {
      title: "Cobol to Python",
      description:
        "A migration tool or study focusing on modernizing legacy COBOL codebases by converting them to Python.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "COBOL", "Legacy Migration"],
      liveUrl: "#",
      githubUrl: "https://github.com/SuccessSoham/Cobol-to-Python",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
        >
          <h2 className="text-4xl font-bold text-black mb-6">Featured Projects</h2>
          <p className="text-lg text-black max-w-2xl mx-auto font-medium">
            Exploring the frontiers of AI, Data, and Software Engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 } 
              }}
              className="perspective-1000"
            >
              <Card className="glass-card border-0 overflow-hidden h-full flex flex-col group">
                <div className="aspect-video bg-gradient-to-br from-stone-800 to-stone-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-transparent transition-colors duration-300" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-stone-700 text-white bg-white/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4 mt-auto">
                    <Button size="sm" variant="outline" className="w-full border-stone-700 text-white hover:bg-slate-800 hover:text-white hover:border-emerald-500/50 transition-all duration-300" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
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
