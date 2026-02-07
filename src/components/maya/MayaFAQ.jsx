"use client";
import { useState } from "react";

const faqs = [
    {
        question: "What are your fees?",
        answer: "My fee is $250 per 50-minute session. I do not take insurance directly but can provide a superbill for out-of-network reimbursement."
    },
    {
        question: "Do you offer in-person sessions?",
        answer: "Yes, I offer in-person sessions at my office in Santa Monica, as well as secure telehealth for anyone located in California."
    },
    {
        question: "What is your cancellation policy?",
        answer: "I require 48 hours notice for cancellations. Missed appointments without notice are charged the full session fee."
    },
    {
        question: "How long does therapy take?",
        answer: "It varies for everyone. Some clients feel better after a few months of focused work, while others prefer ongoing support for deeper exploration."
    }
];

export default function MayaFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-maya-bg dark:bg-dark-surface py-24 px-10 transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-playfair text-center mb-16 text-maya-text dark:text-cream transition-colors duration-300">
                    Common Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-maya-muted dark:border-white/10 pb-4 transition-colors duration-300">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                            >
                                <span className="text-lg font-serif text-maya-text dark:text-cream transition-colors duration-300">{faq.question}</span>
                                <span className="text-2xl font-light text-maya-primary dark:text-maya-accent transition-colors duration-300">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed pb-4 transition-colors duration-300">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
