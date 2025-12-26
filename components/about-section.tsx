"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Brain, Database, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const skills = [
    {
      icon: Brain,
      title: "AI & Prompt Engineering",
      description: "Leveraging LLMs and designing effective prompts",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines and architectures",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Advanced statistical analysis and visualization",
    },
    {
      icon: TrendingUp,
      title: "Strategic Insights",
      description: "Translating data into actionable business strategies",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
        >
          <h2 className="text-4xl font-bold text-black mb-6">About Me</h2>
          <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed font-medium">
            A passionate Gen AI/LLM Engineer specialized in developing and deploying machine learning models, with a strong focus on Natural Language Processing (NLP) and Large Language Models (LLMs). 8+ years of experience building smarter strategies using the research and Data-Driven way, with a demonstrated history of studying statistical and computational areas in the academic background. I provide advisory solutions to the Senior Leadership and C-Suite executives with data-driven insights to help them in their decision making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="glass-card border-0 h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center mx-auto text-emerald-400">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white">{skill.title}</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
