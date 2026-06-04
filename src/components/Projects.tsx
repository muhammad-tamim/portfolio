"use client";

import { useEffect, useState } from "react";

const demoProjects = [
    {
        id: 1,
        title: "AI SaaS Dashboard",
        description:
            "A modern AI-powered SaaS dashboard with analytics, authentication, and real-time data visualization.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        live: "https://vercel.com",
        github: "https://github.com/vercel/next.js",
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description:
            "Full-stack e-commerce system with cart, checkout flow, admin panel, and payment integration.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        live: "https://shopify.com",
        github: "https://github.com/facebook/react",
    },
    {
        id: 3,
        title: "Developer Portfolio System",
        description:
            "Dynamic portfolio generator system with reusable templates and project management features.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        live: "https://nextjs.org",
        github: "https://github.com/vercel/next.js",
    },
];

export default function Projects() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate API fetch safely (no JSON crash)
        const timer = setTimeout(() => {
            setProjects(demoProjects);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="projects"
            className="min-h-screen bg-[#0E0221] text-white scroll-mt-24"
        >
            <div className="mx-auto max-w-7xl px-4 lg:px-8 py-24">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                        Projects
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                        Real-World Applications
                    </h2>

                    <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                        A collection of production-style full-stack and AI-powered applications.
                    </p>
                </div>

                {/* Loading */}
                {loading && (
                    <p className="text-center text-white/50">
                        Loading projects...
                    </p>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition"
                        >
                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {/* Tech */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((t: string) => (
                                    <span
                                        key={t}
                                        className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 text-sm">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="px-3 py-1 rounded-md bg-white text-black font-medium"
                                >
                                    Live
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="px-3 py-1 rounded-md border border-white/20"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}