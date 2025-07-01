import { projects } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Theme } from "@/hooks/use-theme";

export const Projects: React.FC<{ theme: Theme, themeClasses: any }> = ({ theme, themeClasses }) => {
    return (
        <section id="proyectos" className={`py-16 lg:py-24 ${themeClasses.sectionBg} ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}>
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Proyectos destacados</h2>
                    <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
                        Algunos de los proyectos que hemos desarrollado para nuestros clientes, demostrando nuestra capacidad de
                        innovación y excelencia técnica.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className={`group ${themeClasses.cardBg} ${themeClasses.cardBorder} ${themeClasses.shadow} transition-colors overflow-hidden`}
                        >
                            {/* Image container with gradient background */}
                            <div
                                className="relative pt-5 pl-5 h-auto bg-gradient-to-br from-red-500 to-rose-600 overflow-hidden transition-all duration-300 group-hover:pt-0 group-hover:pl-0"
                            >
                                <img
                                    src={project.image}
                                    alt={`Proyecto ${project.name}`}
                                    className="w-full h-auto object-cover rounded-tl-2xl transition-all duration-300 group-hover:rounded-none"
                                />

                                {/* Overlay gradient for better text contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                            </div>

                            <CardHeader>
                                <CardTitle className={`${themeClasses.text} text-xl`}>{project.name}</CardTitle>
                                <CardDescription className={`${themeClasses.textSecondary} text-base`}>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            variant="secondary"
                                            className="bg-red-500/20 text-red-500 border-red-500 cursor-default"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                    ))}
                </div>
            </div>
        </section>
    );
}
