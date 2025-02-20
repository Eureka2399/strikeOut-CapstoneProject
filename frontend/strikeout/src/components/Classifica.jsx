import React, { useEffect, useState } from "react";

function Classifica() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effettua la chiamata API per ottenere la classifica
  useEffect(() => {
    fetch("http://localhost:3001/api/users/classifica") // Sostituisci con il tuo endpoint API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data); // Imposta gli utenti nella state
        setLoading(false); // Imposta loading a false
      })
      .catch((err) => {
        setError(err.message); // Mostra l'errore
        setLoading(false); // Imposta loading a false
      });
  }, []);

  // Gestisci la visualizzazione della classifica
  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="classifica">
      <h1>Classifica degli utenti</h1>
      <table>
        <thead>
          <tr>
            <th>Posizione</th>
            <th>Nome Utente</th>
            <th>Punteggio</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classifica;
