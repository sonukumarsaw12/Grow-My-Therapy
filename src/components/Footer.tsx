import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-text text-white/90 py-16" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-3xl font-bold mb-6 text-secondary">Dr. Maya Reynolds</h3>
                        <p className="text-white/70 max-w-sm mb-6">
                            Helping you navigate anxiety, trauma, and burnout with compassion and evidence-based care.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-secondary">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-1" />
                                <span className="text-white/70">
                                    123rd Street 45 W<br />
                                    Santa Monica, CA 90401
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span className="text-white/70"> (310) 555-0123</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span className="text-white/70">hello@drmayareynolds.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl font-bold mb-6 text-secondary">Quick Links</h4>
                        <ul className="space-y-3">
                            {["Services", "About", "Office", "FAQ"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
