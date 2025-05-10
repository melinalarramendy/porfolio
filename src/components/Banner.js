import { useState, useEffect, useCallback } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import bannerIMG from '../assets/img/bannerIMG.png';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["Técnica superior en análisis de sistemas", "Desarrolladora"];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenido/a a mi portfolio</span>
                  <h1>{`Hola! Soy Melina`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Técnica superior en análisis de sistemas", "Desarrolladora"]'><span className="wrap">{text}</span></span></h1>
                  <p></p>
                  <button onClick={() => window.location.href = '#connect'}>
                    Conectemos! <ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={bannerIMG} alt="Mi imagen" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )

}


