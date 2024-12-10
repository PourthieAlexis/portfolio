import SkillsList from "./SkillsList";
import TitleBanner from "./TitleBanner";

export default function Skills() {
  const imagesFrontEnd = [
    "/images/vue.png",
    "/images/react.png",
    "/images/angular.png",
    "/images/javascript.png",
  ];
  const imagesBackEnd = [
    "/images/nextjs.png",
    "/images/typescript.png",
    "/images/springboot.png",
    "/images/php.png",
    "/images/nodejs.png",
  ];
  const imagesOutils = [
    "/images/vscode.png",
    "/images/postman.png",
    "/images/github.png",
    "/images/figma.png",
    "/images/docker.png",
  ];

  return (
    <section className="h-full pb-20 relative" id="skills">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <TitleBanner text="Compétences" />
      <div className="flex flex-col items-center gap-8 mt-12">
        <SkillsList title="Front-end" images={imagesFrontEnd} />
        <SkillsList title="Back-end" images={imagesBackEnd} />
        <SkillsList title="Outils" images={imagesOutils} />
      </div>
    </section>
  );
}
