import React, { useState } from "react";
import { Form, Formik } from "formik";

import "../../assets/css/contact-us.css";

import ErrorText, { inputError } from "../../components/Error";
import Loader from "../../components/Loader";
import { contactUsSchema } from "../../utils/schema";

import { contactUs } from "../../services/auth.service";
import { toast } from "react-toastify";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [formValue] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  return (
    <div className="contact-us">
      <Loader loading={loading} />

      <div className="page-top">
        <div className="page-top-title">
          <p>Contact Us</p>
        </div>
      </div>

      <div className="contact-form">
        <div className="content-box">
          <div className="container">
            <div className="page-title">
              <p>Get In Touch</p>
              <span>Let us know how to get back to you</span>
            </div>
            <Formik
              enableReinitialize={true}
              initialValues={formValue}
              validationSchema={contactUsSchema}
              onSubmit={(values, { resetForm }) => {
                setLoading(true);
                contactUs(values)
                  .then((data) => {
                    toast.success("Successfully submitted!");
                    setLoading(false);
                    resetForm();
                  })
                  .then((err) => {
                    console.log(err);
                    setLoading(false);
                  });
              }}>
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="full-name">Full Name *</label>
                          <input
                            type="text"
                            className={inputError(errors.name, touched.name)}
                            value={values.name}
                            name="name"
                            id="full-name"
                            placeholder="Enter Your Full Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.name} touched={touched.name} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email"
                            className={inputError(errors.email, touched.email)}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.email} touched={touched.email} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="subject">Subject *</label>
                          <input
                            type="text"
                            id="subject"
                            placeholder="Enter Your Subject"
                            className={inputError(errors.subject, touched.subject)}
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.subject} touched={touched.subject} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="comments">Comments / Questions *</label>
                          <textarea
                            id="comments"
                            name="comment"
                            placeholder="comments..."
                            className={inputError(errors.comment, touched.comment)}
                            value={values.comment}
                            onChange={handleChange}
                            onBlur={handleBlur}></textarea>
                          <ErrorText error={errors.comment} touched={touched.comment} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-purple submit-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
