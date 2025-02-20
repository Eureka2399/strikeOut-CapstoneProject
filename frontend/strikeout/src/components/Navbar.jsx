import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; // Per il reindirizzamento dopo il logout
import Logo from "../assets/logo.jpg";
import "../style/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Toggle per il menu hamburger
  function Toggle() {
    setIsOpen(!isOpen);
  }

  // Chiudere il menu
  function closeMenu() {
    setIsOpen(false);
  }

  // Funzione per il logout
  function handleLogout() {
    localStorage.removeItem("token"); // Rimuovi il token dal localStorage
    setIsLoggedIn(false); // Cambia lo stato per riflettere che l'utente non è loggato
    navigate("/"); // Reindirizza alla home o login
  }

  // Effettuare il controllo del login quando il componente viene caricato
  useEffect(() => {
    const token = localStorage.getItem("token"); // Verifica se esiste il token nel localStorage
    if (token) {
      setIsLoggedIn(true); // Se il token esiste, l'utente è loggato
    } else {
      setIsLoggedIn(false); // Altrimenti non è loggato
    }
  }, []);

  return (
    <nav>
      <div className={`off-screen-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <div>
            <li>
              <Link to="Home" smooth={true} duration={500} onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="orari" smooth={true} duration={500} onClick={closeMenu}>
                ORARI DI APERTURA
              </Link>
            </li>
            <li>
              <Link
                to="promozioni"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                PROMOZIONI
              </Link>
            </li>
            <li>
              <Link
                to="attivita"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                ATTIVITA'
              </Link>
            </li>
            <li>
              <Link
                to="prenota"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                PRENOTA IL TUO EVENTO
              </Link>
            </li>
            <li>
              <Link
                to="contatti"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                CONTATTI
              </Link>
            </li>

            {/* Condizione per il link alla classifica se l'utente è loggato */}
            {isLoggedIn && (
              <li>
                <Link to="/classifica" smooth={true} duration={500} onClick={closeMenu}>
                  CLASSIFICA
                </Link>
              </li>
            )}

            {/* Link di logout o login, a seconda se l'utente è loggato */}
            {isLoggedIn ? (
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  LOGOUT
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" smooth={true} duration={500} onClick={closeMenu}>
                  AREA RISERVATA - TESSERATI
                </Link>
              </li>
            )}
          </div>
        </ul>
      </div>

      {/* Sezione Navbar visibile */}
      <div className="nav">
        <a href="/">
          <img
            src={Logo}
            alt="Logo"
            width={125}
            className={`${isOpen ? "active" : ""}`}
          />
        </a>
        <div className="spazio"></div>

        {/* Menu Hamburger */}
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={Toggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu desktop */}
        <div className="menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ORARI DI APERTURA</a>
          </li>
          <li>
            <a href="/">PROMOZIONI</a>
          </li>
          <li>
            <a href="/">ATTIVITA'</a>
          </li>
          <li>
            <a href="/">PRENOTA IL TUO EVENTO</a>
          </li>
          <li>
            <a href="/">CONTATTI</a>
          </li>

          {/* Condizione per il link alla classifica se l'utente è loggato */}
          {isLoggedIn && (
            <li>
              <a href="/classifica">CLASSIFICA</a>
            </li>
          )}

          {/* Link di logout o login, a seconda dello stato di login */}
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout} className="logout-btn">
                LOGOUT
              </button>
            </li>
          ) : (
            <li>
              <a href="/login">AREA RISERVATA - TESSERATI</a>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
