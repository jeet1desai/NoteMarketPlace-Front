import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import "../../../assets/css/user-profile.css";

import { getProfileAction } from "../../../store/Profile/profileActions";

import Loader from "../../../components/Loader";
import ErrorText from "../../../components/Error";
import moment from "moment";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { loading, phone_code_list, country_list, user } = useSelector(
    (state) => state.profileReducer
  );

  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
    gender: "",
    phone_code: "",
    phone_number: "",
    profile_picture: "",
    picture_file: null,
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    university: "",
    college: "",
  });

  useEffect(() => {
    dispatch(getProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      setFormValue({ ...user, picture_file: null });
    }
  }, [user]);

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
          <Formik
            initialValues={formValue}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => {
              console.log(values);
              return (
                <Form onSubmit={handleSubmit}>
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
                            id="first-name"
                            placeholder="Enter Your First Name"
                            className={`form-control ${
                              errors.first_name &&
                              touched.first_name &&
                              "invalid"
                            }`}
                            value={values.first_name}
                            name="first_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.first_name}
                            touched={touched.first_name}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="last-name">Last Name *</label>
                          <input
                            type="text"
                            id="last-name"
                            placeholder="Enter Your Last Name"
                            className={`form-control ${
                              errors.last_name && touched.last_name && "invalid"
                            }`}
                            value={values.last_name}
                            name="last_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.last_name}
                            touched={touched.last_name}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="text"
                            id="email"
                            placeholder="Enter Your email"
                            className={`form-control ${
                              errors.email && touched.email && "invalid"
                            }`}
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.email}
                            touched={touched.email}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="dob">Date of Birth *</label>
                          <input
                            type="date"
                            id="dob"
                            className={`form-control ${
                              errors.dob && touched.dob && "invalid"
                            }`}
                            value={values.dob}
                            name="dob"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            max={moment().format("YYYY-MM-DD")}
                          />
                          <ErrorText error={errors.dob} touched={touched.dob} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="gender">Gender *</label>
                          <br />
                          <select
                            id="gender"
                            className={`form-control ${
                              errors.gender && touched.gender && "invalid"
                            }`}
                            value={values.gender}
                            name="gender"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option className="muted" value="">
                              Select Your Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          <ErrorText
                            error={errors.gender}
                            touched={touched.gender}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone">Phone No *</label>
                          <br />
                          <div className="phone-number form-group">
                            <select
                              className={`form-control phone-two ${
                                errors.phone_code &&
                                touched.phone_code &&
                                "invalid"
                              }`}
                              value={values.phone_code}
                              name="phone_code"
                              onChange={handleChange}
                              onBlur={handleBlur}>
                              <option value="">Code</option>
                              {phone_code_list.map((code) => {
                                return <option value="">+91</option>;
                              })}
                            </select>
                            <input
                              type="number"
                              id="phone"
                              placeholder="Enter Your Phone No"
                              className={`form-control phone ${
                                errors.phone_number &&
                                touched.phone_number &&
                                "invalid"
                              }`}
                              value={values.phone_number}
                              name="phone_number"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorText
                              error={errors.phone_code}
                              touched={touched.phone_code}
                            />
                            <ErrorText
                              error={errors.phone_number}
                              touched={touched.phone_number}
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
                              name="picture_file"
                              onChange={(e) =>
                                setFieldValue("picture_file", e.target.files[0])
                              }
                              onBlur={handleBlur}
                            />
                          </div>
                          {values.picture_file ? (
                            <span className="file-info">
                              {values.picture_file.name}
                            </span>
                          ) : (
                            <span className="file-info">
                              {values.profile_picture.name}
                            </span>
                          )}
                          <ErrorText
                            error={errors.picture_file}
                            touched={touched.picture_file}
                          />
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
                            id="address1"
                            placeholder="Enter Your Address"
                            className={`form-control ${
                              errors.addressLine1 &&
                              touched.addressLine1 &&
                              "invalid"
                            }`}
                            value={values.addressLine1}
                            name="addressLine1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.addressLine1}
                            touched={touched.addressLine1}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="address2">Address Line 2</label>
                          <input
                            type="text"
                            id="address2"
                            placeholder="Enter Your Address"
                            className={`form-control ${
                              errors.addressLine2 &&
                              touched.addressLine2 &&
                              "invalid"
                            }`}
                            value={values.addressLine2}
                            name="addressLine2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.addressLine2}
                            touched={touched.addressLine2}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="city">City *</label>
                          <input
                            type="text"
                            id="city"
                            placeholder="Enter Your City"
                            className={`form-control ${
                              errors.city && touched.city && "invalid"
                            }`}
                            value={values.city}
                            name="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.city}
                            touched={touched.city}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="state">State *</label>
                          <input
                            type="text"
                            id="state"
                            placeholder="Enter Your State"
                            className={`form-control ${
                              errors.state && touched.state && "invalid"
                            }`}
                            value={values.state}
                            name="state"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.state}
                            touched={touched.state}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="zipcode">Zipcode *</label>
                          <input
                            type="number"
                            id="zipcode"
                            placeholder="Enter Your Zipcode"
                            className={`form-control ${
                              errors.zip_code && touched.zip_code && "invalid"
                            }`}
                            value={values.zip_code}
                            name="zip_code"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.zip_code}
                            touched={touched.zip_code}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Country *</label>
                          <br />
                          <select
                            className={`form-control ${
                              errors.country && touched.country && "invalid"
                            }`}
                            value={values.country}
                            name="country"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option className="muted" value="">
                              Select Your Country
                            </option>
                            {country_list.map((country) => {
                              return <option value="">+91</option>;
                            })}
                          </select>
                          <ErrorText
                            error={errors.country}
                            touched={touched.country}
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
                            id="university"
                            placeholder="Enter Your University"
                            className={`form-control ${
                              errors.university &&
                              touched.university &&
                              "invalid"
                            }`}
                            value={values.university}
                            name="university"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.university}
                            touched={touched.university}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="collage">Collage</label>
                          <input
                            type="text"
                            id="collage"
                            placeholder="Enter Your Collage"
                            className={`form-control ${
                              errors.college && touched.college && "invalid"
                            }`}
                            value={values.college}
                            name="college"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText
                            error={errors.college}
                            touched={touched.college}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="user-profile-button">
                    <button type="submit" className="btn submit-btn btn-purple">
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
