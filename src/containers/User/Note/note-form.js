import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useParams, useHistory } from "react-router-dom";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import "../../../assets/css/add-note.css";
import ErrorText, { inputError, uploadError } from "../../../components/Error";
import { noteSchema } from "../../../utils/schema";

const NoteForm = () => {
  const params = useParams();
  const history = useHistory();

  const [noteId, setNoteId] = useState(null);
  const [isPublishing, setPublish] = useState(false);

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    category: "",
    display_picture: "",
    display_picture_note: null,
    notes_preview: "",
    notes_preview_note: null,
    file: "",
    file_note: null,
    file_name: "",
    file_size: "",
    is_paid: "",
    selling_price: "",
    note_type: "",
    number_of_pages: "",
    country: "",
    university_name: "",
    course: "",
    course_code: "",
    professor: "",
  });

  useEffect(() => {
    const { id } = params;
    setNoteId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="add-notes">
      <div className="page-top">
        <div className="page-top-title">
          <p>Add Note</p>
        </div>
      </div>

      <div className="add-note-form">
        <div className="container">
          <Formik
            enableReinitialize={true}
            initialValues={formValue}
            validationSchema={noteSchema}
            onSubmit={(value) => {
              if (noteId) {
                console.log("edit Note");
              } else {
                console.log("create Note");
              }
              console.log(isPublishing, value);
            }}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
              return (
                <Form>
                  <div className="basic-note-detail">
                    <div className="row">
                      <div className="page-title">
                        <p>Basic Note Details</p>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="title">Title *</label>
                          <input
                            type="text"
                            id="title"
                            placeholder="Enter Your Note Title"
                            className={inputError(errors.title, touched.title)}
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.title} touched={touched.title} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="category">Category *</label>
                          <br />
                          <select
                            id="category"
                            className={inputError(errors.category, touched.category)}
                            value={values.category}
                            name="category"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option value="">Select Your Category</option>
                            <option value="">Mustard</option>
                            <option value="">Ketchup</option>
                            <option value="">Relish</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-group">
                            <label htmlFor="display-picture">Display Picture</label>
                            <div className="upload-box">
                              <input
                                type="file"
                                id="display-picture"
                                className={uploadError(errors.display_picture_note, touched.display_picture_note)}
                                name="display_picture_note"
                                onChange={(e) => setFieldValue("display_picture_note", e.target.files[0])}
                                onBlur={handleBlur}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-group">
                            <label htmlFor="upload-notes">Upload Notes *</label>
                            <div className="upload-box">
                              <input
                                className={uploadError(errors.file_note, touched.file_note)}
                                name="file_note"
                                onChange={(e) => setFieldValue("file_note", e.target.files[0])}
                                onBlur={handleBlur}
                                type="file"
                                id="upload-notes"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="type">Type *</label>
                          <input
                            className={inputError(errors.title, touched.title)}
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="type"
                            placeholder="Enter Your Note Type"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="nop">Number of Pages *</label>
                          <input
                            className={inputError(errors.title, touched.title)}
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="number"
                            id="nop"
                            placeholder="Enter Your Note's Number of Pages"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="description">Description *</label>
                          <textarea
                            id="description"
                            placeholder="Enter your Description..."
                            className={inputError(errors.description, touched.description)}
                            value={values.description}
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}></textarea>
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
                        <div className="form-group">
                          <label htmlFor="country">Country *</label>
                          <br />
                          <select
                            id="country"
                            className={inputError(errors.title, touched.title)}
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option value="">Select Your Country</option>
                            <option value="">Mustard</option>
                            <option value="">Ketchup</option>
                            <option value="">Relish</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="institution">Institution Name</label>
                          <input
                            className={inputError(errors.title, touched.title)}
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="institution"
                            placeholder="Enter Your Institution Name"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="course-name">Course Name</label>
                          <input
                            className={inputError(errors.title, touched.title)}
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="course-name"
                            placeholder="Enter Your Course Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="course-code">Course Code</label>
                          <input
                            className={inputError(errors.title, touched.title)}
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="course-code"
                            placeholder="Enter Your Course Code"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="professor">Professor / Lecturer</label>
                          <input
                            className={inputError(errors.title, touched.title)}
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="professor"
                            placeholder="Enter Your Professor Name"
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Sell For *</label>
                          <RadioGroup row aria-label="sellType" name="row-radio-buttons-group">
                            <FormControlLabel value="false" control={<Radio size="large" />} label="Free" />
                            <FormControlLabel value="true" control={<Radio size="large" />} label="Paid" />
                          </RadioGroup>
                        </div>
                        <div className="form-group">
                          <label htmlFor="sell-price">Sell Price *</label>
                          <input
                            className={inputError(errors.title, touched.title)}
                            value={values.title}
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="number"
                            id="sell-price"
                            placeholder="Enter Your Sell Price"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="note-preview">Note Preview *</label>
                          <div className="upload-box">
                            <input
                              // className={inputError(
                              //   errors.title,
                              //   touched.title
                              // )}
                              value={values.title}
                              name="title"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="file"
                              className="upload"
                              id="note-preview"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="add-note-button">
                    <button type="save" className="btn save-btn btn-purple" onClick={handleSubmit}>
                      Save
                    </button>
                    <button type="save" className="btn publish-btn btn-purple" onClick={handleSubmit}>
                      Publish
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
