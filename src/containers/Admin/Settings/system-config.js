import React from "react";
import { Formik, Form } from "formik";

import "../../../assets/css/manage-system-config.css";

export default function SystemConfig() {
  return (
    <div className="manage-system-config">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="page-title">
              <p>Manage System Configuration</p>
            </div>
            <Formik initialValues={{}} onSubmit={(values) => {}}>
              <Form>
                <div className="form-group">
                  <label for="title">Support Email Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Your Support Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="title">Support Phone No *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Your Support Phone No"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="title">Facebook URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Your Facebook URL"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="title">Twitter URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Your Twitter URL"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="title">Linkedin URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter Your Linkedin URL"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="profile-pic">
                    Default Image for Notes (if seller do not upload) *
                  </label>
                  <div className="upload-box">
                    <input type="file" className="upload" id="profile-pic" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="profile-pic">
                    Default Profile Picture (if seller do not upload) *
                  </label>
                  <div className="upload-box">
                    <input type="file" className="upload" id="profile-pic" />
                  </div>
                </div>
                <div classNameName="user-profile-button">
                  <button type="button" className="btn submit-btn btn-purple">
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
