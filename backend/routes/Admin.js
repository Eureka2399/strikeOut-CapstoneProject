// routes/admin.js
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware per autenticazione admin
const authAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Accesso negato' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Accesso solo per admin' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token non valido' });
  }
};

// Aggiungi persona
router.post('/add-person', authAdmin, async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email già in uso' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'user',
    });

    await user.save();
    res.status(201).json({ message: 'Persona aggiunta con successo' });
  } catch (err) {
    res.status(500).json({ message: 'Errore del server' });
  }
});

module.exports = router;
