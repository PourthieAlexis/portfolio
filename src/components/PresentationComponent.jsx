import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import presentationImage from "../assets/images/presentationImage.jpg";
import breakpoints from "../assets/breakpoints";

const PresentationContainer = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  z-index: 2;
  background: ${(props) => props.theme.backgroundColorSecondary};
  color: ${(props) => props.theme.textColor};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  gap: 2rem;

  @media (max-width: ${breakpoints.laptop}) {
    flex-wrap: wrap;
  }
`;

const Title = styled.div`
  font-size: xx-large;
  text-align: center;
  opacity: 0;
  animation: ${(props) =>
    props.isVisible
      ? `anim-lineUp 3s ease-out ${props.delay}s forwards`
      : "none"};
  h1 {
    font-weight: 100;
  }
`;

const Hr = styled.hr`
  margin-bottom: 3rem;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  font-family: var(--font-familyText);
  animation: ${(props) =>
    props.isVisible
      ? `anim-lineUp 3s ease-out ${props.delay}s forwards`
      : "none"};
`;

const PresentationWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 1rem;
  height: 100%;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  animation: ${(props) =>
    props.isVisible
      ? `anim-lineUp 3s ease-out ${props.delay}s forwards`
      : "none"};
  transition: transform 0.3s ease-in-out;

  img {
    object-fit: contain;
    width: auto;
    border-radius: 2rem;
    margin: auto;
  }
`;

const Text = styled.p`
  font-size: x-large;
`;

const PresentationComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <PresentationContainer ref={ref}>
      <ImageContainer isVisible={inView} delay={0}>
        <img src={presentationImage} alt="Image de presentation" />
      </ImageContainer>
      <PresentationWrapper isVisible={inView} delay={0.3}>
        <Title isVisible={inView} delay={0.3}>
          <h1>Présentation</h1>
          <Hr />
        </Title>
        <TextContainer isVisible={inView} delay={0.6}>
          <Text>
            Je suis un développeur passionné spécialisé dans le domaine du web.
            Avec plusieurs années d&apos;expérience, j&apos;ai acquis des
            compétences solides et une profonde passion pour la création de
            solutions web innovantes.
          </Text>
          <Text>
            Mon parcours dans le développement m&apos;a permis de travailler sur
            divers projets, allant de la conception de sites web à la mise en
            œuvre de fonctionnalités avancées. Je suis constamment motivé par le
            désir de perfectionner mes compétences et d&apos;apporter une
            expertise professionnelle à chaque projet.
          </Text>
        </TextContainer>
      </PresentationWrapper>
    </PresentationContainer>
  );
};

export default PresentationComponent;
