import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import "../../assets/css/signup.css";
import "../../assets/font-awesome/css/font-awesome.css";
import WhiteLogo from "../../assets/images/top-logo-white.png";

import { signUpAction } from "../../store/Auth/authActions";

const Signup = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be at least 6 characters")
      .max(24, "Password must be at most 24 characters")
      .matches(
        "(?=.*[a-z])",
        "Password must be contain at least 1 lower character"
      )
      .matches(
        "(?=.*[A-Z])",
        "Password must be contain at least 1 upper character"
      )
      .matches(
        "(?=.*[0-9])",
        "Password must be contain at least 1 digit character"
      )
      .matches(
        "(?=.*?[#?!@$%^&*-])",
        "Password must be contain at least 1 special character"
      ),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const onSubmitSignupForm = (values) => {
    const signupValues = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    dispatch(signUpAction(signupValues));
    localStorage.clear();
  };

  const showAndHidePassword = () => {
    var inputPassword = document.getElementById("password");
    var eyeIcon = document.getElementById("eye");
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
      eyeIcon.className = "fa fa-eye-slash";
    } else {
      inputPassword.type = "password";
      eyeIcon.className = "fa fa-eye";
    }
  };

  const showAndHideConfirmPassword = () => {
    var inputPassword = document.getElementById("con_password");
    var eyeIcon = document.getElementById("con_eye");
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
      eyeIcon.className = "fa fa-eye-slash";
    } else {
      inputPassword.type = "password";
      eyeIcon.className = "fa fa-eye";
    }
  };

  return (
    <div className="signup-page">
      <div className="white-top-logo">
        <img alt="logo" src={WhiteLogo} />
      </div>
      <div className="form-content">
        <div className="signup-heading">
          <h3 className="text-center">Create an Account</h3>
          <p className="text-center">Enter your details to Signup</p>
        </div>
        <Formik
          initialValues={formValue}
          validationSchema={signupSchema}
          onSubmit={(values) => onSubmitSignupForm(values)}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstName"
                    type="text"
                    className={`form-control ${
                      errors.firstName && touched.firstName && "invalid"
                    }`}
                    id="firstName"
                    placeholder="Enter your First Name"
                  />
                  {errors.firstName && touched.firstName && (
                    <small className="error-text">{errors.firstName}</small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="lastName"
                    type="text"
                    className={`form-control ${
                      errors.lastName && touched.lastName && "invalid"
                    }`}
                    id="lastName"
                    placeholder="Enter your Last Name"
                  />
                  {errors.lastName && touched.lastName && (
                    <small className="error-text">{errors.lastName}</small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="emailAdd">Email *</label>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    type="email"
                    className={`form-control ${
                      errors.email && touched.email && "invalid"
                    }`}
                    id="emailAdd"
                    placeholder="Enter your Email"
                  />
                  {errors.email && touched.email && (
                    <small className="error-text">{errors.email}</small>
                  )}
                </div>

                <div className="form-group password">
                  <label htmlFor="password">Password *</label>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    type="password"
                    id="password"
                    className={`form-control ${
                      errors.password && touched.password && "invalid"
                    }`}
                    placeholder="Enter your Password"
                  />
                  <span
                    onClick={() => showAndHidePassword()}
                    toggle="#password"
                    id="eye"
                    className="fa fa-eye"></span>
                  {errors.password && touched.password && (
                    <small className="error-text">{errors.password}</small>
                  )}
                </div>

                <div className="form-group password">
                  <label htmlFor="con_password">Confirm Password *</label>
                  <input
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="confirmPassword"
                    type="password"
                    id="con_password"
                    className={`form-control ${
                      errors.confirmPassword &&
                      touched.confirmPassword &&
                      "invalid"
                    }`}
                    placeholder="Enter your Confirm Password"
                  />
                  <span
                    onClick={() => showAndHideConfirmPassword()}
                    toggle="#con_password"
                    id="con_eye"
                    className="fa fa-eye"></span>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <small className="error-text">
                      {errors.confirmPassword}
                    </small>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  className="btn btn-purple signup-btn"
                  disabled={loading}
                  startIcon={
                    loading && <CircularProgress color="inherit" size={24} />
                  }>
                  Signup
                </Button>

                <p className="text-center login-text">
                  Already have an Account?
                  <Link to="/login"> Login</Link>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
