import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Covoitease from "../assets/images/covoitease.webp";
import { useState } from "react";
import Popup from "./PopUpComponent";
import UBNI_logo from "../assets/images/UBNI_logo.webp";

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

const ButtonCard = styled.button`
  width: 10rem;
  opacity: 0;
  height: 2rem;
  position: absolute;
  top: 12rem;
  cursor: pointer;
  left: 5rem;
  border-radius: 1rem;
  border: 1px solid black;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
`;

const Card = styled.div`
  position: relative;
  min-width: 20rem;
  height: 15rem;
  border: 1px solid black;
  cursor: pointer;
  box-shadow: 1rem 1rem 0px 0px ${(props) => props.theme.backgroundColorPrimary};
  border-radius: 1rem;
  opacity: 0;
  bottom: 0;
  overflow: hidden;
  transition: bottom 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    bottom: 2rem;
    box-shadow: 1rem 2rem 0px 0px
      ${(props) => props.theme.backgroundColorPrimary};
    ${ButtonCard} {
      opacity: 1;
    }
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
      id: "0",
      text: "Covoitease est un projet de covoiturage avec accès au personne à mobilité réduite, j'ai effectué ce projet dans une équipe agile à l'incubateur de Euratechnologies",
      image: Covoitease,
      techno: ["Symfony API", "React", "MySQL", "Github", "Jira"],
      delay: 0,
    },
    {
      id: "1",
      text: "Joukemy est une application mobile qui permet de parier sur des matchs e-sport avec ses amis en utilisant un système de point. J'ai effectué ce projet pendant mon stage chez UBNI",
      image: UBNI_logo,
      techno: [
        "Laravel API",
        "React Native",
        "PostegreSQL",
        "Github",
        "Gitlab",
      ],
      delay: 0.5,
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
                  <img src={project.image} alt={project.image} />
                </ImgContainer>
                <ButtonCard>Voir Projet</ButtonCard>
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
