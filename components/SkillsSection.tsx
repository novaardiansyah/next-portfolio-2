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
    <section className="py-20 bg-background">
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

        <Tabs defaultValue="frontend" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-xl sm:text-2xl">{skill.icon}</span>
                            <h4 className="font-semibold text-sm sm:text-base">{skill.name}</h4>
                          </div>
                          <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
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
          <h3 className="text-2xl font-semibold text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm hover:bg-primary/5 transition-colors">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">🏆</div>
                  <p className="text-sm font-medium">{cert}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}