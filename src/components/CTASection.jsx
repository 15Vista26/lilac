import Link from "next/link";

export default function CTASection() {
    return (
        <section className="bg-[#8B8B6B] dark:bg-[#4A4A3A] py-32 text-center px-6 transition-colors duration-300">
            {/* 
          Updated color to #8B8B6B based on the murky olive/brown-green in the screenshot.
          Added dark mode variant.
       */}
            <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-5xl md:text-6xl font-serif text-cream">
                    Get started today.
                </h2>
                <div className="space-y-2 text-cream font-sans text-xl max-w-2xl mx-auto">
                    <p>Ready to take the first step towards a happier, healthier you?</p>
                    <p>Contact me to book your first session. I look forward to starting this therapeutic journey with you.</p>
                </div>
                <div className="pt-8">
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 border border-cream text-cream font-sans text-sm tracking-widest hover:bg-cream hover:text-[#8B8B6B] dark:hover:text-[#4A4A3A] transition-colors uppercase"
                    >
                        Get In Touch →
                    </Link>
                </div>
            </div>
        </section>
    );
}
