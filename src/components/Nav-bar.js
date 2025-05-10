import { useState, useEffect } from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import iconogithub from '../assets/img/icono-github.svg';
import iconogmail from '../assets/img/icono-gmail.svg'; 
import iconolinkedin from '../assets/img/icono-linkedin.svg';

export const NavBar = () => {
    const [linkActivo, setActivo] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

    const onUpdateActiveLink = (value) => {
        setActivo(value);
    }

    return(
       <Navbar expand="md" className= {`justify-content-between ${scrolled ? "scrolled" : ""}`}>
            <Container fluid>
                <Navbar.Brand href="#home" className="me-5">
                    <p className="text-white">ML</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className={linkActivo === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={linkActivo === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={linkActivo === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                    </Nav>
                    <span className="navbar-text d-flex align-items-center">
                        <div className="social-icon">
                            <a href="https://github.com/melinalarramendy"><img src={iconogithub} alt=""/></a>
                            <a href="mailto:melinalarramendy@gmail.com?subject=Contacto desde Portfolio&body=Hola,%20me%20interesa%20trabajar%20juntos."><img src={iconogmail} alt=""/></a>
                            <a href="https://www.linkedin.con/in/melina-larramendy-60340552b"><img src={iconolinkedin} alt=""/></a>
                        </div>
                        <button href="#connect" className="vvd" onClick={() => window.location.href = '#connect'}><span>Contactame</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
       </Navbar> 
       
    )

}