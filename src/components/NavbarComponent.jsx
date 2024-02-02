import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Search } from 'react-bootstrap-icons';
import { BellFill } from 'react-bootstrap-icons';


function NavbarNetflix() {
  return (
    <Navbar expand="lg" className="bg-black justify-content-between" data-bs-theme='dark'>
      <Container fluid className='mx-0'>
        <Navbar.Brand href="#" className=''>
          <img src="logo.png" width={90} height={50} alt='logo'
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-between'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Tv Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <Navbar.Text className='me-0'>
          <i className="bi bi-search"></i>
          <Search color="white" size={16} className='me-3' />

          <a className='me-3'>KIDS</a>

          <BellFill color="white" size={16} className='me-3'/>

          <img src="profilepic.jpg" width={20} height={20} alt='logo'
          />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNetflix;