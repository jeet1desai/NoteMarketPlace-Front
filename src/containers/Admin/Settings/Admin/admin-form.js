import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import "../../../../assets/css/add-admin.css";
import {
  createAdminAction,
  getAdminAction,
  getUserCountryListAction,
  updateAdminAction,
} from "../../../../store/Configuration/configActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../../../components/Loader";
import { adminSchema } from "../../../../utils/schema";
import ErrorText, { inputError } from "../../../../components/Error";

const AddAdmin = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, country_list, admin } = useSelector((state) => state.configReducer);

  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_country_code: "",
    phone_number: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getAdminAction(id));
    }
    dispatch(getUserCountryListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (admin) {
      setFormValue({
        first_name: admin.first_name,
        last_name: admin.last_name,
        email: admin.email,
        phone_country_code: admin.phone_country_code?.id || "",
        phone_number: admin.phone_number,
      });
    }
  }, [admin]);

  return (
    <div className="add-admin">
      <Loader loading={loading} />
      <div className="container">
        <div className="add-form">
          <div className="page-title">
            <p>{id ? "Edit" : "Add"} Administrator</p>
          </div>
          <div className="row">
            <div className="col-6">
              <Formik
                enableReinitialize={true}
                initialValues={formValue}
                validationSchema={adminSchema}
                onSubmit={(values, { resetForm }) => {
                  if (id) {
                    dispatch(updateAdminAction(id, values));
                  } else {
                    dispatch(createAdminAction(values));
                    resetForm();
                  }
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
                  return (
                    <Form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="title">First Name *</label>
                        <input
                          type="text"
                          id="title"
                          placeholder="Enter Your First Name"
                          className={inputError(errors.first_name, touched.first_name)}
                          value={values.first_name}
                          name="first_name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorText error={errors.first_name} touched={touched.first_name} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="title">Last Name *</label>
                        <input
                          type="text"
                          id="title"
                          placeholder="Enter Your Last Name"
                          className={inputError(errors.last_name, touched.last_name)}
                          value={values.last_name}
                          name="last_name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorText error={errors.last_name} touched={touched.last_name} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="title">Email *</label>
                        <input
                          type="text"
                          id="title"
                          placeholder="Enter Your Email"
                          className={inputError(errors.email, touched.email)}
                          value={values.email}
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={id}
                          readOnly={id}
                        />
                        <ErrorText error={errors.email} touched={touched.email} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone No *</label>
                        <br />
                        <div className="phone-number">
                          <select
                            className={inputError(errors.phone_country_code, touched.phone_country_code)}
                            value={values.phone_country_code}
                            name="phone_country_code"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option value="">Code</option>
                            {country_list.map((country) => (
                              <option value={country.id} key={country.id}>
                                +{country.code}
                              </option>
                            ))}
                          </select>
                          <input
                            type="number"
                            id="phone"
                            placeholder="Enter Your Phone No"
                            className={inputError(errors.phone_number, touched.phone_number)}
                            value={values.phone_number}
                            name="phone_number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </div>
                        {errors.phone_country_code ? (
                          <ErrorText error={errors.phone_country_code} touched={touched.phone_country_code} />
                        ) : (
                          <ErrorText error={errors.phone_number} touched={touched.phone_number} />
                        )}
                      </div>
                      <button type="submit" className="btn submit-btn btn-purple">
                        {id ? "Save" : "Submit"}
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
