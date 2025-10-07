'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [animationElements, setAnimationElements] = useState<Array<{
    width: number
    height: number
    left: string
    top: string
    x: number[]
    y: number[]
    duration: number
  }>>([])

  useEffect(() => {
    // Generate random values only on the client side
    setAnimationElements(
      [...Array(6)].map(() => ({
        width: Math.random() * 300 + 100,
        height: Math.random() * 300 + 100,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
        duration: Math.random() * 20 + 10,
      }))
    )
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" }
  ]

  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "AWS", "Docker", "GraphQL"
  ]

  return (
    <section className="min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/50 relative overflow-hidden px-4 pt-16 sm:pt-0 sm:py-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {animationElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/5 rounded-full"
            style={{
              width: element.width,
              height: element.height,
              left: element.left,
              top: element.top,
            }}
            animate={{
              x: element.x,
              y: element.y,
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                <AvatarFallback className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 text-primary-foreground">
                  NA
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Nova Ardiansyah
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mt-1 sm:mt-2">
                  Full Stack Developer & UI/UX Designer
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I create beautiful, functional, and user-centered digital experiences.
              Specializing in modern web technologies with a passion for clean code and intuitive design.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 justify-center lg:justify-start">
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <Button size="lg" className="gap-2 text-sm sm:text-base">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-sm sm:text-base">
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
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            className="flex-1 w-full max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { label: "Projects", value: "50+", icon: "🚀" },
                    { label: "Experience", value: "5+ Years", icon: "💼" },
                    { label: "Clients", value: "30+", icon: "👥" },
                    { label: "Technologies", value: "20+", icon: "⚡" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
                      <div className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
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