"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Project from "./Project";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });

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
      image: "/images/UBNI_Logo.webp",
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
      deploy: "https://kronix-pourthie-alexis.vercel.app/",
    },
  ];

  return (
    <div className="flex-1 flex items-center">
      <div
        className="relative max-w-screen-xl mx-auto overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex gap-32">
          {projects.map((project) => (
            <div key={project.id} className="min-w-[434px]">
              <Project
                image={project.image}
                text={project.text}
                techno={project.techno}
                githubLink={project.githubLink}
                deploy={project.deploy}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
