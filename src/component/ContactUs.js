import React from 'react';
import '../css/custom.css';
import Contact from "../images/contactUs.avif";
import { Container, Row, Col } from 'react-bootstrap';

export default function ContactUs() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12} md={4} lg={4} xl={4} xxl={4} xs={12} >
                    </Col>
                    <Col sm={12} md={4} lg={4} xl={4} xxl={4} xs={12} >
                        <img src={Contact} className='infoImg' alt="AboutUs" />
                    </Col>
                    <Col sm={12} md={4} lg={4} xl={4} xxl={4} xs={12} >
                    </Col>
                </Row>
            </Container>
        </>
    );
}