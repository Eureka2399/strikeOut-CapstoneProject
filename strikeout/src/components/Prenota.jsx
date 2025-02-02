import "../style/prenota.css";

function Prenota() {
  return (
    <div>
      <div className="spazio-prenotazioni">
        <form action="">
          <div className="titolo">
            <p>Prenota il tuo evento!</p>
          </div>
          <div className="spazio-form">
            <div className="prenotazioni-bordo">
              <select name="selezione" id="selezione">
                <option value="none">Seleziona Evento*</option>
                <option value="compleanno">Compleanno</option>
                <option value="matrimonio">Addio al Nubilato/Celibato</option>
                <option value="Team">Team Building</option>
              </select>
              <input type="text" placeholder="Nome*" />
              <input type="email" placeholder="E-mail*" />
              <textarea
                name="messaggio"
                id="messaggio"
                placeholder="Messaggio*"
                rows={15}
              ></textarea>
              <input type="tel" placeholder="Telefono*" />
              <button type="submit">Invia</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Prenota;
