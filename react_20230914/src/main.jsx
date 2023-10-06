import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/component";
import { ThemeProvider } from "./contexts/Theme";
import "./styles.css";


ReactDOM.createRoot(document.getElementById("root")).render( 
  <div >
    <MainPage />
  </div>
);
