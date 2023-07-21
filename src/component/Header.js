import React from 'react';
import '../css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import black from "../images/black.ico";
import logo from "../images/favicon.ico";


export default function Header() {
      return (
            <Container fluid>
                  <Row className="header">
                        <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} className="sticky" >
                              <a href="/home" target="_self" rel="noreferrer">
                                    <img src={logo} width={40} height={40} alt="brand-logo" />
                                    <img src={black} width={50} height={50} alt="black" style={{ float: "right" }} />
                              </a>
                        </Col>
                  </Row>
            </Container>
      );
}
