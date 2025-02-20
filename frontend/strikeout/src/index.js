import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Orari from "./components/Orari";
import Promozioni from "./components/Promozioni";
import Attivita from "./components/Attivita";
import Prenota from "./components/Prenota";
import Contatti from "./components/Contatti";
import Pie from "./components/Pie";

import "./style/pc.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
    <div className="pc1">
      <Orari id="orari" />
      <Promozioni id="promozioni" />
    </div>
    <div className="pc2">
      <Attivita id="attivita" />
      <Prenota id="prenota" />
    </div>
    <Contatti id="contatti" />
    <Pie id="pie" />
  </React.StrictMode>
);
