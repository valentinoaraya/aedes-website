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
      "Especialista en arquitectura de software con más de 8 años de experiencia liderando proyectos tecnológicos innovadores.",
  },
  {
    name: "Faustino Duran",
    role: "Full Stack Developer",
    description:
      "Experto en infraestructura cloud y automatización, enfocado en crear soluciones escalables y seguras.",
  },
  {
    name: "Ignacio Patiño",
    role: "Full Stack Developer",
    description: "Diseñadora UX/UI apasionada por crear experiencias digitales intuitivas y visualmente impactantes.",
  },
]

export const projects = [
  {
    name: "EcoCommerce",
    description:
      "Plataforma de e-commerce sostenible con sistema de gestión de inventario y analytics en tiempo real.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    name: "HealthTracker Pro",
    description: "Aplicación móvil para seguimiento de salud con integración IoT y dashboard médico.",
    technologies: ["React Native", "Python", "MongoDB", "Firebase"],
  },
  {
    name: "SmartFactory",
    description: "Sistema de automatización industrial con monitoreo en tiempo real y predictivo.",
    technologies: ["Vue.js", "Django", "InfluxDB", "Docker"],
  },
  {
    name: "EduPlatform",
    description: "Plataforma educativa online con videoconferencias, evaluaciones automáticas y gamificación.",
    technologies: ["Next.js", "Express", "MySQL", "WebRTC"],
  },
]