import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image */}
                    <div className="w-full md:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/maya_final.png"
                            alt="Dr. Maya Reynolds"
                            fill
                            className="object-cover object-top"
                        />
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2">
                        <h2 className="font-serif text-4xl font-bold text-text mb-8">
                            Meet Dr. Maya Reynolds
                        </h2>
                        <div className="space-y-6 text-text-light text-lg leading-relaxed">
                            <p>
                                I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                            </p>
                            <p>
                                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry.
                            </p>
                            <p>
                                I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while still leaving space for reflection. I integrate evidence-based methods such as CBT, EMDR, mindfulness, and body-oriented techniques to help clients understand both the emotional and physiological sides of their experience.
                            </p>
                            <p>
                                I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
