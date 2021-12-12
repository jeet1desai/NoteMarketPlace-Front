import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/home.css";
import DownloadImg from "../../assets/images/download.png";
import SellerImg from "../../assets/images/sell-notes.jpeg";
import AvatarImg from "../../assets/images/avatar.png";

import UserHeader from "../../hoc/user/header";
import UserFooter from "../../hoc/user/footer";

export default function Home() {
  return (
    <>
      <UserHeader />
      <div className="home">
        <div className="head-content">
          <div className="container">
            <div className="row">
              <div id="head-content-inner" className="col-md-8 col-sm-12">
                <div id="head-heading">
                  <h1>
                    Download Free/Paid Notes <br /> or Sale your Book
                  </h1>
                </div>
                <div id="head-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elite.
                    pariah's
                    <br />
                    distinctio magni!Excepturi adipisicing elit.
                  </p>
                </div>
                <div id="head-button">
                  <Link
                    to="/faq"
                    className="btn btn-head"
                    href="#"
                    title="Learn More"
                    role="button"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="content-box">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="about-left">
                    <h3>
                      About <br />
                      NoteMarketPlace
                    </h3>
                  </div>
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="about-right">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Labore, modi minima vitae fugit magnam amet voluptatum
                      corrupti quo inventore, quam alias voluptas et voluptates
                      autem itaque tempore perspiciatis! Nisi nulla esse qui
                      exercitationem vitae corrupti delectus quo inventore
                      numquam nesciunt architecto!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maxime asperiores repellat, architecto consequatur animi
                      exercitationem ab commodi. Sunt consequatur animi rerum
                      tempora officia iure cupiditate vitae magnam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work">
          <div className="content-box">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="home-heading">
                    <h3>How it Works</h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="work-item text-center">
                    <div className="work-image">
                      <img
                        className="img-fluid"
                        src={DownloadImg}
                        alt="download"
                      />
                    </div>
                    <h5>Download Free/Paid Notes</h5>
                    <p>
                      Get Material for your <br />
                      Course etc.
                    </p>
                    <div id="btn-purple">
                      <Link
                        to="/search-notes"
                        className="btn btn-home btn-purple"
                        title="Download"
                        role="button"
                      >
                        Download
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="work-item text-center">
                    <div className="work-image">
                      <img className="img-fluid" src={SellerImg} alt="seller" />
                    </div>
                    <h5>Seller</h5>
                    <p>
                      Upload and Download Course <br />
                      and Material etc.
                    </p>
                    <div id="btn-purple">
                      <Link
                        to="/sell-note/dashboard"
                        className="btn btn-home btn-purple"
                        title="Sell Book"
                        role="button"
                      >
                        Sell Book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <div className="content-box">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="home-heading">
                    <h3>What our Customers are Saying</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 ">
                  <div className="testimonial">
                    <div className="user">
                      <img src={AvatarImg} alt="" />
                      <div className="user-info">
                        <h5>Walter Meller</h5>
                        <p>Founder & CEO, Matrix Group</p>
                      </div>
                    </div>
                    <p>
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt accusamus molla odio toanditiis, iure moleas
                      asperities elit consectetur unde in deserunt."
                    </p>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="testimonial">
                    <div className="user">
                      <img src={AvatarImg} alt="" />
                      <div className="user-info">
                        <h5>Jonnie Riley</h5>
                        <p>Employee, Curious Snakcs</p>
                      </div>
                    </div>
                    <p>
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt accusamus molla odio toanditiis, iure moleas
                      asperities elit consectetur unde in deserunt."
                    </p>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="testimonial">
                    <div className="user">
                      <img src={AvatarImg} alt="" />
                      <div className="user-info">
                        <h5>Amilia Luna</h5>
                        <p>Teacher, Saint joseph High School</p>
                      </div>
                    </div>
                    <p>
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt accusamus molla odio toanditiis, iure moleas
                      asperities elit consectetur unde in deserunt."
                    </p>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="testimonial">
                    <div className="user">
                      <img src={AvatarImg} alt="" />
                      <div className="user-info">
                        <h5>Danial Cardos</h5>
                        <p>Software engineer, Infinitum Company</p>
                      </div>
                    </div>
                    <p>
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt accusamus molla odio toanditiis, iure moleas
                      asperities elit consectetur unde in deserunt."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserFooter />
    </>
  );
}
