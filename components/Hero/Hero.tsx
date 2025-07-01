import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ButtonWithEmoji } from "../button-with-emoji"

export const Hero = ({ themeClasses }: { themeClasses: any }) => {
    const sectionRef = useRef<HTMLElement>(null)

    return (
        <section
            id="inicio"
            ref={sectionRef}
            className="pt-24 h-[100vh] lg:h-[80vh] flex items-center justify-center relative overflow-hidden [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#f43f5e_100%)] shadow-xl"
        >
            {/* Contenido */}
            <div className="container mx-auto px-6 relative z-10">
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
                            <ButtonWithEmoji
                                emoji="🚀"
                                onSubmit={() => { window.open("https://wa.me/5492625660880?text=%C2%A1Hola!%20Quiero%20iniciar%20un%20proyecto%20con%20Aedes.%20%C2%BFPodemos%20hablar%3F", '_blank') }}
                            >
                                Comenzar Proyecto
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </ButtonWithEmoji>
                            <Link href={"/#servicios"}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-gray-300 text-gray-900 hover:bg-gray-300"
                                >
                                    Ver nuestros servicios
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
