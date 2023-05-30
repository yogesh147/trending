import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {

   return (
      <Container fluid className="mt-40">
         <Row className="footer text-center">
            <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               <span className="pd-4 h6"> About </span>
               <span className="pd-4 h6"> | </span>
               <span className="pd-4 h6"> Contact Us </span>
               <span className="pd-4 h6"> | </span>
               <span className="pd-4 h6"> Privacy </span>
               <span className="pd-4 h6"> | </span>
               <span className="pd-4 h6"> Terms of Service </span>
            </Col>
         </Row>
      </Container>
   );
}
