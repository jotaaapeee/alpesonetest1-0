import React from "react";
//import Carousel from "flat-carousel";

import { carsList } from "../../mock/carros";

import alpesLogo from "../../assets/img/logos/logo-alpes.png";
import mobileBanner from "../../assets/img/banners/mobile-banner.png";
import deskBanner from "../../assets/img/banners/desktop-banner.jpg";
import facebookIcon from "../../assets/svg/facebook.svg";
import whatsAppIcon from "../../assets/svg/whatsapp.svg";

import "./mainPage.scss";
import Button from "../../components/button";
import Form from "../../pages/form";

function PageIndex() {

  return (
    <section className="wrapper">
      <img className="image-mobile" src={mobileBanner} alt="bmw-banner" />
      <div className="form-container">
        <img className="image-desktop" src={deskBanner} alt="bmw-banner" />
        <Form />
      </div>
      <h1>ESCOLHA SEU BMW</h1>
      <div className="cars-container">
        {carsList.map((cars) => (
          <div className="cars-wrapper" key={cars.id}>
            <img src={cars.image} alt={cars.name} />
            <p>{cars.name}</p>
            <div className="contact-buttons">
              <Button>Cotação</Button>
              <Button>Ligar</Button>
            </div>

            <div className="share-socialmidia">
              <p>Compartilhe:</p>
              <img src={facebookIcon} alt="ícone-facebook" />
              <img src={whatsAppIcon} alt="ícone-whatsapp" />
            </div>
          </div>
        ))}

        <footer className="page-footer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            labore. Fugit culpa reprehenderit libero, facere quos aut, itaque
            eum tenetur numquam dolore unde velit ducimus aperiam voluptate
            quasi delectus beatae.
          </p>
          <div className="auth-assign">
            <span>&copy; Copyright &copy; 2021 Lorem ipsum dolor sit amet</span>
            <span>
              Feito por: <img src={alpesLogo} alt="alpes-logo" />
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default PageIndex;
