import React, { useState } from "react";
import { createContact } from "./contactApiCal";
import Footer from "../footer/footer";
import contact from "../../Assets/contactus.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA } from "../../backend";
import "./Contact.scss";

const Contact = () => {
  const [contactUs, setContactUs] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    sending: false,
  });

  const { name, email, mobile, message, sending } = contactUs;

  const [variefy, setVariefy] = useState({
    isVariefied: false,
  });
  const { isVariefied } = variefy;

  const onSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      alert("Name must be filled");
    } else if (email === "") {
      alert("Email must be filled");
    } else if (mobile === "") {
      alert("mobile must be filled");
    } else if (message === "") {
      alert("message must be filled");
    } else if (isVariefied === false) {
      alert("Captcha not variefied");
    }

    if (name && email && mobile && message && isVariefied === true) {
      setContactUs({ ...contactUs, sending: true });
      createContact(contactUs).then((data) => {
        setContactUs({
          ...contactUs,
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      });
    }
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setContactUs({ ...contactUs, [name]: value });
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
    <>
      <div className="contact">
        <div className=" container container_data">
          <div className="card_container">
            <div className="card">
              <div className="text">
                <h3>Contact Us:</h3>
              </div>
              {sendingMessage()}
              <form id="inputfield_div">
                <input
                  onChange={handleChange("name")}
                  value={name}
                  required
                  className="inputfield"
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Name..."
                />
                <input
                  onChange={handleChange("email")}
                  value={email}
                  required
                  className="inputfield"
                  type="text"
                  name="Email"
                  id="email"
                  placeholder="Email..."
                />
                <input
                  onChange={handleChange("mobile")}
                  value={mobile}
                  required
                  className="inputfield"
                  type="text"
                  name="Phone"
                  id="phone"
                  placeholder="Phone..."
                />
                <textarea
                  onChange={handleChange("message")}
                  value={message}
                  required
                  type="text"
                  className="message"
                  name="Message"
                  id="message"
                  placeholder="Message..."
                />
                <ReCAPTCHA
                  className="captcha"
                  sitekey={RECAPTCHA}
                  onChange={onChange}
                />

                <button onClick={onSubmit} className="button_btn">
                  SEND
                </button>
              </form>
            </div>
          </div>

          {/* address details */}
          <div className="address_container">
            <div className="address_text">
              <h2>Our Head Office: </h2>
              <div className="area">
                <i className="fas fa-map-marker-alt"></i>
                <p className="address_area">
                  Gf 640, Near Scope Hospital, Niti Khand 1, Indirapuram,
                  Ghaziabad, UP Pincode: 201010
                </p>
              </div>

              {/* mobile details */}
              <div className="mobile">
                <i className="fas fa-phone-alt"></i>
                <div className="line">
                  <p className="mob-1">+91-8423365977</p>
                  <p className="mob-2">+380-731703587</p>
                </div>
              </div>

              {/* email details */}
              <div className="email">
                <i className="fas fa-envelope"></i>

                <div className="line">
                  <p className="email_1">info@med3c.com </p>
                  <p className="email-2">care.medoverseas@gmail.com</p>
                </div>
              </div>
            </div>
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
    </>
  );
};

export default Contact;
