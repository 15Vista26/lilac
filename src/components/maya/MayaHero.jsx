import Image from "next/image";

export default function MayaHero() {
    return (
        <section className="px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto dark:bg-dark-bg transition-colors duration-300">

            {/* Left Content */}
            <div className="space-y-6">
                <p className="uppercase tracking-widest text-sm text-maya-primary dark:text-maya-accent font-medium transition-colors duration-300">
                    Santa Monica, CA
                </p>

                <h1 className="text-5xl md:text-6xl font-playfair text-maya-text dark:text-cream leading-tight transition-colors duration-300">
                    Find calm in the <br />
                    <span className="italic text-maya-primary dark:text-maya-accent transition-colors duration-300">chaos of life.</span>
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed transition-colors duration-300">
                    Therapy for high-achieving adults navigating anxiety, trauma, and burnout.
                    Rediscover your balance with Dr. Maya Reynolds.
                </p>

                <div className="pt-4">
                    <button className="bg-maya-primary dark:bg-maya-accent text-white dark:text-green-900 px-8 py-4 text-sm tracking-widest hover:bg-opacity-90 transition duration-300 font-bold">
                        BOOK A CONSULTATION
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center md:justify-end">
                <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
                    {/* Decorative backing */}
                    <div className="absolute inset-0 bg-maya-muted dark:bg-white/5 translate-x-4 translate-y-4 -z-10 transition-colors duration-300"></div>

                    <Image
                        src="/images/maya_hero_portrait.png"
                        alt="Dr. Maya Reynolds"
                        fill
                        className="object-cover shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
