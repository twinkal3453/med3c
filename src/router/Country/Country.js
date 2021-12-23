import React, { useState, useEffect } from "react";
import { getCountrys } from "./countryApiCall";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import arrow from "../../Assets/arrow.svg";
import illustration from "../../Assets/illustration.svg";
import { PATH } from "../../backend";
// import { CountryList } from "./countryName";
// import "./Country.scss";
import "./Country1.scss";

const Country = () => {
  const [countrys, setCountrys] = useState([]);
  // console.log(countrys);

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
    <div className="country">
      <div className="res">
        {/* this is for content that is writter below */}
        <div className="abs">
          <div className="main">
            <div className="card1">
              <h2 className="heading">
                Our featured <br /> countries are here...
              </h2>
              <i className="fas fa-arrow-right"></i>
            </div>

            {countrys
              ? countrys.map((item, index) => {
                  return (
                    <div className={`card1${index + 1}`} key={index}>
                      <div className="pic">
                        <img
                          className="imoge"
                          src={`${PATH}/${item.picture}`}
                          alt=""
                        />
                        <div className="name">
                          <h2 className="text"> {item.name} </h2>
                        </div>
                      </div>

                      <div className="content">
                        <p> {item.description} </p>
                        <div className="box">
                          <div className="data">
                            <p>Capital:-</p>
                            <p> {item.capital} </p>
                          </div>
                          <div
                            style={{ background: "rgb(205, 249, 255)" }}
                            className="data1"
                          >
                            <p>Currency:-</p>
                            <p> {item.currency} </p>
                          </div>
                          <div className="data1">
                            <p>Calling code:-</p>
                            <p> {item.countryCode} </p>
                          </div>
                          <div
                            style={{ background: "rgb(205, 249, 255)" }}
                            className="data1"
                          >
                            <p>Time:-</p>
                            <p> {item.timeZone} </p>
                          </div>
                          <div className="data1">
                            <p>Religion:-</p>
                            <p> {item.religion} </p>
                          </div>
                          <div
                            style={{ background: "rgb(205, 249, 255)" }}
                            className="data1"
                          >
                            <p>Language:-</p>
                            <p> {item.language} </p>
                          </div>
                          <div className="data1">
                            <p>Living:-</p>
                            <p> {item.living} </p>
                          </div>
                        </div>
                        {/* button */}
                        <Link
                          className="link_button"
                          to={`/country/${item.id}`}
                        >
                          <button className="read_btn">Read more</button>
                        </Link>
                      </div>
                    </div>
                  );
                })
              : ""}

            <div className="card8">
              <h2 className="heading">
                Our featured <br /> countries are here...
              </h2>
              <button className="button">
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="stick_whatsapp">
            <span className="social_links">
              <a href="https://wa.me/380731703587" target="_blank">
                <i style={{ color: "#25d366" }} className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.facebook.com/care.medoverseas/"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/care.medoverseas/?igshid=13p022ntxugk8"
                target="_blank"
              >
                <i
                  style={{ color: "#e1306c" }}
                  className="fab fa-instagram"
                ></i>
              </a>
            </span>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Country;
