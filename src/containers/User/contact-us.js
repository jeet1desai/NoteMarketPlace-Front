import React from "react";

import "../../assets/css/contact-us.css";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="page-top">
        <div className="page-top-title">
          <p>Contact Us</p>
        </div>
      </div>

      <div className="contact-form">
        <div className="content-box">
          <div className="container">
            <div className="page-title">
              <p>Get In Touch</p>
              <span>Let us know how to get back to you</span>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="full-name">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="full-name"
                      placeholder="Enter Your Full Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Enter Your Subject"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="comments">Comments / Questions *</label>
                    <textarea
                      id="comments"
                      name="Comments"
                      className="form-control"
                      placeholder="comments..."
                      required></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="button" className="btn btn-purple submit-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
