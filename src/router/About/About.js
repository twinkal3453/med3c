import React from "react";
import Carousel from "react-elastic-carousel";
import Footer from "../footer/footer";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  AboutUs,
  Custom,
  Chhose,
  Solution,
  Expertise,
  Services,
} from "./AboutList";
import "./About.scss";

function About() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="About">
      <div className="res">
        <div className="sec1">
          {AboutUs.map((item, index) => {
            return (
              //section 1 about intro
              <div className="sec1_text" key={index}>
                <div className="about_name">
                  <h1>About Us</h1>
                  <div className="horizontal_line"></div>
                  <p> {item.about} </p>
                  <p> {item.about1} </p>
                </div>
                <div className="pic_img">
                  <div className="dotted_line">
                    <img className="image_pic" src={item.image} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sec2">
          {Custom.map((item, index1) => {
            return (
              <div className="sec2_text" key={index1}>
                <div className="gradient">
                  <div className="text1">
                    <div className="line_border">
                      <h3>Who we are?</h3>
                      <div className="border_line"></div>
                    </div>
                    <div className="data_border">
                      <div className="image_girl">
                        <img
                          className="girl_image"
                          src={item.image1}
                          alt="girl"
                        />
                        <div className="data_border_sec">
                          <div className="content">
                            <h2> {item.contant} </h2>
                            <div className="line2"></div>
                            <div className="text_about">
                              <p> {item.about1} </p>
                              <div className="data_country">
                                <ul>
                                  <li> {item.country1} </li>
                                  <li> {item.country2} </li>
                                  <li> {item.country3} </li>
                                  <li> {item.country7} </li>
                                </ul>
                                <ul className="second_list">
                                  <li> {item.country4} </li>
                                  <li> {item.country5} </li>
                                  <li> {item.country6} </li>
                                  <li> {item.country8} </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sec3">
          {Chhose.map((item, index2) => {
            return (
              <div className="text_chhose" key={index2}>
                <div className="text_container">
                  <h2>Why Choose Us?</h2>
                </div>
                <p> {item.chhose} </p>
              </div>
            );
          })}
        </div>

        <div className="sec4">
          <div className="container_1">
            <div className="container_name">
              <div className="discription1">
                <h2>Our Solutions</h2>
                <div className="line1"></div>
              </div>
            </div>
            <div className="contain_text1">
              {Solution.map((item, index3) => {
                return (
                  <div className="root" key={index3}>
                    <Accordion
                      className="accordion"
                      elevation={0}
                      expanded={expanded === item.panel1}
                      onChange={handleChange(item.panel1)}
                    >
                      <AccordionSummary
                        className="accordion_summary"
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography className="heading">
                          {item.text_btn}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className="accordion_details">
                        <Typography className="panel_text">
                          {item.panel}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container_2">
            <div className="contain_text2">
              <div className="discription2">
                <h2>Our Expertise</h2>
              </div>

              {Expertise.map((item, index4) => {
                return (
                  <div className="leval" key={index4}>
                    <ul>
                      <li className="list"> {item.text} </li>
                      <div className="progress">
                        <div className={item.cName}></div>
                      </div>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sec5">
          <div className="image_gradient">
            <div className="heading">
              <div className="heading_text">
                <h1>Our Services</h1>
                <div className="line"></div>
              </div>
            </div>

            <div className="services">
              {/* <Carousel breakPoints={breakPoints}> */}
              {Services.map((item, index) => {
                return (
                  <div className="cards card7" key={index}>
                    <h3> {item.heading} </h3>
                    <div className="line"></div>
                    <div className="container">
                      <p>{item.discription}</p>
                    </div>
                  </div>
                );
              })}
              {/* </Carousel> */}
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
}

export default About;
