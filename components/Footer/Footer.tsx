export const Footer: React.FC<{ themeClasses: any }> = ({ themeClasses }) => {
    return (
        <footer className={`${themeClasses.footerBg} border-t ${themeClasses.footerBorder} py-12`}>
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <span className="text-xl font-bold">Aedes</span>
                    </div>
                    <p className={`${themeClasses.textMuted} text-center md:text-right`}>
                        © {new Date().getFullYear()} Aedes. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
