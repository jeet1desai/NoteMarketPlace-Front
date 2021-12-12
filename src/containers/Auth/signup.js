import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import "../../assets/css/signup.css";
import "../../assets/font-awesome/css/font-awesome.css";
import WhiteLogo from "../../assets/images/top-logo-white.png";

function Signup() {
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
        // initialValues={formValue}
        // validationSchema={signupSchema}
        // onSubmit={(values) => onSubmitSignupForm(values)}
        >
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
                  <label htmlFor="firstname">First Name *</label>
                  <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Enter your First Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">Last Name *</label>
                  <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Enter your Last Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="emailAdd">Email *</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="emailAdd"
                    placeholder="Enter your Email"
                  />
                </div>

                <div className="form-group password">
                  <label htmlFor="password">Password *</label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your Password"
                  />
                  <span
                    onClick={() => showAndHidePassword()}
                    toggle="#password"
                    id="eye"
                    className="fa fa-eye"
                  ></span>
                </div>

                <div className="form-group password">
                  <label htmlFor="con_password">Confirm Password *</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    id="con_password"
                    className="form-control"
                    placeholder="Enter your Confirm Password"
                  />
                  <span
                    onClick={() => showAndHideConfirmPassword()}
                    toggle="#con_password"
                    id="con_eye"
                    className="fa fa-eye"
                  ></span>
                </div>

                <button type="submit" className="btn btn-purple signup-btn">
                  Signup
                </button>

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
}

export default Signup;
