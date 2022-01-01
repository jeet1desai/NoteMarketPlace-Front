import React from "react";
import { Formik, Form } from "formik";

import "../../../../assets/css/add-category.css";

export default function AddCategory() {
  return (
    <div className="add-category">
      <div className="container">
        <div className="add-form">
          <div className="page-title">
            <p>Add Category</p>
          </div>
          <div className="row">
            <div className="col-6">
              <Formik initialValues={{}} onSubmit={(values) => {}}>
                <Form>
                  <div className="form-group">
                    <label for="title">Category Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter Your Category Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="description">Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-control"
                      placeholder="Write Your Description ..."
                      required></textarea>
                  </div>
                  <button type="button" className="btn submit-btn btn-purple">
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
