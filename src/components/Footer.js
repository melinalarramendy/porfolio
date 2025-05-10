import { Container, Row, Col } from "react-bootstrap";
import iconogithub from '../assets/img/icono-github.svg';
import iconogmail from '../assets/img/icono-gmail.svg'; 
import iconolinkedin from '../assets/img/icono-linkedin.svg';


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center justify-content-between text-center">
            <Col xs="auto">
              <h4>ML</h4>
            </Col>
            <Col xs="auto">
              <p>Copyright 2025. All Rights Reserved</p>
            </Col>
            <Col xs="auto">
              <div className="social-icon d-flex">
                <a href="https://github.com/melinalarramendy"><img src={iconogithub} alt="GitHub Icon" /></a>
                <a href="mailto:melinalarramendy@gmail.com?subject=Contacto desde Portfolio&body=Hola,%20me%20interesa%20trabajar%20juntos."><img src={iconogmail} alt="Gmail Icon" /></a>
                <a href="https://www.linkedin.con/in/melina-larramendy-60340552b"><img src={iconolinkedin} alt="LinkedIn Icon" /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};
