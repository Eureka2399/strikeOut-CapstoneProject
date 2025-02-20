import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.jpg";
import "../style/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function Toggle() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

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
            <li>
              <a href="/">AREA RISERVATA - TESSERATI</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="nav">
        <a href="/">
          <img
            src={Logo}
            alt="..."
            width={125}
            className={`${isOpen ? "active" : ""}`}
          />
        </a>
        <div className="spazio"></div>
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={Toggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
          <li>
            <a href="/">AREA RISERVATA - TESSERATI</a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
