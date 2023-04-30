import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import "../../../assets/css/user-profile.css";

import { getProfileAction } from "../../../store/Profile/profileActions";

import Loader from "../../../components/Loader";

const MyProfile = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.profileReducer.loading);

  useEffect(() => {
    dispatch(getProfileAction());
  }, []);

  return (
    <div className="user-profile">
      <Loader loading={loading} />

      <div className="page-top">
        <div className="page-top-title">
          <p>User Profile</p>
        </div>
      </div>

      <div className="user-profile-form">
        <div className="container">
          <Formik initialValues={{}} onSubmit={(values) => {}}>
            <Form>
              <div className="basic-profile-details">
                <div className="row">
                  <div className="page-title">
                    <p>Basic Profile Details</p>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="first-name">First Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="first-name"
                        placeholder="Enter Your First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="last-name">Last Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="last-name"
                        placeholder="Enter Your Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth *</label>
                      <input type="date" className="form-control" id="dob" />
                    </div>
                  </div>
                  <div className="col-md-6">
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
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone No *</label>
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
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="profile-pic">Profile Picture *</label>
                      <div className="upload-box">
                        <input
                          type="file"
                          className="upload"
                          id="profile-pic"
                        />
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
                    <div className="form-group">
                      <label htmlFor="address1">Address Line 1 *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address1"
                        placeholder="Enter Your Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="address2">Address Line 2</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Enter Your Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="city">City *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter Your City"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="state">State *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        placeholder="Enter Your State"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="zipcode">Zipcode *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zipcode"
                        placeholder="Enter Your Zipcode"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="country">Country *</label>
                      <input
                        type="text"
                        className="form-control"
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
                    <div className="form-group">
                      <label htmlFor="university">University</label>
                      <input
                        type="text"
                        className="form-control"
                        id="university"
                        placeholder="Enter Your University"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="collage">Collage</label>
                      <input
                        type="text"
                        className="form-control"
                        id="collage"
                        placeholder="Enter Your Collage"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="user-profile-button">
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
};

export default MyProfile;
