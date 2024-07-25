import HeaderComponent from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import SocialMedia from "./components/SocialMediaComponent";
import PresentationComponent from "./components/PresentationComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import SkillComponent from "./components/SkillComponent";
import ParticlesComponent from "./components/Particle";
import Footer from "./components/Footer";
import { useLightMode } from "./context/LightModeProvider";
import { lightTheme, darkTheme } from "./assets/theme";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Helvetica from "./assets/fonts/Helvetica.ttf";
import KdamThmorPro from "./assets/fonts/KdamThmorPro-Regular.ttf";

const fonts = {
  Helvetica,
  KdamThmorPro,
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica';
    src: url(${fonts.Helvetica}) format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'KdamThmorPro';
    src: url(${fonts.KdamThmorPro}) format('truetype');
    font-display: swap;
  }

  :root {
    --background-color: ${(props) => props.theme.backgroundColorPrimary};
    --primary-color: #212D40;
    --text-color: ${(props) => props.theme.textColor};
    --font-family: 'Helvetica', sans-serif;
    --font-family-title: 'KdamThmorPro', sans-serif;
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
  height: 100%;
  width: 100%;
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
        {/* <HeaderComponent />*/}
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
