const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Assicurati che questo modello esista

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Token non fornito' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Usa la tua chiave segreta
    req.user = decoded; // Salva i dati dell'utente nel request object
    next(); // Continua il flusso
  } catch (err) {
    res.status(401).json({ message: 'Token non valido' });
  }
};

module.exports = verifyToken;
