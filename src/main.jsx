import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ChaptersListProvider } from "./context/ChaptersListContext.jsx";
import { SurahProvider } from "./context/SurahContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ChaptersListProvider>
          <SurahProvider>
            <App />
          </SurahProvider>
        </ChaptersListProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
