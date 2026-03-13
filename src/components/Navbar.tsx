"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-[1440px] mx-auto px-6 py-6 md:py-8 flex items-center justify-between">
          <Link href="/" className="z-[60] relative">
            <Image src="/logos/occult-logo.svg" alt="Occult Logo" width={150} height={50} className="h-6 md:h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 font-black uppercase tracking-[0.2em] text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-[60] relative flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-8 h-[2px] bg-white transition-all duration-300 ease-in-out absolute ${isOpen ? 'rotate-45' : '-translate-y-2.5'}`} />
            <span className={`w-8 h-[2px] bg-white transition-all duration-300 ease-in-out absolute ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-8 h-[2px] bg-white transition-all duration-300 ease-in-out absolute ${isOpen ? '-rotate-45' : 'translate-y-2.5'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10 text-center">
          {navLinks.map((link, index) => (
            <div 
              key={link.name}
              className={`transform transition-all duration-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <Link
                href={link.href}
                className="text-3xl font-black uppercase tracking-[0.2em] hover:text-primary active:text-primary transition-colors"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
