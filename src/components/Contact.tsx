import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-gradient-to-b from-[#0A0618] via-[#0B0A1F] to-[#070612] text-white scroll-mt-24"
        >
            <div className="mx-auto max-w-5xl px-4 lg:px-8 py-24">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                        Contact
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                        Let’s Build Something Together
                    </h2>

                    <p className="mt-4 text-white/60 max-w-xl mx-auto">
                        I’m open to remote opportunities, collaborations, and full-stack or AI-driven projects.
                    </p>
                </div>

                {/* Contact Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Left Info */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">
                                Get in Touch
                            </h3>

                            <p className="text-white/70 leading-relaxed mb-6">
                                Whether you have a project idea, job opportunity, or just want to connect —
                                I usually respond within 24 hours.
                            </p>

                            <div className="space-y-3 text-white/70">
                                <p>📍 Khulna, Bangladesh</p>
                                <p>⏱ Available: Remote (GMT+6)</p>
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex flex-col gap-4">

                            <a
                                href="mailto:contact2tamim@gmail.com"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
                            >
                                <MdEmail size={20} />
                                Send Email
                            </a>

                            <a
                                href="https://wa.link/60lblu"
                                target="_blank"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
                            >
                                <FaWhatsapp size={20} />
                                WhatsApp Chat
                            </a>

                            <a
                                href="https://github.com/muhammad-tamim"
                                target="_blank"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
                            >
                                <FaGithub size={20} />
                                GitHub Profile
                            </a>

                            <a
                                href="https://www.linkedin.com/in/muhammad-tamim"
                                target="_blank"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
                            >
                                <FaLinkedin size={20} />
                                LinkedIn Profile
                            </a>
                        </div>

                    </div>
                </div>

                {/* Footer Note */}
                <p className="text-center text-white/40 text-sm mt-12">
                    Built with Next.js • Designed for performance & clarity
                </p>

            </div>
        </section>
    );
}