import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import logo from "../assets/img/logo.png";
import loginMERN from "../assets/img/loginMERN.png";
import porfolio from "../assets/img/porfolio.png";
import loginflask from "../assets/img/login-flask.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsMERN = [
    {
      title: "Sistema de logeo",
      description: "Aplicación MERN para autenticación de usuarios con registro, inicio de sesión, encriptación de contraseñas (bcrypt) y generación de tokens JWT. Incluye pruebas con Postman y diseño responsivo con Bootstrap.",
      imgUrl: loginMERN,
      githubUrl: "https://github.com/melinalarramendy/sistema-login"
    },
    {
      title: "Sistema de gestión de tareas",
      description: "Plataforma fullstack para gestionar tareas con CRUD completo, autenticación de usuarios mediante JWT, alertas personalizadas con SweetAlert2 y notificaciones por email utilizando Nodemailer y Mailtrap. Tambien te permite agregar amigos y compartir tableros con roles.",
      imgUrl: logo,
      githubUrl: "https://github.com/melinalarramendy/taskManager"
    }
  ];

  const ReactP = [
    {
      title: "Portfolio",
      description: "Sitio web personal diseñado y desarrollado con React y Bootstrap para mostrar proyectos, habilidades y contacto. Diseño responsive y enfoque moderno.",
      imgUrl: porfolio,
      githubUrl: "https://github.com/melinalarramendy/porfolio"
    }
  ];

  const projectsP = [
    {
      title: "EDA + Dashboard - Global AI Adoption Analysis",
      description: "Análisis completo de extremo a extremo de los patrones de adopción de herramientas de IA en empresas globales. Este proyecto muestra el flujo de trabajo completo de la ciencia de datos, desde la limpieza de datos hasta la generación de conocimientos.",
      imgUrl: logo,
      githubUrl: "https://github.com/melinalarramendy/ai-adoption-global-analysis"
    },
    {
      title: "Modelo Predictivo (ML básico) - Customer Churn Prediction (Telecom)",
      description: "Predicción de abandono de clientes (churn) en una compañía de telecomunicaciones utilizando técnicas de Machine Learning.",
      imgUrl: logo,
      githubUrl: "https://github.com/melinalarramendy/proyecto-churn-telecom"
    },
    {
      title: "Sistema de logeo (Flask)",
      description: "Aplicación web con Flask para autenticación de usuarios. Implementa registro, login seguro con hash de contraseñas y autenticación con JWT. Backend en Python y frontend con React.",
      imgUrl: loginflask,
      githubUrl: "https://github.com/melinalarramendy/sistema-login-flask"
    },
    {
      title: "Tienda E-commerce genérica",
      description: "Desarrollo de una tienda online genérica con backend en Flask y frontend en React. Permite navegación por productos, autenticación, manejo de usuarios y estructura escalable para múltiples rubros.",
      imgUrl: logo,
      githubUrl: "https://github.com/melinalarramendy/tiendaGenerica"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p>Algunos proyectos que fui desarrollado</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Python</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">MERN</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">React</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projectsP.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                        {
                            projectsMERN.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            ReactP.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}