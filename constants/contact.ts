import { Github, Linkedin, Mail, Globe } from "lucide-react"

export const CONTACT_INFO = {
  email: {
    value: "admin@novaardiansyah.id",
    link: "mailto:admin@novaardiansyah.id"
  },
  phone: {
    value: "(+62) 895 0666 8480",
    link: "https://api.whatsapp.com/send/?phone=6289506668480&text=Hi+Nova%2C+I+would+like+to+connect+with+you+soon%2C+please+get+back+to+me+as+soon+as+possible%21&type=phone_number&app_absent=0"
  },
  location: {
    value: "Tangerang, Banten, Indonesia",
    link: "https://maps.app.goo.gl/8VeoVeAbzouPhKqS6"
  }
}

export const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/novaardiansyah", label: "GitHub", target: "_blank" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/novaardiansyah/", label: "LinkedIn", target: "_blank" },
  { icon: Mail, href: "mailto:admin@novaardiansyah.id", label: "Email", target: "_self" },
  { icon: Globe, href: "https://blog.novaardiansyah.id?utm_source=portfolio&utm_medium=hero_section&utm_campaign=blog_link", label: "Blog", target: "_blank" }
]

export const PERSONAL_INFO = {
  name: "Nova Ardiansyah",
  title: "Full Stack Developer",
  avatar: "/original-blue-circle.png",
  description: "I create comprehensive web and mobile applications with strong expertise in both frontend and backend development. With a passion for building robust APIs and database systems while maintaining clean, intuitive user interfaces."
}