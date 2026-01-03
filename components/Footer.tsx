import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/novaardiansyah", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/novaardiansyah/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:novaardiansyah.dev@gmail.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} <Link href="/" className="hover:text-primary transition-colors font-semibold">Nova Ardiansyah</Link>. All rights reserved.
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
  )
}
