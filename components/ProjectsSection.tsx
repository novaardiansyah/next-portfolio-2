'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Laravel E-Commerce Platform",
    description: "Full-stack e-commerce solution built with Laravel and Filament PHP for admin panel, featuring payment integration and inventory management.",
    image: "/placeholder-project-1.jpg",
    technologies: ["Laravel", "Filament PHP", "PHP", "MySQL", "Bootstrap CSS"],
    date: "2024",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "React Native Delivery App",
    description: "Cross-platform mobile application for delivery services with real-time tracking and payment processing using React Native and Expo.",
    image: "/placeholder-project-2.jpg",
    technologies: ["React Native", "Expo", "Node.js", "Express", "REST API"],
    date: "2024",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8">
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