'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { SOCIAL_LINKS } from "@/constants/contact"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [codeAnimationKey, setCodeAnimationKey] = useState(0)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Reset animation every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCodeAnimationKey(prev => prev + 1)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const socialLinks = SOCIAL_LINKS

  const skills = [
    "JavaScript", "PHP", "Next.js", "Node.js", "Express", "Laravel", "Codeigniter", "React Native", "MySQL", "MongoDB"
  ]

  return (
    <section className="min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/50 relative overflow-hidden pt-16 sm:pt-20">
      {/* Mouse-following gradient orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
      />

      {/* Static gradient accents */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-2xl pointer-events-none" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvc3ZnPg==')] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-6">
              <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-primary/20 flex-shrink-0">
                <AvatarImage src="/original-blue-circle.png" alt="Profile" />
                <AvatarFallback className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 text-primary-foreground">
                  NA
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Nova Ardiansyah
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mt-1 sm:mt-2">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I create comprehensive web and mobile applications with strong expertise in both frontend and backend development.
              With a passion for building robust APIs and database systems while maintaining clean, intuitive user interfaces.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Badge variant="secondary" className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="gap-2 text-sm sm:text-base" asChild>
                <a href="/nova-ardiansyah-2023.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-sm sm:text-base cursor-pointer" onClick={scrollToContact}>
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/10 hover:text-primary w-10 h-10 sm:w-11 sm:h-11"
                    asChild
                  >
                    <a href={link.href} target={link.target} rel="noopener noreferrer">
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Code Preview */}
          <motion.div
            className="flex-1 w-full max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700 shadow-2xl overflow-hidden">
              {/* Code editor header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-slate-400">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-300">routes/web.php</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-slate-400">PHP</span>
                </div>
              </div>

              {/* Code content with syntax highlighting background */}
              <div className="bg-slate-900/80">
                <motion.div
                  key={codeAnimationKey}
                  className="p-4 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden text-slate-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <span className="text-purple-400">&lt;?php</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <span className="text-blue-400">use</span> <span className="text-green-400">App\Models\User</span>;
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  >
                    <br />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    <span className="text-blue-400">Route</span><span className="text-slate-400">::</span><span className="text-green-400">get</span><span className="text-slate-300">('/users', function () {"}"}</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.8 }}
                  >
                    <span className="text-purple-400">&nbsp;&nbsp;&nbsp;&nbsp;$users</span> <span className="text-slate-400">=</span> <span className="text-yellow-400">User</span><span className="text-slate-300">::all();</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.8 }}
                  >
                    <span className="text-purple-400">&nbsp;&nbsp;&nbsp;&nbsp;return</span> <span className="text-yellow-400">response</span><span className="text-slate-300">()-&gt;json([</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.3, duration: 0.8 }}
                  >
                    <span className="text-slate-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'users'</span> <span className="text-slate-400">=&gt;</span> <span className="text-purple-400">$users</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 0.8 }}
                  >
                    <span className="text-slate-300">&nbsp;&nbsp;&nbsp;&nbsp;]);</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.9, duration: 0.8 }}
                  >
                    <span className="text-slate-300">{"});"}</span>
                  </motion.div>
                </motion.div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-t border-slate-700">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Ready</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>PHP 8.3</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>Laravel 12</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Laravel simple API route to get users
                  </div>
                </div>
            </Card>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  )
}