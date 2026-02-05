import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Sparkles, Coffee, ShieldCheck } from "lucide-react";

export default function Office() {
    return (
        <section id="office" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block">Our Environment</span>
                    <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-8">A Sanctuary for Healing</h2>
                    <p className="text-foreground/60 text-lg md:text-xl font-light leading-relaxed">
                        My office is a quiet, private space designed to feel calm and grounding.
                        Located in the heart of Santa Monica, the environment itself is a part of the therapeutic process.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <ScrollReveal delay={0}>
                        <div className="relative h-96 md:h-[600px] rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl group border-8 border-secondary/10">
                            <Image
                                src="/images/office1_new.jpeg"
                                alt="Therapy office seating area"
                                fill
                                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                            />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className="relative h-96 md:h-[600px] rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl group border-8 border-secondary/10">
                            <Image
                                src="/images/office2_new.jpeg"
                                alt="Office details"
                                fill
                                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                            />
                        </div>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-3 gap-12 text-center bg-secondary/5 p-12 md:p-16 rounded-[60px] border border-primary/5">
                    {[
                        { icon: Sparkles, title: "Calm Atmosphere", desc: "Designed to help your nervous system settle as soon as you enter." },
                        { icon: ShieldCheck, title: "Complete Privacy", desc: "A secure, soundproofed space for absolute confidentiality." },
                        { icon: Coffee, title: "Curated Comfort", desc: "Tea, still water, and intentional seating for your ease." }
                    ].map((feature, i) => (
                        <ScrollReveal key={i} delay={400 + (i * 100)}>
                            <div className="flex flex-col items-center gap-6 group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-110 group-hover:scale-100">
                                    <feature.icon className="w-8 h-8 stroke-[1.5]" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light">{feature.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

