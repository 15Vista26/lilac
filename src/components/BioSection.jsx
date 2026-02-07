import Image from "next/image";
import Link from "next/link";

export default function BioSection() {
    return (
        <section className="bg-cream dark:bg-dark-bg px-6 py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <div className="order-2 md:order-1 flex flex-col items-start gap-8">
                    <h2 className="text-5xl md:text-6xl font-serif text-green-900 dark:text-cream transition-colors duration-300">
                        Hi, I'm Lilac.
                    </h2>
                    <div className="text-lg md:text-xl text-green-900 dark:text-gray-300 font-sans space-y-6 leading-relaxed transition-colors duration-300">
                        <p>
                            I'm committed to providing a safe and supportive environment where we
                            can explore your thoughts, feelings, and behaviors. With empathy and
                            guidance, we'll work together to navigate the challenges life throws
                            your way.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 border border-green-900 dark:border-cream text-green-900 dark:text-cream font-sans text-sm tracking-widest hover:bg-green-900 dark:hover:bg-cream hover:text-cream dark:hover:text-green-900 transition-colors uppercase mt-4"
                    >
                        Let's Chat →
                    </Link>
                </div>

                {/* Right: Arched Image with Overlay */}
                <div className="order-1 md:order-2 relative w-full aspect-[4/5] md:aspect-[3/4]">
                    <div className="absolute inset-0 rounded-t-[1000px] overflow-hidden">
                        <div className="w-full h-full bg-sage/20 dark:bg-white/5 relative transition-colors duration-300">
                            <Image
                                src="/images/bio-main.webp"
                                alt="Lilac holding a large bouquet of flowers"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    {/* Decorative Overlay Circle */}
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-cream dark:border-dark-bg z-10 transition-colors duration-300">
                        <div className="w-full h-full relative">
                            <Image
                                src="/images/bio-overlay.webp"
                                alt="White lilac flowers detail"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
