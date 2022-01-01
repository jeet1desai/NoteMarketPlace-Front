import React from "react";
import { Form, Formik } from "formik";

import "../../../assets/css/user-profile.css";

export default function MyProfile() {
  return (
    <div className="user-profile">
      <div className="page-top">
        <div class="page-top-title">
          <p>User Profile</p>
        </div>
      </div>

      <div className="user-profile-form">
        <div class="container">
          <Formik initialValues={{}} onSubmit={(values) => {}}>
            <Form>
              <div className="basic-profile-details">
                <div className="row">
                  <div className="page-title">
                    <p>Basic Profile Details</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="first-name">First Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="first-name"
                        placeholder="Enter Your First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="last-name">Last Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="last-name"
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="email">Email *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="Enter Your email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="dob">Date of Birth *</label>
                      <input type="date" class="form-control" id="dob" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label>Gender *</label>
                      <br />
                      <select className="form-control">
                        <option class="muted">Select Your Gender</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="phone">Phone No *</label>
                      <br />
                      <div class="phone-number form-group">
                        <select class="form-control phone-two">
                          <option class="muted">+91</option>
                          <option value="">+01</option>
                          <option value="">+01</option>
                          <option value="">+01</option>
                          <option value="">+01</option>
                        </select>
                        <input
                          type="number"
                          class="form-control phone"
                          id="phone"
                          placeholder="Enter Your Phone No"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="profile-pic">Profile Picture *</label>
                      <div class="upload-box">
                        <input type="file" class="upload" id="profile-pic" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="address-details">
                <div className="row">
                  <div className="page-title">
                    <p>Address Details</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="address1">Address Line 1 *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="address1"
                        placeholder="Enter Your Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="address2">Address Line 2</label>
                      <input
                        type="text"
                        class="form-control"
                        id="address2"
                        placeholder="Enter Your Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="city">City *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        placeholder="Enter Your City"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="state">State *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="state"
                        placeholder="Enter Your State"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="zipcode">Zipcode *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="zipcode"
                        placeholder="Enter Your Zipcode"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="country">Country *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="country"
                        placeholder="Enter Your Country"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="collage-university-info">
                <div className="row">
                  <div className="page-title">
                    <p>University and Collage Information</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="university">University</label>
                      <input
                        type="text"
                        class="form-control"
                        id="university"
                        placeholder="Enter Your University"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="collage">Collage</label>
                      <input
                        type="text"
                        class="form-control"
                        id="collage"
                        placeholder="Enter Your Collage"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="user-profile-button">
                <button type="button" class="btn submit-btn btn-purple">
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
