import Image from "next/image";
import TitleBanner from "./TitleBanner";
import Link from "next/link";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col" id="about">
      <TitleBanner text="À propos de moi" />
      <div className="flex-1 flex justify-center items-center">
        <div className="flex md:flex-row flex-col-reverse items-center gap-12 max-w-7xl w-full px-4">
          <div className="md:w-1/2 w-11/12 flex flex-col items-center md:gap-28 gap-12">
            <p className="md:w-2/3 w-full text-center text-xl">
              J&apos;ai 23 ans et je suis développeur web spécialisé en
              JavaScript, TypeScript, et React, à la recherche d&apos;un CDI.
              Passionné par les technologies modernes et le code de qualité, je
              suis motivé pour contribuer à des projets dynamiques et
              collaboratifs.
            </p>
            <div className="flex justify-around w-2/3 md:p-0 pb-8">
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
                  className="md:size-16 size-12"
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
                  className="md:size-16 size-12"
                />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <div className="md:size-96 size-40 rounded-full overflow-hidden">
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
    </section>
  );
}
