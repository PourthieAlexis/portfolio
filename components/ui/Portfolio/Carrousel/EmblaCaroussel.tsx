"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Project from "@/components/ui/Portfolio/Carrousel/Project";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const projects = [
    {
      id: 1,
      text: "Covoitease est un projet de covoiturage avec accès au personne à mobilité réduite, j'ai effectué ce projet dans une équipe agile à l'incubateur de Euratechnologies.",
      image: "/images/covoitease.webp",
      techno: ["Symfony API", "React", "MySQL", "Jira"],
      githubLink: "https://github.com/PourthieAlexis/CoVoiTeam",
    },
    {
      id: 2,
      text: "Joukemy est une application mobile qui permet de parier sur des matchs e-sport avec ses amis en utilisant un système de point. J'ai effectué ce projet pendant mon stage chez UBNI.",
      image: "/images/ubni_logo.png",
      techno: ["Laravel API", "React Native", "PostegreSQL"],
    },
    {
      id: 3,
      text: "L'application BrandChecker permet de vérifier la disponibilité des noms de domaine avec différentes extensions. Elle utilise les Server-Sent Events (SSE) pour fournir des mises à jour en temps réel sur la disponibilité des noms de domaine.",
      image: "/images/brand_checker.webp",
      techno: ["Nuxt", "Server-Sent-Events", "Drizzle ORM", "SQLite"],
    },
    {
      id: 4,
      text: "ArtShop est une application web basée sur Symfony et React, créée pour la vente d'œuvres d'art en ligne. L'application offre une expérience utilisateur intuitive pour explorer, acheter et interagir avec différentes œuvres d'art.",
      image: "/images/Art_Shop_Logo.webp",
      techno: ["Symfony", "React", "React-Query", "Docker"],
      githubLink: "https://github.com/PourthieAlexis/ArtShop",
    },
    {
      id: 5,
      text: "Cette application de chat permet aux utilisateurs de s'inscrire, de se connecter, de discuter en privé avec d'autres utilisateurs, ainsi que de participer à des discussions publiques.",
      image: "/images/chat_app.webp",
      techno: ["Spring Boot", "Angular", "WebSocket"],
      githubLink: "https://github.com/PourthieAlexis/Chat-app",
    },
    {
      id: 6,
      text: "Finance Tracker est une application de gestion financière personnelle qui permet de suivre vos dépenses, de gérer vos budgets, de visualiser vos soldes avec des graphiques et de définir des rappels",
      image: "/images/finance_tracker.webp",
      techno: ["NextJS", "Prisma", "ChartJS", "Next-Auth", "SWR", "Zod"],
      githubLink: "https://github.com/PourthieAlexis/finance-tracker",
    },
    {
      id: 7,
      text: "Ce projet est une pratique de développement frontend où j'ai implémenté un design trouvé sur Figma. Cela m'a permis de me concentrer sur la reproduction de composants d'interface utilisateur",
      image: "/images/kronix.webp",
      techno: ["NextJS", "Tailwind", "Swiper.js", "React Icons"],
      githubLink: "https://github.com/PourthieAlexis/kronix",
      deploy: "https://www.kronix.alexispourthie.fr/",
    },
    {
      id: 8,
      text: "Social Network est un projet de réseau social basé sur une architecture microservices. Il s'agit uniquement du backend de l'application, composé de plusieurs services qui communiquent entre eux via Kafka.",
      image: "/images/microservice.png",
      techno: [
        "Spring Boot",
        "ExpressJs",
        "Symfony",
        "Docker",
        "Kafka",
        "Redis",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Microservices",
      ],
      githubLink: "https://github.com/PourthieAlexis/social-network",
    },
  ];

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="w-full max-w-[1400px] mx-auto overflow-hidden pt-8 relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-[0_0_100%] md:flex-[0_0_45%] px-4 md:px-8"
            >
              <Project {...project} />
            </div>
          ))}
        </div>
        <div className="absolute top-1 md:right-8 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 h-1.5 w-52 max-w-[90%] overflow-hidden rounded-lg bg-[#121212]">
          <div
            className="absolute top-0 bottom-0 left-[-100%] w-full bg-slate-100"
            style={{ transform: `translate3d(${scrollProgress}%, 0px, 0px)` }}
          />
        </div>
      </div>
    </div>
  );
}
