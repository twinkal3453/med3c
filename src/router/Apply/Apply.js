import React, { useState } from "react";
import { createApply } from "./applyApiCall";
import Footer from "../footer/footer";
import applySvg from "../../Assets/apply.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA } from "../../backend";
import "./Apply.scss";

const Apply = () => {
  const [apply, setApply] = useState({
    name: "",
    passportNo: "",
    universityApplyFor: "",
    courseApplyFor: "",
    contact: "",
    email: "",
    sending: false,
  });
  const {
    name,
    passportNo,
    universityApplyFor,
    courseApplyFor,
    contact,
    email,
    sending,
  } = apply;

  const [variefy, setVariefy] = useState({
    isVariefied: false,
  });
  const { isVariefied } = variefy;

  const onSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      alert("Name must be filled");
    } else if (passportNo === "") {
      alert("Passport must be filled");
    } else if (universityApplyFor === "") {
      alert("University must be filled");
    } else if (courseApplyFor === "") {
      alert("Course must be filled");
    } else if (contact === "") {
      alert("Contact must be filled");
    } else if (email === "") {
      alert("Email must be filled");
    } else if (isVariefied === false) {
      alert("please variefy that you are a human");
    }

    if (
      name &&
      passportNo &&
      universityApplyFor &&
      courseApplyFor &&
      contact &&
      email &&
      isVariefied === true
    ) {
      setApply({ ...apply, sending: true });
      createApply(apply).then((data) => {
        setApply({
          ...apply,
          name: "",
          passportNo: "",
          universityApplyFor: "",
          courseApplyFor: "",
          contact: "",
          email: "",
        });
      });
    }
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setApply({ ...apply, [name]: value });
  };

  const onChange = (response) => {
    if (response) {
      setVariefy({
        isVariefied: true,
      });
    }
  };

  const sendingMessage = () => {
    return (
      sending && (
        <div className="alert alert-info">
          <h4>Sending...</h4>
        </div>
      )
    );
  };

  return (
    <div className="apply">
      <div className="res">
        {/* this divs are only for design */}
        <div className="apply_form">
          <span className="circle_one"></span>
          <span className="circle_two">
            <span className="circle_three"></span>
          </span>

          {/* form content written here */}
          <div className="form_content">
            <div className="image_div">
              <img className="imoge" src={applySvg} alt="imoge" />
            </div>
            <form className="form_inputs">
              {sendingMessage()}
              <input
                onChange={handleChange("name")}
                value={name}
                className="text_input"
                required
                type="text"
                id="name"
                placeholder="Name..."
              />
              <input
                onChange={handleChange("passportNo")}
                value={passportNo}
                className="text_input"
                required
                type="text"
                id="passport"
                placeholder="Passport number..."
              />
              <input
                onChange={handleChange("universityApplyFor")}
                value={universityApplyFor}
                required
                className="text_input"
                type="text"
                id="university"
                placeholder="University applying for..."
              />
              <input
                onChange={handleChange("courseApplyFor")}
                value={courseApplyFor}
                className="text_input"
                required
                type="text"
                id="course"
                placeholder="Course applying for..."
              />
              <input
                onChange={handleChange("contact")}
                value={contact}
                className="text_input"
                required
                type="text"
                id="contact"
                placeholder="Contact number..."
              />
              <input
                onChange={handleChange("email")}
                value={email}
                className="text_input"
                required
                type="text"
                id="email"
                placeholder="Email id..."
              />

              <ReCAPTCHA
                className="captcha"
                sitekey={RECAPTCHA}
                onChange={onChange}
              />

              <button onClick={onSubmit} className="submit_btn">
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="stick_whatsapp">
        <span className="social_links">
          <a href="https://wa.me/380731703587" target="_blank">
            <i style={{ color: "#25d366" }} className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/care.medoverseas/" target="_blank">
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
  );
};

export default Apply;
