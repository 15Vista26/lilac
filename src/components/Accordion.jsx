"use client";
import { useState } from "react";

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full border-t border-green-900/20">
            {items.map((item, index) => (
                <div key={index} className="border-b border-green-900/20">
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
                    >
                        <span className="text-2xl font-sans text-green-900">
                            {item.title}
                        </span>
                        <span className="text-2xl font-sans text-green-900 ml-4">
                            {openIndex === index ? "−" : "+"}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="text-lg font-sans text-green-900/80 leading-relaxed pr-8">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
