"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, TerminalSquare } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4 font-mono">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="flex flex-col gap-1 text-hud-cyan/60 text-[10px] sm:text-xs mb-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  [BOOT] LOADING_NEURAL_CORES... OK
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  [BOOT] SYNCING_SOVEREIGN_MESH... OK
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="flex items-center gap-2 text-hud-cyan font-bold"
                >
                  <TerminalSquare className="w-3 h-3 animate-pulse" />
                  <span>[SYS.BOOT.COMPLETE] // ARCHITECT_SOHAM_ONLINE</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col gap-2"
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-sans tracking-tight drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                  Soham Ganguly
                </h1>

                <div className="text-xl lg:text-2xl text-hud-cyan mt-4 tracking-widest bg-hud-cyan/10 border-l-4 border-hud-cyan py-2 px-4 inline-block w-fit">
                  {">"} Lead Architect of Sovereign Intelligence
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-slate-300 max-w-lg mt-6 tracking-wide"
              >
                Engineering autonomous systems, default-deny security protocols, and quantum-ready logical frameworks. Building the future of high-fidelity AI orchestration.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-6 font-mono tracking-widest text-xs sm:text-sm"
            >
              <Button
                size="lg"
                className="bg-transparent hover:bg-hud-cyan/10 text-hud-cyan border border-hud-cyan rounded-none hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300 group relative overflow-hidden"
                asChild
              >
                <a href="#projects">
                  <span className="relative z-10 group-hover:animate-chromatic-glitch inline-block">[ INITIATE_WORK_SCAN ]</span>
                  <div className="absolute inset-0 h-[2px] w-full bg-hud-cyan/30 top-1/2 -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-hud-base hover:bg-hud-red/10 text-hud-red border border-hud-red/50 hover:border-hud-red rounded-none hover:shadow-[0_0_15px_rgba(255,61,0,0.4)] transition-all duration-300 group overflow-hidden"
                asChild
              >
                <a href="https://drive.google.com/file/d/1Fa1QnAsMprkB-Rgs3VqAhdXDPWouWOf5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <span className="group-hover:animate-glitch inline-block">[ ACCESS_DOSSIER ]</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex space-x-6 pt-4"
            >
              <SocialLink href="https://linkedin.com/in/soham-ganguly/" icon={Linkedin} label="LNKD_IN" />
              <SocialLink href="https://github.com/SuccessSoham" icon={Github} label="GIT_HUB" />
              <SocialLink href="mailto:sree.soham@gmail.com" icon={Mail} label="SEC_COMMS" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Holographic Image Container */}
            <div className="relative z-10 w-80 h-80 rounded-full p-2 border border-hud-cyan/30 bg-black/50 shadow-[0_0_30px_rgba(0,229,255,0.2)] flex items-center justify-center overflow-hidden reticle-corners">
              <div className="absolute inset-0 rounded-full border border-hud-cyan/10 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-hud-cyan/20 animate-spin-reverse-slow" />

              <div className="w-[90%] h-[90%] rounded-full overflow-hidden relative mix-blend-luminosity hover:mix-blend-normal transition-all duration-700">
                <div className="absolute inset-0 bg-hud-cyan/20 z-10 animate-pulse mix-blend-color" />
                <Image
                  src="/Soham_Corp.jpg"
                  alt="Soham Ganguly"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Decorative holographic circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-hud-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-hud-cyan/10 rounded-full blur-[2px]" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center gap-2 text-hud-cyan/60 hover:text-hud-cyan transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-3 border border-hud-cyan/30 bg-black/40 group-hover:bg-hud-cyan/10 group-hover:border-hud-cyan group-hover:shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-all duration-300 reticle-corners-inner">
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-mono text-[10px] tracking-widest">{label}</span>
    </a>
  )
}
