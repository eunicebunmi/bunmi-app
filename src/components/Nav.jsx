
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Register from '../pages/Register';
// import Login from '../pages/Login';
// import Blogs from "../Hooks/FetchData"
function Bolt () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          < Nav className="me-auto">
      <Nav.Link>
      <NavLink to="/" style={{textDecoration: "none"}}>
              Home
              </NavLink>
      </Nav.Link>
              
            <Nav.Link>
            <NavLink to="/about" style={{textDecoration: "none"}}>
              About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/product" style={{textDecoration: "none"}}>
            Product
              </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/register" style={{textDecoration: "none"}}>
            Register
              </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/login" style={{textDecoration: "none"}}>
            Login
              </NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/blogs" style={{textDecoration: "none"}}>
            Blogs
              </NavLink>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bolt;