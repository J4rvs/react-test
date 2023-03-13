import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Logo from './Logo.png';

function NavBar() {
  return (
    <Navbar className='NavBar' fixed="top" expand="lg">
      <Container fluid>
        <img src={Logo} alt='logo'></img>
        <Navbar.Brand href="#"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='NavLink' href="#home">Home</Nav.Link>
            <Nav.Link className='NavLink' href="#about">About</Nav.Link>
            <Nav.Link className='NavLink' href="#products">Products</Nav.Link>
            <Nav.Link className='NavLink' href="#services">Services</Nav.Link>
            <Nav.Link className='NavLink' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;