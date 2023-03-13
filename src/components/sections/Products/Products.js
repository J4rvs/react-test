import React from 'react';
import Logo from '../Navbar/Logo.png';
import './Products.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Products() {
  return (
    <section id="products">
      <div id="products-image">
        <div id="products-text">
          <h6>Sed ut perspiciatis</h6>
          <h2>Nemo Enim</h2>
          <br></br>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
      </div>
    </section>
  );
}

export default Products;