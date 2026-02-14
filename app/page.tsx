import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Features from "@/components/Features";
import ReadingHabits from "@/components/ReadingHabits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Pillars />
      <Features />
      <ReadingHabits />
      <Footer />
    </main>
  );
}
