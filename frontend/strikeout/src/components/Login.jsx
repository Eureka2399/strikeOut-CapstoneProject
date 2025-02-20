import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usa useNavigate per la navigazione

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Gestore per l'invio del modulo di login
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Memorizza il token in localStorage per l'autenticazione nelle richieste future
        localStorage.setItem('token', data.token);
        alert('Login riuscito!');
        navigate('/dashboard'); // Redirige l'utente alla pagina di dashboard o home
      } else {
        setError(data.message); // Mostra un messaggio di errore se il login fallisce
      }
    } catch (error) {
      setError('Errore del server, riprova');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Inserisci la tua email"
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
            placeholder="Inserisci la tua password"
          />
        </label>
        <br />
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
};

export default Login;
