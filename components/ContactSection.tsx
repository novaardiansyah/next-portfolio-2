'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter, Instagram, CheckCircle, XCircle } from "lucide-react"
import { useState } from "react"
import { CONTACT_INFO } from "@/constants/contact"
import Turnstile from "react-turnstile";

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
    icon: Mail,
    platform: "Email",
    url: "mailto:novaardiansyah.dev@gmail.com",
    color: "hover:text-red-600"
  }
]

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications using modern technologies",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"]
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
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [captchaKey, setCaptchaKey] = useState(0)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [invalidFields, setInvalidFields] = useState<Record<string, string[]>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the specific field being edited
    if (invalidFields[e.target.name]) {
      setInvalidFields(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Clear error for the specific field being focused
    if (invalidFields[e.target.name]) {
      setInvalidFields(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setInvalidFields({});

    if (!token) {
      setError("Please complete the captcha before submitting.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact_messages", {
        body: JSON.stringify({ ...formData, captcha_token: token }),
        method: "POST",
      }).then((res) => res.json())

      if (res?.errors) {
        setInvalidFields((prev) => res.errors);
        return;
      }

      if (res?.status == 200) {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSuccess(res?.message ?? "Message sent successfully");
        return
      } 
      
      throw new Error(res.message)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
      setToken("")
      setCaptchaKey((prev) => prev + 1)
    }
  }

  return (
    <section className="bg-background overflow-y-hidden overflow-x-hidden min-h-screen pb-16 sm:pb-20 pt-10 sm:pt-14 scroll-mt-16">
      <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with amazing people. Let's create something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-20 overflow-x-hidden">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 order-2 lg:order-1 min-w-0"
          >
            <Card className="h-full overflow-hidden">
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
                      <Input id="name" name="name" placeholder="Your name" className="text-sm" onChange={handleChange} onFocus={handleFocus} value={formData.name} />
                      {invalidFields?.name && <div className="text-red-600 dark:text-red-700 mt-1 text-xs">{invalidFields.name[0]}</div>}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm">Email *</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" className="text-sm" onChange={handleChange} onFocus={handleFocus} value={formData.email} />
                      {invalidFields?.email && <div className="text-red-600 dark:text-red-700 mt-1 text-xs">{invalidFields.email[0]}</div>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm">Subject *</Label>
                    <Input id="subject" name="subject" placeholder="What's this about?" className="text-sm" onChange={handleChange} onFocus={handleFocus} value={formData.subject} />
                    {invalidFields?.subject && <div className="text-red-600 dark:text-red-700 mt-1 text-xs">{invalidFields.subject[0]}</div>}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="text-sm"
                      onChange={handleChange}
                      onFocus={handleFocus}
                      value={formData.message}
                    />
                    {invalidFields?.message && <div className="text-red-600 dark:text-red-700 mt-1 text-xs">{invalidFields.message[0]}</div>}
                  </div>

                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
                    onVerify={(token) => setToken(token)}
                    key={captchaKey}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 text-sm lg:text-base cursor-pointer bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:from-gray-900 hover:via-gray-800 hover:to-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 dark:from-gray-200 dark:via-gray-300 dark:to-gray-400 dark:hover:from-gray-100 dark:hover:via-gray-200 dark:hover:to-gray-300 dark:text-gray-900"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Send className="w-4 h-4 animate-pulse" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {success && (
                    <div className="flex items-center gap-2 p-3 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm text-green-800 dark:text-green-200">
                        {success}
                      </span>
                    </div>
                  )}

                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                      <XCircle className="w-4 h-4 text-red-600 dark:text-xsd-400" />
                      <span className="text-sm text-red-800 dark:text-red-200">
                        {error}
                      </span>
                    </div>
                  )}
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
            className="space-y-4 lg:space-y-6 order-1 lg:order-2 min-w-0"
          >
            <Card className="overflow-hidden">
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

            <Card className="overflow-hidden">
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
          <div className="grid md:grid-cols-3 gap-6 overflow-x-hidden">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-md transition-shadow overflow-hidden">
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
          className="mt-8 lg:mt-16"
        >
          <Card className="relative group px-6 lg:px-0 py-8 lg:py-12">
            <div className="text-center mb-4 lg:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 rounded-full mb-4 shadow-lg ring-4 ring-gray-400/20 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 dark:ring-gray-400/20">
                <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">Quick Response Guaranteed</h3>
                <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For urgent projects, <br />feel free to call me directly.
                </p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 lg:gap-6 overflow-x-hidden">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-12 rounded-full mb-3">
                    <div className="text-2xl lg:text-3xl">📧</div>
                  </div>
                  <h4 className="text-sm lg:text-base font-semibold mb-1">Response <span className="hidden sm:inline">Time</span></h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">&lt;24 hours</p>
                </div>
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-12 rounded-full mb-3">
                    <div className="text-2xl lg:text-3xl">🌍</div>
                  </div>
                  <h4 className="text-sm lg:text-base font-semibold mb-1">Availability</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">Worldwide</p>
                </div>
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-12 rounded-full mb-3">
                    <div className="text-2xl lg:text-3xl">💬</div>
                  </div>
                  <h4 className="text-sm lg:text-base font-semibold mb-1">Consultation</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">Free</p>
                </div>
              </div>

          <div className="text-center mt-4 lg:mt-8">
            <Button size="lg" className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:from-gray-900 hover:via-gray-800 hover:to-gray-700 text-white gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:from-gray-200 dark:via-gray-300 dark:to-gray-400 dark:hover:from-gray-100 dark:hover:via-gray-200 dark:hover:to-gray-300 dark:text-gray-900" asChild>
              <a href={CONTACT_INFO.phone.link}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Urgent Message
              </a>
            </Button>
          </div>
        </Card>
        </motion.div>
      </div>
    </section>
  )
}