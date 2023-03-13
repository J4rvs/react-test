import React from 'react';
import Logo from '../Navbar/Logo.png';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col id='footer-text' sm={8}>
                        2023 © All rights reserved.
                    </Col>
                    <Col id='footer-img' className='text-center' sm={4}>
                        <img className='justify-content-center' id='footer-logo' src={ Logo } alt='logo'></img>
                    </Col>
                </Row>
            </Container>
        </footer>
      );
}

export default Footer;