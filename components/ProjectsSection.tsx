'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "/placeholder-project-1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    date: "2024",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team analytics.",
    image: "/placeholder-project-2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    date: "2024",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool with multiple templates and custom models.",
    image: "/placeholder-project-3.jpg",
    technologies: ["Python", "FastAPI", "OpenAI", "React", "Docker"],
    date: "2023",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    title: "Social Media Dashboard",
    description: "Comprehensive analytics dashboard for social media management and scheduling.",
    image: "/placeholder-project-4.jpg",
    technologies: ["Vue.js", "Nuxt.js", "Chart.js", "Firebase", "Tailwind"],
    date: "2023",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/placeholder-project-5.jpg",
    technologies: ["React Native", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    date: "2023",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    title: "Real Estate Platform",
    description: "Modern real estate platform with virtual tours and advanced search filters.",
    image: "/placeholder-project-6.jpg",
    technologies: ["Next.js", "TypeScript", "Mapbox", "Prisma", "PostgreSQL"],
    date: "2022",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  }
]

export default function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/20">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">Featured</Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 text-xs text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg lg:text-2xl group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm lg:text-base line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1 text-xs" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="gap-1 text-xs" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}