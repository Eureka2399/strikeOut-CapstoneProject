import React, { useState, useEffect } from 'react';

const Classifica = () => {
  const [classifica, setClassifica] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simuliamo un array di utenti con punteggio
    const utenti = [
      { id: 1, nome: 'Luca', punteggio: 50 },
      { id: 2, nome: 'Marco', punteggio: 70 },
      { id: 3, nome: 'Giulia', punteggio: 85 },
      { id: 4, nome: 'Francesca', punteggio: 65 },
      { id: 5, nome: 'Matteo', punteggio: 90 },
    ];

    // Ordina gli utenti in base al punteggio in ordine decrescente
    const classificaOrdinata = utenti.sort((a, b) => b.punteggio - a.punteggio);

    setClassifica(classificaOrdinata);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Caricamento della classifica...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Classifica del Campionato</h2>
      <table>
        <thead>
          <tr>
            <th>Posizione</th>
            <th>Nome</th>
            <th>Punteggio</th>
          </tr>
        </thead>
        <tbody>
          {classifica.map((squadra, index) => (
            <tr key={squadra.id}>
              <td>{index + 1}</td>
              <td>{squadra.nome}</td>
              <td>{squadra.punteggio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classifica;
