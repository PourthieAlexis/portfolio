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
    <section className="min-h-screen h-full" id="skills">
      <TitleBanner text="Compétences" />
      <div className="flex flex-col flex-1 items-center ">
        <SkillsList title="Front-end" images={imagesFrontEnd} />
        <SkillsList title="Back-end" images={imagesBackEnd} />
        <SkillsList title="Outils" images={imagesOutils} />
      </div>
    </section>
  );
}
