import React from "react";
import { Formik, Form } from "formik";

import "../../../../assets/css/add-country.css";

export default function AddCountry() {
  return (
    <div className="add-country">
      <div className="container">
        <div className="add-form">
          <div className="page-title">
            <p>Add Country</p>
          </div>
          <div className="row">
            <div className="col-6">
              <Formik initialValues={{}} onSubmit={(values) => {}}>
                <Form>
                  <div className="form-group">
                    <label for="title">Country Name *</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Your Country Name " required />
                  </div>
                  <div className="form-group">
                    <label for="title">Country Code *</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Your Country Code" required />
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
