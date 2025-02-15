import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Regalo() {
  const navigate = useNavigate();

  return (
    <div className="regalo-container">
      {/* Contenedor de corazones flotantes */}
      <div className="floating-hearts">
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
      </div>
      <div className="floating-roses">
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
        <span className="rose">🌹</span>
      </div>
      <img src="/images/imges6-Photoroom.png" alt="Regalo especial" />
      <button className="back-button" onClick={() => navigate('/')}>
        Regresar al inicio
      </button>
    </div>
  );
}

export default Regalo;