import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import WhiteLogo from "../../assets/images/top-logo-white.png";
import { signUpAction } from "../../store/Auth/authActions";
import { signupSchema } from "../../utils/schema";
import ErrorText from "../../components/Error";
import PasswordEye from "../../components/PasswordEye";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authReducer);

  const [formValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmitSignupForm = (values) => {
    const signUpValue = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
    };
    dispatch(signUpAction(signUpValue));
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
          onSubmit={(values, { resetForm }) => {
            onSubmitSignupForm(values);
            resetForm();
          }}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="first_name"
                    type="text"
                    className={`form-control ${errors.first_name && touched.first_name && "invalid"}`}
                    id="first_name"
                    placeholder="Enter your First Name"
                  />
                  <ErrorText error={errors.first_name} touched={touched.first_name} />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="last_name"
                    type="text"
                    className={`form-control ${errors.last_name && touched.last_name && "invalid"}`}
                    id="last_name"
                    placeholder="Enter your Last Name"
                  />
                  <ErrorText error={errors.last_name} touched={touched.last_name} />
                </div>

                <div className="form-group">
                  <label htmlFor="emailAdd">Email *</label>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    type="email"
                    className={`form-control ${errors.email && touched.email && "invalid"}`}
                    id="emailAdd"
                    placeholder="Enter your Email"
                  />
                  <ErrorText error={errors.email} touched={touched.email} />
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
                    className={`form-control ${errors.password && touched.password && "invalid"}`}
                    placeholder="Enter your Password"
                  />
                  <PasswordEye eyeId="eye" inputId="password" />
                  <ErrorText error={errors.password} touched={touched.password} />
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
                    className={`form-control ${errors.confirmPassword && touched.confirmPassword && "invalid"}`}
                    placeholder="Enter your Confirm Password"
                  />
                  <PasswordEye eyeId="con_eye" inputId="con_password" />
                  <ErrorText error={errors.confirmPassword} touched={touched.confirmPassword} />
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  className="btn btn-purple signup-btn"
                  disabled={loading}
                  startIcon={loading && <CircularProgress color="inherit" size={24} />}>
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
