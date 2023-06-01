import React from 'react';
import '../css/custom.css';
import term from "../images/terms.avif";
import { Container, Row, Col } from 'react-bootstrap';

export default function TermsOfService() {
    return (
        <>
            <img src={term} className='infoImg' alt="TermsOfService" />

            <Container fluid>
                <Row>
                    <Col sm={12} md={3} lg={3} xl={3} xxl={3} xs={12} >
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6} xs={12} >
                        <div className="footer-text">
                            <p>
                                By using any website owned and operated by Mobile gadgets store,('the site/s') you
                                agree to be bound by these terms.
                            </p>
                            <p></p>
                            <p>
                                No commercial use of sites is permitted. You may use the sites for personal,
                                non-commercial purposes only.
                            </p>
                            <p></p>
                            <p>
                                If you are under the age of 18 you need your parents permission before using the
                                sites or registering.
                            </p>
                            <p></p>
                            <p>
                                You may not copy, store, scrape or use any part of our site without permission.
                            </p>
                            <p></p>
                            <p>
                                Our trade marks may not be used in any way or for any purpose without our
                                permission.
                            </p>
                            <p></p>
                            <p>
                                We may remove your content from the sites in our discretion.
                            </p>
                            <p></p>
                            <p>
                                We may terminate or suspend your registration (and any future accounts) if you
                                have breached these terms multiple times or if the breach is serious.
                            </p>

                            <p></p>
                            <p>
                                Your all personal data are safe and cannot be used in any other illegal ways.
                            </p>
                            <p></p>
                            <p>
                                If you find any wrong or abusive content, then please contact us by email at
                                <b> yogesh.ch0udhary@yahoo.com</b> on a prior basis.
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3} xl={3} xxl={3} xs={12} >
                    </Col>
                </Row>
            </Container>
        </>
    );
}
