import Image from "next/image";

const specialties = [
    {
        title: "Self-Esteem",
        description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
        image: "/images/specialty-1.webp"
    },
    {
        title: "Relationships",
        description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
        image: "/images/specialty-2.webp"
    },
    {
        title: "Burnout",
        description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
        image: "/images/specialty-3.webp"
    }
];

export default function SpecialtiesSection() {
    return (
        <section className="bg-cream dark:bg-dark-bg px-6 py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-serif text-green-900 dark:text-cream text-center mb-16 transition-colors duration-300">
                    My Specialties
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {specialties.map((item, index) => (
                        <div key={index} className="flex flex-col gap-8 bg-muted/10 dark:bg-white/5 p-8 border border-green-900/10 dark:border-white/10 h-full relative group transition-colors duration-300">
                            {/* Content */}
                            <div className="z-10 relative">
                                <h3 className="text-2xl font-serif text-green-900 dark:text-cream mb-6 transition-colors duration-300">{item.title}</h3>
                                <p className="text-green-900/80 dark:text-gray-300 font-sans leading-relaxed mb-8 transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>

                            {/* Circle Image at bottom */}
                            <div className="mt-auto self-center relative w-64 h-64 rounded-full overflow-hidden shrink-0">
                                <div className="w-full h-full bg-sage/20 dark:bg-white/5 relative transition-colors duration-300">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
