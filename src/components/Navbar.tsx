"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
                {/* Logo / Name */}
                <Link href="/" className="text-xl font-bold tracking-tight text-white">
                    Muhammad Tamim
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                            {link.label}
                        </a>
                    ))}

                    <a href="/resume.pdf" download className="btn bg-[#0f2b57] btn-sm text-white">
                        Download Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button type="button" aria-label="Toggle menu" onClick={() => setIsOpen((prev) => !prev)} className="text-white md:hidden">
                    {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute left-0 top-full w-full bg-black/90 backdrop-blur-md md:hidden">
                        <div className="flex flex-col gap-2 p-4">
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}
                                    className="rounded-lg px-3 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                                    {link.label}
                                </a>
                            ))}

                            <a href="/resume.pdf" download onClick={() => setIsOpen(false)} className="btn btn-primary mt-3">
                                Download Resume
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}