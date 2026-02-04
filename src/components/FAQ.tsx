"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
    {
        question: "Do you offer online therapy?",
        answer: "Yes, I offer secure telehealth sessions for clients located anywhere in California, as well as in-person sessions at my Santa Monica office."
    },
    {
        question: "What is your approach to therapy?",
        answer: "I integrate evidence-based methods such as CBT, EMDR, mindfulness, and body-oriented techniques. My style is warm, collaborative, and grounded."
    },
    {
        question: "Do you work with trauma?",
        answer: "Yes, trauma work is a core part of my practice. I work with both single-incident trauma and complex, long-standing patterns, prioritizing safety and pacing."
    },
    {
        question: "How long are sessions?",
        answer: "Standard individual therapy sessions are 50 minutes. We can discuss frequency and duration during our initial consultation."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="font-serif text-4xl font-bold text-text mb-12 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-secondary/10 transition-colors"
                                >
                                    <span className="font-serif text-xl font-medium text-text">{faq.question}</span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-primary" />
                                    )}
                                </button>
                                <div
                                    className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-text-light">{faq.answer}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
