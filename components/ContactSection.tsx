'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@johndoe.com",
    link: "mailto:hello@johndoe.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    link: "https://maps.google.com/?q=San+Francisco,+CA"
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open for opportunities",
    link: null
  }
]

const socialLinks = [
  {
    icon: Github,
    platform: "GitHub",
    url: "https://github.com/johndoe",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    icon: Linkedin,
    platform: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    platform: "Twitter",
    url: "https://twitter.com/johndoe",
    color: "hover:text-blue-400"
  },
  {
    icon: Instagram,
    platform: "Instagram",
    url: "https://instagram.com/johndoe",
    color: "hover:text-pink-600"
  }
]

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications using modern technologies",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces",
    technologies: ["Figma", "Tailwind CSS", "Adobe XD", "Framer Motion"]
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications",
    technologies: ["React Native", "Flutter", "Expo"]
  },
  {
    title: "Consulting",
    description: "Technical guidance and architecture planning",
    technologies: ["System Design", "Code Review", "Best Practices"]
  }
]

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    alert("Thank you for your message! I'll get back to you soon.")
  }

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
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. Let's create something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 order-2 lg:order-1"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl">Send me a message</CardTitle>
                <CardDescription className="text-sm lg:text-base">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm">Name *</Label>
                      <Input id="name" placeholder="Your name" required className="text-sm" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required className="text-sm" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm">Subject *</Label>
                    <Input id="subject" placeholder="What's this about?" required className="text-sm" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={4}
                      required
                      className="text-sm"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2 text-sm lg:text-base">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6 order-1 lg:order-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <info.icon className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-xs lg:text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm font-medium hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 justify-center">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={social.platform}
                      variant="ghost"
                      size="icon"
                      className={`rounded-full ${social.color} transition-colors w-10 h-10 lg:w-11 lg:h-11`}
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.platform}
                      >
                        <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className="sr-only">{social.platform}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">What I Can Help With</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">
                      {service.title === "Web Development" && "💻"}
                      {service.title === "UI/UX Design" && "🎨"}
                      {service.title === "Mobile Development" && "📱"}
                      {service.title === "Consulting" && "💡"}
                    </div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Response */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">Quick Response Guaranteed</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call me directly or mention "URGENT" in your message subject.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                📧 Response Time: &lt;24 hours
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                🌍 Available Worldwide
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                💬 Free Consultation
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}