import React from 'react';
import Wwwimg from '../img/Tim_Berners_Lee/Wwwimg.jpeg';
import LogoHtml from '../img/Tim_Berners_Lee/LogoHtml.png';
import PrimerNav from '../img/Tim_Berners_Lee/PrimerNav.png';
import Footer from './Footer'; 
import { Link } from 'react-router-dom';
import '../components/styles/TimPage.css';
const TimPage = () => {
    return(
        <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to="/home" className="nav-link">PRINCIPAL</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to="/ada" className="nav-link">Ada Lovelace</Link>
            <Link to="/dennis" className="nav-link">Dennis Ritchie</Link>
            <Link to="/bill" className="nav-link">Bill Gates</Link>
            <Link to="/linus" className="nav-link">LinusTorvalds</Link>
            <Link to="/guido" className="nav-link">Guido Van Rossum</Link>
            <Link to="/tim" className="nav-link">Tim Berners Lee</Link>
            <Link to="/alan" className="nav-link">Alan Turing</Link>
            <Link to="/larry" className="nav-link">Larry Page & Sergey Brin</Link>    
            <Link to="/creditos" className="nav-link">Creditos</Link>
  
            </div>
          </div>
        </div>
      </nav>
      
      
      <div className="image-tim">
        <img src={Wwwimg} alt="Tim"/>
      </div>
      <div className="image-tim-medio">
        <img src={LogoHtml} alt="Tim"/>
      </div>
      <div className="image-tim-final">
        <img src={PrimerNav} alt="Tim"/>
      </div>
      
     
     <div className="Arriba-tim">
     <h1>Tim Berners-Lee </h1>
     <h1>"El padre de la World Wide Web"</h1>
     </div>
  
    <div className="Medio-tim">
    Timothy John Berners-Lee nació el 8 de junio de 1955 en Londres, Inglaterra. Es un científico de la computación británico, conocido por ser el principal inventor del World Wide Web (WWW). 
    Berners-Lee se graduó del Queen's College de la Universidad de Oxford en 1976 con un título en física. Después de graduarse, trabajó como programador en diversos lugares, incluyendo el CERN, un laboratorio de física nuclear en Suiza.

En 1989, Berners-Lee propuso la creación de un sistema de hipertexto que permitiera a los usuarios compartir información en línea. El sistema, al que llamó World Wide Web, fue lanzado por primera vez en 1991.

La World Wide Web rápidamente se convirtió en un éxito, y ahora es la base de Internet. Se utiliza para una amplia gama de propósitos, incluyendo comunicación, educación, entretenimiento y comercio.
    </div>
    <div className="Lateral-tim">
     <h1>Aportes de Bill Gates</h1>

    <ul>
      <li><h5>nvención del World Wide Web:</h5>La World Wide Web es el sistema de hipertexto que permite a los usuarios compartir información en línea. Es la base de Internet y se utiliza para una amplia gama de propósitos.</li>
      <li><h5>Desarrollo de los protocolos HTTP y HTML: </h5>El protocolo HTTP (HyperText Transfer Protocol) y el lenguaje de marcado HTML (HyperText Markup Language) son los protocolos que permiten que la World Wide Web funcione.</li>
    </ul>
    </div>
      <div className="Footer">
          <Footer/>
      </div>
    
      
    </>

    );
};
export default TimPage;
