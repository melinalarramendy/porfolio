import { Container, Row, Col } from "react-bootstrap";
import iconogithub from '../assets/img/icono-github.svg';
import iconogmail from '../assets/img/icono-gmail.svg';
import iconolinkedin from '../assets/img/icono-linkedin.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row">
          <Col xs={12} md="auto">
            <h4>ML</h4>
          </Col>
          <Col xs={12} md="auto" className="mt-2">
            <div className="social-icon">
              <a href="https://github.com/melinalarramendy"><img src={iconogithub} alt="GitHub" /></a>
              <a href="mailto:melinalarramendy@gmail.com?subject=Contacto desde Portfolio&body=Hola,%20me%20interesa%20trabajar%20juntos."><img src={iconogmail} alt="Email" /></a>
              <a href="https://www.linkedin.com/in/melina-larramendy-60340552b"><img src={iconolinkedin} alt="LinkedIn" /></a>
            </div>
          </Col>
          <Col xs={12} md="auto" className="mt-2">
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
