import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BlockForgeProvider } from "./pkg";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlockForgeProvider>
      <App />
    </BlockForgeProvider>
  </StrictMode>
);
