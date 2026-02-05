"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if at top
            if (currentScrollY < 10) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }

            // Determine visibility direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true); // Show on scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={clsx(
                    "sticky top-0 z-50 w-full transition-all duration-700 ease-in-out",
                    isVisible ? "translate-y-0" : "-translate-y-full",
                    isAtTop && !isMobileMenuOpen
                        ? "bg-transparent border-transparent py-6"
                        : "bg-background/80 backdrop-blur-xl border-b border-primary/5 py-4 shadow-sm"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo: Order 2 on mobile (Right), Order 1 on desktop (Left) */}
                    <Link href="/" className="order-2 md:order-1 font-serif text-2xl font-bold text-foreground hover:text-primary transition-all duration-500 tracking-tight">
                        Dr. Maya Reynolds
                    </Link>

                    {/* Desktop Nav: Order 2 */}
                    <nav className="hidden md:flex order-2 items-center gap-12 text-foreground/80">
                        {["Services", "About", "Office", "FAQ"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative group text-sm font-medium tracking-widest transition-colors uppercase"
                            >
                                <span className="group-hover:text-primary transition-colors duration-500">{item}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-in-out group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="relative group text-sm font-bold tracking-widest transition-colors uppercase text-primary"
                        >
                            <span className="group-hover:text-primary-hover transition-colors duration-500">Contact</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-hover transition-all duration-500 ease-in-out group-hover:w-full" />
                        </Link>
                    </nav>

                    {/* Mobile Menu Button: Order 1 on mobile (Left) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden order-1 p-2 -ml-2 text-foreground hover:text-primary transition-all duration-500"
                    >
                        <Menu className="w-6 h-6 stroke-[1.5]" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 z-[60] bg-background flex flex-col transition-all duration-500 ease-in-out transform",
                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                )}
            >
                <div className="container mx-auto px-6 py-6 flex items-center justify-between">
                    {/* Close Button (Left) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 -ml-2 text-text hover:text-primary transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 font-thin"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                    </button>

                    {/* Logo (Right) */}
                    <span className="font-serif text-xl font-bold text-text">
                        Dr. Maya Reynolds
                    </span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
                    {["Services", "About", "Office", "FAQ"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-serif text-3xl text-text hover:text-primary transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-serif text-3xl text-text hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
}
