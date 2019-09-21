import React from 'react';
import './App.css';
import Nav_bar from './component/navbar.js';
import Carousel from './component/carousel.js';
import CardsOne from './component/cardsup.js';

function App() {
  return (
    <div>
        <div>
          <Nav_bar />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <CardsOne/>
        </div>
    </div>
  );
}

export default App;
