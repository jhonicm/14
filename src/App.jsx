import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import PrimerRegalo from './PrimerRegalo';
import Regalo from './regalo';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const photos = [
    {
      src: '/images/image1.jpg',
      description: 'Gracias por compatir esta pasión',
    },
    {
      src: '/images/image2.jpg',
      description: 'Ir contigo al estadio siempre sera el mejor plan',
    },
    {
      src: '/images/image3.jpg',
      description: 'Nuestra mejor aventura',
    },
    {
      src: '/images/image6.jpg',
      description: 'Gracias por hacerme tan feliz',
    },
    {
      src: '/images/image7.jpg',
      description: 'Por siempre juntos',
    }
  ];

  return (
    <div className="valentine-container">
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
      <h1>❤️ Para La mejor Novia ❤️</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="carousel-slide">
              <img src={photo.src} alt={`Foto ${index + 1}`} />
              <p>{photo.description}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="button-container">
        <button className="gift-button" onClick={() => window.location.href = '/primer-regalo'}>
          Carta
        </button>
        <button className="flower-button" onClick={() => window.location.href = '/regalo'}>
          Regalo
        </button>
      </div>
      <div className="flower-design"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/primer-regalo" element={<PrimerRegalo />} />
        <Route path="/regalo" element={<Regalo />} />
      </Routes>
    </Router>
  );
}

export default App;