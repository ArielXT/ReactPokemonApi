import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PokemonView } from "./pages";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonView />
  </React.StrictMode>
);