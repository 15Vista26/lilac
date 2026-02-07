"use client";
import { useState } from "react";

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full border-t border-green-900/20 dark:border-white/20 transition-colors duration-300">
            {items.map((item, index) => (
                <div key={index} className="border-b border-green-900/20 dark:border-white/20 transition-colors duration-300">
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
                    >
                        <span className="text-2xl font-sans text-green-900 dark:text-cream transition-colors duration-300">
                            {item.title}
                        </span>
                        <span className="text-2xl font-sans text-green-900 dark:text-cream ml-4 transition-colors duration-300">
                            {openIndex === index ? "−" : "+"}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="text-lg font-sans text-green-900/80 dark:text-gray-300 leading-relaxed pr-8 transition-colors duration-300">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
