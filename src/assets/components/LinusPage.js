import React from 'react';
import Linus from '../img/Linus_Torvalds/PerfilTor.jpg'
import Footer from './Footer'; 
import { Link } from 'react-router-dom';
import './styles/LinusPage.css'
import Linus2 from '../img/Linus_Torvalds/Linux.png'

const LinusPage = () => {
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
     
      <div className="image-linus">
        <img src={Linus} alt="Linus Torvalds"/>
      </div>
      <div className="image-linus2">
        <img src={Linus2} alt="Linus Torvalds"/>
      </div>
      <div className="Arriba-linus">
     <h1>Linus Benedict Torvalds "El padre del sistema operativo Linux"</h1>
     </div>
    <div className="Medio-linus">
    Linus Benedict Torvalds nació el 28 de diciembre de 1969 en Helsinki, Finlandia. Es un ingeniero de software finlandés-estadounidense, conocido por iniciar y mantener el desarrollo del kernel Linux, basándose en el sistema operativo libre Minix creado por Andrew S. Tanenbaum y en algunas herramientas, varias utilidades y los compiladores desarrollados por el proyecto GNU.
    Linus Benedict Torvalds, el padre del sistema operativo Linux
    Linus Benedict Torvalds nació el 28 de diciembre de 1969 en Helsinki, Finlandia. Es un ingeniero de software finlandés-estadounidense, conocido por iniciar y mantener el desarrollo del kernel Linux, basándose en el sistema operativo libre Minix creado por Andrew S. Tanenbaum y en algunas herramientas, varias utilidades y los compiladores desarrollados por el proyecto GNU.
    Imagen de Linus TorvaldsSe abre en una ventana nueva
    Linus Torvalds
    Torvalds comenzó a programar computadoras a la edad de 10 años. En 1991, mientras era estudiante de la Universidad de Helsinki, comenzó a desarrollar un nuevo kernel de sistema operativo para su computadora personal con un procesador Intel 80386. Publicó su trabajo en un grupo de noticias de Usenet, y rápidamente llamó la atención de otros desarrolladores de software.
    Torvalds continuó trabajando en el kernel Linux, y con la ayuda de otros desarrolladores de todo el mundo, el proyecto creció rápidamente. En 1994, Linux se convirtió en un sistema operativo viable para computadoras personales.
    Linux se ha convertido en uno de los sistemas operativos más populares del mundo. Es utilizado por millones de personas en todo el mundo, y es la base de muchos sistemas operativos populares, incluidos Android, Chrome OS y Ubuntu.
    </div>
    <div className="Lateral-linus">
     <h1>Aportes de Linus Torvalds</h1>

    <ul>
      <li><h6>Creación del kernel Linux:</h6>El kernel Linux es el núcleo de un sistema operativo libre y de código abierto. Es utilizado por millones de personas en todo el mundo, y es la base de muchos sistemas operativos populares.</li>
      <li><h6>Promoción del software libre: </h6>Torvalds es un defensor del software libre, y su trabajo en Linux ha ayudado a popularizar el uso de este tipo de software.</li>
      <li><h6>Inspiración para otros desarrolladores de software:</h6>Torvalds es una inspiración para otros desarrolladores de software, y su trabajo en Linux ha demostrado que es posible crear sistemas operativos exitosos de manera colaborativa.</li>
    </ul>
    <h1>Legado de Linus Torvalds</h1>
        Linus Torvalds es considerado una de las figuras más importantes en la historia de la informática. Su trabajo en Linux ha tenido un impacto profundo en la forma en que las personas usan las computadoras.
        Linux es un sistema operativo versátil y potente que se puede utilizar en una amplia gama de dispositivos. Su popularidad ha ayudado a democratizar el acceso a la tecnología y ha impulsado la innovación en el campo de la informática.
        El legado de Linus Torvalds es una inspiración para desarrolladores de software, usuarios de computadoras y personas de todo el mundo.
     </div>
      <div className="Footer">
          <Footer/>
      </div>
    
      
    </>

    );
};
export default LinusPage;
