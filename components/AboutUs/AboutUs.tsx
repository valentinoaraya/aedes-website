import { team } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const AboutUs: React.FC<{ themeClasses: any }> = ({ themeClasses }) => {
    return (
        <section id="nosotros" className={`py-16 lg:py-24 ${themeClasses.sectionBg}`}>
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Conocé nuestro equipo</h2>
                    <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
                        Somos un equipo apasionado de profesionales con experiencia en las últimas tecnologías, comprometidos con
                        la excelencia y la innovación.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <Card
                            key={index}
                            className={`${themeClasses.cardBg} ${themeClasses.cardBorder} ${themeClasses.hoverCard} ${themeClasses.shadow} transition-colors`}
                        >
                            <CardHeader className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">
                                        {member.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                </div>
                                <CardTitle className={themeClasses.text}>{member.name}</CardTitle>
                                <CardDescription className="text-red-400 font-medium">{member.role}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className={`${themeClasses.textSecondary} text-center`}>{member.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
