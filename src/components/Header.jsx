"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
                className={`fixed top-0 left-0 w-full z-50 bg-cream transition-transform duration-300 md:px-12 px-6 py-6 flex justify-between items-center border-b border-transparent ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="text-3xl font-serif text-green-900">
                    <Link href="/">Lilac Template</Link>
                </div>
                <nav className="hidden md:flex gap-4 text-green-900 font-sans text-lg">
                    {/* 
                   Buttons with requested hover effect: 
                   Background change, Text bold & white on hover.
                */}
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
                </nav>
                {/* Mobile menu button could go here */}
            </header>
        </>
    );
}
