"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in ms
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: "0px 0px -50px 0px", // Offset a bit so it triggers before bottom
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={twMerge(
                clsx(
                    "transition-all duration-1000 ease-out transform",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                    className
                )
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
