import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./menuItem";
import logo from "../../Assets/med3c.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const Nav2 = () => {
  const [expand, setExpand] = useState(false);

  const setNavExpanded = (expanded) => {
    setExpand(expanded);
  };

  const closeNav = () => {
    setExpand(false);
  };

  return (
    <Navbar
      onToggle={setNavExpanded}
      expanded={expand}
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <Container>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Navbar.Brand href="#home">
            <img style={{ height: "90px", width: "200px" }} src={logo} alt="" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav expand className="me-auto">
            {MenuItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  onClick={closeNav}
                  style={{ textDecoration: "none" }}
                  to={item.url}
                >
                  <Nav
                    style={{
                      fontWaight: "bold",
                      color: "blue",
                      margin: "1rem",
                    }}
                  >
                    {item.title}
                  </Nav>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav2;
