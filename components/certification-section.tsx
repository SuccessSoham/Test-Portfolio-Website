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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-widest">[CERT_VERIFICATION]</h2>
          <p className="text-lg text-hud-cyan/60 max-w-2xl mx-auto">
            Validating expertise through industry-recognized cryptographic credentials
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
            >
              <div className="hud-glass-card h-full p-6 flex flex-col items-center text-center group reticle-corners-inner">
                <div className="w-16 h-16 border border-hud-cyan/30 bg-hud-cyan/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 rotate-45">
                  <Award className="w-8 h-8 text-hud-cyan -rotate-45" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-hud-cyan transition-colors tracking-wide font-sans">
                  {cert.title}
                </h3>
                
                <p className="text-hud-cyan/80 mb-1 text-sm">{cert.issuer}</p>
                <p className="text-xs text-slate-500 mb-6 uppercase tracking-tighter">ISS_DATE: {cert.date}</p>
                
                <div className="mt-auto w-full">
                   <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                     <div className="bg-hud-cyan/10 hover:bg-hud-cyan/20 text-hud-cyan border border-hud-cyan/30 w-full flex items-center justify-center py-2 cursor-pointer transition-all duration-300 text-xs tracking-widest uppercase">
                        [ VERIFY_CREDENTIAL ] <ExternalLink className="w-3 h-3 ml-2" />
                     </div>
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
