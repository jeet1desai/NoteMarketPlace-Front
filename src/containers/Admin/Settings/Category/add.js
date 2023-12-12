import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Button } from "@mui/material";

import "../../../../assets/css/add-category.css";

import { addCategoryAction } from "../../../../store/AdminCategory/categoryActions";

const AddCategory = () => {
  const loading = useSelector((state) => state.categoryReducer.loading);
  const dispatch = useDispatch();

  const [category, setCategory] = useState({
    name: "",
    description: "",
  });

  const categorySchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });

  return (
    <div className="add-category">
      <div className="container">
        <div className="add-form">
          <div className="page-title">
            <p>Add Category</p>
          </div>
          <div className="row">
            <div className="col-6">
              <Formik
                initialValues={category}
                validationSchema={categorySchema}
                onSubmit={(values, { resetForm }) => {
                  dispatch(addCategoryAction(values));
                  resetForm();
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                  return (
                    <Form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="title">Category Name *</label>
                        <input
                          type="text"
                          id="title"
                          placeholder="Enter Your Category Name"
                          className={`form-control ${errors.name && touched.name && "invalid"}`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          name="name"
                        />
                        {errors.name && touched.name && <small className="error-text">{errors.name}</small>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Description *</label>
                        <textarea
                          id="description"
                          name="description"
                          placeholder="Write Your Description ..."
                          className={`form-control ${errors.description && touched.description && "invalid"}`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}></textarea>
                        {errors.description && touched.description && <small className="error-text">{errors.description}</small>}
                      </div>
                      <Button
                        disabled={loading}
                        startIcon={loading && <CircularProgress color="inherit" size={24} />}
                        type="submit"
                        className="btn submit-btn btn-purple">
                        Submit
                      </Button>
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

export default AddCategory;
