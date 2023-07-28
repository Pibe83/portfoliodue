import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8" id="contatti">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h3 className="text-lg font-bold mb-3 titoli">Contatti</h3>
            <ul>
              <li className="flex items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 titoli" />
                <a href="mailto:tuamail@example.com" className='titoli'>davidscattone10@gmail.com</a>
              </li>
              <li className="flex items-center mb-3">
                <FontAwesomeIcon icon={faPhone} className="mr-2 titoli" />
                <a href="tel:+1234567890" className='titoli'>3891698113</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h3 className="text-lg font-bold mb-3 titoli">Social</h3>
            <ul>
              <li className="flex items-center mb-3">
                <FontAwesomeIcon icon={faGithub} className="mr-2 titoli" />
                <a href="https://github.com/Pibe83" className='titoli' target="_blank">https://github.com/Pibe83</a>
              </li>
              <li className="flex items-center mb-3">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2 titoli" />
                <a href="https://www.linkedin.com/in/david-scattone/" className='titoli' target="_blank">https://www.linkedin.com/in/david-scattone/</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
