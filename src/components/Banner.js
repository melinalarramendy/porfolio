import { Container } from "react-bootstrap";
import profileIMG from '../assets/img/bannerIMG.png';
import iconogithub from '../assets/img/icono-github.svg';
import iconogmail from '../assets/img/icono-gmail.svg';
import iconolinkedin from '../assets/img/icono-linkedin.svg';

export const Banner = () => {
  return (
    <section className="banner my-5 py-5" id="home">
      <Container>
        <div className="profile-card-container">
          <div className="card-inner">
            <div className="profile-left">
              <div className="profile-image">
                <img src={profileIMG} alt="Perfil Melina" />
              </div>
              <div className="social-icon">
                <a href="https://github.com/melinalarramendy" target="_blank" rel="noreferrer">
                  <img src={iconogithub} alt="GitHub" />
                </a>
                <a href="mailto:melinalarramendy@gmail.com">
                  <img src={iconogmail} alt="Gmail" />
                </a>
                <a href="https://linkedin.com/in/melina-larramendy-60340522b" target="_blank" rel="noreferrer">
                  <img src={iconolinkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>

            <div className="profile-right">
              <h2>Sobre mí</h2>
              <p>
                Soy Técnica Superior en Análisis de Sistemas y desarrolladora junior con enfoque en desarrollo web fullstack.</p>
              <p>Me apasiona crear soluciones tecnológicas, aprender constantemente y trabajar en equipo.</p>
              <p>Manejo tecnologías como React, JavaScript, Node.js, Flask, MongoDB, y más.</p>
              <p>Estoy en búsqueda de mi primera experiencia profesional en IT para seguir creciendo y aportar con entusiasmo.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};


