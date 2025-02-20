// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Il modello utente per MongoDB
const router = express.Router();

// Registrazione dell'utente
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email già in uso' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role: 'admin' });

    await user.save();
    res.status(201).json({ message: 'Admin registrato con successo' });
  } catch (err) {
    res.status(500).json({ message: 'Errore del server' });
  }
});

// routes/auth.js

// Login dell'utente
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Trova l'utente nel database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Utente non trovato' });
    }

    // Confronta la password con quella nel database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Password errata' });
    }

    // Crea un token JWT per l'utente autenticato
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Risposta con il token
    res.status(200).json({ token, message: 'Login effettuato con successo' });
  } catch (err) {
    // Log dell'errore
    console.error("Errore nel login:", err);  // Aggiungi questo log per capire meglio l'errore
    res.status(500).json({ message: 'Errore del server' });
  }
});


module.exports = router;
