import React from "react";
import { Formik, Form } from "formik";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import "../../../assets/css/add-note.css";

export default function AddNote() {
  return (
    <div className="add-notes">
      <div className="page-top">
        <div class="page-top-title">
          <p>Add Note</p>
        </div>
      </div>

      <div className="add-note-form">
        <div class="container">
          <Formik initialValues={{}} onSubmit={(values) => {}}>
            <Form>
              <div className="basic-note-detail">
                <div className="row">
                  <div className="page-title">
                    <p>Basic Note Details</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="title">Title *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="title"
                        placeholder="Enter Your Note Title"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="category">Category *</label>
                      <br />
                      <select id="category" class="form-control">
                        <option value="">Select Your Category</option>
                        <option value="">Mustard</option>
                        <option value="">Ketchup</option>
                        <option value="">Relish</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <div class="form-group">
                        <label for="display-picture">Display Picture *</label>
                        <div class="upload-box">
                          <input
                            type="file"
                            class="upload"
                            id="display-picture"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <div class="form-group">
                        <label for="upload-notes">Upload Notes *</label>
                        <div class="upload-box">
                          <input type="file" class="upload" id="upload-notes" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="type">Type *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="type"
                        placeholder="Enter Your Note Type"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="nop">Number of Pages *</label>
                      <input
                        type="number"
                        class="form-control"
                        id="nop"
                        placeholder="Enter Your Note's Number of Pages"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="form-group">
                      <label for="description">Description *</label>
                      <textarea
                        id="description"
                        name="description"
                        class="form-control"
                        placeholder="Enter your Description..."
                        required></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="institute-info">
                <div className="row">
                  <div className="page-title">
                    <p>Institution Information</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="country">Country *</label>
                      <br />
                      <select id="country" class="form-control">
                        <option value="">Select Your Country</option>
                        <option value="">Mustard</option>
                        <option value="">Ketchup</option>
                        <option value="">Relish</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="institution">Institution Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="institution"
                        placeholder="Enter Your Institution Name"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="course-detail">
                <div className="row">
                  <div className="page-title">
                    <p>Course Details</p>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="course-name">Course Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="course-name"
                        placeholder="Enter Your Course Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="course-code">Course Code</label>
                      <input
                        type="text"
                        class="form-control"
                        id="course-code"
                        placeholder="Enter Your Course Code"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="professor">Professor / Lecturer</label>
                      <input
                        type="text"
                        class="form-control"
                        id="professor"
                        placeholder="Enter Your Professor Name"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="selling-info">
                <div className="row">
                  <div className="page-title">
                    <p>Selling Information</p>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Sell For *</label>
                      <RadioGroup
                        row
                        aria-label="sellType"
                        name="row-radio-buttons-group">
                        <FormControlLabel
                          value="free"
                          control={<Radio size="large" />}
                          label="Free"
                        />
                        <FormControlLabel
                          value="paid"
                          control={<Radio size="large" />}
                          label="Paid"
                        />
                      </RadioGroup>
                      {/* <label>Sell For *</label>
                        <br />
                        <label>
                          <input
                            class="radio-btn"
                            type="radio"
                            name="optradio"
                          />
                          <span> Free</span>
                        </label>
                        <label>
                          <input
                            class="radio-btn"
                            type="radio"
                            name="optradio"
                            checked
                          />
                          <span> Paid</span>
                        </label> */}
                    </div>
                    <div class="form-group">
                      <label for="sell-price">Sell Price *</label>
                      <input
                        type="number"
                        class="form-control"
                        id="sell-price"
                        placeholder="Enter Your Sell Price"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="note-preview">Note Preview</label>
                      <div class="upload-box">
                        <input type="file" class="upload" id="note-preview" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="add-note-button">
                <button type="button" class="btn save-btn btn-purple">
                  Save
                </button>
                <button type="button" class="btn publish-btn btn-purple">
                  Publish
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
