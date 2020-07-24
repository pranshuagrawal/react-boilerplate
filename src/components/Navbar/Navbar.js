import React, {useState} from "react";
// import { useDispatch } from "react-redux";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LoginPopover from "../LoginPopover";

export default function Navbar2() {
  // const dispatch = useDispatch();

  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <LoginPopover showLogin={showLogin}
      setShowLogin={setShowLogin} />
    </>
  );
}
