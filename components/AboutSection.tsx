'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Calendar, MapPin, Mail, Phone, GraduationCap, Briefcase, Award } from "lucide-react"
import { CONTACT_INFO, PERSONAL_INFO } from "@/constants/contact"

const timeline = [
  {
    year: "2021 - Present",
    title: "Senior Web Developer",
    company: "SofwareHouse, Tangerang, Indonesia",
    description: "Develop and maintain web applications, focusing on backend logic and API integration for the frontend (without UI/UX design). Design, manage, and optimize database structures for secure and efficient data handling. Troubleshoot and resolve technical issues, as well as address client feedback and new feature requests. Coordinate and mentor team members to ensure effective project delivery. Collaborate with clients and cross-functional teams to align solutions with business goals."
  }
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Universitas Pamulang, Tangerang Selatan, Indonesia",
    year: "2021 - Present",
    description: "Currently pursuing undergraduate degree with focus on software engineering and computer science fundamentals."
  },
  {
    degree: "Diploma in Software Engineering",
    institution: "SMK Negeri 1 Trimurjo, Lampung Tengah, Indonesia",
    year: "2017 - 2019",
    description: "Vocational high school education specializing in software engineering and web development."
  },
  {
    degree: "Junior High School",
    institution: "SMP Negeri 2 Trimurjo, Lampung Tengah, Indonesia",
    year: "2015 - 2017",
    description: "Junior high school education with foundation in mathematics and computer science."
  }
]

const achievements = [
  "Built RESTful APIs with Laravel and Node.js",
  "Developed Full Stack Web Applications",
  "Optimized Database Performance",
  "Created Mobile Apps with React Native",
  "Implemented Real-time Systems"
]

export default function AboutSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-20 overflow-hidden min-h-screen scroll-mt-16">
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
              About Nova
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-3 sm:px-0">
            Discover the story behind the code and the passion driving innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
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
                <CardTitle className="text-2xl lg:text-3xl">Nova Ardiansyah</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <a href={CONTACT_INFO.location.link} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-primary transition-colors">
                    {CONTACT_INFO.location.value}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <a href={CONTACT_INFO.email.link} className="text-sm sm:text-base hover:text-primary transition-colors">
                    {CONTACT_INFO.email.value}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <a href={CONTACT_INFO.phone.link} className="text-sm sm:text-base hover:text-primary transition-colors">
                    {CONTACT_INFO.phone.value}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm sm:text-base">Open for opportunities</span>
                </div>

                <div className="pt-4">
                  <h4 className="text-xl lg:text-2xl font-bold mb-3">Passion Areas</h4>
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
                <CardTitle className="text-2xl lg:text-3xl">
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Hello! I'm Nova, a versatile fullstack developer with strong expertise in backend technologies. I create comprehensive web applications from user interface to server architecture, with deep knowledge of both frontend and backend development. My journey spans from building responsive user interfaces to designing robust APIs and database systems.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  My core strength lies in backend development with PHP, Laravel, and Node.js, where I excel at creating scalable APIs and optimizing database performance. However, I'm equally comfortable working with frontend technologies like React and React Native, allowing me to deliver complete solutions. I specialize in fullstack development with an emphasis on powerful backend systems.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  When I'm not coding, you can find me exploring new technologies, working on personal projects, or diving deep into database optimization and system architecture. I enjoy solving complex technical challenges and continuously learning about the latest developments in web and mobile development.
                </p>

                <div>
                  <h4 className="text-xl lg:text-2xl font-bold mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                    Success Highlights
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
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The educational path that shaped my technical foundation
            </p>
          </div>
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
          <div className="text-center my-20 lg:my-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
                  Career Journey
                </span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Where I craft digital solutions and lead technical excellence
              </p>
            </motion.div>
          </div>

          <div className="w-full">
            {timeline.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.3, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Modern card with glassmorphism */}
                <div className="relative group">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-foreground/10 to-foreground/5 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>

                  <div className="relative bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 p-8 md:p-12 lg:p-16 xl:p-20">
                    {/* Header with modern layout */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                      <div className="flex items-center gap-6 mb-6 lg:mb-0">
                        {/* Modern icon container */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/70 rounded-2xl blur-lg opacity-30"></div>
                          <div className="relative bg-gradient-to-r from-foreground to-foreground/70 rounded-2xl p-4">
                            <Briefcase className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {exp.title}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <p className="text-xl font-medium text-primary">{exp.company}</p>
                            <div className="hidden sm:block w-1 h-1 bg-primary rounded-full"></div>
                            <p className="text-sm text-muted-foreground">{exp.year}</p>
                          </div>
                        </div>
                      </div>

                      {/* Modern status badge */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">Current</span>
                      </div>
                    </div>

                    {/* Modern content layout */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                      {/* Responsibilities */}
                      <div>
                        <h5 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                          Key Responsibilities
                        </h5>
                        <div className="space-y-4 lg:space-y-5">
                          {[
                            { icon: "💻", text: "Full-stack web application development" },
                            { icon: "🔧", text: "Backend logic & API architecture design" },
                            { icon: "🗄️", text: "Database optimization & management" },
                            { icon: "👥", text: "Team coordination & mentorship" },
                            { icon: "🤝", text: "Client collaboration & solution architecture" }
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-3 p-3 lg:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                            >
                              <span className="text-lg">{item.icon}</span>
                              <span className="text-sm lg:text-base font-medium">{item.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack & Impact */}
                      <div>
                        <h5 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                          Tech Stack & Impact
                        </h5>

                        {/* Tech stack grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 mb-6">
                          {["PHP", "Codeigniter", "API Design", "Database", "Team Lead", "Architecture"].map((tech) => (
                            <div
                              key={tech}
                              className="px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/10 text-sm font-medium text-center hover:from-primary/10 hover:to-blue-500/10 transition-all duration-300"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>

                        {/* Impact metrics */}
                        <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/20">
                          <h6 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                            🚀 Impact
                          </h6>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Leading development of scalable web solutions while mentoring team members and delivering high-quality applications that meet client business objectives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}