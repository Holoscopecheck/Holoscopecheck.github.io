import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Buffer } from "buffer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}

window.Buffer = Buffer; // グローバルにBufferを登録
