import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Button } from "@mui/material";
import { useParams } from "react-router-dom";

import "../../../../assets/css/add-category.css";

import { editCategoryAction, getCategoryAction } from "../../../../store/AdminCategory/categoryActions";

export default function EditCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const categorySchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });

  const loading = useSelector((state) => state.categoryReducer.loading);
  const category = useSelector((state) => state.categoryReducer.category);

  useEffect(() => {
    dispatch(getCategoryAction(id));
  }, []);

  return (
    <div className="add-category">
      <div className="container">
        <div className="add-form">
          <div className="page-title">
            <p>Edit Category</p>
          </div>
          <div className="row">
            <div className="col-6">
              <Formik
                enableReinitialize
                initialValues={category}
                validationSchema={categorySchema}
                onSubmit={(values) => {
                  dispatch(editCategoryAction(id, values));
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
}
