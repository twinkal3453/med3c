import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUniversityById } from "./specUniversityApiCall";
import { PATH } from "../../backend";
import {
  University_Name,
  Specs,
  Strecture,
  UniversityDiscription,
} from "./universityList";
import Footer from "../footer/footer";
import "./universityName.scss";
import arrow from "../../Assets/arrow.svg";

const University = ({ match }) => {
  const universityId = match.params.universityId;

  const [university, setUniversity] = useState([]);
  const [fees, setFees] = useState([]);

  const fetchUniversityDetails = () => {
    getUniversityById(universityId)
      .then((result) => {
        if (result.error) {
          console.log(result.error);
        } else {
          // setCountryData(result.country);
          setUniversity(result);
          setFees(result.Fees);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUniversityDetails();
  }, []);

  const facultiesData = (data) =>
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

  const feeData = (data) =>
    data.split("_").map((item, index) => (
      <p key={index} className="feeClasses">
        {item}
      </p>
    ));

  return (
    <div className="home">
      <div className="sec">
        <div id="sec1">
          <div className="container_img">
            <img
              className="imoge"
              src={`${PATH}/${university.picture}`}
              alt="imoge"
            />
            <div className="university_name">
              <h1> {university.name} </h1>
            </div>
          </div>
        </div>

        <div id="sec2">
          {/* <img src={illustration} alt="illustration" /> */}
          <div className="container_2">
            <div className="container_div">
              <div className="container_text">
                {Specs.map((item, index) => {
                  return (
                    <div className="specs" key={index}>
                      <p>
                        <span>
                          <img src={item.arrow} alt="arrow" />
                        </span>
                        {item.data}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="line"></div>
              <div className="container_fee">
                <div className="container_main">
                  <div className="container_head">
                    <p>Tution fees also can be paid on half yearly</p>
                    <h3>Fee Stuecture:-</h3>
                  </div>

                  <div className="table_data">
                    {fees && (
                      <>
                        <table>
                          <tr>
                            <th> 1st Year </th>
                            <th>{`2nd to ${university.duration}th Year`}</th>
                            <th>
                              {`Total Course fee (${university.duration} years)`}
                            </th>
                          </tr>
                          <tr>
                            <td>
                              {fees.firstYear ? feeData(fees.firstYear) : ""}
                            </td>
                            <td>
                              {fees.restFess ? feeData(fees.restFess) : ""}
                            </td>
                            <td>
                              {`${fees.totalUSD}`} <br />
                              {`${fees.totalINR}`}
                            </td>
                          </tr>
                        </table>
                      </>
                    )}
                  </div>
                </div>

                <span className="circle"></span>
                <span className="circle1"></span>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div id="sec3">
          <div className="container_1">
            <h2>{university.name}</h2>
            <p> {university.description} </p>

            {university.faculties && (
              <div className="sec4">
                <h5 className="universityHeader">{`${university.name} has the following faculties`}</h5>
                <ul>
                  {university.faculties
                    ? facultiesData(university.faculties)
                    : ""}
                </ul>
              </div>
            )}
            {university.facts && (
              <div className="sec4">
                <h5 className="universityHeader">{`${university.name} has the following facts`}</h5>
                <ul>
                  {university.facts ? facultiesData(university.facts) : ""}
                </ul>
              </div>
            )}
            {university.awards && (
              <div className="sec4">
                <h5 className="universityHeader">{`${university.name} has the following Awards`}</h5>
                <ul>
                  {university.awards ? facultiesData(university.awards) : ""}
                </ul>
              </div>
            )}
            {university.achievements && (
              <div className="sec4">
                <h5 className="universityHeader">{`${university.name} has the following Achievements`}</h5>
                <ul>
                  {university.achievements
                    ? facultiesData(university.achievements)
                    : ""}
                </ul>
              </div>
            )}
            {university.affiliatedBy && (
              <div className="sec4">
                <h5 className="universityHeader">{`${university.name} is AffiliatedBy`}</h5>
                <ul>
                  {university.affiliatedBy
                    ? facultiesData(university.affiliatedBy)
                    : ""}
                </ul>
              </div>
            )}
            {university.recent && (
              <div className="sec4">
                <h5 className="universityHeader">{`Some recent of ${university.name}`}</h5>
                <ul>
                  {university.recent ? facultiesData(university.recent) : ""}
                </ul>
              </div>
            )}
            {university.climate && (
              <div className="sec4">
                <h5 className="universityHeader">{`Climate of ${university.name}`}</h5>
                <ul>
                  {university.climate ? facultiesData(university.climate) : ""}
                </ul>
              </div>
            )}
            {university.figures && (
              <div className="sec4">
                <h5 className="universityHeader">{`Figure of ${university.name}`}</h5>
                <ul>
                  {university.figures ? facultiesData(university.figures) : ""}
                </ul>
              </div>
            )}
            {university.general && (
              <div className="sec4">
                <h5 className="universityHeader">{`General of ${university.name}`}</h5>
                <ul>
                  {university.general ? facultiesData(university.general) : ""}
                </ul>
              </div>
            )}
            {university.nowDays && (
              <div className="sec4">
                <h5 className="universityHeader">{`Nowdays ${university.name}`}</h5>
                <ul>
                  {university.nowDays ? facultiesData(university.nowDays) : ""}
                </ul>
              </div>
            )}
            {university.trainingFields && (
              <div className="sec4">
                <h5 className="universityHeader">{`Training fields of ${university.name}`}</h5>
                <ul>
                  {university.trainingFields
                    ? facultiesData(university.trainingFields)
                    : ""}
                </ul>
              </div>
            )}
            {university.why && (
              <div className="sec4">
                <h5 className="universityHeader">{`Why take admission in ${university.name}`}</h5>
                <ul>{university.why ? facultiesData(university.why) : ""}</ul>
              </div>
            )}
            <div className="container_btn">
              <p>Wanna discuss something, contact us:</p>
              <Link to={"/contact"}>
                <button style={{ height: "3rem" }}>Contact Us</button>
              </Link>
            </div>
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
              <i style={{ color: "#e1306c" }} className="fab fa-instagram"></i>
            </a>
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default University;
