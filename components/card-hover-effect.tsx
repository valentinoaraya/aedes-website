import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { LinkPreview } from "./link-preview";

export const HoverEffect = ({
    members,
    className,
    themeClasses
}: {
    members: {
        name: string;
        role: string;
        description: string;
        image: string;
        linkedin: string;
        github: string;
        githubImage: string;
        linkedinImage: string;
    }[];
    className?: string;
    themeClasses: any
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4",
                className
            )}
        >
            {members.map((member, idx) => (
                <div
                    key={idx}
                    className={`
                        relative group  block p-2 h-full w-full
                        ${idx === 2 ? "md:col-span-2 md:justify-self-center lg:col-span-1" : ""}
                    `}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}

                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-red-400 block rounded-lg"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.4, ease: "easeInOut" }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="h-full w-full overflow-hidden shadow-lg group-hover:border-slate-700 relative z-20">
                        <Card
                            className={`h-full ${themeClasses.cardBg} ${themeClasses.cardBorder} transition-colors relative z-50`}
                        >
                            <CardHeader className="text-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <CardTitle className={themeClasses.text}>{member.name}</CardTitle>
                                <CardDescription className="text-red-500 font-semibold">{member.role}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className={`${themeClasses.textSecondary} text-center`}>{member.description}</p>
                            </CardContent>
                            <div>
                                <div className="flex justify-center space-x-5 mb-4">
                                    {member.github && (
                                        <div
                                            className="text-red-500 hover:text-red-600 transition-colors"
                                        >
                                            <LinkPreview url={member.github} isStatic={true} imageSrc={member.githubImage}>
                                                <Github className="h-5 w-5 text-red-500 hover:text-red-700 transition-colors" />
                                            </LinkPreview>
                                        </div>
                                    )}
                                    {member.linkedin && (
                                        <div
                                            className="text-red-500 hover:text-red-600 transition-colors"
                                        >
                                            <LinkPreview url={member.linkedin} isStatic={true} imageSrc={member.linkedinImage}>
                                                <Linkedin className="h-5 w-5 text-red-500 hover:text-red-700 transition-colors" />
                                            </LinkPreview>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    );
};

// export const Card = ({
//     className,
//     children,
// }: {
//     className?: string;
//     children: React.ReactNode;
// }) => {
//     return (
//         <div
//             className={cn(
//                 "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
//                 className
//             )}
//         >
//             <div className="relative z-50">
//                 <div className="p-4">{children}</div>
//             </div>
//         </div>
//     );
// };
// export const CardTitle = ({
//     className,
//     children,
// }: {
//     className?: string;
//     children: React.ReactNode;
// }) => {
//     return (
//         <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
//             {children}
//         </h4>
//     );
// };
// export const CardDescription = ({
//     className,
//     children,
// }: {
//     className?: string;
//     children: React.ReactNode;
// }) => {
//     return (
//         <p
//             className={cn(
//                 "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//                 className
//             )}
//         >
//             {children}
//         </p>
//     );
// };
