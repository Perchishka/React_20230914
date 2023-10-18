import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles.css";
import { ThemeProvider} from "./contexts/Theme";


ReactDOM.createRoot(document.getElementById("root")).render( 
  <React.StrictMode>
  <ThemeProvider>
  <div >
    <App />
  </div>
  </ThemeProvider>
  </React.StrictMode>
);
