import React from "react";
import ReactDOM from "react-dom/client";
import "./estilos/index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

//este es el elemento que manejara el DOM para insertar JXS al HTML
//document.getElementById("root") este el el ID de DIV que esta en el html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
