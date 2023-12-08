import { createContext, useContext, useState } from "react";

const LightModeContext = createContext();

// eslint-disable-next-line react/prop-types
export const LightModeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <LightModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

export const useLightMode = () => {
  return useContext(LightModeContext);
};
