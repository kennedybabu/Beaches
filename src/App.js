import React from 'react';
import Destinations from './components/Destinations/Destinations';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
    </div>
  );
}

export default App;
