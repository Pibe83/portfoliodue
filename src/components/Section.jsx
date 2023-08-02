import React from 'react';
import immagine1 from '../immagini/HTML5_logo_and_wordmark.svg.png';
import immagine2 from '../immagini/1452px-CSS3_logo_and_wordmark.svg.png';
import immagine3 from '../immagini/JavaScript-logo.png';
import immagine4 from '../immagini/Bootstrap_logo.svg.png';
import immagine5 from '../immagini/React-icon.svg.png';
import immagine6 from '../immagini/5848309bcef1014c0b5e4a9a.png';
import curriculumPDF from '../immagini/Curriculum David Scattone Front-end Junior.pdf';

const SkillsSection = () => {
    const openPDFResume = () => {
        // Apri il PDF del curriculum in una nuova finestra
        window.open(curriculumPDF, '_blank');
    };
    
    
    return (
        <div className="bg-gray-800" id="chisono">
            <div className="container mx-auto px-6 py-20 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-start"> {/* Cambiato "items-center" in "items-start" */}
                    {/* Sezione Biografia a sinistra */}
                    <div className="bg-gray-800 p-6 rounded-lg text-center">
                        <h2 className="text-3xl font-bold text-center text-white mb-7 titoli">Chi sono</h2>
                        <p className="text-white">
                        Ciao a tutti!
Mi chiamo David e sono un appassionato Front-End Developer. Di recente ho completato con un bootcamp intensivo di tre mesi presso Epicode, un'esperienza che mi ha fornito una solida base di conoscenze in HTML, CSS, JavaScript, Bootstrap, React.js, Typescript e Redux , Sass , DOM, ES6, Responsive Design , UX/UI Design , Fetch API , REST API.<br />
Ma il vero viaggio è iniziato dopo il corso! Dopo aver terminato il mio percorso formativo, non ho perso tempo e ho continuato a immergermi nell'affascinante mondo dello sviluppo web. Ho trascorso ore a studiare e approfondire le tecnologie più recenti, e mi sono sporcato le mani con vari progetti personali.
Per qualsiasi consiglio mi vogliate dare, non esitare a contattarmi!
Grazie per aver visitato il mio portfolio.<br /> Sarà un piacere avere un dialogo e condividere le nostre passioni.

                        </p>
                        <button
                        className="mt-8 px-4 py-2 text-white rounded-md text-center buttonc"
                        onClick={openPDFResume}
                    >
                        Curriculum
                    </button>
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
