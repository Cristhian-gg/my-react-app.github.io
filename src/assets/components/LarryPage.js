import React from 'react';
import Larry from '../img/Larry_Page_Sergey_Brin/GoogleLS.jpg'
import Larry2 from '../img/Larry_Page_Sergey_Brin/Larry_Page_Sergey_Brin.jpg'
import Footer from './Footer'; 
import { Link } from 'react-router-dom';
import '../components/styles/LarryPage.css'

const LarryPage = () => {
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
      
      <div className="image-larry">
        <img src={Larry} alt="Larry"/>
      </div>
      <div className="image-larry2">
        <img src={Larry2} alt="Larry"/>
      </div>
      <div className="Arriba-larry">
     <h1>Larry Page y Sergey Brin</h1>
     <h1>"Los Cofundadores de Google"</h1>
     </div>
    <div className="Medio-linus">
    Larry Page y Sergey Brin, los cofundadores de Google

Larry Page y Sergey Brin son dos de las figuras más importantes en la historia de la informática. Son los cofundadores de Google, la empresa de tecnología más valiosa del mundo.

Larry Page

Larry Page nació el 26 de marzo de 1973 en East Lansing, Michigan. Su padre era un profesor de ciencias de la computación y su madre era una profesora de matemáticas. Page se graduó de la Universidad de Michigan en 1995 con un título en ciencias de la computación.

Después de graduarse, Page fue a la Universidad de Stanford para obtener un doctorado en ciencias de la computación. Allí conoció a Sergey Brin.

Sergey Brin

Sergey Brin nació el 21 de agosto de 1973 en Moscú, Rusia. Su familia emigró a los Estados Unidos cuando él tenía seis años. Brin se graduó de la Universidad de Maryland en 1995 con un título en matemáticas y ciencias de la computación.

Después de graduarse, Brin también fue a la Universidad de Stanford para obtener un doctorado en ciencias de la computación.

El inicio de Google

En 1996, Page y Brin comenzaron a trabajar en un nuevo motor de búsqueda que utilizaba un algoritmo llamado PageRank. PageRank utiliza la importancia de los enlaces entre las páginas web para determinar su relevancia.

En 1998, Page y Brin fundaron Google. El nombre "Google" es una abreviatura de "googol", que es un número que equivale a 1 seguido de 100 ceros.

El éxito de Google

Google rápidamente se convirtió en el motor de búsqueda más popular del mundo. La empresa se expandió a otros productos y servicios, como Gmail, Google Maps y Google Docs.

En 2004, Google se hizo pública y su cotización en bolsa se disparó.
    </div>
    <div className="Lateral-larry">
     <h1>El Legado de Page y Brin</h1>
     Larry Page y Sergey Brin son considerados dos de los visionarios más importantes de la historia de la informática. Su trabajo en Google ha tenido un impacto profundo en la forma en que las personas buscan información y se comunican.

Google ha democratizado el acceso a la información y ha facilitado la comunicación y la colaboración entre personas de todo el mundo. Ha tenido un impacto significativo en la educación, el comercio, el entretenimiento y la sociedad en general.
    <ul>
    <h1>Contribuciones de Page y Brin</h1>
      <li><h6>El desarrollo del algoritmo PageRank:</h6>PageRank es un algoritmo que utiliza la importancia de los enlaces entre las páginas web para determinar su relevancia. Es el algoritmo que se utiliza en Google para clasificar los resultados de búsqueda. </li>
      <li><h6>La fundación de Google:</h6>Google es la empresa de tecnología más valiosa del mundo. Su éxito ha tenido un impacto significativo en la forma en que las personas buscan información y se comunican. </li>
      <li><h6>La promoción del código abierto:</h6>Page y Brin son partidarios del código abierto, que es un modelo de desarrollo de software en el que el código fuente está disponible públicamente para que cualquiera lo utilice y modifique.</li>
      </ul>
    <h1>Legado de Page y Brin</h1>

Larry Page y Sergey Brin son considerados dos de las figuras más importantes en la historia de la informática. Su trabajo en Google ha tenido un impacto profundo en la forma en que las personas usan la tecnología.
    
    <h1>Democratización del acceso a la información</h1>

Google ha democratizado el acceso a la información al hacerla más accesible y asequible. Antes de Google, era difícil encontrar información en línea. Las personas tenían que saber cómo usar lenguajes de búsqueda complejos y navegar por sitios web desordenados. Google simplificó el proceso de búsqueda de información al utilizar un algoritmo que clasifica los resultados de búsqueda en función de su relevancia.
     </div>
      <div className="Footer">
          <Footer/>
      </div>
    
      
    </>

    );
};
export default LarryPage;
