import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress } from "@mui/material";

import "../../assets/css/change-password.css";
import "../../assets/font-awesome/css/font-awesome.css";
import WhiteLogo from "../../assets/images/top-logo-white.png";

import ErrorText from "../../components/Error";
import PasswordEye from "../../components/PasswordEye";

import { changePasswordAction } from "../../store/Auth/authActions";
import { changePasswordSchema } from "../../utils/schema";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authReducer);

  const [formValue] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const onSubmitChangePasswordForm = (values) => {
    const passwordValue = {
      old_password: values.old_password,
      new_password: values.new_password,
    };
    dispatch(changePasswordAction(passwordValue));
  };

  return (
    <div className="change-password">
      <div className="white-top-logo">
        <img alt="logo" src={WhiteLogo} />
      </div>
      <div className="form-content">
        <div className="change-password-heading">
          <h3 className="text-center">Change Password</h3>
          <p className="text-center">
            Enter your new password to change password
          </p>
        </div>
        <Formik
          initialValues={formValue}
          validationSchema={changePasswordSchema}
          onSubmit={(values) => onSubmitChangePasswordForm(values)}>
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
                <div className="form-group password">
                  <label htmlFor="old_password">Old Password *</label>
                  <input
                    id="old_password"
                    type="password"
                    name="old_password"
                    placeholder="Enter your old password"
                    className={`form-control ${
                      errors.old_password && touched.old_password && "invalid"
                    }`}
                    value={values.old_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <PasswordEye eyeId="old_eye" inputId="old_password" />
                  <ErrorText
                    error={errors.old_password}
                    touched={touched.old_password}
                  />
                </div>
                <div className="form-group password">
                  <label htmlFor="new_password">New Password *</label>
                  <input
                    id="new_password"
                    type="password"
                    name="new_password"
                    placeholder="Enter your New Password"
                    className={`form-control ${
                      errors.new_password && touched.new_password && "invalid"
                    }`}
                    value={values.new_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <PasswordEye eyeId="new_eye" inputId="new_password" />
                  <ErrorText
                    error={errors.new_password}
                    touched={touched.new_password}
                  />
                </div>
                <div className="form-group password">
                  <label htmlFor="confirm_password">Confirm Password *</label>
                  <input
                    id="confirm_password"
                    type="password"
                    name="confirm_password"
                    placeholder="Enter your Confirm Password"
                    className={`form-control ${
                      errors.confirm_password &&
                      touched.confirm_password &&
                      "invalid"
                    }`}
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <PasswordEye eyeId="confirm_eye" inputId="confirm_password" />
                  <ErrorText
                    error={errors.confirm_password}
                    touched={touched.confirm_password}
                  />
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  className="btn btn-purple change-password-btn"
                  disabled={loading}
                  startIcon={
                    loading && <CircularProgress color="inherit" size={24} />
                  }>
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
