import React from 'react';
import immagine1 from '../immagini/HTML5_logo_and_wordmark.svg.png';
import immagine2 from '../immagini/1452px-CSS3_logo_and_wordmark.svg.png';
import immagine3 from '../immagini/JavaScript-logo.png';
import immagine4 from '../immagini/Bootstrap_logo.svg.png';
import immagine5 from '../immagini/React-icon.svg.png';
import immagine6 from '../immagini/5848309bcef1014c0b5e4a9a.png';

const SkillsSection = () => {
    
    return (
        <div className="bg-gray-800" id="chisono">
            <div className="container mx-auto px-6 py-20 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-start"> {/* Cambiato "items-center" in "items-start" */}
                    {/* Sezione Biografia a sinistra */}
                    <div className="bg-gray-800 p-6 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-center text-white mb-7 titoli">Chi sono</h2>
                        <p className="text-white">
                            Ho appena completato un bootcamp intensivo di 3 mesi presso Epicode, dove ho acquisito una solida base di conoscenze e competenze pratiche in HTML, CSS, JavaScript, Bootstrap, React.js, Typescript e Redux.

                            Grazie a questo programma di formazione intensivo, ora sono in grado di creare applicazioni web dinamiche e reattive utilizzando le più recenti tecnologie.

                            La mia ambizione è specializzarmi nello sviluppo Front-End.
                        </p>
                        <button className="mt-8 px-4 py-2  text-white rounded-md text-center buttonc">Curriculum</button> {/* Aggiunto il pulsante "Curriculum" */}
                    </div>

                    {/* Sezione Skills a destra */}
                    <div className="grid grid-cols-3 gap-6">
                        <h2 className="text-3xl font-bold text-white mb-2 mt-6 text-center col-span-3 titoli">Skills</h2>
                        <div>
                            <img className="w-16 h-16 mx-auto" src={immagine1} alt="Skill 1" />
                        </div>
                        <div>
                            <img className="w-16 h-16 mx-auto" src={immagine2} alt="Skill 2" />
                        </div>
                        <div>
                            <img className="w-16 h-16 mx-auto" src={immagine3} alt="Skill 3" />
                        </div>
                        <div>
                            <img className="w-16 h-16 mx-auto" src={immagine4} alt="Skill 4" />
                        </div>
                        <div>
                            <img className="w-16 h-16 mx-auto" src={immagine5} alt="Skill 5" />
                        </div>
                        <div>
                            <img className="w-16 h-16 mx-auto" src={immagine6} alt="Skill 6" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
