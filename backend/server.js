// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db'); // Connessione al database
const authRoutes = require('./routes/auth'); // Le rotte per l'autenticazione

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Assicurati che il server possa leggere i body delle richieste

// Aggiungi il prefisso '/api' per le rotte di autenticazione
app.use('/api/auth', authRoutes); // Questo collega '/api/auth' a 'authRoutes'

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
