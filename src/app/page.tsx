import Header from "@/components/Header";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Office /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <Footer />
    </main>
  );
}
