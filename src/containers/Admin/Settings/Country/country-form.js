import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCountryAction, getCountryAction, updateCountryAction } from "../../../../store/Configuration/configActions";
import Loader from "../../../../components/Loader";
import { countrySchema } from "../../../../utils/schema";
import ErrorText, { inputError } from "../../../../components/Error";

const CountryForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, country } = useSelector((state) => state.configReducer);

  const [formValue, setFormValue] = useState({
    name: "",
    code: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getCountryAction(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (country) {
      setFormValue({
        name: country.name,
        code: country.code,
      });
    }
  }, [country]);

  return (
    <div className="add-country">
      <Loader loading={loading} />
      <div className="container">
        <div className="add-form">
          <div className="page-title">
            <p>{id ? "Edit" : "Add"} Country</p>
          </div>
          <div className="row">
            <div className="col-6">
              <Formik
                enableReinitialize={true}
                initialValues={formValue}
                validationSchema={countrySchema}
                onSubmit={(values, { resetForm }) => {
                  if (id) {
                    dispatch(updateCountryAction(id, values));
                  } else {
                    dispatch(createCountryAction(values));
                    resetForm();
                  }
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                  return (
                    <Form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="title">Country Name *</label>
                        <input
                          type="text"
                          id="title"
                          placeholder="Enter Your Country Name "
                          className={inputError(errors.name, touched.name)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          name="name"
                        />
                        <ErrorText error={errors.name} touched={touched.name} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="title">Country Code *</label>
                        <input
                          type="number"
                          id="title"
                          placeholder="Enter Your Country Code"
                          className={inputError(errors.code, touched.code)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.code}
                          name="code"
                        />
                        <ErrorText error={errors.code} touched={touched.code} />
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

export default CountryForm;
