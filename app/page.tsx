"use client"
import { Header } from "@/components/Header/Header"
import { Hero } from "@/components/Hero/Hero"
import { Projects } from "@/components/Projects/Projects"
import { Services } from "@/components/Services/Services"
import { AboutUs } from "@/components/AboutUs/AboutUs"
import { Contact } from "@/components/Contact/Contact"
import { Footer } from "@/components/Footer/Footer"
import { useTheme } from "@/hooks/use-theme"

export default function AedesWebsite() {
  const { theme, toggleTheme } = useTheme()

  const themeClasses = {
    background: theme === "dark" ? "bg-gray-900" : "bg-gray-50",
    text: theme === "dark" ? "text-white" : "text-gray-900",
    textSecondary: theme === "dark" ? "text-gray-300" : "text-gray-600",
    textMuted: theme === "dark" ? "text-gray-400" : "text-gray-500",
    cardBg: theme === "dark" ? "bg-gray-800" : "bg-white",
    cardBorder: theme === "dark" ? "border-gray-700" : "border-gray-200",
    headerBg: theme === "dark" ? "bg-gray-900/95" : "bg-white/95",
    headerBorder: theme === "dark" ? "border-gray-800" : "border-gray-200",
    sectionBg: theme === "dark" ? "bg-gray-800/50" : "bg-white",
    inputBg: theme === "dark" ? "bg-gray-700" : "bg-gray-50",
    inputBorder: theme === "dark" ? "border-gray-600" : "border-gray-300",
    inputText: theme === "dark" ? "text-white" : "text-gray-900",
    inputPlaceholder: theme === "dark" ? "placeholder:text-gray-400" : "placeholder:text-gray-500",
    footerBg: theme === "dark" ? "bg-gray-900" : "bg-white",
    footerBorder: theme === "dark" ? "border-gray-800" : "border-gray-200",
    hoverCard: theme === "dark" ? "hover:border-red-500/50" : "hover:border-red-500/50",
    shadow: theme === "dark" ? "" : "shadow-lg hover:shadow-xl",
    mobileBg: theme === "dark" ? "bg-gray-800" : "bg-gray-50",
    mobileBorder: theme === "dark" ? "border-gray-700" : "border-gray-200",
    navHover: theme === "dark" ? "hover:text-white" : "hover:text-gray-900",
  }

  return (
    <div className={`${themeClasses.background} ${themeClasses.text} min-h-screen transition-colors duration-300`}>
      {/* Header */}
      <Header theme={theme} toggleTheme={toggleTheme} themeClasses={themeClasses} />

      {/* Hero Section */}
      <Hero themeClasses={themeClasses} />

      {/* Proyectos */}
      <Projects theme={theme} themeClasses={themeClasses} />

      {/* Servicios */}
      <Services themeClasses={themeClasses} />

      {/* Quiénes somos */}
      <AboutUs themeClasses={themeClasses} />

      {/* Contacto */}
      <Contact themeClasses={themeClasses} />

      {/* Footer */}
      <Footer themeClasses={themeClasses} />
    </div>
  )
}
