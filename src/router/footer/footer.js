import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FooterList, SocialLinks } from "./footerList";
import "./footer.scss";
import { getCountrys } from "./footerApiCall";

const Footer = () => {
  const [countrys, setCountrys] = useState([]);

  // Get all countries
  const preload = () => {
    getCountrys().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCountrys(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <>
      <footer id="footer">
        <div className="container footer_container">
          <div className="footer_links">
            <div className="link">
              <h6>Quick links</h6>
              {FooterList.map((item, index) => {
                return (
                  <div key={index}>
                    <Link className="link_list" to={item.url}>
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="abroad">
              <h6>MBBS Abroad</h6>
              {countrys.map((item, index) => {
                return (
                  <div key={index}>
                    <Link className="link_list2" to={`/country/${item.id}`}>
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="address">
              <h6>Our Contact</h6>
              <div>
                <p className="med">
                  Create Career with Care Med Overseas Educational consultants
                </p>
                <p className="adres">
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  Gf 640, Near Scope Hospital, Niti Khand 1, Indirapuram,
                  Ghaziabad, UP Pincode: 201010
                </p>
              </div>
            </div>
            <div className="contact-us">
              <h6>Contact Us</h6>

              <div className="data">
                <div className="mob">
                  <p>
                    <span>
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    +91-8423365977
                  </p>
                  <p>
                    <span>
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    +380-731703587
                  </p>
                  <p>
                    <span>
                      <i className="far fa-envelope"></i>
                    </span>
                    info@med3c.com <br /> care.medoverseas@gmail.com
                  </p>
                </div>
                <div className="social">
                  <h6>Follow us: </h6>
                  {SocialLinks.map((item, index) => {
                    return (
                      <span className="social_link" key={index}>
                        <a href={item.url} target={"_blank"}>
                          <i className={item.cName}></i>
                        </a>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="company">
        <p>
          &copy; 3C Med overseas All right reserved. | Designed by{" "}
          <span>Hind Corporation </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
