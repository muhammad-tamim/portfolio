import React from "react";

const frontend = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "DaisyUI",
    "Shadcn UI",
    "Redux",
    "TanStack Query",
];

const backend = [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Mongoose",
    "Docker",
    "Nginx",
    "Firebase Auth",
    "Better Auth",
    "Next Auth",
    "JWT Auth",
    "Axios",
    "Zod",
];

const ai = [
    "LangChain",
    "RAG",
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen bg-gradient-to-b from-[#0A0618] via-[#0B0A1F] to-[#070612] text-white scroll-mt-24"
        >
            <div className="mx-auto max-w-7xl px-4 lg:px-8 py-24">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                        Skills
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                        Technologies I Work With
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Frontend */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-xl font-semibold mb-4">Frontend</h3>

                        <div className="flex flex-wrap gap-2">
                            {frontend.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm hover:bg-white/20 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-xl font-semibold mb-4">Backend</h3>

                        <div className="flex flex-wrap gap-2">
                            {backend.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm hover:bg-white/20 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* AI */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-xl font-semibold mb-4 text-white">
                            AI / LLM
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {ai.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm hover:bg-white/20 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}