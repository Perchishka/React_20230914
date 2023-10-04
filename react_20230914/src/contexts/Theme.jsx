import React from "react";
import { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ childern }) => {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {childern}
    </ThemeContext.Provider>
  );
};
