"use client";

import LightPillar from "@/components/LightPillar";
import Image from "next/image";
import myPhoto from "@/assets/images/my-photo.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ElectricBorder from "./ElectricBorder";
import { MdEmail } from "react-icons/md";
import ScrollVelocity from "./ScrollVelocity";
import ShinyText from "./ShinyText";

const frontend = 'React.js, Next.js, JavaScript, TypeScript, CSS, Tailwind CSS, DaisyUI, Shadcn, HTML, Redux, TanStack Query,'
const backend = ' Node.js, Express, PostgreSQL, MongoDB, Prisma, Mongoose, Docker, Nginx, Firebase Auth, Better Auth, Next Auth, JWT Auth, Axios, Zod, LangChain, RAG,'

export default function Hero() {
    return (
        <div id="hero" className="relative min-h-screen w-full overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 z-0">
                <LightPillar
                    topColor="#5227FF"
                    bottomColor="#FF9FFC"
                    intensity={1}
                    rotationSpeed={0.3}
                    glowAmount={0.002}
                    pillarWidth={10}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={25}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                    className="w-full h-full"
                />
            </div>

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}

            {/* Content */}
            <div className="relative z-20 min-h-screen flex items-center pt-20 2xl:pt-24">
                <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                        {/* LEFT SIDE */}
                        <div className="text-center lg:text-left">
                            <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
                                Hi, I'm a
                                {" "}
                                <ShinyText
                                    text="Full Stack Engineer"
                                    speed={5}
                                    delay={0}
                                    color="#b5b5b5"
                                    shineColor="#ffffff"
                                    spread={120}
                                    direction="left"
                                    yoyo={false}
                                    pauseOnHover={false}
                                    disabled={false}
                                />
                                {" "}
                                <span className="text-primary-content">who</span>
                            </p>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary-content">
                                builds scalable{" "}
                                <span className="text-secondary-content">AI Powered</span>{" "}
                                web applications using
                            </h1>

                            <div className="mt-6 overflow-hidden">
                                <ScrollVelocity
                                    texts={[frontend, backend]}
                                    className="text-primary-content/80 text-lg md:text-xl font-medium tracking-wide"
                                    velocity={20}
                                    numCopies={6}
                                    damping={50}
                                    stiffness={400}
                                />
                            </div>


                            {/* Socials */}
                            <div className="mt-8 flex items-center gap-5 justify-center lg:justify-start text-white/70">

                                <span className="text-sm text-white/40">
                                    Connect:
                                </span>

                                <a href="https://github.com/muhammad-tamim" className="hover:text-white transition">
                                    <FaGithub size={22} />
                                </a>

                                <a href="https://www.linkedin.com/in/muhammad-tamim" className="hover:text-white transition">
                                    <FaLinkedin size={22} />
                                </a>

                                <a href="wa.link/60lblu" className="hover:text-white transition" title="01586090360">
                                    <FaWhatsapp size={24} />
                                </a>

                                <a href="mailto:contact2tamim@gmail.com" className="hover:text-white transition" title="contact2tamim@gmail.com">
                                    <MdEmail size={24} />
                                </a>
                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex justify-center lg:justify-end">
                            <ElectricBorder
                                // color="#5227FF"
                                color="#dcb3fa"
                                speed={1}
                                chaos={0.01}
                                borderRadius={10}
                                style={{ width: "400px", maxWidth: "100%" }}
                            >
                                <div>
                                    <Image
                                        src={myPhoto}
                                        alt="My Photo"
                                        priority
                                        className="w-full h-auto rounded-xl"
                                    />
                                </div>
                            </ElectricBorder>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}