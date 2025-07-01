import { ArrowRight } from "lucide-react";

export const ButtonWithEmoji = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <button className="h-11 px-8 rounded-md text-black dark:text-white text-center relative overflow-hidden bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn bg-gradient-to-r from-red-500 to-rose-600">
                <span className="group-hover/modal-btn:translate-x-60 text-center transition duration-500 flex items-center justify-center gap-2 font-medium text-sm">
                    Comenzar proyecto
                    <ArrowRight className="ml-2 h-4 w-4" />
                </span>
                <div className="-translate-x-60 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    🚀
                </div>
            </button>
        </div>
    );
}

