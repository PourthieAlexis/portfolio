import Image from "next/image";
import TitleBanner from "./TitleBanner";
import Link from "next/link";

const BackgroundElements = () => (
  <>
    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

    <div className="absolute top-1/4 right-10 w-24 h-24 border-2 border-blue-500/20 rotate-45" />

    <div className="absolute top-1/3 left-0 w-16 h-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
    <div className="absolute top-1/3 right-0 w-16 h-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
  </>
);

export default function About() {
  return (
    <section className="flex flex-col relative overflow-hidden" id="about">
      <TitleBanner text="À propos de moi" />
      <BackgroundElements />
      <div className="flex-1 flex justify-center items-center relative z-10 py-10 my-24">
        <div className="flex md:flex-row flex-col-reverse items-center gap-12 max-w-7xl w-full px-4">
          <div className="md:w-1/2 w-11/12 flex flex-col items-center md:gap-28 gap-12">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 border-t-2 border-l-2 border-blue-500/30" />
              <div className="w-full text-xl relative backdrop-blur-sm bg-black/20 p-6 rounded-lg">
                <p className="mb-5">
                  J&apos;ai 23 ans et je suis développeur Full Stack passionné,
                  à la recherche d&apos;un CDI. Ce qui me motive vraiment,
                  c&apos;est de créer du code propre et efficace tout en
                  relevant de nouveaux défis techniques.
                </p>
                <p className="mb-5">
                  J&apos;aime particulièrement explorer et apprendre de
                  nouvelles technologies pour enrichir mes projets.
                </p>
                <p>
                  Je recherche une entreprise où je pourrai évoluer et apporter
                  ma touche à des projets stimulants, tout en continuant à
                  développer mes compétences.
                </p>
              </div>

              <div className="absolute -right-4 -bottom-4 w-12 h-12 border-b-2 border-r-2 border-purple-500/30" />
            </div>
            <div className="flex justify-around w-2/3 md:p-0 pb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-xl" />
              <Link
                href="https://github.com/PourthieAlexis"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src="/images/github.png"
                  width={500}
                  height={500}
                  alt="github logo"
                  className="md:size-16 size-12"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alexis-pourthi%C3%A9/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src="/images/linkedin.svg"
                  width={500}
                  height={500}
                  alt="linkedin logo"
                  className="md:size-16 size-12"
                />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
              <div className="md:size-96 size-40 rounded-full overflow-hidden relative border-2 border-white/10">
                <Image
                  src="/images/photo_alexis.png"
                  width={500}
                  height={500}
                  alt="alexis photo"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
