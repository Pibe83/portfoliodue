import React from 'react';
import usatravel from '../immagini/Usa Travel.png';
import visitaniene from '../immagini/VisitAniene.png';
import spotify from '../immagini/Spotify-Clone.png'
import linkedin from '../immagini/linkedin.png'
import movieapp from '../immagini/movieappbis.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

;

 // Importa l'icona del globo da free-solid-svg-icons

const ProfileCard = () => {
  return (
    <div className="bg-gray-800 p-8" id="portfolio">
      <h2 className="text-white text-3xl font-bold mb-4 text-center titoli sottotitolo brand-logo-pro text-center">Progetti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="image-area">
          <div className="img-wrapper">
            <img src={usatravel} />
            <h2>Usa TRavel</h2>
            <ul>
              <li><a href="https://github.com/Pibe83/USA-Travel-App" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://usa-travel-app.vercel.app/" target="_blank"><FontAwesomeIcon icon={faGlobe} /></a></li>

            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="image-area">
          <div className="img-wrapper">
            <img src={visitaniene} />
            <h2>Visit Aniene</h2>
            <ul>
              <li><a href="https://github.com/Pibe83/VisitAniene-" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://progetto-finale-iota.vercel.app/" target="_blank"><FontAwesomeIcon icon={faGlobe} /></a></li>
              

            </ul>
          </div>
          {/* Contenuto della seconda card */}
        </div>

        {/* Card 3 */}
        <div className="image-area">
          <div className="img-wrapper">
            <img src={spotify} />
            <h2>Spotify Clone</h2>
            <ul>
              <li><a href="https://github.com/Pibe83/Spotify" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
              
              

            </ul>
          </div>
          {/* Contenuto della terza card */}
        </div>

        {/* Card 4 */}
        <div className="image-area">
          <div className="img-wrapper">
            <img src={linkedin} />
            <h2>LinkedIn Clone- Progetto di gruppo</h2>
            <ul>
              <li><a href="https://github.com/Luigi-stack/LinkedIn-Build-week3" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
              
             

            </ul>
          </div>
          {/* Contenuto della quarta card */}
        </div>

        {/* Card 5 */}
        <div className="image-area">
          <div className="img-wrapper">
            <img src={movieapp} />
            <h2>Movie App</h2>
            
            <ul>
              <li><a href="https://github.com/atuljustano" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
              
              

            </ul>
          </div>
          {/* Contenuto della quinta card */}
        </div>

        {/* Card 6 */}
        <div className="image-area">
          <div className="img-wrapper">
            <img src="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Atul Prajapati" />
            <h2>David James</h2>
            <ul>
              <li><a href="https://github.com/atuljustano" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.instagram.com/atulkprajapati2000/" target="_blank"><FontAwesomeIcon icon={faGlobe} /></a></li>
              

            </ul>
          </div>
          {/* Contenuto della sesta card */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
