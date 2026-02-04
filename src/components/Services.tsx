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
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="font-serif text-4xl font-bold text-text mb-4">How I Can Help</h2>
                    <p className="text-text-light text-lg">
                        Integrative, evidence-based therapy tailored to your unique needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 150} className="h-full">
                            <div
                                className="p-8 bg-secondary/30 rounded-2xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/20 group h-full"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 transition-transform">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-text mb-4">{service.title}</h3>
                                <p className="text-text-light leading-relaxed">{service.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
