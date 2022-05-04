import React from 'react';
import CarouselImg from './components/Carousel/CarouselImg';
import Destinations from './components/Destinations/Destinations';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Selects from './components/Selects/Selects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <CarouselImg />
    </div>
  );
}

export default App;
