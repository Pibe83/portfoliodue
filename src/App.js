import React from 'react';
import 'tailwindcss/tailwind.css'; // Importa prima il file CSS di Tailwind
import './App.css';
// Importa il file CSS locale dopo il file di Tailwind
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import SkillsSection from './components/Section';
import ProjectsSection from './components/ProjectsCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SkillsSection />

      <div className="cards-container">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;

