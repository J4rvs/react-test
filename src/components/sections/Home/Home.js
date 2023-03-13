import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import C1 from './carousel-image1.jpg';
import C2 from './carousel-image2.jpg';
import C3 from './carousel-image3.jpg';
import './home.css';

function Home() {
    return (
    <header id='home' className=''>
        <div className='text-carousel'>
            <h1>Sed ut perspiciatis</h1>
            <h1>unde omnis iste natus</h1>
            <br />
            <h6>Sed ut perspiciatis unde omnis iste natus error</h6>
            <h6>sit voluptatem accusantium doloremque.</h6>
            <br />
            <Button id='home-read-more'>Read more</Button>
        </div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 img-carousel"
                src={C1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-carousel"
                src={C2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-carousel"
                src={C3}
                alt="Third slide"
                />
            </Carousel.Item>
            
        </Carousel>
    </header>
    );
}

export default Home;