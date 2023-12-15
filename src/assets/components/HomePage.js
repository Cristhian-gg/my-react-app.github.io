import React from 'react';
import { Link } from 'react-router-dom';
import Ada from '../img/Ada_Lovelace/CarImg.png';
import Dennis from '../img/Dennis_Ritchie/DennisRitchie.jpg';
import Alan from '../img/Alan_Turing/Alan_Turing.jpg';
import Bill from '../img/Bill_Gates/Bill_Gates.jpg';
import Guido from '../img/Guido_Van_Rossum/Guido_Van_Rossum.jpg';
import Larry from '../img/Larry_Page_Sergey_Brin/GoogleLS.jpg';
import Linus from '../img/Linus_Torvalds/Linus_Torvalds.jpg';
import Tim from '../img/Tim_Berners_Lee/Tim_Berners_Lee.jpg';
import Footer from './Footer'; 

const HomePage = () => {
  return (
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
      
      <h1>
        Personajes Importantes de la Informatica
      </h1>
      
      <div className="row">
        <div className="col-md-6">
          <Link to="/ada" className="nav-link">
          <div className="image-container">
              <img src={Ada} alt="Ada LoveLace"/>
              <p>Ada LoveLace</p>
          </div>
          </Link>
          <Link to="/dennis" className="nav-link">
          <div className="image-container">
            <img src={Dennis} alt="Dennis Ritchie" />
            <p>Dennis Ritchie</p>
          </div>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/bill" className="nav-link">
          <div className="image-container">
            <img src={Bill} alt="Bill Gates" />
            <p>Bill Gates</p>
          </div>
          </Link>
          <Link to ="/linus" className="nav-link">
          <div className="image-container">
            <img src={Linus} alt="Linus Torvalds" />
            <p>Linus Torvalds</p>
          </div>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Link to="/guido" className="nav-link">
          <div className="image-container">
            <img src={Guido} alt="Guido Van Rossum" />
            <p>Guido Van Rossum</p>
          </div>
          </Link>
          <Link to="/tim" className="nav-link">
          <div className="image-container">
            <img src={Tim} alt="Tim Berners-Lee" />
            <p>Tim Berners-Lee</p>
          </div>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/alan" className="nav-link">
          <div className="image-container">
            <img src={Alan} alt="Alan Mathison Turing" />
            <p>Alan Mathison Turing</p>
          </div>
          </Link>
          <Link to="/larry" className="nav-link">
          <div className="image-container">
            <img src={Larry} alt="Larry Page & Sergey Brin" />
            <p>Larry Page & Sergey Brin</p>
          </div>
          </Link>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
