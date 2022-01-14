import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import WhiteLogo from "../../assets/images/top-logo-white.png";
import "../../assets/font-awesome/css/font-awesome.css";
import "../../assets/css/login.css";

import { signInAction } from "../../store/Auth/authActions";

const Login = () => {
  const loading = useSelector((state) => state.authReducer.loading);

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    isRememberMe: false,
  });

  const dispatch = useDispatch();

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

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const onSubmitLoginForm = (values) => {
    localStorage.clear();
    dispatch(signInAction(values));
    setFormValue({
      ...formValue,
      email: "",
      password: "",
      isRememberMe: false,
    });
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
        <Formik
          initialValues={formValue}
          validationSchema={loginSchema}
          onSubmit={(values) => onSubmitLoginForm(values)}>
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
                    className={`form-control ${
                      errors.email && touched.email && "invalid"
                    }`}
                    id="exampleInputEmail1"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <small className="error-text">{errors.email}</small>
                  )}
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
                      className={`form-control ${
                        errors.password && touched.password && "invalid"
                      }`}
                      name="password"
                      placeholder="Enter your Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <span
                      onClick={() => showAndHidePassword()}
                      toggle="#password"
                      id="eye"
                      className="fa fa-eye"></span>
                  </div>
                  {errors.password && touched.password && (
                    <small className="error-text">{errors.password}</small>
                  )}
                </div>

                <div className="form-group form-check">
                  <input
                    name="isRememberMe"
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.isRememberMeF}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember Me
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  className="btn btn-purple login-btn"
                  disabled={loading}
                  startIcon={
                    loading && <CircularProgress color="inherit" size={24} />
                  }>
                  Login
                </Button>

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
};

export default Login;
