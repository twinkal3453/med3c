import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../../backend";
import {
  Home,
  Universities,
  Package,
  Documents,
  Image,
  Image2,
  Services,
  Members,
} from "./CountryUniversityList";
import arrow from "../../../Assets/arrow.svg";
import "./countryName.scss";
import Footer from "../../footer/footer";
import { getUniversities } from "./universityApiCall";

function CountryName({ match }) {
  const countryId = match.params.countryId;

  const [countryData, setCountryData] = useState([]);
  const [university, setUniversity] = useState([]);

  const fetchCountryDetails = () => {
    getUniversities(countryId)
      .then((result) => {
        if (result.error) {
          console.log(result.error);
        } else {
          setCountryData(result.country);
          setUniversity(result.universities);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCountryDetails();
  }, [countryId]);

  const packageData = (data) =>
    data.split("_").map((item, index) => (
      <li key={index}>
        <p className="packageClass">
          <span>
            <img className="arrow" src={arrow} alt="" />
          </span>
          {item}
        </p>
      </li>
    ));

  return (
    <div className="home">
      <div className="res">
        {countryData ? (
          <div className="sec1">
            <div className="sec1_main">
              <img
                src={`${PATH}/${countryData.picture}`}
                alt=""
                className="imoge"
              />
            </div>
            <div className="name_container">
              <div className="heading">
                <h1> {countryData.name} </h1>
              </div>
              <button className="btn_arrow">
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="sec2">
          <div className="name">
            <div className="name_text">
              <h2>UNIVERSITIES</h2>
              <div className="line"></div>
            </div>
          </div>

          <div id="container">
            <div className="container_grid">
              {university
                ? university.map((item, index) => {
                    return (
                      <div className="card_text" key={index}>
                        <div className=".container_pic image_container">
                          <img
                            className="imoge"
                            src={`${PATH}/${item.picture}`}
                            alt="imoge"
                          />
                        </div>
                        <div className="container_data">
                          <h3> {item.name} </h3>
                          <div className="table">
                            {item.Fees && (
                              <>
                                <table>
                                  <thead>
                                    <tr>
                                      <th>1st Year</th>
                                      <th>
                                        2nd to <br />
                                        {`${item.duration}th Years`}
                                      </th>
                                      <th>
                                        Total Course
                                        <br /> fee({`${item.duration} Years`})
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        {`${item.Fees.firstYear.split("_")[0]}`}
                                        <br />
                                        {`${item.Fees.firstYear.split("_")[1]}`}
                                      </td>
                                      <td>
                                        {`${item.Fees.restFess.split("_")[0]}`}
                                        <br />
                                        {`${item.Fees.restFess.split("_")[1]}`}
                                      </td>
                                      <td>
                                        {`${item.Fees.totalUSD}`}
                                        <br />
                                        {`${item.Fees.totalINR}`}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="calculator">
                                  *note - We have calculated current Dollar
                                  Rate.
                                </p>
                              </>
                            )}

                            <Link
                              className="link_button"
                              to={
                                item.Fees
                                  ? `/country/${countryId}/${item.id}`
                                  : `/country/${countryId}`
                              }
                            >
                              <button className="btn_submit">Read more</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        {countryData.firstYearPackage
          ? countryData.firstYearPackage &&
            countryData.documents && (
              <div className="sec3">
                <div className="container_0">
                  <div className="containers container_1">
                    <h3>1st Year package includes...</h3>
                    <div className="package">
                      <ul>
                        {countryData.firstYearPackage
                          ? packageData(countryData.firstYearPackage)
                          : ""}
                      </ul>
                    </div>
                  </div>
                  <div className="containers container_2">
                    <h3>Required documents for registration</h3>
                    <div className="documents">
                      <ul>
                        {countryData.documents
                          ? packageData(countryData.documents)
                          : ""}
                      </ul>
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th>ELIGIBILITY</th>
                          <th>DURATION</th>
                          <th>INTAKE</th>
                          <th>HOLIDAYS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> {countryData.eligibility} </td>
                          <td>{`${countryData.duration} Years`}</td>
                          <td>{countryData.intake}</td>
                          <td>{countryData.holydays}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="containers container_3">
                    {Image.map((item, index) => {
                      return (
                        <div className="tag_image" key={index}>
                          <img className="imoge" src={item.image} alt="imoge" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )
          : ""}
        {countryData.ourServices
          ? countryData.ourServices &&
            countryData.memberOf && (
              <div className="sec4">
                <div className="container_1">
                  <div className="container_main">
                    <div className="container_image">
                      {Image2.map((item, index) => {
                        return (
                          <img
                            key={index}
                            src={item.image}
                            alt="imoge"
                            className="imoge"
                          />
                        );
                      })}
                    </div>

                    <div className="container_text">
                      <div className="services">
                        <h3>*Our Services:-</h3>

                        <div className="services_list">
                          <ul>
                            {countryData.ourServices
                              ? packageData(countryData.ourServices)
                              : ""}
                          </ul>
                        </div>
                      </div>
                      <div className="members">
                        <h3>
                          *All of the colleges are Members of the following
                          International organizations.
                        </h3>
                        <div className="members_list">
                          <ul>
                            {countryData.memberOf
                              ? packageData(countryData.memberOf)
                              : ""}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          : ""}
        {countryData.whyStudy
          ? countryData.whyStudy && (
              <div className="sec5">
                <div className="studyContainer">
                  <h2 className="whyStudyHeader">{`Why Study MBBS in ${countryData.name}`}</h2>
                  {countryData.whyStudy
                    ? packageData(countryData.whyStudy)
                    : ""}
                </div>
              </div>
            )
          : ""}
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
              <i style={{ color: "#e1306c" }} className="fab fa-instagram"></i>
            </a>
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CountryName;
