import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center pt-24 overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center -mt-8 md:-mt-12">
                {/* Image Column */}
                <div className="relative w-[85%] max-w-[320px] md:max-w-none md:w-[90%] h-[400px] md:h-[800px] order-1 md:order-first mx-auto">
                    <div className="absolute inset-0 rounded-t-[400px] overflow-hidden shadow-2xl">
                        <Image
                            src="/images/hero_vertical.png"
                            alt="Calm healing atmosphere"
                            fill
                            className="object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms] ease-out"
                            priority
                        />
                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                    </div>
                    {/* Subtle decorative element */}
                    <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-60" />
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left max-w-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 md:pl-12 order-2">
                    <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase mb-6 px-3 py-1 border border-primary/20 rounded-full">
                        Psychology & Wellness
                    </span>
                    <h1 className="font-serif text-6xl md:text-8xl font-medium text-foreground mb-8 leading-[1.1] tracking-tight">
                        Reclaim <br /> Your <i className="font-serif italic font-light opacity-90">Calm.</i>
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-foreground/70 mb-12 leading-relaxed max-w-md mx-auto md:mx-0">
                        Therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:bg-primary-hover shadow-lg hover:shadow-primary/20"
                        >
                            <span className="relative z-10">Contact With Me</span>
                            <span className="relative z-10 text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                        <p className="text-[10px] font-bold tracking-widest text-accent uppercase max-w-[200px] leading-loose">
                            Based In Santa Monica, California
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
