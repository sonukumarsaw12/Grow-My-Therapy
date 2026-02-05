import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1C2520] text-white/90 py-24 relative overflow-hidden" id="contact">
            {/* Subtle background texture or element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-5">
                        <h3 className="font-serif text-4xl font-medium mb-8 text-secondary tracking-tight">Dr. Maya Reynolds</h3>
                        <p className="text-white/50 text-lg leading-relaxed max-w-sm mb-10 font-light">
                            Helping you navigate anxiety, trauma, and burnout with deep compassion and evidence-based psychological care.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-primary transition-all duration-500 hover:-translate-y-1">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-primary transition-all duration-500 hover:-translate-y-1">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-4">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-primary">Get In Touch</h4>
                        <ul className="space-y-8">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 mt-1 flex items-center justify-center bg-white/5 rounded-xl text-primary shrink-0">
                                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <span className="text-white/60 text-lg leading-relaxed font-light">
                                    123rd Street 45 W, <br />
                                    Santa Monica, CA 90401
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl text-primary shrink-0">
                                    <Phone className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <span className="text-white/60 text-lg font-light">(310) 555-0123</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl text-primary shrink-0">
                                    <Mail className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <a href="mailto:hello@drmayareynolds.com" className="text-white/60 text-lg hover:text-primary transition-colors font-light">
                                    hello@drmayareynolds.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-primary">Explore</h4>
                        <ul className="space-y-5">
                            {["Services", "About", "Office", "FAQ"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white/50 text-lg hover:text-white hover:translate-x-2 flex items-center gap-2 transition-all duration-300 font-light group"
                                    >
                                        <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all duration-500" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-xs tracking-widest uppercase text-white/30 font-bold">
                    <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
