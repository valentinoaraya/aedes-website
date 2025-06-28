import { services } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const Services: React.FC<{ themeClasses: any }> = ({ themeClasses }) => {
    return (
        <section id="servicios" className={`py-16 lg:py-24`}>
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Nuestros servicios</h2>
                    <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
                        Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <Card
                                key={index}
                                className={`${themeClasses.cardBg} ${themeClasses.cardBorder} ${themeClasses.hoverCard} ${themeClasses.shadow} transition-all duration-300 hover:transform hover:scale-105`}
                            >
                                <CardHeader>
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                                        <IconComponent className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className={`${themeClasses.text} text-lg`}>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={themeClasses.textSecondary}>{service.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
