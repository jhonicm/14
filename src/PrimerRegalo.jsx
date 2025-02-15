import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function PrimerRegalo() {
  const navigate = useNavigate();

  return (
    <div className="letter-wrapper">
      <h1>🌹 Feliz 14 🌹</h1>
      <div className="letter-content">
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
        <p>
          Holaaaaa, esta es la manera en que puedo escribirte, por medio de algo que me gusta hacer, que es programar. No sé por dónde empezar, son tantas cosas que decirte, pero empiezo agradeciéndote por todo: gracias por las risas, los momentos, las salidas y todo lo que hemos hecho; gracias por tanto y perdón por tan poco, corazón.
        </p>
        <p>
          A mí, estar contigo me llena mucho. Doy gracias a Dios porque estés tú aquí conmigo, disfrutando de los momentos más bonitos de mi vida y permitiéndome compartir los tuyos. Sin duda, eres lo mejor que me ha pasado; han pasado algunos años y, sin duda, el sentimiento persiste. Sigue siendo el mismo desde el primer día y espero que nunca cambie, porque contigo me iría hasta el final sin duda.
        </p>
        <p>
          Feliz 14, mi niña bonita, te mereces esto y mucho más. Sé que quizá es poco haber hecho esta página, pero en serio es con todo el amor y todo el cariño, y además es algo que a mí me gusta hacer, y cómo no hacerte un regalo con esto.
        </p>
        <p>Te quiero mucho</p>
        <p>Att. Jhon Cordova</p>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>
        Regresar al inicio
      </button>
    </div>
  );
}

export default PrimerRegalo;