import React from 'react';
import Ada from '../img/Ada_Lovelace/Ada_Lovelace.jpg';
import Footer from './Footer'; 
import { Link } from 'react-router-dom';
import  './styles/AdaPage.css'



const AdaPage = () => {
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
      
      
      <div className="image">
        <img src={Ada} alt="Ada lovelace"/>
      </div>
     <div className="Arriba">
     <h1>Ada Lovelace "la primera programadora de la historia"</h1>
     </div>
    <div className="Medio">
    
      Ada Lovelace, también conocida como Augusta Ada Byron King, nació el 10 de diciembre de 1815 en Londres, Inglaterra. 
      Era la única hija legítima del poeta Lord Byron y su esposa Anne Isabella Milbanke.
      Ada Lovelace, la primera programadora de la historia, también conocida como Augusta Ada Byron King, nació el 10 de diciembre de 1815 en Londres, Inglaterra. Era la única hija legítima del poeta Lord Byron y su esposa Anne Isabella Milbanke.
      Ada recibió una educación privilegiada, con especial énfasis en las matemáticas y la ciencia. A los 17 años, conoció al matemático y científico Charles Babbage, quien estaba desarrollando una máquina de cálculo mecánica, llamada la Máquina Analítica.
      Ada quedó fascinada por la máquina de Babbage y comenzó a estudiar sus principios matemáticos. En 1843, tradujo una serie de artículos sobre la máquina, escritos por el ingeniero italiano Luigi Menabrea. En su traducción, Ada incluyó notas y comentarios que explicaban cómo la máquina podría usarse para calcular funciones matemáticas complejas.
      Una de las notas de Ada, conocida como el "Manuscrito de Lovelace", es considerada como el primer programa informático de la historia. En este manuscrito, Ada describe cómo la máquina de Babbage podría usarse para calcular los números Bernoulli, una serie matemática que se utiliza en el análisis matemático y la teoría de números.
      El trabajo de Ada Lovelace fue fundamental para el desarrollo de la informática moderna. Sus ideas sobre la programación anticiparon en gran medida los desarrollos que se produjeron en el siglo XX.
    </div>
    <div className="Lateral">
     <h1>Aportes de Ada Lovelace</h1>

    <ul>
      <li><h6>Creación del primer programa informático:</h6> El "Manuscrito de Lovelace" es considerado como el primer programa informático de la historia. En este manuscrito, Ada describe cómo la máquina de Babbage podría usarse para calcular los números Bernoulli.</li>
      <li><h6>Introducción del concepto de algoritmo:</h6> Ada Lovelace fue la primera persona en usar el término "algoritmo" en el contexto de la informática. En su "Manuscrito de Lovelace", describe el algoritmo que podría usarse para calcular los números Bernoulli.</li>
      
    </ul>
     </div>
      







      <div className="Footer">
          <Footer/>
      </div>
    </>
    );
};
export default AdaPage;
