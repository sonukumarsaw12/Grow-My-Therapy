import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Sparkles, Coffee, ShieldCheck } from "lucide-react";

export default function Office() {
    return (
        <section id="office" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-medium tracking-wider uppercase mb-2 block">Our Space</span>
                    <h2 className="font-serif text-4xl font-bold text-text mb-6">A Sanctuary for Healing</h2>
                    <p className="text-text-light text-lg mb-4">
                        Located at <strong>123rd Street 45 W, Santa Monica, CA 90401</strong>.
                    </p>
                    <p className="text-text-light text-lg">
                        My office is a quiet, private space designed to feel calm and grounding.
                        With natural light and a comfortable, uncluttered environment, clients often share that the space itself helps them feel more at ease when they arrive.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <ScrollReveal delay={0}>
                        <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/office1_new.jpeg"
                                alt="Therapy office seating area"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/office2_new.jpeg"
                                alt="Office details"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center bg-white p-8 rounded-2xl shadow-sm border border-secondary">
                    {[
                        { icon: Sparkles, title: "Calm Atmosphere", desc: "Designed to help your nervous system settle." },
                        { icon: ShieldCheck, title: "Private", desc: "Soundproofed for complete confidentiality." },
                        { icon: Coffee, title: "Amenities", desc: "Tea, water, and comfortable seating provided." }
                    ].map((feature, i) => (
                        <ScrollReveal key={i} delay={400 + (i * 100)}>
                            <div className="flex flex-col items-center gap-3">
                                <div className="p-3 bg-secondary/50 rounded-full text-primary mb-2">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif text-lg font-bold text-text">{feature.title}</h3>
                                <p className="text-sm text-text-light">{feature.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

