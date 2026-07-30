import { Buffer } from "buffer";
if (!(globalThis as any).Buffer) {
  (globalThis as any).Buffer = Buffer;
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
