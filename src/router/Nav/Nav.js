import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./menuItem";
import logo from "../../Assets/med3c.png";
import "./Nav.scss";

class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="container NavbarItems">
        <input type="checkbox" id="check" />
        <img className="navbar-logo" src={logo} alt="" />
        <label htmlFor="check" className="checkbox">
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </label>
        <ul
          style={{ zIndex: 1 }}
          className={this.state.clicked ? "nav-menu active" : "nav-menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <Link className={item.cName} to={item.url} key={index}>
                <li>
                  <p>{item.title}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
