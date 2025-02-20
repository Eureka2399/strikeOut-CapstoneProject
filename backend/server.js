// server.js
const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const userRoutes = require('./routes/User');
const authRoutes = require('./routes/auth');
const app = express();

// Connessione al DB
connectDB();

app.use(cors());
app.use(express.json());  // Per leggere i dati in formato JSON

// Aggiungi le rotte
app.use('/api/auth', authRoutes);  // Autenticazione
app.use('/api/users', userRoutes);  // Gestione utenti

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));
