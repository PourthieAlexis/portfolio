import SocialLink from "@/components/ui/About/SocialLink";

type AboutContentProps = {
  hasBeenVisible: boolean;
};

export default function AboutContent({ hasBeenVisible }: AboutContentProps) {
  return (
    <div className="md:w-1/2 w-11/12 flex flex-col items-center md:gap-28 gap-12">
      <div
        className={`relative transition-all duration-1000 ${
          hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        <div
          className={`absolute -left-4 -top-4 w-12 h-12 border-t-2 border-l-2 border-blue-500/30 transition-all duration-1000 ${
            hasBeenVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        />
        <div className="w-full text-xl relative backdrop-blur-sm bg-black/20 p-6 rounded-lg">
          <p className="mb-5">
            J&apos;ai 23 ans et je suis développeur Full Stack passionné, à la
            recherche d&apos;un CDI. Ce qui me motive vraiment, c&apos;est de
            créer du code propre et efficace tout en relevant de nouveaux défis
            techniques.
          </p>
          <p className="mb-5">
            J&apos;aime particulièrement explorer et apprendre de nouvelles
            technologies pour enrichir mes projets.
          </p>
          <p>
            Je recherche une entreprise où je pourrai évoluer et apporter ma
            touche à des projets stimulants, tout en continuant à développer mes
            compétences.
          </p>
        </div>
        <div
          className={`absolute -right-4 -bottom-4 w-12 h-12 border-b-2 border-r-2 border-purple-500/30 transition-all duration-1000 ${
            hasBeenVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        />
      </div>

      <div
        className={`flex justify-around w-2/3 md:p-0 pb-8 relative transition-all duration-1000 ${
          hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-xl" />
        <SocialLink
          href="https://github.com/PourthieAlexis"
          imgSrc="/images/github.png"
          alt="github logo"
        />
        <SocialLink
          href="https://www.linkedin.com/in/alexis-pourthi%C3%A9/"
          imgSrc="/images/linkedin.svg"
          alt="linkedin logo"
        />
      </div>
    </div>
  );
}
