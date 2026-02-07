export default function ResourceHero() {
    return (
        <section className="relative bg-green-900 dark:bg-green-950 text-cream py-32 px-6 text-center overflow-hidden transition-colors duration-300">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="relative max-w-3xl mx-auto z-10">
                <h1 className="text-5xl md:text-6xl font-serif mb-6">
                    Resources for Your Journey
                </h1>
                <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                    Healing doesn’t just happen in the therapy room. Here are some tools, books, and guides I trust to support you in between sessions.
                </p>
            </div>
        </section>
    );
}
