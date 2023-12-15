import React from 'react';
import Cris from '../img/Cris/Cris.jpg';
import Footer from './Footer'; 
import { Link } from 'react-router-dom';
import  './styles/CreditosPage.css'
import EnlaceBoton from './EnlaceBoton';

const CreditosPage =() => {
    
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
<div className="arriba-titulo">
<h1>
    Estudiante :Cristhian Jose Chuquimia Limachi
</h1>
</div>
<div className="image-cris">
<img src={Cris} alt="Cris"/>
</div>
<div className="medio-cris">
"¡Hola! Soy Cristhian Jose Chuquimia Limachi, un entusiasta estudiante de <a href="http://informatica.umsa.bo/">Informática</a> de 20 años que estudia en la prestigiosa <a href="https://www.umsa.bo/">Universidad Mayor de San Andrés(UMSA).</a> Mi pasión por la tecnología me impulsa a explorar y crear en el mundo digital.

Como futuro profesional en Informática, estoy inmerso en un proyecto emocionante: una aplicación en React que refleja mi compromiso con el aprendizaje y la innovación. Mi dedicación a esta disciplina se manifiesta en cada línea de código que escribo y en cada funcionalidad que diseño.

Mi dirección de correo electrónico, Cristhianchuquimia83@gmail.com, es el punto de contacto para colaborar y compartir ideas. Esta aplicación no solo representa mi habilidad técnica, sino también mi deseo de hacer contribuciones significativas en el campo de la informática.

Únete a esta experiencia tecnológica, donde la creatividad y la excelencia se unen para ofrecer soluciones innovadoras. ¡Bienvenidos a mi proyecto en React, donde el futuro se encuentra con la innovación!"
<br>
</br>
<h2>Mi Redes Sociales</h2>
<EnlaceBoton enlace="https://www.facebook.com/cristhian.chuquimia.9?locale=es_LA" texto="Facebook" estilo="btn-success" />
<EnlaceBoton enlace="https://www.instagram.com/cristhian.chuky/" texto="Instagram" estilo="btn-danger" />
</div>
<div className="final-cris">
<div class="mb-3">
  <label for="nombre" class="form-label">Nombre:</label>
  <input type="text" class="form-control" id="nombre" placeholder="Nombre" />
</div>
<div class="mb-3">
  <label for="apellido" class="form-label">Apellido:</label>
  <input type="text" class="form-control" id="apellido" placeholder="Apellido" />
</div>
<div class="mb-3">
  <label for="email" class="form-label">Dirección de correo electrónico:</label>
  <input type="email" class="form-control" id="email" placeholder="Licpongame(25pts)porfavor@gmail.com"/>
</div>
<div class="mb-3">
  <label for="mensaje" class="form-label">Algun Mensaje:</label>
  <textarea class="form-control" id="mensaje" rows="3"></textarea>
</div>
<EnlaceBoton enlace="https://www.facebook.com/CarreraDeInformaticaUmsa?locale=es_LA" texto="Entrar" estilo="btn-success" />

</div>



      
      
      
      
      
      
      
      
    <div className="Footer">
        <Footer />
    </div>
    </>
        
    );
};
export default CreditosPage;