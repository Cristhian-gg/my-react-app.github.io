import React from 'react';
import Bill from '../img/Bill_Gates/JovenBill.jpg'
import Bill2 from '../img/Bill_Gates/MicroBill.jpg'
import Bill3 from '../img/Bill_Gates/WinBIll.jpg'
import Footer from './Footer'; 
import { Link } from 'react-router-dom';
import './styles/BillPage.css'

const BillPage = () => {
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
      
     
      <div className="image-bill">
        <img src={Bill} alt="Bill Gates"/>
      </div>
      <div className="image-bill-medio">
        <img src={Bill2} alt="Bill Gates"/>
      </div>
      <div className="image-bill-final">
        <img src={Bill3} alt="Bill Gates"/>
      </div>
      
     
     <div className="Arriba-bill">
     <h1>Bill Gates "El magnate de la informática"</h1>
     </div>
     <div className="contenedor-video">
     <iframe title="Bill Gates"width="560" height="315"  src="https://www.youtube.com/embed/RL9VacN6HeU" frameborder="0" allowfullscreen></iframe>
    </div>
    <div className="Medio-bill">
    William Henry Gates III, conocido como Bill Gates, nació el 28 de octubre de 1955 en Seattle, Washington. Es un magnate empresarial, desarrollador de software, inversor, autor y filántropo estadounidense. Es cofundador de Microsoft, junto con su difunto amigo de la infancia Paul Allen.

    Gates comenzó a programar computadoras a la edad de 13 años. En 1975, fundó Microsoft con Allen, y la compañía rápidamente se convirtió en el líder mundial en el desarrollo de software para computadoras personales.

    Gates se desempeñó como director ejecutivo de Microsoft desde 1975 hasta 2000. Durante su mandato, Microsoft lanzó una serie de productos exitosos, incluidos el sistema operativo Windows, el paquete de software Office y el navegador web Internet Explorer.

    Gates dejó de ser director ejecutivo de Microsoft en 2000, pero permaneció como presidente de la junta directiva hasta 2014. En 2014, renunció a la junta directiva de Microsoft para centrarse en su trabajo filantrópico.

    Gates y su esposa, Melinda, fundaron la Fundación Bill y Melinda Gates en 2000. La fundación se dedica a mejorar la salud global, la educación y la reducción de la pobreza.
    </div>
    <div className="Lateral-bill">
     <h1>Aportes de Bill Gates</h1>

    <ul>
      <li><h5>Cofundador de Microsoft: </h5>Microsoft se convirtió en el líder mundial en el desarrollo de software para computadoras personales, gracias a los productos y servicios que Gates y Allen desarrollaron y lanzaron.</li>
      <li><h5>Desarrollo del sistema operativo Windows: </h5>Windows es el sistema operativo más utilizado en el mundo, y ha tenido un impacto profundo en la forma en que las personas usan las computadoras.</li>
      <li><h5>Desarrollo del paquete de software Office: </h5>Office es el paquete de software de productividad más utilizado en el mundo, y ha ayudado a millones de personas a trabajar de manera más eficiente.</li>
      <li><h5>Desarrollo del navegador web Internet Explorer: </h5>Internet Explorer fue el navegador web más utilizado en el mundo durante muchos años, y ayudó a popularizar el uso de Internet.</li>
    </ul>
    </div>
    
      <div className="Footer">
          <Footer/>
      </div>
    </>

    );
};
export default BillPage;
