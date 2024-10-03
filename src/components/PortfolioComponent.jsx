import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useState } from "react";
import Covoitease from "../assets/images/covoitease.webp";
import UBNI_Logo from "../assets/images/UBNI_logo.webp";
import ChatApp from "../assets/images/chat_app.webp";
import BrandChecker from "../assets/images/brand_checker.webp";
import ArtShop from "../assets/images/Art_Shop_Logo.webp";
import FinanceTracker from "../assets/images/finance_tracker.webp";
import Kronix from "../assets/images/kronix.webp";
import breakpoints from "../assets/breakpoints";
import Github_Logo from "../assets/images/Github_Logo.webp";

const PortfolioContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.backgroundColorSecondary};
  color: ${(props) => props.theme.textColor};
  display: flex;
  z-index: 1;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-family: var(--font-family-title);
  font-size: xx-large;
  text-align: center;
  animation: ${(props) =>
    props.isVisible ? `anim-lineUp 3s ease-out` : "none"};
`;

const Hr = styled.hr`
  width: 20rem;
  margin-bottom: 3rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem;
  width: 70%;
  margin: auto;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.backgroundColorPrimary};
  position: relative;
  width: 35%;
  margin: 2rem;
  border: 1px solid black;
  opacity: 0;
  min-height: 17rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0.5rem 0.5rem 0px 0px
    ${(props) => props.theme.backgroundColorPrimary};
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0.5rem 1.5rem 0px 0px
      ${(props) => props.theme.backgroundColorPrimary};
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
    margin: 1rem 0;
  }

  animation: ${(props) =>
    props.isVisible
      ? `anim-lineUp 3s ease-out ${props.delay}s forwards`
      : "none"};
`;

const ImgContainer = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: ${(props) => (props.expanded ? "80%" : "50%")};
    transition: max-width 0.5s ease;
  }
`;

const ProjectInfo = styled.div`
  padding: 0 1rem;
  color: ${(props) => props.theme.textColor};
  opacity: ${(props) => (props.expanded ? 1 : 0)};
  max-height: ${(props) => (props.expanded ? "16rem" : "0")};
  overflow: hidden;
  visibility: ${(props) => (props.expanded ? "visible" : "hidden")};
  position: ${(props) => (props.expanded ? "static" : "absolute")};
  transition: max-height 0.5s ease, opacity 0.5s ease;
`;

const LinkContainer = styled.div`
  padding: 0 1rem 1rem;
  visibility: ${(props) => (props.expanded ? "visible" : "hidden")};
  position: ${(props) => (props.expanded ? "static" : "absolute")};
  opacity: ${(props) => (props.expanded ? 1 : 0)};
  transition: opacity 0.5s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  img {
    border-radius: 0.5rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  margin-left: 0.5rem;
  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
  &:visited {
    color: white;
  }
`;

const PortfolioComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [expandedProject, setExpandedProject] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      id: 1,
      text: "Covoitease est un projet de covoiturage avec accès au personne à mobilité réduite, j'ai effectué ce projet dans une équipe agile à l'incubateur de Euratechnologies.",
      image: Covoitease,
      techno: ["Symfony API", "React", "MySQL", "Jira"],
      githubLink: "https://github.com/PourthieAlexis/CoVoiTeam",
      delay: 0,
    },
    {
      id: 2,
      text: "Joukemy est une application mobile qui permet de parier sur des matchs e-sport avec ses amis en utilisant un système de point. J'ai effectué ce projet pendant mon stage chez UBNI.",
      image: UBNI_Logo,
      techno: ["Laravel API", "React Native", "PostegreSQL"],
      delay: 0.3,
    },
    {
      id: 3,
      text: "L'application BrandChecker permet de vérifier la disponibilité des noms de domaine avec différentes extensions. Elle utilise les Server-Sent Events (SSE) pour fournir des mises à jour en temps réel sur la disponibilité des noms de domaine.",
      image: BrandChecker,
      techno: ["Nuxt", "Server-Sent-Events", "Drizzle ORM", "SQLite"],
      delay: 0.6,
    },
    {
      id: 4,
      text: "ArtShop est une application web basée sur Symfony et React, créée pour la vente d'œuvres d'art en ligne. L'application offre une expérience utilisateur intuitive pour explorer, acheter et interagir avec différentes œuvres d'art.",
      image: ArtShop,
      techno: ["Symfony", "React", "React-Query", "Docker"],
      githubLink: "https://github.com/PourthieAlexis/ArtShop",
      delay: 0.9,
    },
    {
      id: 5,
      text: "Cette application de chat permet aux utilisateurs de s'inscrire, de se connecter, de discuter en privé avec d'autres utilisateurs, ainsi que de participer à des discussions publiques.",
      image: ChatApp,
      techno: ["Spring Boot", "Angular", "WebSocket"],
      githubLink: "https://github.com/PourthieAlexis/Chat-app",
      delay: 1.2,
    },
    {
      id: 6,
      text: "Finance Tracker est une application de gestion financière personnelle qui permet de suivre vos dépenses, de gérer vos budgets, de visualiser vos soldes avec des graphiques et de définir des rappels",
      image: FinanceTracker,
      techno: ["NextJS", "Prisma", "ChartJS", "Next-Auth", "SWR", "Zod"],
      githubLink: "https://github.com/PourthieAlexis/finance-tracker",
      delay: 1.5,
    },
    {
      id: 7,
      text: "Ce projet est une pratique de développement frontend où j'ai implémenté un design trouvé sur Figma. Cela m'a permis de me concentrer sur la reproduction de composants d'interface utilisateur",
      image: Kronix,
      techno: ["NextJS", "Tailwind", "Swiper.js", "React Icons"],
      githubLink: "https://github.com/PourthieAlexis/kronix",
      deploy: "https://kronix-pourthie-alexis.vercel.app/",
      delay: 1.8,
    },
  ];

  const toggleExpand = (index) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setExpandedProject(expandedProject === index ? null : index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <PortfolioContainer ref={ref}>
      <Title isVisible={inView}>
        <h1>Portfolio</h1>
        <Hr />
      </Title>
      <CardContainer>
        {projects.map((project, index) => (
          <Card
            onClick={() => toggleExpand(index)}
            isVisible={inView}
            delay={project.delay}
            key={project.id}
            expanded={expandedProject === index}
          >
            <ImgContainer expanded={expandedProject === index}>
              <img src={project.image} alt={project.image} />
            </ImgContainer>
            <ProjectInfo expanded={expandedProject === index}>
              <p>{project.text}</p>
              <p>Technologies: {project.techno.join(", ")}</p>
            </ProjectInfo>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "1rem 0",
              }}
            >
              <LinkContainer expanded={expandedProject === index}>
                {project.githubLink && (
                  <LinkWrapper>
                    <img
                      src={Github_Logo}
                      alt="Logo GitHub"
                      width="32"
                      height="32"
                    />
                    <StyledLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir sur GitHub
                    </StyledLink>
                  </LinkWrapper>
                )}
                {project.deploy && (
                  <StyledLink
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visiter le site
                  </StyledLink>
                )}
              </LinkContainer>
            </div>
          </Card>
        ))}
      </CardContainer>
    </PortfolioContainer>
  );
};

export default PortfolioComponent;
