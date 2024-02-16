import { Navbar, Nav, NavItem, FormControl, Button } from "react-bootstrap";
import Logo from "../assets/imgs/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  return (
    <Navbar
      expand="md"
      fixed="left"
      className="justify-content-between"
      id="sidebar"
    >
      <div className="container flex-column align-items-start">
        <Navbar.Brand href="index.html">
          <img src={Logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="navbar-nav">
            <ul>
              <NavItem>
                <Nav.Link
                  href="#"
                  className="nav-item nav-link d-flex align-items-center"
                >
                  <i className="bi bi-house-door-fill"></i>
                  &nbsp; Home
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link
                  href="#"
                  className="nav-item nav-link d-flex align-items-center"
                >
                  <i className="bi bi-book-fill"></i>
                  &nbsp; Your Library
                </Nav.Link>
              </NavItem>
              <NavItem>
                <div className="input-group mt-3">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="h-100"
                    >
                      GO
                    </Button>
                  </div>
                </div>
              </NavItem>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="nav-btn">
        <Button variant="primary" className="signup-btn" type="button">
          Sign Up
        </Button>
        <Button variant="primary" className="login-btn" type="button">
          Login
        </Button>
        <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
      </div>
    </Navbar>
  );
};

export default Sidebar;