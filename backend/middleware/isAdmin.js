const verifyAdmin = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(403).json({ message: 'Accesso negato, token mancante' });
    }
  
    // Rimuovi il prefisso "Bearer" se presente
    const tokenValue = token.startsWith('Bearer ') ? token.slice(7) : token;
  
    jwt.verify(tokenValue, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Token non valido' });
      }
  
      // Verifica che il ruolo sia 'admin'
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Accesso consentito solo agli admin' });
      }
  
      req.userId = decoded.userId; // Salva l'ID dell'utente decodificato
      next();
    });
  };
  