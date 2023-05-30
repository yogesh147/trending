import React from 'react';
import '../css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import black from "../images/black.png";
import logo from "../images/brand-logo.jpg";

export default function Header() {
      const homePage = "http://localhost:3000/";
      return (
            <Container fluid>
                  <Row className="header">
                        <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} className="sticky" >
                              <a href={homePage} target="_self" rel="noreferrer">
                                    <img src={logo} width={70} height={60} alt="brand-logo" />
                                    <img src={black} width={50} height={50} alt="black" style={{ float: "right" }} />
                              </a>
                        </Col>
                  </Row>
            </Container>
      );
}
