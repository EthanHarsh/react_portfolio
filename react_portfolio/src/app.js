import React, { useState } from 'react';
import NavBar from "./components/NavBar/index";
import HomePage from "./pages/home"
import PortfolioPage from './pages/portfolio';
import AboutPage from './pages/about'



const mainStyle = {
  position: 'absolute',
  left: '0px',
  top: '0px',
  width: '100vw',
  height: '100vh'
}

function App() {

  return (
    <main style={mainStyle}>
      <NavBar />
      <AboutPage />
    </main>
  );
}

export default App;
