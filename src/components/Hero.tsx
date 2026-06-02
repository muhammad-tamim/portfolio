import Image from 'next/image'
import heroImage from '@/assets/images/hero-banner.png'

export default function Hero() {
    return (
        <div className="relative min-h-screen pt-20">
            <Image src={heroImage} alt="Hero Background" fill priority className="-z-10 object-cover" />

            <div className="absolute inset-0 bg-black/40 -z-10" />

            {/* Hero Content */}
        </div>
    )
}
