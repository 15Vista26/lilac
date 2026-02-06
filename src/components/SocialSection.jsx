import Image from 'next/image';

export default function SocialSection() {
    const images = [
        "/images/social-1.webp",
        "/images/social-2.webp",
        "/images/social-3.webp",
        "/images/social-4.webp"
    ];

    return (
        <section className="bg-cream py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-green-900 mb-12">
                    Find me on social.
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {images.map((src, idx) => (
                        <div key={idx} className="relative aspect-square w-full bg-sage/20">
                            <Image
                                src={src}
                                alt={`Social media post ${idx + 1}`}
                                fill
                                className="object-cover hover:opacity-90 transition-opacity cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
