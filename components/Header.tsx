'use client'

import { useState, useEffect, useRef } from "react"
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
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsMounted(true)

    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark)
    setIsDark(initialTheme)

    if (initialTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Set initial scroll state
    setIsScrolled(window.scrollY > 50)

    // Debounced scroll handler for better performance
    let scrollTimeout: number
    const handleScroll = () => {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout)
      }

      scrollTimeout = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50)

        // Skip active section detection during manual navigation
        if (scrollTimeoutRef.current) return

        // Simplified and more responsive active section detection
        const headerHeight = 64
        const scrollPosition = window.scrollY + headerHeight
        const windowHeight = window.innerHeight

        // Simple intersection-based approach for faster response
        let currentActiveSection = activeSection
        let maxVisibility = 0

        for (const section of navItems.map(item => item.href.substring(1))) {
          const element = document.getElementById(section)
          if (element) {
            const elementTop = element.offsetTop
            const elementBottom = elementTop + element.offsetHeight
            const elementHeight = element.offsetHeight

            // Calculate visible portion of element
            const visibleTop = Math.max(elementTop, window.scrollY)
            const visibleBottom = Math.min(elementBottom, window.scrollY + windowHeight)
            const visibleHeight = Math.max(0, visibleBottom - visibleTop)

            // Calculate visibility percentage
            const visibilityPercentage = visibleHeight / elementHeight

            // Bonus for sections that contain the scroll position
            let score = visibilityPercentage
            if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
              score += 0.5 // 50% bonus for containing the scroll position
            }

            // Special bonus for sections near the top of viewport
            if (elementTop <= scrollPosition && elementTop >= scrollPosition - 200) {
              score += 0.3 // 30% bonus for being near the top
            }

            if (score > maxVisibility) {
              maxVisibility = score
              currentActiveSection = section
            }
          }
        }

        // Update active section if different from current
        if (currentActiveSection !== activeSection) {
          setActiveSection(currentActiveSection)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const scrollToSection = (href: string) => {
    if (!isMounted) return

    const element = document.querySelector(href)
    if (element) {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Set timeout to prevent scroll detection during navigation
      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null
      }, 1500) // 1.5 seconds to cover smooth scroll duration

      // Calculate offset to account for fixed header height
      const headerHeight = 64 // Approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      // Update active section immediately
      const sectionName = href.substring(1)
      setActiveSection(sectionName)

      // Use smooth scrolling directly
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
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
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("#home")}
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
              onClick={toggleTheme}
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