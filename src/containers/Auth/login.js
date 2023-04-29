import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CircularProgress, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import WhiteLogo from "../../assets/images/top-logo-white.png";
import "../../assets/font-awesome/css/font-awesome.css";
import "../../assets/css/login.css";

import { signInAction } from "../../store/Auth/authActions";
import { showAndHidePassword } from "../../utils/password";

import ErrorText from "../../components/Error";

const Login = () => {
  const loading = useSelector((state) => state.authReducer.loading);

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    isRememberMe: false,
  });

  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmitLoginForm = (values) => {
    localStorage.clear();
    dispatch(signInAction({ email: values.email, password: values.password }));
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
          onSubmit={(values, { resetForm }) => onSubmitLoginForm(values)}>
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
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email && touched.email && "invalid"
                    }`}
                    id="email"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorText error={errors.email} touched={touched.email} />
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
                      onClick={() => showAndHidePassword("password", "eye")}
                      toggle="#password"
                      id="eye"
                      className="fa fa-eye"></span>
                  </div>
                  <ErrorText
                    error={errors.password}
                    touched={touched.password}
                  />
                </div>

                <div className="form-group form-check">
                  <input
                    name="isRememberMe"
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.isRememberMe}
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
