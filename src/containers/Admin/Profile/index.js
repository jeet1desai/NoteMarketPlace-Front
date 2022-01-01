import React from "react";
import { Formik, Form } from "formik";

import "../../../assets/css/admin-profile.css";
import AvatarImage from "../../../assets/images/avatar.png";

export default function AdminProfile() {
  return (
    <div className="admin-profile">
      <div className="admin-profile-form">
        <div className="container">
          <Formik initialValues={{}} onSubmit={(values) => {}}>
            <Form>
              <div className="basic-profile-details">
                <div className="row">
                  <div className="page-title">
                    <p>Basic Profile Details</p>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="first-name">First Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        placeholder="Enter Your First Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="last-name">Last Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="last-name"
                        placeholder="Enter Your Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="email">Email *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="dob">Date of Birth *</label>
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label>Gender *</label>
                      <br />
                      <select className="form-control">
                        <option className="muted">Select Your Gender</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="phone">Phone No *</label>
                      <br />
                      <div className="phone-number form-group">
                        <select className="form-control phone-two">
                          <option className="muted">+91</option>
                          <option value="">+01</option>
                          <option value="">+01</option>
                          <option value="">+01</option>
                          <option value="">+01</option>
                        </select>
                        <input
                          type="number"
                          className="form-control phone"
                          id="phone"
                          placeholder="Enter Your Phone No"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="profile-pic">Profile Picture *</label>
                      <div className="upload-box">
                        <input
                          type="file"
                          className="upload"
                          id="profile-pic"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="image-preview">
                      <img alt="" src={AvatarImage} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="address-details">
                <div className="row">
                  <div className="page-title">
                    <p>Address Details</p>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="address1">Address Line 1 *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address1"
                        placeholder="Enter Your Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="address2">Address Line 2</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Enter Your Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="city">City *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter Your City"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="state">State *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        placeholder="Enter Your State"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="zipcode">Zipcode *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zipcode"
                        placeholder="Enter Your Zipcode"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label for="country">Country *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        placeholder="Enter Your Country"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="admin-profile-button">
                <button type="button" className="btn submit-btn btn-purple">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
