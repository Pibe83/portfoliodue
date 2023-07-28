import React from 'react';
import immagine from '../immagini/fotoprofilo-transformed.png';

const HeroSection = () => {
  return (
    <div className="bg-gray-800">
      <div className="px-6 py-24 lg:px-8"> {/* Aumenta il padding superiore (py) */}
        <div className="mx-auto max-w-2xl flex flex-col lg:flex-row items-start"> {/* Aggiunta la classe items-start */}
          {/* Testo a sinistra */}
          <div className="lg:w-3/4 lg:mr-8 mt-20"> {/* Aggiunto il margine superiore (mt) per spostare le scritte più in basso */}
            <h1 className="text-2xl brand-logo sm:text-3xl md:text-4xl xl:text-6xl 2xl:text-6xl font-bold tracking-tight text-white tracking-in-expand-fwd-top ">
              David Scattone
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-in-contract-bck  mt-4 sottotitolo">
              Front End Developer
            </h1>
          </div>

          {/* Immagine a destra */}
          <div className="lg:w-1/4 pr-4">
            <img
              className="w-full h-auto max-w-md mx-auto rounded-md shadow-xl foto"
              src={immagine}
              alt="Descrizione dell'immagine"
              style={{ width: '500px', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;