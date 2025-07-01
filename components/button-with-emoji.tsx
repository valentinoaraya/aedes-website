export const ButtonWithEmoji = ({ children, emoji, className, onSubmit, type, isLoading, disabled }: {
    children: React.ReactNode
    emoji: string
    className?: string
    onSubmit?: () => void
    type?: "button" | "submit" | "reset"
    isLoading?: boolean
    disabled?: boolean
}) => {

    return (
        <div className="flex items-center justify-center space-x-2">
            <button disabled={disabled} type={type} onClick={onSubmit} className={`h-11 px-8 rounded-md relative overflow-hidden bg-black text-white flex items-center justify-center group/modal-btn bg-gradient-to-r from-red-500 to-rose-600 ${className}`}>
                <span className={`group-hover/modal-btn:translate-x-[500px] text-center transition duration-500 flex items-center justify-center gap-2 font-medium text-sm`}>
                    {
                        isLoading ? (
                            <span className="flex items-center gap-2">
                                <svg className="h-5 w-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m0 14v1m8-9h-1M5 12H4m14.657-7.657l-.707.707M6.343 18.364l-.707.707m12.728-12.728l-.707.707M6.343 5.636l-.707-.707M12 2a10 10 0 100 20 10 10 0 000-20z" />
                                </svg>
                                Enviando...
                            </span>
                        ) : (
                            children
                        )
                    }
                </span>
                <div className={`-translate-x-[500px] group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20`}>
                    <span className="text-2xl">{emoji}</span>
                </div>
            </button>
        </div>
    );
}

