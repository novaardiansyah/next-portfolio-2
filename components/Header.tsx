'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Award, Mail, Sun, Moon, Github, Linkedin } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/novaardiansyah", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/novaardiansyah/", label: "LinkedIn" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Set initial scroll state
    setIsScrolled(window.scrollY > 50)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (!isMounted) return

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="flex items-center justify-between h-16 min-w-0">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/60 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NA</span>
            </div>
            <span className="font-bold text-xl truncate whitespace-nowrap">Nova Ardiansyah</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Contact Button */}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="hidden md:flex"
            >
              Contact Me
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] overflow-hidden">
                <div className="flex flex-col h-full mt-8 overflow-y-auto">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-1 mb-8">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          scrollToSection(item.href)
                          setIsOpen(false)
                        }}
                        className={`flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-200 ${
                          activeSection === item.href.substring(1)
                            ? "text-primary bg-primary/10 border border-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-base font-medium">{item.name}</span>
                      </button>
                    ))}
                  </nav>

                  {/* Mobile Contact Button */}
                  <Button
                    onClick={() => {
                      scrollToSection("#contact")
                      setIsOpen(false)
                    }}
                    size="lg"
                    className="w-full"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>

                  {/* Mobile Social Links */}
                  <div className="mt-8">
                    <div className="text-center mb-4">
                      <p className="text-sm text-muted-foreground">Connect with me</p>
                    </div>
                    <div className="flex gap-3 justify-center">
                      {socialLinks.map((social) => {
                        const Icon = social.icon
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label={social.label}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}