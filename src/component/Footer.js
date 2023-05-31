import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import '../css/custom.css';

export default function Footer() {

   return (
      <Container fluid className="mt-40">
         <Row className="footer text-center">
            <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               <NavLink to={"/about"} className="footer-link">
                  <span className="pd-4 h6"> About</span>
               </NavLink>
               <span className="pd-4 h6"> | </span>
               <NavLink to={"/contact-us"} className="footer-link">
                  <span className="pd-4 h6"> Contact Us</span>
               </NavLink>
               <span className="pd-4 h6"> | </span>
               <NavLink to={"/privacy"} className="footer-link">
                  <span className="pd-4 h6"> Privacy</span>
               </NavLink>
               <span className="pd-4 h6"> | </span>
               <NavLink to={"/terms-of-services"} className="footer-link">
                  <span className="pd-4 h6"> Terms of Service</span>
               </NavLink>
            </Col>
         </Row>
      </Container>
   );
}
