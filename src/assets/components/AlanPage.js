import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pp1 from '../img/Alan_Turing/pp1.png';
import pp2 from '../img/Alan_Turing/pp2.png';
import pp3 from '../img/Alan_Turing/pp3.png';
import pp4 from '../img/Alan_Turing/pp4.png';
import pp5 from '../img/Alan_Turing/pp5.png';
import pp6 from '../img/Alan_Turing/pp6.png';
import pp7 from '../img/Alan_Turing/pp7.png';
import pp8 from '../img/Alan_Turing/pp8.png';
import pp9 from '../img/Alan_Turing/pp9.png';
import pp10 from '../img/Alan_Turing/pp10.png';
import pp11 from '../img/Alan_Turing/pp11.png';
import pp12 from '../img/Alan_Turing/pp12.png';
import pp13 from '../img/Alan_Turing/pp13.png';
import pp14 from '../img/Alan_Turing/pp14.png';
import pp15 from '../img/Alan_Turing/pp15.png';
import pp16 from '../img/Alan_Turing/pp16.png';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './styles/AlanPage.css'

const AlanPage = () => {
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
      <div className="titulo">
      <h1>
        Alan Turing
      </h1>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" aria-label="Slide 13"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13" aria-label="Slide 14"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14" aria-label="Slide 15"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15" aria-label="Slide 16"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pp1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={pp2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={pp3} className="d-block w-100" alt="Slide 3" />
        </div>

     <div class="carousel-item"> 
       <img src={pp4} class="d-block w-100" alt="Slide 4"/> 
     </div> 
    <div class="carousel-item"> 
       <img src={pp5} class="d-block w-100" alt="Slide 5"/> 
     </div>
    <div class="carousel-item"> 
    <img src={pp6} class="d-block w-100" alt="Slide 6"/> 
    </div> 
    <div class="carousel-item"> 
       <img src={pp7} class="d-block w-100" alt="Slide 7"/> 
    </div> 
    <div class="carousel-item"> 
     <img src={pp8} class="d-block w-100" alt="Slide 8"/> 
     </div> 
    <div class="carousel-item"> 
      <img src={pp9} class="d-block w-100" alt="Slide 9"/> 
    </div> 
    <div class="carousel-item"> 
      <img src={pp10} class="d-block w-100" alt="Slide 10"/> 
    </div> 
    <div class="carousel-item"> 
     <img src={pp11} class="d-block w-100" alt="Slide 11"/> 
     </div> 
    <div class="carousel-item"> 
       <img src={pp12} class="d-block w-100" alt="Slide 12"/> 
     </div> 
    <div class="carousel-item"> 
      <img src={pp13} class="d-block w-100" alt="Slide 13"/> 
     </div> 
    <div class="carousel-item"> 
    <img src={pp14} class="d-block w-100" alt="Slide 14"/> 
    </div> 
    <div class="carousel-item"> 
       <img src={pp15} class="d-block w-100" alt="Slide 15"/> 
     </div> 
    <div class="carousel-item">
      <img src={pp16} class="d-block w-100" alt="Slide 16"/> 
    </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

<div className="Footer">
  <Footer/>
</div>

    </>
    );
};
export default AlanPage;
