import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const Hero = ({ themeClasses }: { themeClasses: any }) => {
    const sectionRef = useRef<HTMLElement>(null)
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = sectionRef.current?.getBoundingClientRect()
        if (!rect) return
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <section
            id="inicio"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="pt-24 h-[80vh] flex items-center justify-center relative overflow-hidden"
        >
            {/* Círculo rojo que sigue al mouse */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full bg-red-500 blur-3xl opacity-30 pointer-events-none transition-all duration-100"
                style={{
                    transform: `translate(${coords.x - 1000}px, ${coords.y - 400}px)`,
                }}
            />

            {/* Contenido */}
            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="grid lg:grid-cols-1 gap-12 items-center">
                    <div className="space-y-8 flex flex-col items-center text-center">
                        <div className="space-y-4 flex flex-col items-center">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                Impulsamos tu negocio con{" "}
                                <span className="text-red-500">soluciones tecnológicas</span>{" "}
                                a medida
                            </h1>
                            <p
                                className={`text-xl ${themeClasses.textSecondary} leading-relaxed max-w-3xl`}
                            >
                                En Aedes transformamos ideas en realidades digitales.
                                Desarrollamos software innovador que potencia el crecimiento de
                                tu empresa con tecnología de vanguardia.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
                            >
                                Comenzar proyecto
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-gray-300 text-gray-900 hover:bg-gray-300"
                            >
                                Ver nuestros servicios
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
