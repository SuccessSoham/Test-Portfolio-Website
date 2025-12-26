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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
        >
          <h2 className="text-4xl font-bold text-black mb-6">Get In Touch</h2>
          <p className="text-lg text-black max-w-2xl mx-auto font-medium">
            Let's discuss how data analytics and AI can transform your business
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-black">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:sree.soham@gmail.com" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-black group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <span className="text-black group-hover:text-emerald-700 transition-colors text-lg font-medium">sree.soham@gmail.com</span>
                </a>
                <a href="tel:+918777323212" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-black group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <span className="text-black group-hover:text-emerald-700 transition-colors text-lg font-medium">+91-8777323212</span>
                </a>
                <div className="flex items-center space-x-4 group">
                   <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-black group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <span className="text-black transition-colors text-lg font-medium">Kolkata, India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-xl font-bold text-black">Specializations</h4>
              <ul className="space-y-3">
                {[
                  "Data Strategy & Architecture",
                  "Advanced Analytics & AI/ML",
                  "Prompt Engineering & LLM Integration",
                  "Business Intelligence & Visualization",
                  "Executive Advisory & Consulting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-black font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-3" />
                    {item}
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
            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-bold text-black">Send a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-black">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John" 
                        className="border-black/10 bg-black/5 text-black placeholder:text-stone-600 focus:border-emerald-500/50 focus:bg-black/10 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-bold text-black">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe" 
                        className="border-black/10 bg-black/5 text-black placeholder:text-stone-600 focus:border-emerald-500/50 focus:bg-black/10 transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-black">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com" 
                      className="border-black/10 bg-black/5 text-black placeholder:text-stone-600 focus:border-emerald-500/50 focus:bg-black/10 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-black">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry" 
                      className="border-black/10 bg-black/5 text-black placeholder:text-stone-600 focus:border-emerald-500/50 focus:bg-black/10 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-black">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..." 
                      className="border-black/10 bg-black/5 text-black placeholder:text-stone-600 focus:border-emerald-500/50 focus:bg-black/10 transition-all resize-none" 
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold border-0 shadow-lg shadow-emerald-600/20 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
