const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  score: { type: Number, default: 0 },  // Punteggio dell'utente
  role: { type: String, required: true },  // Campo per identificare se l'utente è un admin
});

module.exports = mongoose.model('User', userSchema);
