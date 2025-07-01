export const ButtonWithEmoji = ({ children, emoji, className, distance }: {
    children: React.ReactNode
    emoji: string
    className?: string
    distance?: string
}) => {

    return (
        <div className="flex items-center justify-center space-x-2">
            <button className={`h-11 px-8 rounded-md relative overflow-hidden bg-black text-white flex justify-center group/modal-btn bg-gradient-to-r from-red-500 to-rose-600 ${className}`}>
                <span className={`group-hover/modal-btn:translate-x-[500px] text-center transition duration-500 flex items-center justify-center gap-2 font-medium text-sm`}>
                    {children}
                </span>
                <div className={`-translate-x-[500px] group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20`}>
                    <span className="text-2xl">{emoji}</span>
                </div>
            </button>
        </div>
    );
}

