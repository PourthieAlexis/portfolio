import HeaderComponent from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import SocialMedia from "./components/SocialMediaComponent";
import PresentationComponent from "./components/PresentationComponent";
import { useLightMode } from "./context/LightModeProvider";
import { lightTheme, darkTheme } from "./assets/theme";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import PortfolioComponent from "./components/PortfolioComponent";
import SkillComponent from "./components/SkillComponent";
import ParticlesComponent from "./components/Particle";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-background-color: ${(props) => props.theme.backgroundColorPrimary};
    --light-background-color: ${(props) => props.theme.backgroundColorPrimary};
    --primary-color: #212D40;
    --dark-text-color: ${(props) => props.theme.textColor};
    --light-text-color: ${(props) => props.theme.textColor};
    --font-family: 'Kdam Thmor Pro', sans-serif;
    --font-familyText: 'Nova Square', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
}

@keyframes anim-lineUp {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const { isLightMode } = useLightMode();
  const theme = isLightMode ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParticlesComponent />
      <Content>
        <HeaderComponent />
        <Main>
          <SocialMedia />
          <Home />
          <PresentationComponent />
          <SkillComponent />
          <PortfolioComponent />
        </Main>
        <Footer />
      </Content>
    </ThemeProvider>
  );
}

export default App;
