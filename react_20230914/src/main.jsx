import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/component";
import "./styles.css";
import { ThemeProvider} from "./contexts/Theme";


ReactDOM.createRoot(document.getElementById("root")).render( 
  <React.StrictMode>
  <ThemeProvider>
  <div >
    <MainPage />
  </div>
  </ThemeProvider>
  </React.StrictMode>
);
