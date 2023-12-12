import React from "react";
import { Formik, Form } from "formik";

import "../../../../assets/css/add-admin.css";

export default function EditAdmin() {
  return (
    <div className="add-admin">
      <div className="container">
        <div className="add-form">
          <div className="page-title">
            <p>Edit Administrator</p>
          </div>
          <div className="row">
            <div className="col-6">
              <Formik initialValues={{}} onSubmit={(values) => {}}>
                <Form>
                  <div className="form-group">
                    <label for="title">First Name *</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Your First Name" required />
                  </div>
                  <div className="form-group">
                    <label for="title">Last Name *</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Your Last Name" required />
                  </div>
                  <div className="form-group">
                    <label for="title">Email *</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Your Email" required />
                  </div>
                  <div className="form-group">
                    <label for="phone">Phone No</label>
                    <br />
                    <div className="phone-number form-group">
                      <select className="form-control phone-two">
                        <option className="muted">+91</option>
                        <option value="">+01</option>
                        <option value="">+01</option>
                        <option value="">+01</option>
                        <option value="">+01</option>
                      </select>
                      <input type="number" className="form-control phone" id="phone" placeholder="Enter Your Phone No" required />
                    </div>
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
