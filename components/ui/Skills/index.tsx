"use client";
import { useEffect, useRef, useState } from "react";
import SkillsList from "@/components/ui/Skills/SkillsList";
import TitleBanner from "@/components/ui/TitleBanner";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function Skills() {
  const sectionRef = useRef(null);

  const hasBeenVisible = useIntersectionObserver(sectionRef);

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
    <section ref={sectionRef} className="h-full pb-20 relative" id="skills">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div
          className={`absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-xl transition-all duration-1000 ${
            hasBeenVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl transition-all duration-1000 ${
            hasBeenVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{ transitionDelay: "200ms" }}
        />
      </div>

      <TitleBanner text="Compétences" hasBeenVisible={hasBeenVisible} />

      <div className="flex flex-col items-center gap-8 mt-12">
        <SkillsList
          title="Front-End"
          images={imagesFrontEnd}
          hasBeenVisible={hasBeenVisible}
          delay="0ms"
        />
        <SkillsList
          title="Back-End"
          images={imagesBackEnd}
          hasBeenVisible={hasBeenVisible}
          delay="200ms"
        />
        <SkillsList
          title="Outils"
          images={imagesOutils}
          hasBeenVisible={hasBeenVisible}
          delay="400ms"
        />
      </div>
    </section>
  );
}
