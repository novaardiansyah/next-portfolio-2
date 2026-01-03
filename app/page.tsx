import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"

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

      <Footer />
    </div>
  );
}
