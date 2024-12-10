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
          <div className={`${roboto.className} text-white space-y-6`}>
            <h1 className="text-4xl md:text-5xl font-light tracking-wider text-blue-200 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
              Alexis
            </h1>

            <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              POURTHIE
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-blue-500 to-white/20 backdrop-blur-sm scale-x-0 origin-left animate-[scaleX_0.8s_ease-out_0.4s_forwards]" />

            <h3 className="text-4xl md:text-5xl font-light tracking-wide opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              Développeur <span className="text-blue-300">Web</span>
            </h3>

            <div className="flex gap-6 mt-12 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_0.8s_forwards]">
              <a
                href="#portfolio"
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <FaCode
                  className="text-blue-300 group-hover:rotate-12 transition-transform"
                  size={20}
                />
                <span className="font-medium tracking-wide">Projets</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
