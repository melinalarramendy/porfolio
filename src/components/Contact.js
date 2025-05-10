import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

    const formInitialDetails = {
        name: '',
        lastName: '',
        email: '',
        cel: '',
        mensaje: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Enviando...");

        const formData = new FormData(e.target);
        formData.append("_replyto", formDetails.email);

        try {
            const response = await fetch("https://formspree.io/f/mwpoqwzj", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus({ success: true, message: '¡Mensaje enviado!' });
                setFormDetails(formInitialDetails);
            } else {
                throw new Error('Error al enviar');
            }
        } catch (error) {
            setStatus({ success: false, message: 'Error al enviar el mensaje' });
        } finally {
            setButtonText("Enviar");
        }
    };

    return (
        <section className="contact" id="connect">
            <Container className="min-vh-75 d-flex align-items-center justify-content-center">
                <Row className="justify-content-center w-100">
                    <Col xs={12} md={8} lg={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2 className="text-center mb-4">Estemos en contacto</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.name} placeholder="Nombre" onChange={(e) => onFormUpdate('name', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" value={formDetails.cel} placeholder="Celular" onChange={(e) => onFormUpdate('cel', e.target.value)} />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" value={formDetails.mensaje} placeholder="Mensaje" onChange={(e) => onFormUpdate('mensaje', e.target.value)}></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                            {
                                                status.mensaje &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.mensaje}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}