import { Heart, Shield, Sun } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const services = [
    {
        title: "Anxiety & Panic",
        description: "Feel functional on the outside but struggling with constant worry, tension, or difficulty sleeping? We work to help you stop bracing for something to go wrong.",
        icon: Sun,
    },
    {
        title: "Trauma Recovery",
        description: "For single-incident trauma or complex patterns from childhood. My approach is paced carefully, emphasizing safety, stabilization, and regulation.",
        icon: Shield,
    },
    {
        title: "Burnout & High-Achievers",
        description: "For thoughtful, self-aware professionals who feel exhausted or stuck in overthinking. Reconnect with yourself and develop sustainable ways of living.",
        icon: Heart,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-background border-y border-primary/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block">Our Expertise</span>
                    <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6">How I Can Help</h2>
                    <p className="text-foreground/60 text-lg leading-relaxed">
                        Integrative, evidence-based therapy tailored to your unique journey towards healing and resilience.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 150} className="h-full">
                            <div
                                className="p-10 bg-white rounded-3xl transition-all duration-500 border border-primary/5 hover:border-primary/20 group h-full hover:shadow-card hover:-translate-y-2 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />

                                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-8 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                                    <service.icon className="w-7 h-7 stroke-[1.5]" />
                                </div>
                                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-500">{service.title}</h3>
                                <p className="text-foreground/60 leading-relaxed text-sm md:text-base">{service.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
