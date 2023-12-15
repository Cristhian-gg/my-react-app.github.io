import React from 'react';
import Guido from '../img/Guido_Van_Rossum/Guido_Van_Rossum.jpg'
import Footer from './Footer'; 
import { Link } from 'react-router-dom';
import '../components/styles/GuidoPage.css';
const GuidoPage = () => {
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
      
    
      <div className="image-guido">
        <img src={Guido} alt="Guido"/>
      </div>
    
      <div className="Arriba-guido">
     <h1>Guido van Rossum </h1>
     <h1>"El Creador de Python"</h1>
     </div>
    <div className="Medio-guido">
      Guido van Rossum, el creador de Python
      Guido van Rossum nació el 31 de enero de 1956 en Haarlem, Países Bajos. Es un informático holandés, conocido por ser el creador del lenguaje de programación Python. 
      Van Rossum se graduó de la Universidad de Ámsterdam en 1982 con un título en matemáticas y ciencias de la computación. Después de graduarse, trabajó como programador en diversas empresas, incluyendo Centrum Wiskunde & Informatica (CWI) y BeOpen.com.
      En 1989, van Rossum comenzó a trabajar en un nuevo lenguaje de programación que fuera simple, poderoso y fácil de aprender. El lenguaje, al que llamó Python, fue lanzado por primera vez en 1991.
      Python rápidamente se convirtió en un lenguaje popular, y ahora es uno de los lenguajes de programación más utilizados en el mundo. Se utiliza para una amplia gama de propósitos, incluyendo desarrollo web, ciencia de datos, aprendizaje automático e inteligencia artificial.
    </div>
    <div className="Lateral-guido">
     <h1>Aportes de Guido van Rossum</h1>
    <ul>
      <li><h6>Creación del lenguaje de programación Python:</h6>Python es un lenguaje de programación versátil y poderoso que se utiliza para una amplia gama de propósitos. Es simple, poderoso y fácil de aprender, lo que lo ha convertido en uno de los lenguajes de programación más populares del mundo.</li>
    </ul>
    
     </div>
      <div className="Footer">
          <Footer/>z
      </div>
    
      
    </>

    );
};
export default GuidoPage;
