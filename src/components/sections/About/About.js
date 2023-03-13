import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';

function About() {
    return (
        <section id='about'>
            <Container fluid>
                <svg width="100vh" height="500px">
                    <rect x='0' y='0' width="32px" height="390px" fill='#DB7093'/>
                </svg>
                <Row>
                    <Col className='about-text' md={{ span: 6, offset: 3}}>
                        <h1>We Help Businesses</h1>
                        <h1 style={{color: '#DB7093'}}>Grow and Innovate</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
}

export default About;