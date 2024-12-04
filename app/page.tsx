import Header from "@/components/layouts/Header";
import Accueil from "@/components/ui/Accueil";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import Portfolio from "@/components/ui/Portfolio";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <Accueil />
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
