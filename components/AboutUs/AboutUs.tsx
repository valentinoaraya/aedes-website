import { team } from "@/lib/utils";
import { HoverEffect } from "../card-hover-effect";

export const AboutUs: React.FC<{ themeClasses: any }> = ({ themeClasses }) => {
    return (
        <section id="nosotros" className={`py-16 lg:py-24 ${themeClasses.sectionBg}`}>
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Conocé nuestro equipo</h2>
                    <p className={`text-xl ${themeClasses.textSecondary} max-w-5xl mx-auto pt-5`}>
                        Aedes es conformado por tres amigos. Estudiantes de Ingeniería en Sistemas que compartimos una misma pasión: la programación y la resolución de problemas.
                    </p>
                    <p className={`text-xl ${themeClasses.textSecondary} max-w-5xl mx-auto pt-5`}>
                        Más que una empresa, somos un equipo que disfruta lo que hace y que cree que la tecnología puede cambiar la forma en que vivimos y trabajamos.
                    </p>
                </div>
                <div className="max-w-5x1 mx-auto">
                    <HoverEffect members={team} themeClasses={themeClasses} />
                </div>
            </div>
        </section>
    );
}
