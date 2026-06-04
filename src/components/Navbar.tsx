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
        <header className="fixed top-0 z-50 left-0 w-full ">
            <nav className="mx-auto flex h-20 2xl:h-24 max-w-7xl 2xl:max-w-[1440px] items-center justify-between px-4 lg:px-8 2xl:px-12">
                {/* Logo / Name */}
                <Link href="#hero" className="text-xl 2xl:text-2xl font-bold tracking-tight text-primary-content">
                    Muhammad Tamim
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 2xl:gap-10 md:flex">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href}
                            className="text-sm 2xl:text-base font-medium text-primary-content/80 transition-colors hover:text-primary-content hover:underline under">
                            {link.label}
                        </a>
                    ))}


                    <a href="/resume.pdf" download className="btn bg-accent btn-sm 2xl:btn-md text-primary-content">
                        Download Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button type="button" aria-label="Toggle menu" onClick={() => setIsOpen((prev) => !prev)} className="text-primary-content md:hidden">
                    {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute left-0 top-full w-full bg-accent/40 backdrop-blur-md md:hidden">
                        <div className="flex flex-col gap-2 p-4">
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}
                                    className="rounded-lg px-3 py-3 text-primary-content/80 transition-colors hover:bg-white/10 hover:text-primary-content">
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