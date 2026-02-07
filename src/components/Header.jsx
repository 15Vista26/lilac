"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show header if scrolling up or at the top
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
                // Hide header if scrolling down and not at top
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Placeholder to prevent content jump when header is fixed */}
            <div className="h-24" />

            <header
                className={`fixed top-0 left-0 w-full z-50 bg-cream dark:bg-dark-bg transition-colors duration-300 transition-transform md:px-12 px-6 py-6 flex justify-between items-center border-b border-transparent ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="text-3xl font-serif text-green-900 dark:text-cream">
                    <Link href="/">Lilac Template</Link>
                </div>
                <nav className="hidden md:flex gap-4 text-green-900 dark:text-cream font-sans text-lg">
                    {/* 
                   Buttons with requested hover effect: 
                   Background change, Text bold & white on hover.
                */}
                    <Link
                        href="/maya"
                        className="px-6 py-2 rounded-full transition-all duration-300 hover:bg-green-900 hover:text-white hover:font-bold"
                    >
                        Dr. Maya
                    </Link>
                    <Link
                        href="/blog"
                        className="px-6 py-2 rounded-full transition-all duration-300 hover:bg-green-900 hover:text-white hover:font-bold"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-2 rounded-full transition-all duration-300 hover:bg-green-900 hover:text-white hover:font-bold"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/resources"
                        className="px-6 py-2 rounded-full transition-all duration-300 hover:bg-green-900 hover:text-white hover:font-bold"
                    >
                        Resources
                    </Link>
                    <div className="ml-2 flex items-center">
                        <ThemeToggle />
                    </div>
                </nav>
                <button
                    className="md:hidden text-green-900 dark:text-cream focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-cream/95 dark:bg-dark-bg/95 backdrop-blur-sm z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-green-900 dark:text-cream border-b border-transparent hover:border-green-900 dark:hover:border-cream transition-all duration-300"
                >
                    Home
                </Link>
                <Link
                    href="/maya"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-green-900 dark:text-cream border-b border-transparent hover:border-green-900 dark:hover:border-cream transition-all duration-300"
                >
                    Dr. Maya
                </Link>
                <Link
                    href="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-green-900 dark:text-cream border-b border-transparent hover:border-green-900 dark:hover:border-cream transition-all duration-300"
                >
                    Blog
                </Link>
                <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-green-900 dark:text-cream border-b border-transparent hover:border-green-900 dark:hover:border-cream transition-all duration-300"
                >
                    Contact
                </Link>
                <Link
                    href="/resources"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-green-900 dark:text-cream border-b border-transparent hover:border-green-900 dark:hover:border-cream transition-all duration-300"
                >
                    Resources
                </Link>
                <div className="mt-4">
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}
