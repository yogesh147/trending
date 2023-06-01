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
import Pixel7aCase from "../images/Pixel7aCase.png";
import Iphone14 from "../images/iphone14ProMax.png";
import VivoT2x from "../images/VivoT2x.png";
import POCOX55G from "../images/POCOX55G.png";
import realme10Pro5g from "../images/realme10Pro5g.png";
import oneplus from "../images/oneplus.png";
import boat550 from "../images/boat550.png";


export default function Body() {
   const [isVisible, setVisible] = useState(true);

   const mobileToolTip = "Checkout latest mobiles";
   const accessoriesToolTip = "Checkout latest accessories";

   const btnToggle = (type) => {
      if ((type === "mobiles") && isVisible) return;
      if ((type === "accessories") && !isVisible) return;
      setVisible((current) => !current);
   };

   const mobiles = [
      { id: 1, imgName: Pixel7a, name: "Pixel 7a", width: "80%", href: "https://amzn.to/3oFHoea" },
      { id: 2, imgName: Pixel7Pro, name: "Pixel 7 Pro", width: "80%", href: "https://amzn.to/3ON7S7Y" },
      { id: 3, imgName: Pixel7, name: "Pixel 7", width: "80%", href: "https://amzn.to/42ihYkx" },
      { id: 4, imgName: Pixel6a, name: "Pixel 6a", width: "80%", href: "https://amzn.to/42kC5OZ" },
      { id: 5, imgName: Iphone14, name: "iPhone 14 Pro Max", width: "80%", href: "https://amzn.to/3WJet5k" },
      { id: 6, imgName: VivoT2x, name: "Vivo T2x 5g", width: "65%", href: "https://amzn.to/45DAQgH" },
      { id: 7, imgName: POCOX55G, name: "POCO X5 5G", width: "60%", href: "https://amzn.to/3ONOkAs" },
      { id: 8, imgName: realme10Pro5g, name: "Realme 10 Pro 5G", width: "70%", href: "https://amzn.to/3N6YJ9a" },
      { id: 8, imgName: oneplus, name: "OnePlus Nord CE 3 Lite 5G", width: "70%", href: "https://amzn.to/3OPErSY" }


   ];

   const accessories = [
      { id: 1, imgName: Pixel7aCase, name: "Pixel 7a Case", width: "80%", href: "https://amzn.to/3OPrd8x" },
      { id: 2, imgName: boat550, name: "BoAt Rockerz 550", width: "80%", href: "https://amzn.to/3MCBySI" }
   ];

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
         <Row className="pt-4">
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
                  <Row>
                     {
                        mobiles.map(item => (
                           <Col key={item.id} className="pd-4 text-center" sm={12} md={4} lg={4} xl={4} xxl={4} xs={12}>
                              <div className="bg-light-black pd-1 mt-28 mb-4">
                                 <a href={item.href} target="_blank" rel="noreferrer">
                                    <img src={item.imgName} className='zoom' width = {item.width} alt={item.name} />
                                 </a>
                                 <h6>{item.name}</h6>
                              </div>
                           </Col>
                        ))
                     }
                  </Row>
               </Col>

               <Col sm={12} md={3} lg={3} xl={2} xxl={2} xs={12}>
               </Col>

            </Row>
         
            ) : (
               <Row className="pt-20">

                  <Col sm={12} md={3} lg={3} xl={2} xxl={2} xs={12}>
                  </Col>

                  <Col sm={12} md={6} lg={6} xl={8} xxl={8} xs={12}  >
                     <Row className="ht-300 mb-50">
                        {
                           accessories.map(item => (
                              <Col key={item.id} className="text-center" sm={12} md={4} lg={4} xl={4} xxl={4} xs={12}>
                                 <div className="bg-light-black mt-28 mb-4 pd-1">
                                    <a href={item.href} target="_blank" rel="noreferrer">
                                    <img src={item.imgName} className='zoom' width = {item.width} alt={item.name} />
                                    </a>
                                    <h6>{item.name}</h6>
                                 </div>
                              </Col>
                           ))
                        }
                     </Row>
                  </Col>

                  <Col sm={12} md={3} lg={3} xl={2} xxl={2} xs={12}>
                  </Col>

               </Row>
         )}

      </Container>
   );

}