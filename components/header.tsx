"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-mono ${
        isScrolled ? "bg-black/60 backdrop-blur-md border-b border-hud-cyan/20 py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 relative border border-hud-cyan/30 p-0.5 bg-black/40 reticle-corners-inner group-hover:border-hud-cyan transition-all duration-300">
              <div className="w-full h-full relative overflow-hidden">
                <Image 
                  src="/Soham_Corp.jpg" 
                  alt="Soham Ganguly" 
                  fill
                  className="object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-widest text-sm uppercase">Soham Ganguly</span>
              <span className="text-[8px] text-hud-cyan/60 tracking-tighter uppercase">ARCHITECT_S_INTEL</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-white hover:text-hud-cyan transition-all duration-300 text-xs tracking-[0.2em] uppercase relative group"
              >
                <span className="relative z-10">[ {item.name} ]</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-hud-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-hud-cyan hover:text-white hover:bg-hud-cyan/10 border border-hud-cyan/20">
              <Search className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden text-hud-cyan hover:text-white hover:bg-hud-cyan/10 border border-hud-cyan/20" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-4 bg-black/95 backdrop-blur-xl absolute top-full left-0 right-0 border-b border-hud-cyan/20"
          >
            <div className="flex flex-col space-y-4 px-4 font-mono">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-hud-cyan hover:text-white transition-colors block py-2 tracking-widest uppercase text-xs"
                  onClick={() => setIsMenuOpen(false)}
                >
                  [ {item.name} ]
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
