import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

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

   const selectedBtn = {
      backgroundColor: "#1a73e8",
      color: "white"
   };

   const unSelectedBtn = {
      backgroundColor: "white",
      color: "#1a73e8"
   };

   const [isVisible, setVisible] = useState(true);

   const btnToggle = (type) => {
      if ((type === "mobiles") && isVisible) return;
      if ((type === "accessories") && !isVisible) return;
      setVisible((current) => !current);
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

         <Row>
            <Col style={col} sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >

                  <Button variant="outline-primary"  overlaytrigger="true" 
                     style={isVisible ? selectedBtn : unSelectedBtn}
                     onClick={() => btnToggle("mobiles")} >
                     Mobiles
                  </Button>

               {' '}
               <Button variant="outline-primary"
                  style={!isVisible ? selectedBtn : unSelectedBtn}
                  onClick={() => btnToggle("accessories")} >
                  Accessories
               </Button>

            </Col>
         </Row>

      </Container>
   );


}