import Lunedi from "../assets/promo-lunedi.jpg";
import Giovedi from "../assets/promo-giovedi.jpg";

import "../style/promozioni.css";

function Promozioni() {
  return (
    <div>
      <div className="promozioni">
        <div className="spaziatura-promo">
          <div className="titolo-promo">
            <p>Promozioni</p>
          </div>
          <div className="desc-promo">
            <div className="lunediFoto">
              <img src={Lunedi} alt="..." />
            </div>
            <p>LUNEDÌ</p>
            <p>La seconda e successiva partita le paghi al 50%</p>
            <div className="giovediFoto">
              <img src={Giovedi} alt="" />
            </div>
            <p>GIOVEDÌ</p>
            <p>Due di due... giochi in coppia un* non paga</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promozioni;
