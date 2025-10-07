'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building modern, responsive user interfaces",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📝" },
      { name: "Next.js", level: 88, icon: "▲" },
      { name: "Vue.js", level: 75, icon: "💚" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Framer Motion", level: 80, icon: "🎭" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Creating robust server-side applications",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Express.js", level: 88, icon: "🚂" },
      { name: "FastAPI", level: 82, icon: "⚡" },
      { name: "GraphQL", level: 78, icon: "📊" },
      { name: "REST APIs", level: 92, icon: "🔗" }
    ]
  },
  {
    id: "database",
    title: "Database & Storage",
    description: "Managing data efficiently and securely",
    skills: [
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "Redis", level: 75, icon: "🔴" },
      { name: "Firebase", level: 82, icon: "🔥" },
      { name: "Prisma", level: 78, icon: "🔮" },
      { name: "Docker", level: 80, icon: "🐳" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Deploying and managing applications at scale",
    skills: [
      { name: "AWS", level: 85, icon: "☁️" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Git", level: 92, icon: "📂" },
      { name: "CI/CD", level: 80, icon: "🔄" },
      { name: "Linux", level: 75, icon: "🐧" },
      { name: "Nginx", level: 70, icon: "🔧" }
    ]
  }
]

const tools = [
  "VS Code", "IntelliJ IDEA", "Figma", "Postman", "Docker Desktop", "GitKraken",
  "Chrome DevTools", "Terminal", "Webpack", "Vite", "ESLint", "Prettier"
]

const certifications = [
  "AWS Certified Developer Associate",
  "Google Cloud Professional Developer",
  "MongoDB Certified Developer",
  "React Developer Certification"
]

export default function SkillsSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="mb-16 mt-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 max-w-2xl mx-auto mb-20 lg:mb-12 gap-1 lg:gap-0 bg-transparent p-0">
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
                className="text-center mb-6 lg:mb-8 mt-8 lg:mt-12"
              >
                <h3 className="text-xl lg:text-2xl font-semibold mb-2">{category.title}</h3>
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
          className="mb-12 lg:mb-16"
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-center mb-6 lg:mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2 lg:gap-3 justify-center">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
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