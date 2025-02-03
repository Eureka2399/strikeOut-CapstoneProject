import React from "react";
import Birillo from "../assets/birillo.png";
import "../style/orari.css";

function Orari() {
  return (
    <div>
      <div className="orari">
        <div className="spaziatura-orari">
          <div className="titolo-orari">
            <p>Orari di apertura</p>
          </div>
          <div className="orari-apertura">
            <div className="giorni-ore">
              <table>
                <tr>
                  <th>Giorni</th>
                  <th>Orari</th>
                </tr>
                <tr>
                  <td>Lunedì</td>
                  <td>10.00 - 2.00</td>
                </tr>
                <tr>
                  <td>Martedì</td>
                  <td>16.00 - 2.00</td>
                </tr>
                <tr>
                  <td>Mercoledì</td>
                  <td>10.00 - 2.00</td>
                </tr>
                <tr>
                  <td>Giovedì</td>
                  <td>16.00 - 2.00</td>
                </tr>
                <tr>
                  <td>Venerdì</td>
                  <td>10.00 - 2.00</td>
                </tr>
                <tr>
                  <td>Sabato</td>
                  <td>17.00 - 3.00</td>
                </tr>
                <tr>
                  <td>Domenica</td>
                  <td>17.00 - 3.00</td>
                </tr>
              </table>
              <div className="birilli">
                <img src={Birillo} alt="..." className="birillo" />
                <p>
                  UNICO OBIETTIVO <span>ABBATTERLI TUTTI</span>
                </p>
                <img src={Birillo} alt="..." className="birillo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orari;
