"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="px-10 py-6 bg-transparent">
        <div className="flex items-center justify-between max-w-7xl mx-auto">

          {/* Logo */}
          <h1 className="text-2xl font-serif tracking-wide">
            Lilac
          </h1>

          {/* Nav links */}
          <nav className="flex gap-10 text-sm uppercase tracking-widest">
            <a href="#" className="hover:underline underline-offset-4">
              Home
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              About
            </a>
            <a href="/contact" className="hover:underline underline-offset-4">
              Contact
            </a>
            <a href="/maya" className="px-5 py-2 bg-green-900 text-cream rounded-sm hover:bg-green-800 transition-colors duration-300 font-bold tracking-widest">
              Dr. Maya
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
