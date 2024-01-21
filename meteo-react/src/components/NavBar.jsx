import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function BrandExample() {
  return (
    <>
      
      <Navbar className="bg-body-light testo">
        <Container>
          <Navbar.Brand className='d-flex align-items-center text-white '>
          <Link to="/" className="nav-link"> <img
              alt=""
              src="./sole.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            /></Link>
           
            METEO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className="nav-link text-white">HomePage</Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;