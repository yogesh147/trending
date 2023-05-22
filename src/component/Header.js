import React from 'react';
import '../css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../images/brand-logo.jpg";

export default function Header() {

      const header = {
            borderBottomColor: "#f5f5f52e",
            borderBottomStyle: "ridge",
            height: "61px"
      };

      return (
            <Container fluid>
                  <Row style={header}>
                        <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
                              <img src={logo} width={60} height={60} alt="brand-logo" />
                        </Col>
                  </Row>
            </Container>
      );

}
