import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);

    // Detectar tamaño de pantalla
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Si el ancho es menor o igual a 600px lo consideramos mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutarlo la primera vez

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const whatsappButtonStyle = {
    position: "fixed",
    bottom: isMobile ? "15px" : "20px",
    right: isMobile ? "15px" : "20px",
    zIndex: 1000,
    width: isMobile ? "50px" : "60px",
    height: isMobile ? "50px" : "60px",
  };

  const whatsappImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} />
        <Contact data={landingPageData.Contact} />
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5491136583323" // <-- Reemplaza con tu número real
        style={whatsappButtonStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/220/220236.png"
          alt="WhatsApp"
          style={whatsappImageStyle}
        />
      </a>
    </>
  );
};

export default App;
