import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="bg-cream dark:bg-dark-bg px-6 py-12 md:py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Arched Image */}
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4]">
                    <div className="absolute inset-0 rounded-t-[1000px] overflow-hidden">
                        <div className="w-full h-full bg-sage/20 dark:bg-white/5 relative transition-colors duration-300">
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
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-green-900 dark:text-cream leading-[1.1] transition-colors duration-300">
                        Live your life <br />
                        in full bloom
                    </h1>
                    <p className="text-xl md:text-2xl text-green-900 dark:text-gray-300 font-sans transition-colors duration-300">
                        Therapy for Adults in Minneapolis, MN.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 border border-green-900 dark:border-cream text-green-900 dark:text-cream font-sans text-sm tracking-widest hover:bg-green-900 dark:hover:bg-cream hover:text-cream dark:hover:text-green-900 transition-colors uppercase"
                    >
                        Connect with me →
                    </Link>
                </div>
            </div>
        </section>
    );
}
