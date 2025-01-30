import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Orari from './components/Orari';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar />
      <Homepage />
      <Orari />
  </React.StrictMode>
);
