import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Button } from "@mui/material";
import { Form, Formik } from "formik";

import "../../assets/css/forget-password.css";
import WhiteLogo from "../../assets/images/top-logo-white.png";

import { forgetPasswordAction } from "../../store/Auth/authActions";
import { forgetPasswordSchema } from "../../utils/schema";

import ErrorText from "../../components/Error";

const ForgetPassword = () => {
  const { loading } = useSelector((state) => state.authReducer);

  const [formValue] = useState({
    email: "",
  });

  const dispatch = useDispatch();

  const onSubmitForgetPasswordForm = (values) => {
    dispatch(forgetPasswordAction({ email: values.email }));
  };

  return (
    <div class="forget-password-page">
      <div className="white-top-logo">
        <img alt="logo" src={WhiteLogo} />
      </div>
      <div className="form-content">
        <div class="forget-password-heading">
          <h3 class="text-center">Forgot Password?</h3>
          <p class="text-center">Enter your email to reset password</p>
        </div>
        <Formik
          initialValues={formValue}
          validationSchema={forgetPasswordSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmitForgetPasswordForm(values);
            resetForm();
          }}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email && touched.email && "invalid"}`}
                    id="email"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorText error={errors.email} touched={touched.email} />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  className="btn btn-purple forget-password-btn"
                  disabled={loading}
                  startIcon={loading && <CircularProgress color="inherit" size={24} />}>
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ForgetPassword;
