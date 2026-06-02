"use client";

import LightPillar from "@/components/LightPillar";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-base-100">

            {/* Background (FULL SCREEN FIX) */}
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
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20 flex items-center justify-center min-h-screen">
                {/* hero content later */}
            </div>

        </section>
    );
}