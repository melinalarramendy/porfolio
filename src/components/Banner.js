import { Container } from "react-bootstrap";
import profileIMG from '../assets/img/sin_fondo_fotoCv.png';
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
              <h2 className="fw-bolder">Melina Larramendy</h2>
              <p className="fw-bold">
                Data Analyst Jr | Técnica en Análisis de Sistemas | Ciencia de Datos</p>
              <hr/>
              <p>Técnica en Análisis de Sistemas y estudiante de Ciencia de Datos, con formación sólida en Python, SQL, análisis exploratorio y ETL básico.</p>
              <p>Experiencia en proyectos prácticos aplicados a análisis, dashboards, scraping y modelos predictivos simples.</p>
              <p>Busco mi primera oportunidad profesional en Data/IT.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};


