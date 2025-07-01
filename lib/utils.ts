import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  Code,
  Smartphone,
  Globe,
  Settings,
  Wrench,
  Zap,
  Database,
  Palette,
  Cloud,
  Lightbulb,
  BarChart3,
} from "lucide-react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const services = [
  {
    icon: Code,
    title: "Desarrollo de software a medida",
    description:
      "Soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
  },
  {
    icon: Globe,
    title: "Desarrollo de aplicaciones web",
    description: "Aplicaciones web modernas, escalables y optimizadas para el mejor rendimiento.",
  },
  {
    icon: Smartphone,
    title: "Desarrollo de aplicaciones móviles",
    description: "Apps nativas e híbridas para iOS y Android con experiencias de usuario excepcionales.",
  },
  {
    icon: Palette,
    title: "Diseño y desarrollo de sitios web",
    description: "Sitios web atractivos, funcionales y optimizados para conversión y SEO.",
  },
  {
    icon: Settings,
    title: "Integración de sistemas",
    description: "Conectamos tus herramientas y sistemas para optimizar flujos de trabajo.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y soporte técnico",
    description: "Soporte continuo para mantener tus sistemas funcionando de manera óptima.",
  },
  {
    icon: Zap,
    title: "Automatización de procesos",
    description: "Automatizamos tareas repetitivas para aumentar la eficiencia de tu equipo.",
  },
  {
    icon: Database,
    title: "Desarrollo de APIs",
    description: "APIs robustas y seguras para conectar aplicaciones y servicios.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Diseños centrados en el usuario que mejoran la experiencia y usabilidad.",
  },
  {
    icon: Cloud,
    title: "DevOps e infraestructura en la nube",
    description: "Implementación y gestión de infraestructura escalable en la nube.",
  },
  {
    icon: Lightbulb,
    title: "Prototipado y MVPs",
    description: "Validamos ideas rápidamente con prototipos y productos mínimos viables.",
  },
  {
    icon: BarChart3,
    title: "Análisis de datos y visualización",
    description: "Convertimos datos en insights accionables con dashboards interactivos.",
  },
]

export const team = [
  {
    name: "Valentino Araya",
    role: "Full Stack Developer",
    description:
      "Especialista en el stack MERN con TypeScript con más de 2 años de experiencia construyendo proyectos. Estudiante avanzado de Ingeniería en Sistemas de la Información.",
    image: "/team/valentino-araya.jpeg",
    github: "https://github.com/valentinoaraya",
    linkedin: "https://www.linkedin.com/in/valentinoaraya",
    githubImage: "/team/valentino-araya-github.png",
    linkedinImage: "/team/valentino-araya-linkedin.png",
  },
  {
    name: "Faustino Duran",
    role: "Full Stack Developer",
    description:
      "Especialista en automatizaciones y gestión de herramientas en la nube. Estudiante avanzado de Ingeniería en Sistemas de la Información.",
    image: "/team/faustino-duran.jpeg",
    github: "https://github.com/FaustinoDuran",
    linkedin: "https://www.linkedin.com/in/faustino-duran-a8b17a273/",
    githubImage: "/team/faustino-duran-github.png",
    linkedinImage: "/team/faustino-duran-linkedin.png",
  },
  {
    name: "Ignacio Patiño",
    role: "Full Stack Developer",
    description: "Especialista en bases de datos, diseño de interfaces y desarrollo frontend. Estudiante avanzado de Ingeniería en Sistemas de la información.",
    image: "/team/ignacio-patino.jpeg",
    github: "https://github.com/nachopatinoc",
    linkedin: "https://www.linkedin.com/in/ignacio-pati%C3%B1o-851701160/",
    githubImage: "/team/ignacio-patino-github.png",
    linkedinImage: "/team/ignacio-patino-linkedin.png",
  },
]

export const projects = [
  {
    name: "SportyMaxx",
    description: "E-commerce para una tienda de ropa. Cuenta con interfaces de administrador para subir, editar y eliminar productos. Integra MercadoPago para recibir pagos.",
    technologies: ["React", "Express", "Node.js", "Firebase"],
    image: "/projects/sportymaxx.webp"
  },
  {
    name: "Sistema de gestión de turnos",
    description:
      "Plataforma de gestión de turnos para una clínica local. Cuenta con paneles de usuarios y de administradores.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    image: "/projects/turnero.webp"
  },
  {
    name: "VentaTrack",
    description: "Software para gestión de ventas e inventario para kioscos y despensas, cuenta con historial y tabla de productos.",
    technologies: ["React", "Firebase"],
    image: "/projects/ventatrack.webp"
  },
  {
    name: "Bookify",
    description: "Plataforma para que empresas puedan gestionar los turnos de sus clientes de manera efectiva. Cuenta con MercadoPago integrado, y notificaciones automatizadas.",
    technologies: ["TypeScript", "React", "Express", "Node.js", "MongoDB"],
    image: "/projects/bookify.webp"
  },
]