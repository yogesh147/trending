import React from 'react';
import '../css/custom.css';
import privacy from "../images/privacy.avif";
import { Container, Row, Col } from 'react-bootstrap';

export default function Privacy() {
    return (
        <>
            <img src={privacy} className='infoImg' alt="privacy" />

            <Container fluid>
                <Row>
                    <Col sm={12} md={3} lg={3} xl={3} xxl={3} xs={12} >
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6} xs={12} >
                        <div className="footer-text">
                            <p>
                                Mobile Gadgets Store (includes “I”,“us,” “we,” or “our”) is a portfolio of brands and
                                digital platforms (such as mobile and/or TV applications) that connect people with
                                information to help make some of life's most important decisions.
                            </p>
                            <p></p>
                            <p>
                                Our goal is to help more people from more better backgrounds experience and their
                                products accessible easily.
                            </p>
                            <p></p>
                            <p>
                                We believe various tech gadgets open the door to the greatest, most unforgettable
                                experiences life can offer, and we have learned that using these products helps
                                keep us updated every time.
                            </p>
                            <p></p>
                            <p>
                                In short, "I," "us," "we," or "our" never ever use any kind of personal information
                                or data without your consent. Sometimes we use your information only to save or
                                track gadgets that provide a better UI experience and ease. So, don't worry.
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