import Image from "next/image";
import Accordion from "./Accordion";

const faqItems = [
    {
        title: "Do you take insurance?",
        content: "Answer goes here. We accept most major insurance plans including Blue Cross Blue Shield, Aetna, and Cigna."
    },
    {
        title: "What are your rates?",
        content: "Our standard rate is $150 per 50-minute session. We offer a sliding scale for those in need."
    },
    {
        title: "Do you have any openings?",
        content: "Yes, currently accepting new clients for weekday appointments. Please contact us to schedule."
    }
];

export default function FAQSection() {
    return (
        <section className="bg-cream px-6 py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left: Arched Image */}
                <div className="relative w-full aspect-[3/5] md:w-3/4">
                    <div className="absolute inset-0 rounded-t-[1000px] overflow-hidden">
                        <div className="w-full h-full bg-sage/20 relative">
                            <Image
                                src="/images/faq.webp"
                                alt="Dried flowers in a vase"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Accordion */}
                <div className="flex flex-col items-start gap-8 pt-12">
                    <h2 className="text-5xl font-serif text-green-900 mb-8 md:mb-12">
                        FAQs
                    </h2>
                    <Accordion items={faqItems} />
                </div>
            </div>
        </section>
    );
}
