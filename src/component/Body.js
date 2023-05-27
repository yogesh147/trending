import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Tooltip from "./Tooltip";
import "./Body.css";

export default function Body() {
   const [isVisible, setVisible] = useState(true);

   const mobileToolTip = "Checkout latest mobiles";
   const accessoriesToolTip = "Checkout latest accessories";

   const btnToggle = (type) => {
      if ((type === "mobiles") && isVisible) return;
      if ((type === "accessories") && !isVisible) return;
      setVisible((current) => !current);
   };

   return (
      <Container fluid>

         <Row className="Body-Block">
            <Col className="Body-Col" sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               Welcome to the
            </Col>
            <Col className="Body-Col2" sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               Mobile Store
            </Col>
         </Row>

         <Row>
            <Col className="Body-Col" sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
              
               <Tooltip content={mobileToolTip} direction="left">
                  <Button variant="outline-primary"
                     className={isVisible ? "Body-selectedBtn" : "Body-unSelectedBtn"}
                     onClick={() => btnToggle("mobiles")} >
                     Mobiles
                  </Button>
               </Tooltip>

               {' '}

               <Tooltip content={accessoriesToolTip} direction="right">
                  <Button variant="outline-primary"
                     className={!isVisible ? "Body-selectedBtn" : "Body-unSelectedBtn"}
                     onClick={() => btnToggle("accessories")} >
                     Accessories
                  </Button>

               </Tooltip>
            </Col>
         </Row>
      </Container>
   );

}