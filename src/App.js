import React from 'react';

import './App.css';
import Organizer from './app/Layout/Organizer';
import Navbar from './app/Navbar/Navbar';
// import Calender from './app/Calender/Calender';
import Weather from './app/Weather/Weather';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Organizer />
      <Weather />
    </div>
  );
}

export default App;
