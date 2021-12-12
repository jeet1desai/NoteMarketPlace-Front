import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';

import WhiteLogo from '../../assets/images/top-logo-white.png';
import '../../assets/font-awesome/css/font-awesome.css';
import '../../assets/css/login.css';

export default function Login() {
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

  return (
    <div className="login-page">
      <div className="white-top-logo">
        <img alt="logo" src={WhiteLogo} />
      </div>
      <div className="form-content">
        <div className="login-heading">
          <h3 className="text-center">Login</h3>
          <p className="text-center">Enter your details to Login</p>
        </div>
        <Formik>
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
                  <label htmlFor="exampleInputEmail1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter your Email"
                  />
                </div>

                <div className="form-group">
                  <div className="pass-and-forgetPass">
                    <label htmlFor="password" className="text-left">
                      Password *
                    </label>
                    <Link to="/forget-password">Forgot Password ?</Link>
                  </div>
                  <div className="password-input">
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter your Password"
                    />
                    <span
                      onClick={() => showAndHidePassword()}
                      toggle="#password"
                      id="eye"
                      className="fa fa-eye"
                    ></span>
                  </div>
                </div>

                <div className="form-group form-check">
                  <input
                    name="isRememberMe"
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember Me
                  </label>
                </div>

                <button type="submit" className="btn btn-purple login-btn">
                  Login
                </button>

                <p className="text-center sign-up-text">
                  Don't have an account?
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
