import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/novaardiansyah", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/novaardiansyah/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:novaardiansyah.dev@gmail.com", label: "Email" },
]

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      <main className="overflow-x-hidden">
        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>

        <section id="about" className="min-h-screen">
          <AboutSection />
        </section>

        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>

        <section id="skills" className="min-h-screen">
          <SkillsSection />
        </section>

        <section id="contact" className="min-h-screen">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Nova Ardiansyah. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
