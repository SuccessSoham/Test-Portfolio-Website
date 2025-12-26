"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h2 className="text-xl text-emerald-300 font-medium tracking-wide uppercase mb-2">
                  Hello, I'm
                </h2>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Soham Ganguly
                </h1>
                <h2 className="text-3xl lg:text-4xl text-white mt-2">
                  Gen AI & LLM Engineer
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-slate-100 max-w-lg"
              >
                Passionate for data, music, gaming, memes and travelling. I love telling stories with Data.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300" asChild>
                <a href="#experience">
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300" asChild>
                <a href="https://drive.google.com/file/d/1Fa1QnAsMprkB-Rgs3VqAhdXDPWouWOf5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex space-x-6"
            >
              <SocialLink href="https://linkedin.com/in/soham-ganguly/" icon={Linkedin} />
              <SocialLink href="https://github.com/SuccessSoham" icon={Github} />
              <SocialLink href="mailto:sree.soham@gmail.com" icon={Mail} />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative hidden lg:block flex justify-center"
          >
            <div className="relative z-10 glass rounded-full p-2 shadow-2xl overflow-hidden aspect-square max-w-md mx-auto border-4 border-emerald-500/20">
              <Image 
                src="/Soham_Corp.jpg" 
                alt="Soham Ganguly"
                width={500}
                height={500}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl transform -rotate-6 scale-95 z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a 
      href={href} 
      className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-200 hover:text-white transition-all duration-300 hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-6 h-6" />
    </a>
  )
}


