import React from "react";

export default function About() {
    return (
        <section id="about">
            <div

                className="min-h-screen bg-[#0E0221] scroll-mt-24 text-white"
            >
                <div className="mx-auto max-w-7xl px-4 lg:px-8 py-24">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-content">
                            About Me
                        </p>
                    </div>

                    {/* Content Card */}
                    <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md space-y-6">

                        <p className="text-white/80 leading-relaxed text-base md:text-lg">
                            I am a <span className="text-white font-bold">Full Stack Engineer</span> who builds scalable AI Powered web applications using{" "}
                            <span className="text-white font-semibold">
                                TypeScript, Next.js, Node.js, and GenAI.
                            </span>
                        </p>

                        <p className="text-white/80 leading-relaxed text-base md:text-lg">
                            I design REST APIs, implement secure authentication, and work with{" "}
                            <span className="text-white font-semibold">PostgreSQL</span> and{" "}
                            <span className="text-white font-semibold">MongoDB</span> using{" "}
                            <span className="text-white font-semibold">Prisma</span> and{" "}
                            <span className="text-white font-semibold">Mongoose</span>. I also deploy and manage applications with{" "}
                            <span className="text-white font-semibold">Docker</span> and{" "}
                            <span className="text-white font-semibold">Nginx</span>, and implement testing using{" "}
                            <span className="text-white font-semibold">Jest</span> and{" "}
                            <span className="text-white font-semibold">React Testing Library</span>.
                        </p>

                        <p className="text-white/80 leading-relaxed text-base md:text-lg">
                            Alongside core web development, I build AI-driven features using{" "}
                            <span className="text-white font-semibold">LangChain</span> and{" "}
                            <span className="text-white font-semibold">RAG</span> to bring intelligent functionality into applications.
                        </p>

                        <p className="text-white/80 leading-relaxed text-base md:text-lg">
                            Currently, I am open to remote opportunities to build scalable web applications.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                            <h3 className="text-2xl font-bold">Full Stack</h3>
                            <p className="text-white/60 text-sm mt-1">Engineering</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                            <h3 className="text-2xl font-bold">AI</h3>
                            <p className="text-white/60 text-sm mt-1">Powered Apps</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                            <h3 className="text-2xl font-bold">Scalable</h3>
                            <p className="text-white/60 text-sm mt-1">Architecture</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                            <h3 className="text-2xl font-bold">Remote</h3>
                            <p className="text-white/60 text-sm mt-1">Open to Work</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}