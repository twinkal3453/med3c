import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "./homeApiCalls";
import { PATH } from "../../backend";
import Footer from "../footer/footer";
import counters from "./home_counter";
import Carousel from "react-elastic-carousel";
import CountUp from "react-countup";
import {
  Carrer,
  Services,
  Courses,
  Students,
  Review,
  // SocialLinks,
} from "./HomeList";
import illustration from "../../Assets/illustration.svg";
import "./Home.scss";
import MainCarousel from "../../components/HomeMain/main";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
];

console.log(counters);

function Home() {
  const [reviews, setReviews] = useState([]);

  const preload = () => {
    getReviews().then((data) => {
      setReviews(data);
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <div className="home_1">
      <div className="section">
        <div id="sec1">
          <div className="text_container">
            <div className="text">
              <h1>
                Create Career
                <br /> With Care
              </h1>
              {Carrer.map((item, index) => {
                return <p key={index}>{item.title}</p>;
              })}

              <Link to={"/apply"}>
                <button>Apply Now</button>
              </Link>
            </div>
          </div>
          <div className="slider_1">
            <div className="slider_data">
              <MainCarousel className="carousel_pic" />
            </div>
          </div>
        </div>

        <div id="sec2">
          <div className="text1">
            <div className="container_head">
              <h2>We Provide the Best Services</h2>
              <div className="line"></div>
            </div>
          </div>

          <div className="container_data">
            {Services.map((item, index) => {
              return (
                <div className="container_text" key={index}>
                  <img src={item.image} alt="imoge" />
                  <h4> {item.head} </h4>
                  <p> {item.disc} </p>
                  <div className="line"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="sec3">
          <div className="content">
            <div className="content_text">
              <h2>Courses</h2>
              <div className="line"></div>
            </div>
          </div>

          <div className="container_data">
            {Courses.map((item, index) => {
              return (
                <div id={item.id} className={item.cName} key={index}>
                  <div className="avatar_img">
                    <img src={item.icon} alt="imoge" />
                  </div>
                  <h3> {item.text} </h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container" id="sec4">
          <div className="content">
            <div className="content_text">
              <h2>Our Students in Abroad</h2>
              <div className="line"></div>
            </div>
          </div>
          <div className="container_data">
            {Students.map((item, index) => {
              return (
                <div className="card1" key={index}>
                  <div className="container_img">
                    <img src={item.pic} alt="" />
                  </div>
                  <div className="container_icon">
                    <img src={item.pic2} alt="" />
                    <h3> {item.name} </h3>
                  </div>
                  <h2 className="counter">{`${item.number}+`}</h2>
                </div>
              );
            })}
          </div>
        </div>

        <div id="sec7" className="container px-4 Numbers_Speakes">
          <h3>Number Speaks Everything For Us</h3>
          <p>
            Fix a meeting with us & get honest advise and guranteed admission in
            top universities around the world
          </p>

          <div className="row members">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h4>
                <i className="fas fa-address-card"></i>8+
              </h4>
              <p>Years of expertise</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h4>
                <i className="fas fa-graduation-cap"></i>5000+
              </h4>
              <p>Satisfied students</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h4>
                <i className="fas fa-globe"></i>10
              </h4>
              <p>Countries we offer to study abroad</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h4>
                <i class="fas fa-university"></i>28
              </h4>
              <p>Universities partner with us</p>
            </div>
          </div>
        </div>

        <div id="sec5">
          <div className="container">
            <h2>Some of Our Proud Students</h2>
          </div>

          <div className="container_main">
            <Carousel
              enableAutoPlay
              autoPlaySpeed={10000}
              breakPoints={breakPoints}
            >
              {reviews.map((item, index) => {
                return (
                  <div className="container_card" key={index}>
                    <div className="head">
                      <div className="profile">
                        <div className="icon">
                          <img src={`${PATH}/${item.photo}`} alt="" />
                        </div>
                      </div>
                      <div className="profile_info">
                        <div className="info">
                          <h6> {item.name} </h6>
                          <p> {item.address} </p>
                        </div>
                      </div>
                    </div>
                    <div className="data">
                      <p> {item.content} </p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div id="sec6">
          <div className="container">
            <div className="data">
              <h1>Ready to Get Started?</h1>
              <Link to={"/contact"}>
                <button>Contact Us</button>
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
}

export default Home;
