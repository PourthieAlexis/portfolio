import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import presentationImage from "../assets/images/presentationImage.webp";
import breakpoints from "../assets/breakpoints";

const PresentationContainer = styled.section`
  position: relative;
  min-height: 100vh;
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

  @media (max-width: ${breakpoints.laptop}) {
    flex-wrap: wrap;
  }
`;

const Title = styled.div`
  position: relative;
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
  @media (max-width: ${breakpoints.laptop}) {
    position: relative;
  }
`;

const Hr = styled.hr`
  margin-bottom: 0;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  padding: 1rem;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  animation: ${(props) =>
    props.isVisible
      ? `anim-lineUp 3s ease-out ${props.delay}s forwards`
      : "none"};
  transition: transform 0.3s ease-in-out;
  width: 100%;

  img {
    object-fit: contain;
    border-radius: 2rem;
    margin: auto;
    height: fit-content;
    width: 100%;
    max-width: fit-content;
  }
`;

const Text = styled.p`
  font-size: x-large;
  line-height: 2rem;
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
          <Text>Bonjour et bienvenue sur mon portfolio</Text>
          <Text>
            Je m’appelle Alexis Pourthié, développeur web passionné de 23 ans.
            J'adore créer des applications web et j'aime toucher à tout en
            termes de technologies J'apprécie explorer et maîtriser diverses
            plateformes et frameworks pour offrir des solutions innovantes et
            performantes.
          </Text>
          <Text>
            Mon parcours m'a permis d'acquérir une expertise variée et de
            travailler sur de nombreux projets, chacun apportant son lot de
            défis et d'apprentissages. Cette polyvalence me permet de m'adapter
            rapidement aux nouvelles technologies.
          </Text>
          <Text>
            N'hésitez pas à explorer mon portfolio pour en savoir plus sur mes
            projets et mes expériences. Je suis toujours ouvert à de nouvelles
            opportunités et collaborations. Hâte de pouvoir en discuter avec
            vous !
          </Text>
        </TextContainer>
      </PresentationWrapper>
    </PresentationContainer>
  );
};

export default PresentationComponent;
