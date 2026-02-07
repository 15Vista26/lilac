export default function SubscribeSection() {
    return (
        <section className="bg-[#8B8B61] dark:bg-[#1E1E1E] py-24 px-6 transition-colors duration-300">
            {/* Using a custom olive green color based on the design image */}
            <div className="max-w-4xl mx-auto border border-white/30 p-12 text-center text-cream">
                <h2 className="text-4xl font-serif mb-4">Subscribe</h2>
                <p className="text-sm tracking-wide mb-8 opacity-90">
                    Sign up with your email address to receive news and updates.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-white dark:bg-white/10 text-green-900 dark:text-cream px-4 py-3 w-full outline-none placeholder:text-gray-400 dark:placeholder:text-gray-300 transition-colors duration-300"
                    />
                    <button className="bg-[#D6D6D6] dark:bg-zinc-700 text-green-900 dark:text-cream px-8 py-3 font-bold tracking-widest text-xs uppercase hover:bg-white dark:hover:bg-zinc-600 transition-colors duration-300">
                        Sign Up
                    </button>
                </div>

                <p className="text-xs mt-6 opacity-70">
                    We respect your privacy.
                </p>
            </div>
        </section>
    );
}
