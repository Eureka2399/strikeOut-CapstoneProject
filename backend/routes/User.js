// routes/user.js
const express = require('express');
const User = require('../models/User'); // Assicurati di avere il modello User
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Middleware per verificare se l'utente è admin
const verifyAdmin = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Accesso negato, token mancante' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token non valido' });
    }
    
    // Verifica se l'utente è un admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Accesso consentito solo agli admin' });
    }

    req.userId = decoded.userId;
    next();
  });
};

// Crea un nuovo utente (solo admin)
router.post('/create', verifyAdmin, async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Nome, email e password sono obbligatori' });
  }

  try {
    // Verifica se l'utente esiste già
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Utente con questa email già esistente' });
    }

    // Cifra la password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea il nuovo utente
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'user', // default ruolo 'user'
    });

    await newUser.save();
    res.status(201).json({ message: 'Utente creato con successo' });
  } catch (error) {
    console.error('Errore durante la creazione dell\'utente:', error);
    res.status(500).json({ message: 'Errore del server' });
  }
});

module.exports = router;
