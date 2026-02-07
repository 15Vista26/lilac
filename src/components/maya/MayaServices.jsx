import Image from "next/image";

export default function MayaServices() {
    const services = [
        {
            title: "Anxiety & Panic",
            description: "For those who feel \"functional\" on the outside but are constantly bracing for the worst locally. Unwind the knots of worry and find true ground.",
            image: "/images/service_anxiety.png"
        },
        {
            title: "Trauma & PTSD",
            description: "Heal the wounds of the past that shape your present. We move at your pace to restore safety, confidence, and connection.",
            image: "/images/service_trauma.png"
        },
        {
            title: "Burnout & High Pressure",
            description: "You’ve pushed through for years—now it’s time to pause. Reconnect with yourself and build a sustainable life beyond the grind.",
            image: "/images/service_burnout.png"
        }
    ];

    return (
        <section className="bg-maya-muted dark:bg-dark-surface py-24 px-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-playfair text-maya-primary dark:text-maya-accent text-center mb-16 transition-colors duration-300">
                    Areas of Focus
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-white/5 shadow-sm rounded-sm hover:shadow-md transition duration-300 cursor-pointer">
                            <div className="w-full h-48 relative mb-6 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-90 hover:opacity-100 transition duration-500"
                                />
                            </div>
                            <h3 className="text-2xl font-serif text-maya-text dark:text-cream mb-4 transition-colors duration-300">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm transition-colors duration-300">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
