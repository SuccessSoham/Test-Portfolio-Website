"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function CertificationSection() {
  // Placeholder data - waiting for user input
  const certifications = [
    {
      title: "Nvidia GSI Curriculum 2025",
      issuer: "Nvidia",
      date: "2025",
      credentialUrl: "https://media.licdn.com/dms/image/v2/D4E22AQGS3b_JxENCdA/feedshare-shrink_1280/B4EZcXO1ONHQAw-/0/1748441454632?e=1768435200&v=beta&t=Cw-vxcP1zLe94HRJ7wo63__MjUrXsIL6e3-e7_Qc-u4",
      logo: "/components/Nvidia.png" 
    },
    {
      title: "Google Cloud Generative AI Leader",
      issuer: "Google Cloud",
      date: "2025",
      credentialUrl: "https://www.credly.com/badges/229f65cc-5ed4-44eb-96fe-ee47016f32b8",
      logo: "/components/Google Gen AI.png"
    },
    {
      title: "AWS Braket Quantum Computing Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialUrl: "https://www.credly.com/badges/e230a1d7-8eb9-446b-8166-9e8fcee0e963/public_url",
      logo: "/components/AWS Braket.png"
    }
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
        >
          <h2 className="text-4xl font-bold text-black mb-6">Certifications</h2>
          <p className="text-lg text-black max-w-2xl mx-auto font-medium">
            Validating expertise through industry-recognized credentials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-card border-0 h-full overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Award className="w-8 h-8 text-emerald-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-stone-400 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-stone-500 mb-4">Issued {cert.date}</p>
                  
                  <div className="mt-auto pt-4 w-full">
                     <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                       <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-stone-300 w-full justify-center py-1.5 cursor-pointer">
                          View Credential <ExternalLink className="w-3 h-3 ml-2" />
                       </Badge>
                     </a>
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
