'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { CONTACT_INFO, SOCIAL_LINKS } from "@/constants/contact"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email.value,
    link: CONTACT_INFO.email.link
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone.value,
    link: CONTACT_INFO.phone.link
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT_INFO.location.value,
    link: CONTACT_INFO.location.link
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
    url: "https://github.com/novaardiansyah",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    icon: Linkedin,
    platform: "LinkedIn",
    url: "https://linkedin.com/in/novaardiansyah",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    platform: "Twitter",
    url: "https://twitter.com/novaardiansyah",
    color: "hover:text-blue-400"
  },
  {
    icon: Instagram,
    platform: "Instagram",
    url: "https://instagram.com/novaardiansyah",
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
    <section id="contact" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. Let's create something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
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
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">What I Can Help With</h3>
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
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 shadow-lg">
            <CardContent className="p-6 lg:p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-primary/60 rounded-full mb-4">
                  <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">Quick Response Guaranteed</h3>
                <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call me directly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                <div className="flex flex-col items-center p-3 lg:p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10">
                  <div className="text-2xl lg:text-3xl mb-2">📧</div>
                  <p className="text-xs lg:text-sm font-medium text-center">Response Time</p>
                  <p className="text-sm lg:text-base font-semibold text-primary">&lt;24 hours</p>
                </div>
                <div className="flex flex-col items-center p-3 lg:p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10">
                  <div className="text-2xl lg:text-3xl mb-2">🌍</div>
                  <p className="text-xs lg:text-sm font-medium text-center">Availability</p>
                  <p className="text-sm lg:text-base font-semibold text-primary">Worldwide</p>
                </div>
                <div className="flex flex-col items-center p-3 lg:p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10">
                  <div className="text-2xl lg:text-3xl mb-2">💬</div>
                  <p className="text-xs lg:text-sm font-medium text-center">Consultation</p>
                  <p className="text-sm lg:text-base font-semibold text-primary">Free</p>
                </div>
              </div>

              <div className="text-center mt-4 lg:mt-6">
                <Button variant="outline" size="lg" className="gap-2 border-primary/30 hover:bg-primary/10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Urgent Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}