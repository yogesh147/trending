import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Tooltip from "./Tooltip";
import "./Body.css";
import '../css/custom.css';

import buy from "../images/buy.ico";

import Pixel7a from "../images/Pixel7a.webp";
import Pixel7Pro from "../images/Pixel7Pro.webp";
import Pixel7 from "../images/pixel7.webp";
import Pixel6a from "../images/Pixel6a.webp";
import Pixel7aCase from "../images/Pixel7aCase.webp";
import Iphone14 from "../images/iphone14ProMax.webp";
import VivoT2x from "../images/VivoT2x.webp";
import POCOX55G from "../images/POCOX55G.webp";
import realme10Pro5g from "../images/realme10Pro5g.webp";
import oneplus from "../images/oneplus.webp";
import boat550 from "../images/boat550.webp";

export default function Body() {
   const [isVisible, setVisible] = useState(true);

   const [mobiles] = useState([
      { id: 1, imgName: Pixel7a, imageName: "Pixel7a.webp", name: "Pixel 7a", width: "80%", href: "https://amzn.to/3oFHoea", src: "" },
      { id: 2, imgName: Pixel7Pro, imageName: "Pixel7Pro.webp", name: "Pixel 7 Pro", width: "80%", href: "https://amzn.to/3ON7S7Y", src: "" },
      { id: 3, imgName: Pixel7, imageName: "Pixel7.webp", name: "Pixel 7", width: "80%", href: "https://amzn.to/42ihYkx", src: "" },
      { id: 4, imgName: Pixel6a, imageName: "Pixel6a.webp", name: "Pixel 6a", width: "80%", href: "https://amzn.to/42kC5OZ", src: "" },
      { id: 5, imgName: Iphone14, imageName: "Iphone14ProMax.webp", name: "iPhone 14 Pro Max", width: "80%", href: "https://amzn.to/3WJet5k", src: "" },
      { id: 6, imgName: VivoT2x, imageName: "VivoT2x.webp", name: "Vivo T2x 5g", width: "65%", href: "https://amzn.to/45DAQgH", src: "" },
      { id: 7, imgName: POCOX55G, imageName: "POCOX55G.webp", name: "POCO X5 5G", width: "60%", href: "https://amzn.to/3ONOkAs", src: "" },
      { id: 8, imgName: realme10Pro5g, imageName: "Realme10Pro5g.webp", name: "Realme 10 Pro 5G", width: "70%", href: "https://amzn.to/3N6YJ9a", src: "" },
      { id: 8, imgName: oneplus, imageName: "Oneplus.webp", name: "OnePlus Nord 5G", width: "70%", href: "https://amzn.to/3OPErSY", src: "" }
   ]);

   const [accessories] = useState([
      { id: 101, imgName: Pixel7aCase, imageName: "Pixel7aCase.webp", name: "Pixel 7a Case", width: "80%", href: "https://amzn.to/3OPrd8x", src: "" },
      { id: 102, imgName: boat550, imageName: "Boat550.webp", name: "BoAt Rockerz 550", width: "80%", href: "https://amzn.to/3MCBySI", src: "" }
   ]);

   const mobileToolTip = "Checkout latest mobiles";
   const accessoriesToolTip = "Checkout latest accessories";
   const cart = "Add to Cart";


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
         <Row className="pt-4">
            <Col sm={12} md={12} lg={12} xl={12} xxl={12} xs={12} >
               <div className="text-center">
               <Tooltip content={mobileToolTip} direction="left" className = "Tooltip-Wrapper">
                  <Button variant="outline-primary"
                     className={isVisible ? "Body-selectedBtn" : "Body-unSelectedBtn"}
                     onClick={() => btnToggle("mobiles")} >
                     Mobiles
                  </Button>
               </Tooltip>

               {' '}

               <Tooltip content={accessoriesToolTip} direction="right" className = "Tooltip-Wrapper">
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
                        mobiles.map((item, index) =>
                           <Col key={index} className="pd-4 text-center" sm={12} md={4} lg={4} xl={4} xxl={4} xs={12}>
                              <div className="bg-light-black pd-1 mt-28 mb-4">
                                 <a href={item.href} target="_blank" rel="noreferrer">
                                    <img src={item.imgName} className='zoom' width={item.width} alt={item.name} />
                                 </a>
                                 <h6>{item.name} </h6>
                                 <Tooltip content={cart} direction="bottom" className="display-none">
                                    <a href={item.href} target="_blank" rel="noreferrer">
                                       <img src={buy} className="buy" alt="buy" />
                                    </a>
                                 </Tooltip>

                              </div>
                           </Col>
                        )
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
                           accessories.map((item, index) => (
                              <Col key={index} className="text-center" sm={12} md={4} lg={4} xl={4} xxl={4} xs={12}>
                                 <div className="bg-light-black mt-28 mb-4 pd-1">
                                    <a href={item.href} target="_blank" rel="noreferrer">
                                       <img src={item.imgName} className='zoom' width={item.width} alt={item.name} />
                                    </a>
                                    <h6>{item.name} </h6>
                                    <Tooltip content={cart} direction="bottom" className="display-none">
                                       <a href={item.href} target="_blank" rel="noreferrer">
                                          <img src={buy} className="buy" alt="buy" />
                                       </a>
                                    </Tooltip>

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
