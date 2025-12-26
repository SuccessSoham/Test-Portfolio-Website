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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 relative rounded-lg overflow-hidden shadow-lg shadow-emerald-500/20">
              <Image 
                src="/Soham_Corp.jpg" 
                alt="Soham Ganguly" 
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-white">Soham Ganguly</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-white hover:text-emerald-300 transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-white hover:text-emerald-300 hover:bg-white/10">
              <Search className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden text-white hover:text-emerald-300 hover:bg-white/10" 
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
            className="md:hidden pt-4 pb-4 bg-black/90 backdrop-blur-xl absolute top-full left-0 right-0 border-b border-white/10"
          >
            <div className="flex flex-col space-y-4 px-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-emerald-300 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
