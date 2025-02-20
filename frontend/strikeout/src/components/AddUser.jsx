import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usa useNavigate al posto di useHistory

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inizializza useNavigate

  // Gestore per l'invio del modulo
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');  // Supponiamo che il token sia memorizzato in localStorage

    if (!token) {
      setError('Token non trovato. Effettua prima il login.');
      return;
    }

    const userData = {
      name,
      email,
      password,
      role,
    };

    try {
      const response = await fetch('http://localhost:3001/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Aggiungi il token nell'intestazione
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Utente creato con successo');
        navigate('/dashboard'); // Usa navigate per spostarsi alla pagina di dashboard
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Errore del server, riprova');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Aggiungi un Nuovo Utente</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Ruolo:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Utente</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <br />
        <button type="submit">Aggiungi Utente</button>
      </form>
    </div>
  );
};

export default AddUser;
