'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Calendar, MapPin, Mail, Phone, GraduationCap, Briefcase, Award } from "lucide-react"

const timeline = [
  {
    year: "2024 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of Laravel and React Native applications, implementing REST APIs, and mentoring team on modern PHP practices."
  },
  {
    year: "2022 - 2024",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    description: "Developed multiple web applications using Laravel, Codeigniter, and React Native. Built REST APIs and implemented responsive designs with Bootstrap CSS."
  },
  {
    year: "2020 - 2022",
    title: "PHP Developer",
    company: "Web Solutions Ltd.",
    description: "Specialized in PHP development with Laravel and Codeigniter frameworks. Created custom admin panels and integrated third-party APIs."
  },
  {
    year: "2019 - 2020",
    title: "Junior Web Developer",
    company: "StartUp Hub",
    description: "Started professional journey building websites with PHP, JavaScript, and Bootstrap CSS. Learned modern development practices."
  }
]

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Tech University",
    year: "2015 - 2019",
    description: "Graduated with honors, focused on software engineering and web technologies."
  },
  {
    degree: "Full Stack Web Development",
    institution: "Coding Bootcamp",
    year: "2018",
    description: "Intensive program covering modern web development technologies."
  }
]

const achievements = [
  "Laravel Certified Developer",
  "PHP Specialist Certification",
  "React Native Mobile App Developer",
  "REST API Architecture Expert",
  "Full Stack JavaScript Developer"
]

export default function AboutSection() {
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
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my journey, experience, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 order-2 lg:order-1"
          >
            <Card className="h-full">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                  <AvatarImage src="/original-blue-circle.png" alt="Profile" />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 text-primary-foreground">
                    NA
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl lg:text-2xl">Nova Ardiansyah</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm sm:text-base">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm sm:text-base">hello@johndoe.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm sm:text-base">Available for freelance</span>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Interests</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["API Development", "Database Design", "System Architecture", "PHP Frameworks", "Open Source", "Performance Optimization"].map((interest) => (
                      <Badge key={interest} variant="secondary" className="text-xs px-2 py-1">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Hello! I'm Nova, a versatile fullstack developer with strong expertise in backend technologies. I create comprehensive web applications from user interface to server architecture, with deep knowledge of both frontend and backend development. My journey spans from building responsive user interfaces to designing robust APIs and database systems.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  My core strength lies in backend development with PHP, Laravel, and Node.js, where I excel at creating scalable APIs and optimizing database performance. However, I'm equally comfortable working with frontend technologies like React and React Native, allowing me to deliver complete solutions. I specialize in fullstack development with an emphasis on powerful backend systems.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring new technologies. I'm also passionate about mentoring aspiring developers and sharing knowledge with the community.
                </p>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {achievements.map((achievement) => (
                      <div key={achievement} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 text-center">Education Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-0.5 w-0.5 bg-border h-full"></div>

            <div className="space-y-6 lg:space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="w-full lg:w-5/12 ml-12 sm:ml-0">
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                          <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                          {item.year}
                        </div>
                        <CardTitle className="text-base lg:text-lg">{item.degree}</CardTitle>
                        <p className="text-sm font-medium text-primary">{item.institution}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                  <div className="w-full lg:w-5/12 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Work Experience</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {timeline.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.year}
                    </div>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <p className="text-sm font-medium text-primary">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}