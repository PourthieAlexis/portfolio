import styled from "styled-components";
import AnimatedText from "./AnimatedText";
import MouseWheel from "./MouseWheel";
import DeveloppementWebIllustration from "../assets/images/developpement-web-illustration.jpg";

const HomeContainer = styled.div`
  display: flex;
  padding: 5rem;
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
  font-size: xx-large;
  text-align: center;
  animation: 3s anim-lineUp ease-out;
`;

const P = styled.p`
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
        <P>Bonjour, je suis</P>
        <Title>Alexis Pourthié</Title>
        <AnimatedText>Développeur Web</AnimatedText>
      </TitleContainer>
      <MouseWheel />
    </HomeContainer>
  );
};

export default Home;
