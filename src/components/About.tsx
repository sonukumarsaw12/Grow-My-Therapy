import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-32 bg-secondary/10 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 -mr-64 -mt-64" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    {/* Image */}
                    <div className="w-full md:w-5/12 relative h-[500px] md:h-[700px] rounded-[60px] md:rounded-[100px] overflow-hidden shadow-2xl">
                        <Image
                            src="/images/maya_final.png"
                            alt="Dr. Maya Reynolds"
                            fill
                            className="object-cover object-top hover:scale-105 transition-transform duration-[3000ms]"
                        />
                        {/* Detail Overlay */}
                        <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/20">
                            <h3 className="font-serif text-2xl font-semibold text-foreground">Dr. Maya Reynolds</h3>
                            <p className="text-primary font-bold tracking-[0.2em] uppercase text-[9px] mt-1">Licensed Clinical Psychologist</p>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-7/12">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-6 block">The Heart of My Work</span>
                        <h2 className="font-serif text-5xl md:text-7xl font-medium text-foreground mb-10 leading-tight">
                            Meet Dr. Maya Reynolds
                        </h2>
                        <div className="space-y-8 text-foreground/70 text-lg md:text-xl leading-relaxed font-light">
                            <p>
                                I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                            </p>
                            <p className="pl-6 border-l-2 border-primary/20 italic">
                                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                            </p>
                            <p>
                                I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while still leaving space for reflection. I integrate evidence-based methods such as <span className="text-primary font-medium">CBT, EMDR, mindfulness, and body-oriented techniques</span> to help clients understand both the emotional and physiological sides of their experience.
                            </p>
                            <div className="pt-6">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs hover:gap-4 transition-all duration-300"
                                >
                                    Learn More About My Approach <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
