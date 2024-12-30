import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home'; // Importação correta do componente Home
import Hub from './pages/Hub';   // Importação correta do componente Hub

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Configuração das rotas */}
        <Route path="/" element={<Home />} />
        <Route path="/hub" element={<Hub />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
