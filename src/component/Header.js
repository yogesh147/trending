import React from 'react';
import '../css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import black from "../images/black.png";
import login from "../images/login-logo.png";
import "../css/custom.css";

export default function Header() {

      return (
            <Container fluid>
                  <Row className="header">
                        <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
                              <img src={login} width={70} height={60} alt="login-logo" />
                              <img src={black} width={50} height={50} alt="black" style={{ float: "right" }} />
                        </Col>
                  </Row>
            </Container>
      );
}
