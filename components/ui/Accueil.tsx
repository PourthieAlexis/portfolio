import { Roboto } from "next/font/google";
import { FaCode } from "react-icons/fa6";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Accueil() {
  return (
    <section
      className="h-screen bg-[url('/images/programming-background.jpg')] bg-no-repeat bg-cover bg-center relative overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
        <div className="flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
          <div className={`${roboto.className} text-white`}>
            <h1 className="text-4xl md:text-5xl font-light mb-2 animate-fade-in">
              Alexis
            </h1>
            <h2 className="text-6xl md:text-7xl font-extrabold mb-4">
              POURTHIE
            </h2>
            <div className="bg-white/20 backdrop-blur-sm w-24 h-px mb-6" />
            <h3 className="text-4xl md:text-5xl mb-12">Développeur Web</h3>

            <div className="flex gap-6 mt-8">
              <a
                href="#portfolio"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <FaCode size={20} />
                <span>Projets</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
