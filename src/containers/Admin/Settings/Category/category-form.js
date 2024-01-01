import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { categoryTypeSchema } from "../../../../utils/schema";
import ErrorText, { inputError } from "../../../../components/Error";
import Loader from "../../../../components/Loader";
import { useParams } from "react-router-dom";
import { createCategoryAction, getCategoryAction, updateCategoryAction } from "../../../../store/Configuration/configActions";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, category } = useSelector((state) => state.configReducer);

  const [formValue, setFormValue] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getCategoryAction(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (category) {
      setFormValue({
        name: category.name,
        description: category.description,
      });
    }
  }, [category]);

  return (
    <div className="add-category">
      <Loader loading={loading} />
      <div className="container">
        <div className="add-form">
          <div className="page-title">
            <p>{id ? "Edit" : "Add"} Category</p>
          </div>
          <div className="row">
            <div className="col-6">
              <Formik
                enableReinitialize={true}
                initialValues={formValue}
                validationSchema={categoryTypeSchema}
                onSubmit={(values, { resetForm }) => {
                  if (id) {
                    dispatch(updateCategoryAction(id, values));
                  } else {
                    dispatch(createCategoryAction(values));
                    resetForm();
                  }
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
                          className={inputError(errors.name, touched.name)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          name="name"
                        />
                        <ErrorText error={errors.name} touched={touched.name} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Description *</label>
                        <textarea
                          id="description"
                          name="description"
                          placeholder="Write Your Description ..."
                          className={inputError(errors.description, touched.description)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}></textarea>
                        <ErrorText error={errors.description} touched={touched.description} />
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

export default CategoryForm;
