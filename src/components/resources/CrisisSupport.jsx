export default function CrisisSupport() {
    return (
        <section className="bg-[#FAEBEB] dark:!bg-[#2C0B0B] py-20 px-6 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif text-[#8B3A3A] dark:text-red-300 mb-6 transition-colors duration-300">
                    In Crisis?
                </h2>
                <p className="text-[#8B3A3A] dark:text-red-200 mb-8 leading-relaxed transition-colors duration-300">
                    If you or someone you know is experiencing a mental health emergency, please do not wait. Reach out to one of these 24/7 confidential services immediately.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-dark-surface p-6 border-l-4 border-[#8B3A3A] dark:border-red-400 shadow-sm text-left transition-colors duration-300">
                        <h3 className="font-bold text-[#8B3A3A] dark:text-red-300 text-lg mb-1 transition-colors duration-300">988 Suicide & Crisis Lifeline</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">Available 24/7 for free and confidential support.</p>
                        <a href="tel:988" className="inline-block font-bold text-[#8B3A3A] dark:text-red-300 hover:underline transition-colors duration-300">
                            Call or Text 988 →
                        </a>
                    </div>

                    <div className="bg-white dark:bg-dark-surface p-6 border-l-4 border-[#8B3A3A] dark:border-red-400 shadow-sm text-left transition-colors duration-300">
                        <h3 className="font-bold text-[#8B3A3A] dark:text-red-300 text-lg mb-1 transition-colors duration-300">Crisis Text Line</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">Text &quot;HOME&quot; to 741741 to connect with a Crisis Counselor.</p>
                        <a href="sms:741741" className="inline-block font-bold text-[#8B3A3A] dark:text-red-300 hover:underline transition-colors duration-300">
                            Text 741741 →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
