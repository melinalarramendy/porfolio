import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import logo from "../assets/img/logo.png";
import loginMERN from "../assets/img/loginMERN.png";
import porfolio from "../assets/img/porfolio.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projectsMERN = [
      {
        title: "Sistema de logeo",
        description: "Desarrollo de sistema de logeo con autenticación de usuario",
        imgUrl: loginMERN,
        githubUrl:"https://github.com/melinalarramendy/sistema-login"
      },
      {
        title: "Sistema de gestión de tareas",
        description: "Desarrollo de sistema de gestión de tareas con autenticación de usuario",
        imgUrl: logo,
        githubUrl:"https://github.com/melinalarramendy/taskManager"
      },
      {
        title: "Portfolio", 
        description: "Desarrollo y diseño de portfolio personal con React y Bootstrap",
        imgUrl: porfolio,
        githubUrl:"https://github.com/melinalarramendy/porfolio"
      }
    ];
    const projectsP = [
      {
        title: "Sistema de logeo",
        description: "Desarrollo de sistema de logeo con autenticación de usuario",
        imgUrl: logo,
        githubUrl:"https://github.com/melinalarramendy/sistema-login-flask"
      }
    ]
  
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Proyectos</h2>
                  <p>Algunos proyectos que fui desarrollado</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">React & MERN</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">java</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Python</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
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
                      <Tab.Pane eventKey="second">
                        <h2>Proximamente</h2>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
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