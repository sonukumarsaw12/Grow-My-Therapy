import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center pt-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center h-full pt-12 md:pt-0">
                {/* Image Column */}
                <div className="relative w-[75%] max-w-[320px] md:max-w-none md:w-[85%] h-[380px] md:h-[750px] order-1 md:order-first mx-auto">
                    <div className="absolute inset-0 rounded-t-[400px] overflow-hidden">
                        <Image
                            src="/images/hero_vertical.png"
                            alt="Calm healing atmosphere"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center max-w-xl animate-in fade-in slide-in-from-right-8 duration-1000 md:pl-12 order-2">
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-text mb-8 leading-tight">
                        Reclaim <br /> Your Calm.
                    </h1>
                    <p className="font-sans text-lg text-text/80 mb-10 leading-relaxed max-w-md mx-auto">
                        Therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm font-medium tracking-wide text-text-light uppercase">
                            THERAPY FOR ADULTS IN SANTA MONICA, CA.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-10 py-4 border border-text text-text text-xs font-bold tracking-[0.2em] uppercase hover:bg-text hover:text-white transition-all duration-300"
                        >
                            Connect With Me <span className="text-xl">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
