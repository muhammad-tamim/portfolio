import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-[#070612] text-white border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Left - Name */}
                    <div>
                        <h2 className="text-xl font-bold">
                            Muhammad Tamim
                        </h2>

                        <p className="text-white/60 text-sm mt-3 leading-relaxed">
                            Full Stack Engineer specializing in scalable web applications
                            and AI-powered systems using modern technologies.
                        </p>
                    </div>

                    {/* Middle - Quick Links */}
                    <div>
                        <h3 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-4">
                            Navigation
                        </h3>

                        <ul className="space-y-2 text-white/70 text-sm">
                            <li><a href="#about" className="hover:text-white transition">About</a></li>
                            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right - Socials */}
                    <div>
                        <h3 className="text-sm uppercase tracking-[0.2em] text-white/50 mb-4">
                            Connect
                        </h3>

                        <div className="flex gap-4 text-white/70">
                            <a href="mailto:contact2tamim@gmail.com" className="hover:text-white transition">
                                <MdEmail size={20} />
                            </a>

                            <a href="https://github.com/muhammad-tamim" target="_blank" className="hover:text-white transition">
                                <FaGithub size={20} />
                            </a>

                            <a href="https://www.linkedin.com/in/muhammad-tamim" target="_blank" className="hover:text-white transition">
                                <FaLinkedin size={20} />
                            </a>

                            <a href="https://wa.link/60lblu" target="_blank" className="hover:text-white transition">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">

                    <p>
                        © {new Date().getFullYear()} Muhammad Tamim. All rights reserved.
                    </p>

                    <p className="text-white/40">
                        Built with Next.js • Tailwind CSS • Passion
                    </p>

                </div>

            </div>
        </footer>
    );
}