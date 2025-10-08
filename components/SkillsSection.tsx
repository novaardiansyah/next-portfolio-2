'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const skillCategories = [
  {
    id: "backend",
    title: "Backend Development",
    description: "Creating robust server-side applications",
    skills: [
      { name: "PHP", level: 92, icon: "🐘" },
      { name: "REST APIs", level: 94, icon: "🔗" },
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Laravel", level: 85, icon: "🔺" },
      { name: "Express", level: 88, icon: "🚂" },
      { name: "Codeigniter", level: 82, icon: "🔥" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building modern, responsive user interfaces",
    skills: [
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 92, icon: "▲" },
      { name: "Bootstrap CSS", level: 88, icon: "🅱️" },
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Expo", level: 80, icon: "🚀" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Cross-platform mobile applications",
    skills: [
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Expo", level: 80, icon: "🚀" },
      { name: "Cordova", level: 75, icon: "🔌" },
      { name: "JavaScript", level: 88, icon: "🟨" },
      { name: "Mobile UI/UX", level: 82, icon: "🎨" }
    ]
  },
  {
    id: "php-frameworks",
    title: "PHP Ecosystem",
    description: "PHP frameworks and admin panels",
    skills: [
      { name: "Laravel", level: 90, icon: "🔺" },
      { name: "Codeigniter", level: 85, icon: "🔥" },
      { name: "Filament PHP", level: 88, icon: "📊" },
      { name: "PHP", level: 94, icon: "🐘" },
      { name: "Composer", level: 86, icon: "🎼" },
      { name: "MySQL", level: 82, icon: "🗄️" }
    ]
  }
]

const tools = [
  "VS Code", "Ubuntu Server", "Aapanel", "Postman", "Android Studio",
  "Terminal", "Mozilla Firefox", "AI-Agent", "Git", "Composer", "npm", "Chrome DevTools", "Figma", "Docker", "Sql Server Management Studio"
]

const keyAchievements = [
  "Built RESTful APIs with Laravel and Node.js",
  "Developed Full Stack Web Applications",
  "Optimized Database Performance",
  "Created Mobile Apps with React Native",
  "Implemented Real-time Systems"
]

// Function to shuffle array
const shuffleArray = (array: string[]) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function SkillsSection() {
  const [shuffledTools, setShuffledTools] = useState<string[]>([])

  useEffect(() => {
    // Shuffle tools only on client side
    setShuffledTools(shuffleArray(tools))
  }, [])
  return (
    <section className="my-20 lg:my-24 bg-background">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 mb-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </motion.div>

        <Tabs defaultValue="backend" className="mb-16 mt-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 max-w-2xl mx-auto mb-16 gap-1 lg:gap-0 bg-transparent p-0">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-xs lg:text-sm px-2 lg:px-3 py-3 lg:py-2 h-auto bg-background hover:bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-normal text-center leading-tight shadow-none"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8 mt-8"
              >
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground">{category.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-w-4xl mx-auto">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-3 sm:p-4 lg:p-6">
                        <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-xl lg:text-2xl">{skill.icon}</span>
                            <h4 className="font-semibold text-sm sm:text-base">{skill.name}</h4>
                          </div>
                          <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-1.5 sm:h-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl lg:text-2xl font-bold text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2 lg:gap-3 justify-center px-12">
            {shuffledTools.map((tool, index) => (
              <motion.div
                key={`${tool}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm hover:bg-primary/5 transition-colors">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}