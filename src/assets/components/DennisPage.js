import React from 'react';
import Dennis from '../img//Dennis_Ritchie/Dennis_Ritchie.jpg'
import Footer from './Footer'; 
import './styles/DennisPage.css'
import { Link } from 'react-router-dom';

const DennisPage = () => {
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
     
      <div className="image-dennis">
        <img src={Dennis} alt=""/>
      </div>
     <div className="Arriba-Dennis">
     <h1>Dennis Ritchie "El padre del lenguaje C y el sistema operativo Unix"</h1>
     </div>
    <div className="Medio-Dennis">
    Dennis Ritchie nació el 9 de septiembre de 1941 en Bronxville, Nueva York. Se graduó de la Universidad de Harvard en 1964 con un título en Física y Matemáticas Aplicadas.
    Después de graduarse, Ritchie trabajó para el Laboratorio Bell de AT&T, donde desarrolló su carrera como científico de la computación. En 1969, Ritchie y Ken Thompson crearon el lenguaje de programación C. El lenguaje C es un lenguaje de propósito general que se utiliza para escribir software para una amplia gama de plataformas. Es considerado uno de los lenguajes de programación más importantes de la historia.
    En 1973, Ritchie y Thompson también crearon el sistema operativo Unix. Unix es un sistema operativo multitarea, multiusuario que se utiliza en una amplia gama de entornos, desde servidores hasta dispositivos móviles. Es considerado uno de los sistemas operativos más influyentes de la historia.
    Ritchie recibió numerosos premios por su trabajo, incluido el Premio Turing, la Medalla Nacional de Tecnología e Innovación y el Premio Japón. Murió el 12 de octubre de 2011 a la edad de 70 años.
    </div>
    <div className="Lateral-Dennis">
     <h1>Aportes de Dennis Ritchie</h1>

    <ul>
      <li><h5>Creación del primer programa informático:</h5>  El lenguaje C es un lenguaje de propósito general que se utiliza para escribir software para una amplia gama de plataformas. Es considerado uno de los lenguajes de programación más importantes de la historia.</li>
      <li><h5>Introducción del concepto de algoritmo:</h5> Unix es un sistema operativo multitarea, multiusuario que se utiliza en una amplia gama de entornos. Es considerado uno de los sistemas operativos más influyentes de la historia.</li>
      
    </ul>
    </div>
      <div className="Footer">
          <Footer/>
      </div>
    
      
    </>

    );
};
export default DennisPage;
