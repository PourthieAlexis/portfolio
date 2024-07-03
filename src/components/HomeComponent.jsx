import styled from "styled-components";
import AnimatedText from "./AnimatedText";
import MouseWheel from "./MouseWheel";
import DeveloppementWebIllustration from "../assets/images/developpement-web-illustration.webp";
import breakpoints from "../assets/breakpoints";

const HomeContainer = styled.div`
  display: flex;
  padding: 3rem;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background: url(${DeveloppementWebIllustration});
  background-size: cover;
  background-position: 100%;
  color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  text-align: center;
  margin-left: 8rem;
  font-size: xx-large;
  animation: 3s anim-lineUp ease-out;
  width: 30rem;
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`;

const Text = styled.p`
  margin: 0;
  align-self: start;
  justify-content: start;
`;

const Title = styled.h1`
  margin: 0;
  align-self: start;
  justify-content: start;
`;

const Home = () => {
  return (
    <HomeContainer>
      <TitleContainer>
        <Text>Bonjour, je suis</Text>
        <Title>Alexis Pourthié</Title>
        <AnimatedText>Développeur Web</AnimatedText>
      </TitleContainer>
      <MouseWheel />
    </HomeContainer>
  );
};

export default Home;
