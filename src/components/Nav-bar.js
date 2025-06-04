import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import iconogithub from '../assets/img/icono-github.svg';
import iconogmail from '../assets/img/icono-gmail.svg';
import iconolinkedin from '../assets/img/icono-linkedin.svg';

export const NavBar = () => {
    const [linkActivo, setActivo] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
        updateTheme(prefersDark);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const updateTheme = (isDark) => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    };

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        updateTheme(newMode);
        localStorage.setItem('darkMode', newMode);
    };

    const onUpdateActiveLink = (value) => {
        setActivo(value);
    };

    return (
        <Navbar expand="md" className={`justify-content-between ${scrolled ? "scrolled" : ""}`}>
            <Container fluid>
                <Navbar.Brand href="#home" className="me-5">
                    <h4>ML</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className={linkActivo === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={linkActivo === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={linkActivo === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                    </Nav>
                    <span className="navbar-text d-flex align-items-center">
                        <Form.Check
                            type="switch"
                            id="theme-switch"
                            label={darkMode ? '🌙' : '☀️'}
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            className="me-3"
                        />
                        <div className="social-icon">
                            <a href="https://github.com/melinalarramendy"><img src={iconogithub} alt="GitHub" /></a>
                            <a href="mailto:melinalarramendy@gmail.com?subject=Contacto desde Portfolio&body=Hola,%20me%20interesa%20trabajar%20juntos."><img src={iconogmail} alt="Email" /></a>
                            <a href="https://www.linkedin.com/in/melina-larramendy-60340552b"><img src={iconolinkedin} alt="LinkedIn" /></a>
                        </div>
                        <button href="#connect" className="vvd" onClick={() => window.location.href = '#connect'}><span>Contactame</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};