import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="bg-cream px-6 py-12 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Arched Image */}
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4]">
                    <div className="absolute inset-0 rounded-t-[1000px] overflow-hidden">
                        <div className="w-full h-full bg-sage/20 relative">
                            <Image
                                src="/images/hero.webp"
                                alt="Woman holding lilac flowers covering face"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col items-start gap-8">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-green-900 leading-[1.1]">
                        Live your life <br />
                        in full bloom
                    </h1>
                    <p className="text-xl md:text-2xl text-green-900 font-sans">
                        Therapy for Adults in Minneapolis, MN.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 border border-green-900 text-green-900 font-sans text-sm tracking-widest hover:bg-green-900 hover:text-cream transition-colors uppercase"
                    >
                        Connect with me →
                    </Link>
                </div>
            </div>
        </section>
    );
}
