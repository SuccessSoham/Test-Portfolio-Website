"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { firstName, lastName, email, subject, message } = formData
    const mailtoLink = `mailto:sree.soham@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 font-mono">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-widest">[CONTACT_PROTOCOLS]</h2>
          <p className="text-lg text-hud-cyan/60 max-w-2xl mx-auto">
            Initiate a secure handshake to discuss intelligence orchestration
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8 hud-glass-card p-8 reticle-corners"
          >
            <div>
              <h3 className="mb-8 text-2xl font-bold text-white tracking-widest uppercase">// COMMS_CHANNELS</h3>
              <div className="space-y-6">
                <a href="mailto:sree.soham@gmail.com" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-hud-cyan/30 bg-hud-cyan/10 flex items-center justify-center group-hover:bg-hud-cyan/20 transition-all duration-300">
                    <Mail className="h-5 w-5 text-hud-cyan" />
                  </div>
                  <span className="text-slate-300 group-hover:text-hud-cyan transition-colors text-lg tracking-tight">sree.soham@gmail.com</span>
                </a>
                <a href="tel:+918777323212" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-hud-cyan/30 bg-hud-cyan/10 flex items-center justify-center group-hover:bg-hud-cyan/20 transition-all duration-300">
                    <Phone className="h-5 w-5 text-hud-cyan" />
                  </div>
                  <span className="text-slate-300 group-hover:text-hud-cyan transition-colors text-lg tracking-tight">+91-8777323212</span>
                </a>
                <div className="flex items-center space-x-4 group">
                   <div className="w-12 h-12 border border-hud-cyan/30 bg-hud-cyan/10 flex items-center justify-center group-hover:bg-hud-cyan/20 transition-all duration-300">
                    <MapPin className="h-5 w-5 text-hud-cyan" />
                  </div>
                  <span className="text-slate-300 text-lg tracking-tight">Kolkata, India // [UTC+5:30]</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-xl font-bold text-white tracking-widest uppercase">// SPECIALIZATIONS</h4>
              <ul className="space-y-4">
                {[
                  "Data Strategy & Architecture",
                  "Advanced Analytics & AI/ML",
                  "Prompt Engineering & LLM Integration",
                  "Business Intelligence & Visualization",
                  "Executive Advisory & Consulting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-hud-cyan/80">
                    <span className="w-2 h-2 border border-hud-cyan/50 bg-hud-cyan/20 mr-4 rotate-45" />
                    <span className="tracking-wide uppercase text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="hud-glass-card p-8 reticle-corners-inner">
              <h3 className="mb-8 text-xl font-bold text-white tracking-widest uppercase">// SEND_ENCRYPTED_MESSAGE</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-[10px] font-bold text-hud-cyan/60 tracking-widest uppercase">
                      [ GIVEN_NAME ]
                    </label>
                    <input 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John" 
                      className="w-full bg-black/40 border border-hud-cyan/20 p-3 text-white placeholder:text-slate-600 focus:border-hud-cyan/50 focus:bg-hud-cyan/5 transition-all outline-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-[10px] font-bold text-hud-cyan/60 tracking-widest uppercase">
                      [ SURNAME ]
                    </label>
                    <input 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe" 
                      className="w-full bg-black/40 border border-hud-cyan/20 p-3 text-white placeholder:text-slate-600 focus:border-hud-cyan/50 focus:bg-hud-cyan/5 transition-all outline-none" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold text-hud-cyan/60 tracking-widest uppercase">
                    [ COMMS_ADDR ]
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com" 
                    className="w-full bg-black/40 border border-hud-cyan/20 p-3 text-white placeholder:text-slate-600 focus:border-hud-cyan/50 focus:bg-hud-cyan/5 transition-all outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-bold text-hud-cyan/60 tracking-widest uppercase">
                    [ MSG_HEADER ]
                  </label>
                  <input 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry" 
                    className="w-full bg-black/40 border border-hud-cyan/20 p-3 text-white placeholder:text-slate-600 focus:border-hud-cyan/50 focus:bg-hud-cyan/5 transition-all outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-hud-cyan/60 tracking-widest uppercase">
                    [ DATA_PAYLOAD ]
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..." 
                    className="w-full bg-black/40 border border-hud-cyan/20 p-3 text-white placeholder:text-slate-600 focus:border-hud-cyan/50 focus:bg-hud-cyan/5 transition-all outline-none resize-none" 
                  />
                </div>
                <button type="submit" className="w-full bg-hud-cyan/10 hover:bg-hud-cyan/20 text-hud-cyan font-bold py-4 border border-hud-cyan/40 hover:border-hud-cyan shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300 uppercase tracking-[0.3em] text-xs">
                  [ INITIATE_HANDSHAKE ]
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
