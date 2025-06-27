import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";

export const Contact: React.FC<{ themeClasses: any }> = ({ themeClasses }) => {
    return (
        <section id="contacto" className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Contanos tu idea, la hacemos realidad</h2>
                    <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
                        ¿Tenés un proyecto en mente? Nos encantaría escucharte y ayudarte a convertir tu visión en una solución
                        tecnológica exitosa.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <Card className={`${themeClasses.cardBg} ${themeClasses.cardBorder} ${themeClasses.shadow}`}>
                        <CardHeader>
                            <CardTitle className={`${themeClasses.text} text-2xl`}>Envianos un mensaje</CardTitle>
                            <CardDescription className={themeClasses.textSecondary}>
                                Completá el formulario y nos pondremos en contacto contigo a la brevedad.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <label className={`text-sm font-medium ${themeClasses.textSecondary}`}>Nombre completo</label>
                                <Input
                                    placeholder="Tu nombre completo"
                                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.inputText} ${themeClasses.inputPlaceholder}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className={`text-sm font-medium ${themeClasses.textSecondary}`}>Email</label>
                                <Input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.inputText} ${themeClasses.inputPlaceholder}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className={`text-sm font-medium ${themeClasses.textSecondary}`}>Mensaje</label>
                                <Textarea
                                    placeholder="Contanos sobre tu proyecto o idea..."
                                    rows={5}
                                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.inputText} ${themeClasses.inputPlaceholder}`}
                                />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700">
                                Enviar mensaje
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <div>
                            <h3 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>Información de contacto</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-red-400" />
                                    <span className={themeClasses.textSecondary}>contacto@aedes.tech</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Linkedin className="h-5 w-5 text-red-400" />
                                    <span className={themeClasses.textSecondary}>linkedin.com/company/aedes-tech</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Github className="h-5 w-5 text-red-400" />
                                    <span className={themeClasses.textSecondary}>github.com/aedes-tech</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-500/10 to-rose-600/10 p-6 rounded-lg border border-red-500/20">
                            <h4 className={`text-xl font-bold ${themeClasses.text} mb-2`}>¿Listo para comenzar?</h4>
                            <p className={`${themeClasses.textSecondary} mb-4`}>
                                Transformemos juntos tu idea en una solución tecnológica innovadora que impulse tu negocio.
                            </p>
                            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
                                Agendar reunión
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
