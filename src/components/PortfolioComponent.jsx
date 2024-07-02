import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Covoitease from "../assets/images/covoitease.webp";
import { useState } from "react";
import Popup from "./PopUpComponent";
import UBNI_Logo from "../assets/images/UBNI_logo.webp";
import ChatApp from "../assets/images/chat_app.webp";
import BrandChecker from "../assets/images/brand_checker.webp";
import ArtShop from "../assets/images/Art_Shop_Logo.webp";

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
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Card = styled.div`
  background: ${(props) => props.theme.backgroundColorPrimary};
  position: relative;
  min-width: 20rem;
  height: 15rem;
  border: 1px solid black;
  cursor: pointer;
  box-shadow: 0.5rem 0.5rem 0px 0px
    ${(props) => props.theme.backgroundColorPrimary};
  border-radius: 1rem;
  opacity: 0;
  bottom: 0;
  overflow: hidden;
  transition: bottom 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    bottom: 0rem;
    box-shadow: 0.5rem 1.5rem 0px 0px
      ${(props) => props.theme.backgroundColorPrimary};
  }

  animation: ${(props) =>
    props.isVisible
      ? `anim-lineUp 3s ease-out ${props.delay}s forwards`
      : "none"};
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const PortfolioComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "1",
      text: "Covoitease est un projet de covoiturage avec accès au personne à mobilité réduite, j'ai effectué ce projet dans une équipe agile à l'incubateur de Euratechnologies.",
      image: Covoitease,
      techno: ["Symfony API", "React", "MySQL", "Jira"],
      delay: 0,
    },
    {
      id: "2",
      text: "Joukemy est une application mobile qui permet de parier sur des matchs e-sport avec ses amis en utilisant un système de point. J'ai effectué ce projet pendant mon stage chez UBNI.",
      image: UBNI_Logo,
      techno: ["Laravel API", "React Native", "PostegreSQL"],
      delay: 0.3,
    },
    {
      id: "3",
      text: "L'application BrandChecker permet de vérifier la disponibilité des noms de domaine avec différentes extensions. Elle utilise les Server-Sent Events (SSE) pour fournir des mises à jour en temps réel sur la disponibilité des noms de domaine.",
      image: BrandChecker,
      techno: ["Nuxt", "Server-Sent-Events", "Drizzle ORM", "SQLite"],
      delay: 0.6,
    },
    {
      id: "4",
      text: "ArtShop est une application web basée sur Symfony et React, créée pour la vente d'œuvres d'art en ligne. L'application offre une expérience utilisateur intuitive pour explorer, acheter et interagir avec différentes œuvres d'art.",
      image: ArtShop,
      techno: ["Symfony", "React", "React-Query", "Docker"],
      delay: 0.9,
    },
    {
      id: "5",
      text: "Cette application de chat permet aux utilisateurs de s'inscrire, de se connecter, de discuter en privé avec d'autres utilisateurs, ainsi que de participer à des discussions publiques. L'application est construite avec Spring Boot pour le backend et Angular pour le frontend.",
      image: ChatApp,
      techno: ["Spring Boot", "Angular", "WebSocket"],
      delay: 1.2,
    },
  ];

  const handleVoirProjetClick = (index) => {
    setPopupOpen(!popupOpen);
    setSelectedProject(projects[index]);
  };

  return (
    <>
      <PortfolioContainer ref={ref}>
        <Title isVisible={inView}>
          <h1>Portfolio</h1>
          <Hr />
        </Title>
        <CardContainer>
          {projects.map((project, index) => {
            return (
              <Card
                onClick={() => handleVoirProjetClick(index)}
                isVisible={inView}
                delay={project.delay}
                key={project.id}
              >
                <ImgContainer>
                  <img
                    src={project.image}
                    alt={project.image}
                    width="350"
                    height="400"
                  />
                </ImgContainer>
              </Card>
            );
          })}
        </CardContainer>
      </PortfolioContainer>
      {popupOpen && (
        <Popup
          onClose={handleVoirProjetClick}
          visible={popupOpen}
          projet={selectedProject}
        ></Popup>
      )}
    </>
  );
};

export default PortfolioComponent;
