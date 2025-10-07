import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Nova Ardiansyah. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              {["github", "linkedin", "twitter", "instagram"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <div className="w-4 h-4 bg-muted-foreground/50 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
