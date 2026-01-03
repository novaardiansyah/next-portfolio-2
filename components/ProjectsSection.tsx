'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "NovaApp - React Native Finance Management",
    description: "Modern React Native finance management application built with Expo and TypeScript. Features complete authentication flow with Laravel Sanctum API integration, Material Design UI, and robust user management.",
    image: "/project-1.png",
    technologies: ["React Native", "Expo", "TypeScript", "React Navigation", "React Native Paper", "Laravel Sanctum"],
    date: "2025",
    githubUrl: "https://github.com/novaardiansyah/react-native-novaapp",
    liveUrl: null,
    featured: true
  },
  {
    title: "Personal Filament v4 Admin Panel",
    description: "Open-source admin panel built with Laravel 12 and Filament PHP 4, designed for personal utility management with user roles and permissions system.",
    image: "/project-2.png",
    technologies: ["Laravel 12", "Filament PHP 4", "PHP 8.3+", "MySQL"],
    date: "2025",
    githubUrl: "https://github.com/novaardiansyah/personal-v4",
    liveUrl: "https://personal-v4-demo.novaardiansyah.id",
    featured: true
  },
  {
    title: "Codeigniter CRM System",
    description: "Customer Relationship Management system built with Codeigniter, featuring lead tracking and reporting dashboard.",
    image: "/placeholder-project-3.jpg",
    technologies: ["Codeigniter", "PHP", "MySQL", "JavaScript", "Bootstrap CSS"],
    date: "2023",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    title: "Next.js Blog Platform",
    description: "Modern blog platform with Next.js, featuring MDX support, SEO optimization, and responsive design.",
    image: "/placeholder-project-4.jpg",
    technologies: ["Next.js", "JavaScript", "Node.js", "Express", "MongoDB"],
    date: "2023",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    title: "Cordova Enterprise App",
    description: "Enterprise mobile application using Cordova with offline capabilities and data synchronization.",
    image: "/placeholder-project-5.jpg",
    technologies: ["Cordova", "JavaScript", "PHP", "Laravel", "REST API"],
    date: "2023",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  },
  {
    title: "REST API Gateway",
    description: "Comprehensive REST API gateway built with Node.js and Express, serving multiple frontend applications.",
    image: "/placeholder-project-6.jpg",
    technologies: ["Node.js", "Express", "JavaScript", "MongoDB", "Docker"],
    date: "2022",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  }
]

export default function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section className="bg-muted/30 py-16 sm:py-20 overflow-hidden min-h-screen scroll-mt-16">
      <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 mb-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 mb-0 w-full mx-0">
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      e.currentTarget.style.display = 'none'
                    }}
                  />
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
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs px-3 py-1.5 lg:text-sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs px-3 py-1.5 lg:text-sm">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-1 text-xs lg:text-sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 lg:w-4 lg:h-4" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="gap-1 text-xs lg:text-sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
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