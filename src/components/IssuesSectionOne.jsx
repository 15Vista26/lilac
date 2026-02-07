import Image from "next/image";
import Link from "next/link";

export default function IssuesSectionOne() {
    return (
        <section className="w-full">




            {/* Top Part: Split Layout (Text Left, Image Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Text Content */}
                <div className="bg-cream dark:bg-dark-bg p-12 md:p-24 flex flex-col justify-center transition-colors duration-300">
                    <div className="max-w-xl mx-auto md:mx-0">
                        <h2 className="text-5xl md:text-6xl font-serif text-green-900 dark:text-cream leading-tight mb-8 transition-colors duration-300">
                            Live a fulfilling life.
                        </h2>
                        <div className="space-y-6 text-green-900 dark:text-gray-300 font-sans text-lg transition-colors duration-300">
                            <p>
                                Life can be challenging—especially when you're trying to balance your
                                personal and professional life.
                            </p>
                            <p>
                                It's easy to feel like you're alone in facing these challenges, but I
                                want you to know that I'm here to help.
                            </p>
                        </div>
                        <div className="mt-8 text-center">
                            <Link href="/contact" className="inline-block border-b border-green-900 dark:border-cream text-green-900 dark:text-cream uppercase tracking-widest text-sm pb-1 hover:font-bold transition-all">
                                GET IN TOUCH →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative min-h-[500px] bg-sage/20 dark:bg-white/5 transition-colors duration-300">
                    <Image
                        src="/images/issuesTwo.webp"
                        alt="Fulfilling life concept"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
