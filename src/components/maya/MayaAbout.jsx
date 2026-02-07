import Image from "next/image";

export default function MayaAbout() {
    return (
        <section className="px-10 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center dark:bg-dark-bg transition-colors duration-300">
            {/* Left Image */}
            <div className="relative">
                <div className="relative w-full aspect-[3/4] md:w-[450px] md:h-[550px] mx-auto">
                    <div className="absolute inset-0 border-2 border-maya-primary dark:border-maya-accent translate-x-3 translate-y-3 -z-10 transition-colors duration-300"></div>
                    <Image
                        // src="/images/maya_about.png"
                        src="/images/Dr_Maya_Reynolds.png"
                        alt="Dr. Maya Reynolds"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
                <h2 className="text-4xl font-playfair text-maya-text dark:text-cream transition-colors duration-300">
                    About Dr. Maya Reynolds
                </h2>

                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    <p>
                        I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                    </p>
                    <p>
                        Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                    </p>
                    <p>
                        I take a warm, collaborative, and grounded approach to therapy. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help you feel more regulated in your daily life.
                    </p>
                </div>

                <div className="pt-4">
                    <h3 className="font-serif text-xl text-maya-primary dark:text-maya-accent mb-2 transition-colors duration-300">My Approach</h3>
                    <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        <li>• Evidence-based (CBT, EMDR)</li>
                        <li>• Trauma-informed & Safety-focused</li>
                        <li>• Collaborative & Transparent</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
