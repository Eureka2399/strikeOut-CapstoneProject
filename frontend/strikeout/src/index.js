import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Orari from "./components/Orari";
import Promozioni from "./components/Promozioni";
import Attivita from "./components/Attivita";
import Prenota from "./components/Prenota";
import Contatti from "./components/Contatti";
import Pie from "./components/Pie";
import AddUser from "./components/AddUser";
import Login from "./components/Login";
import Classifica from "./components/Classifica"; // Importa Classifica

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/orari" element={<Orari />} />
        <Route path="/promozioni" element={<Promozioni />} />
        <Route path="/attivita" element={<Attivita />} />
        <Route path="/prenota" element={<Prenota />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/classifica" element={<Classifica />} /> {/* Aggiungi la rotta per la classifica */}
      </Routes>
    </Router>
  </React.StrictMode>
);
