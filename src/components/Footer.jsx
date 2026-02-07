import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-cream dark:bg-dark-bg border-t border-green-900/10 dark:border-white/10 transition-colors duration-300">
            {/* Top Part */}
            <div className="max-w-7xl mx-auto px-6 py-20 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Contact Info */}
                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-3xl font-serif text-green-900 dark:text-cream">Lilac Template</h2>
                    <div className="font-sans text-sm text-green-900 dark:text-gray-300 space-y-1">
                        <p>123 Example Road</p>
                        <p>Minneapolis, MN</p>
                    </div>
                    <div className="font-sans text-sm text-green-900 dark:text-gray-300 space-y-1 underline decoration-1 underline-offset-4">
                        <p><a href="mailto:email@example.com">email@example.com</a></p>
                        <p><a href="tel:5555555555">(555) 555-5555</a></p>
                    </div>
                </div>

                {/* Hours */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-green-900 dark:text-cream">Hours</h3>
                    <div className="font-sans text-sm text-green-900 dark:text-gray-300 space-y-1">
                        <p>Monday – Friday</p>
                        <p>10am – 6pm</p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-green-900 dark:text-cream">Find</h3>
                    <nav className="flex flex-col gap-2 font-sans text-sm text-green-900 dark:text-gray-300 underline decoration-1 underline-offset-4">
                        <Link href="/">Home</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/blog">Blog</Link>
                    </nav>
                </div>
            </div>

            {/* Bottom Bar - Darker Beige/Grey Background */}
            <div className="bg-[#E6E0D6] dark:bg-dark-surface py-12 px-6 md:px-12 transition-colors duration-300">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
                    <div className="flex flex-wrap justify-center gap-6 text-xs text-green-900 dark:text-gray-400 uppercase tracking-widest hover:opacity-70">
                        <Link href="/privacy" className="border-b border-green-900/50 dark:border-gray-400/50 pb-0.5">Privacy & Cookies Policy</Link>
                        <Link href="/estimate" className="border-b border-green-900/50 dark:border-gray-400/50 pb-0.5">Good Faith Estimate</Link>
                        <Link href="/terms" className="border-b border-green-900/50 dark:border-gray-400/50 pb-0.5">Website Terms & Conditions</Link>
                        <Link href="/disclaimer" className="border-b border-green-900/50 dark:border-gray-400/50 pb-0.5">Disclaimer</Link>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs text-green-900 dark:text-gray-500">
                            Website Template Credits: <a href="#" className="border-b border-green-900/50 dark:border-gray-500/50 pb-0.5">Go Bloom Creative</a>
                        </p>
                        <p className="text-xs text-green-900 dark:text-gray-500 opacity-60">
                            All Rights Reserved © 2024 Your Business Name Here, LLC.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
