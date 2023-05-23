import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Body() {

   const body = {
      borderBottomColor: "#f5f5f52e",
      borderBottomStyle: "ridge",
      height: "144px"
   };

   const col = {
      backgroundColor: "white",
      textAlign: "center",
      fontWeight: "bolder",
      fontSize: "-webkit-xxx-large",
      color: "#000000b5"
   };

   const col2 = {
      backgroundColor: "white",
      textAlign: "center",
      fontWeight: "bolder",
      fontSize: "-webkit-xxx-large",
      color: "#4caf50db",
      borderBottomColor: "#f5f5f52e",
      borderBottomStyle: "ridge"
   };

   return (
      <Container fluid>
         <Row style={body}>
            <Col style={col} sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               Welcome to the
            </Col>
            <Col style={col2} sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               Mobile Store
            </Col>
         </Row>
      </Container>
   );

}