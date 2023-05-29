import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Tooltip from "./Tooltip";
import "./Body.css";
import '../css/custom.css';
import Pixel7a from "../images/Pixel7a.png";
import Pixel7Pro from "../images/Pixel7Pro.png";
import Pixel7 from "../images/Pixel7.png";
import Pixel6a from "../images/Pixel6a.png";

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
         <Row>
            <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               <div className="Body-Col black-color">Welcome to the</div>
            </Col>
            <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               <div className="Body-Col green-color">Mobile Store</div>
            </Col>
         </Row>
         <Row className="pt-3">
            <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               <div className="text-center">
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
               </div>  
            </Col>
         </Row> 

         {isVisible ? (
            <Row className="pt-20">
               <Col sm={12} md={3} lg={3} xl={2} xxl={2} xs={12}>
               </Col>

               <Col sm={12} md={6} lg={6} xl={8} xxl={8} xs={12}  >
                  <Row className="ht-300 mb-50">

                     <Col className="pd-4" sm={12} md={4} lg={4} xl={4} xxl={4} xs={12}>
                        <div className="bg-light-black pd-1">
                           <img src={Pixel7a} className='zoom' alt="Pixel 7a" />
                           <h6 className="text-center">Pixel 7a</h6>
                        </div>
                     </Col>

                     <Col className="pd-4" sm={12} md={4} lg={4} xl={4} xxl={4} xs={12}>
                        <div className="bg-light-black pd-1">
                           <img src={Pixel7Pro} className='zoom' alt="Pixel 7 Pro" />
                           <h6 className="text-center">Pixel 7 Pro</h6>
                        </div>
                     </Col>

                     <Col className="pd-4" sm={12} md={4} lg={4} xl={4} xxl={4} xs={12}>
                        <div className="bg-light-black pd-1">
                           <img src={Pixel7} className='zoom' alt="Pixel 7" />
                           <h6 className="text-center">Pixel 7</h6>
                        </div>
                     </Col>

                  </Row>
               </Col>
               <Col sm={12} md={3} lg={3} xl={2} xxl={2} xs={12}>
               </Col>

            </Row>) : (<Row className="ht-300">

               <Col sm={12} md={4} lg={4} xl={4} xxl={4} xs={12}>
                  <div className="bg-light-black pd-1">
                     <img src={Pixel6a} className='zoom' alt="Pixel 6a" />
                     <h6 className="text-center">Pixel 6a</h6>
                  </div>
               </Col> </Row>)}

      </Container>
   );

}