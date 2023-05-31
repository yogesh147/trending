import React from 'react';
import '../css/custom.css';
import AboutUS from "../images/AboutUs.avif";
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    return (
        <>
            <img src={AboutUS} className='infoImg' alt="AboutUs" />

            <Container fluid>
                <Row>
                    <Col sm={12} md={3} lg={3} xl={3} xxl={3} xs={12} >
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6} xs={12} >
                        <div className="footer-text">
                            <p>
                                We believe that technology is for everyone. It helps us learn about ourselves and
                                the world around us.
                            </p>
                            <p></p>
                            <p>
                                Our goal is to help more people from more backgrounds experience the joy of
                                exploration. We believe this builds a kinder, more inclusive, and more open-minded
                                world.
                            </p>
                            <p></p>
                            <p>
                                We believe various tech gadgets open the door to the greatest, most unforgettable
                                experiences life can offer, and we have learned that using these products helps
                                keep us updated every time.
                            </p>
                            <p></p>
                            <p>
                                We think all you guys use these tech gadgets in a legitimate way so that there is
                                no loss of living and non-living things.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3} xl={3} xxl={3} xs={12} >
                    </Col>
                </Row>
            </Container>
        </>
    );
}