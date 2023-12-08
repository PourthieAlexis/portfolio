import { InvertModeOutline } from "react-ionicons";
import { useLightMode } from "../context/LightModeProvider";
import styled from "styled-components";

const ThemeModeToggle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  animation: 3s anim-lineUp ease-out;
  svg {
    transition: transform 0.5s ease-in-out;
    transform: ${(props) =>
      props.isLightMode ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const Header = styled.header`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  animation: 3s anim-lineUp ease-out;
`;

const HeaderComponent = () => {
  const { isLightMode, toggleLightMode } = useLightMode();

  return (
    <Header>
      <div className="logo"></div>
      <HeaderControls>
        <ThemeModeToggle
          onClick={() => toggleLightMode()}
          isLightMode={isLightMode}
        >
          <InvertModeOutline color={"#FFF3BC"} height="2rem" width="2rem" />
        </ThemeModeToggle>
      </HeaderControls>
    </Header>
  );
};

export default HeaderComponent;
