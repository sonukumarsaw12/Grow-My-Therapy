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
        <section id="faq" className="py-32 bg-background">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block">Common Inquiries</span>
                    <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className={`overflow-hidden transition-all duration-500 border rounded-[32px] ${openIndex === index ? "bg-secondary/20 border-primary/20 shadow-soft" : "bg-white border-primary/5 shadow-sm hover:border-primary/10"}`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-10 py-8 flex items-center justify-between text-left transition-all duration-300"
                                >
                                    <span className={`font-serif text-xl md:text-2xl transition-colors duration-500 ${openIndex === index ? "text-primary" : "text-foreground"}`}>{faq.question}</span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? "bg-primary text-white rotate-180" : "bg-secondary text-primary"}`}>
                                        {openIndex === index ? (
                                            <Minus className="w-5 h-5 stroke-[1.5]" />
                                        ) : (
                                            <Plus className="w-5 h-5 stroke-[1.5]" />
                                        )}
                                    </div>
                                </button>
                                <div
                                    className={`px-10 overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? "max-h-[500px] pb-10 opacity-100 translate-y-0" : "max-h-0 pb-0 opacity-0 -translate-y-4"
                                        }`}
                                >
                                    <p className="text-foreground/60 text-lg leading-relaxed font-light">{faq.answer}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
