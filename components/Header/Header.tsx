import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Theme } from "@/hooks/use-theme"

interface Props {
    theme: Theme
    toggleTheme: () => void
    themeClasses: any
}

export const Header: React.FC<Props> = ({ theme, toggleTheme, themeClasses }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header
            className={`fixed top-0 w-full ${themeClasses.headerBg} backdrop-blur-sm border-b ${themeClasses.headerBorder} z-50`}
        >
            <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
                <Link href="#incio" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <span className="text-xl font-bold">Aedes</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    <Link
                        href="#proyectos"
                        className={`${themeClasses.textSecondary} ${themeClasses.navHover} transition-colors`}
                    >
                        Proyectos
                    </Link>
                    <Link
                        href="#servicios"
                        className={`${themeClasses.textSecondary} ${themeClasses.navHover} transition-colors`}
                    >
                        Servicios
                    </Link>
                    <Link
                        href="#nosotros"
                        className={`${themeClasses.textSecondary} ${themeClasses.navHover} transition-colors`}
                    >
                        Quiénes somos
                    </Link>
                    <Link
                        href="#contacto"
                        className={`${themeClasses.textSecondary} ${themeClasses.navHover} transition-colors`}
                    >
                        Contacto
                    </Link>
                    <ThemeToggle theme={theme} onToggle={toggleTheme} />
                </nav>

                {/* Mobile Menu Button and Theme Toggle */}
                <div className="md:hidden flex items-center space-x-2">
                    <ThemeToggle theme={theme} onToggle={toggleTheme} />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className={`md:hidden ${themeClasses.mobileBg} border-t ${themeClasses.mobileBorder}`}>
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link
                            href="#inicio"
                            className={`${themeClasses.textSecondary} ${themeClasses.navHover} transition-colors`}
                        >
                            Inicio
                        </Link>
                        <Link
                            href="#nosotros"
                            className={`${themeClasses.textSecondary} ${themeClasses.navHover} transition-colors`}
                        >
                            Quiénes somos
                        </Link>
                        <Link
                            href="#servicios"
                            className={`${themeClasses.textSecondary} ${themeClasses.navHover} transition-colors`}
                        >
                            Servicios
                        </Link>
                        <Link
                            href="#proyectos"
                            className={`${themeClasses.textSecondary} ${themeClasses.navHover} transition-colors`}
                        >
                            Proyectos
                        </Link>
                        <Link
                            href="#contacto"
                            className={`${themeClasses.textSecondary} ${themeClasses.navHover} transition-colors`}
                        >
                            Contacto
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
