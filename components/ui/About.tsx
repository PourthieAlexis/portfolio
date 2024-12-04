import Image from "next/image";
import TitleBanner from "./TitleBanner";
import Link from "next/link";

export default function About() {
  return (
    <section className="h-screen flex flex-col y-8" id="about">
      <TitleBanner text="À propos de moi" />
      <div className="flex flex-1 gap-12">
        <div className="w-1/2 flex flex-col justify-center items-center gap-28">
          <p className="w-2/3 text-center text-xl">
            J’ai 23 ans et je suis développeur web spécialisé en JavaScript,
            TypeScript, et React, à la recherche d’un CDI. Passionné par les
            technologies modernes et le code de qualité, je suis motivé pour
            contribuer à des projets dynamiques et collaboratifs.
          </p>
          <div className="flex justify-around w-2/3">
            <Link
              href="https://github.com/PourthieAlexis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/github.png"
                width={500}
                height={500}
                alt="github logo"
                className="w-16 h-16"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alexis-pourthi%C3%A9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/linkedin.svg"
                width={500}
                height={500}
                alt="linkedin logo"
                className="w-16 h-16"
              />
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-96 h-96 rounded-full bg-zinc-50 overflow-hidden">
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
    </section>
  );
}
