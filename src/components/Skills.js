import Carousel from 'react-multi-carousel';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-multi-carousel/lib/styles.css';
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Adquirí mis habilidades técnicas durante mi formación, donde desarrollé una base de programación y tecnologías.<br></br>Complementé mi formación mediante el programa Codo a Codo 4.0, donde me especialicé en desarrollo web full stack con tecnologías del mercado.</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                                containerClass="mx-md-5 px-md-4"
                                arrows
                            >
                                <div className="item">
                                    <div style={{
                                        width: '100px',
                                        margin: '0 auto 15px'
                                    }}>
                                        <CircularProgressbar
                                            value={60}
                                            styles={{
                                                path: { stroke: 'var(--primary)' },
                                                trail: { stroke: 'var(--outline)' },
                                                text: {
                                                    fill: 'var(--on-background)',
                                                    fontSize: '16px',
                                                    fontWeight: 'bold'
                                                },
                                                root: { display: 'block' }
                                            }}
                                        />
                                    </div>
                                    <h5 className='mt-2'>Bases de datos</h5>
                                    <p>PosgreSQL, MongoBD</p>
                                </div>
                                <div className="item">
                                    <div style={{
                                        width: '100px',
                                        margin: '0 auto 15px'
                                    }}>
                                        <CircularProgressbar
                                            value={50}
                                            styles={{
                                                path: { stroke: 'var(--primary)' },
                                                trail: { stroke: 'var(--outline)' },
                                                text: {
                                                    fill: 'var(--on-background)',
                                                    fontSize: '16px',
                                                    fontWeight: 'bold'
                                                },
                                                root: { display: 'block' }
                                            }}
                                        />
                                    </div>
                                    <h5>Java</h5>
                                    <p>Spring Boot</p>
                                </div>
                                <div className="item">
                                    <div style={{
                                        width: '100px',
                                        margin: '0 auto 15px'
                                    }}>
                                        <CircularProgressbar
                                            value={60}
                                            styles={{
                                                path: { stroke: 'var(--primary)' },
                                                trail: { stroke: 'var(--outline)' },
                                                text: {
                                                    fill: 'var(--on-background)',
                                                    fontSize: '16px',
                                                    fontWeight: 'bold'
                                                },
                                                root: { display: 'block' }
                                            }}
                                        />
                                    </div>
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <div style={{
                                        width: '100px',
                                        margin: '0 auto 15px'
                                    }}>
                                        <CircularProgressbar
                                            value={65}
                                            styles={{
                                                path: { stroke: 'var(--primary)' },
                                                trail: { stroke: 'var(--outline)' },
                                                text: {
                                                    fill: 'var(--on-background)',
                                                    fontSize: '16px',
                                                    fontWeight: 'bold'
                                                },
                                                root: { display: 'block' }
                                            }}
                                        />
                                    </div>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <div style={{
                                        width: '100px',
                                        margin: '0 auto 15px'
                                    }}>
                                        <CircularProgressbar
                                            value={55}
                                            styles={{
                                                path: { stroke: 'var(--primary)' },
                                                trail: { stroke: 'var(--outline)' },
                                                text: {
                                                    fill: 'var(--on-background)',
                                                    fontSize: '16px',
                                                    fontWeight: 'bold'
                                                },
                                                root: { display: 'block' }
                                            }}
                                        />
                                    </div>
                                    <h5>Python</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}