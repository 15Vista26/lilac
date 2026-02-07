import Image from "next/image";

export default function BlogHero() {
    return (
        <section id="blog-hero" className="px-6 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image - Arched */}
            <div className="relative flex justify-center md:justify-start">
                <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-t-[1000px]">
                    <Image
                        src="/images/blog_hero.png" // User will need to replace this or I will generate a placeholder
                        alt="Relaxing reading scene"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Right Content */}
            <div className="text-center md:text-left bg-transparent dark:bg-[#1E1E1E] p-6 rounded-2xl transition-all duration-300">
                <h1 className="lilac-heading text-5xl md:text-6xl font-serif mb-6">
                    The Lilac Blog
                </h1>
                <p className="lilac-text text-lg mb-2">
                    My tiny corner of the internet where I talk about
                </p>
                <p className="lilac-text text-lg mb-6">
                    all things healing, heart, and wholeness.
                </p>
                <p className="lilac-text font-bold text-sm tracking-wide">
                    Glad you&apos;re here.
                </p>
            </div>
        </section>
    );
}
