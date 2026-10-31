import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Reading from "@/components/Reading";
import Library from "@/components/Library";
import Privacy from "@/components/Privacy";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Reading />
        <Library />
        <Privacy />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
