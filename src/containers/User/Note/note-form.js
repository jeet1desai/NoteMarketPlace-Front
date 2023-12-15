import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useParams, useHistory } from "react-router-dom";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "../../../assets/css/add-note.css";
import ErrorText, { inputError, uploadError } from "../../../components/Error";
import { noteSchema } from "../../../utils/schema";
import { getUserCategoryListAction, getUserCountryListAction, getUserNoteTypeListAction } from "../../../store/Configuration/configActions";
import Loader from "../../../components/Loader";
import { uploadDocument } from "../../../utils/upload";
import { createNoteAction, fetchNoteAction, updateNoteAction } from "../../../store/UserNotes/userNoteActions";

const NoteForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const { loading: config_loading, country_list, category_list, note_type_list } = useSelector((state) => state.configReducer);
  const { loading: note_loading, note } = useSelector((state) => state.userNoteReducer);

  const [noteId, setNoteId] = useState(null);
  const [status, setStatus] = useState(1);
  const [loading, setLoading] = useState(false);

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
    file_size: 0,
    is_paid: false,
    selling_price: 0,
    note_type: "",
    number_of_pages: 0,
    country: "",
    university_name: "",
    course: "",
    course_code: "",
    professor: "",
  });

  useEffect(() => {
    if (id) {
      setNoteId(id);
      dispatch(fetchNoteAction(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getUserCountryListAction());
    dispatch(getUserCategoryListAction());
    dispatch(getUserNoteTypeListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (note) {
      setFormValue({
        title: note.title,
        description: note.description,
        category: note.category?.id || "",

        display_picture: note.display_picture,
        display_picture_note: null,
        notes_preview: note.notes_preview,
        notes_preview_note: null,
        file: note.file,
        file_note: null,

        file_name: note.file_name,
        file_size: note.file_size,
        is_paid: note.is_paid,
        selling_price: note.selling_price,
        note_type: note.note_type?.id || "",
        number_of_pages: note.number_of_pages,
        country: note.country?.id || "",
        university_name: note.university_name,
        course: note.course,
        course_code: note.course_code,
        professor: note.professor,
      });
      setStatus(note.status);
    }
  }, [note]);

  return (
    <div className="add-notes">
      <Loader loading={loading || config_loading || note_loading} />

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
            onSubmit={async (value, { resetForm }) => {
              setLoading(true);
              let note_value = { ...value };
              if (value.display_picture_note) {
                const url = await uploadDocument("image", value.display_picture_note);
                note_value["display_picture"] = url;
              }
              if (value.notes_preview_note) {
                const url = await uploadDocument("preview", value.notes_preview_note);
                note_value["notes_preview"] = url;
              }
              if (value.file_note) {
                const url = await uploadDocument("note", value.file_note);
                note_value["file"] = url;
              }
              delete note_value.display_picture_note;
              delete note_value.notes_preview_note;
              delete note_value.file_note;

              if (noteId) {
                setLoading(false);
                dispatch(updateNoteAction(noteId, status, note_value));
                history.push("/sell-note/dashboard");
              } else {
                setLoading(false);
                dispatch(createNoteAction(status, note_value));
                resetForm();
              }
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
                            {category_list.map((category) => {
                              return (
                                <option value={category.id} key={category.id}>
                                  {category.name}
                                </option>
                              );
                            })}
                          </select>
                          <ErrorText error={errors.category} touched={touched.category} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-group">
                            <label htmlFor="display-picture">Display Picture</label>
                            <div className={uploadError(errors.display_picture_note, touched.display_picture_note)}>
                              <input
                                type="file"
                                id="display-picture"
                                className="upload"
                                name="display_picture_note"
                                onChange={(e) => setFieldValue("display_picture_note", e.target.files[0])}
                                onBlur={handleBlur}
                                accept="image/*"
                              />
                            </div>
                            {values.display_picture_note ? (
                              <span className="file-info">{values.display_picture_note.name}</span>
                            ) : (
                              <span className="file-info">{values.display_picture}</span>
                            )}
                            <ErrorText error={errors.display_picture_note} touched={touched.display_picture_note} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-group">
                            <label htmlFor="upload-notes">Upload Notes *</label>
                            <div className={uploadError(errors.file_note, touched.file_note)}>
                              <input
                                className="upload"
                                name="file_note"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  setFieldValue("file_name", file.name);
                                  setFieldValue("file_size", file.size);
                                  setFieldValue("file_note", file);
                                }}
                                onBlur={handleBlur}
                                type="file"
                                id="upload-notes"
                                accept="application/pdf"
                              />
                            </div>
                            {values.file_note ? (
                              <span className="file-info">{values.file_note.name}</span>
                            ) : (
                              <span className="file-info">{values.file}</span>
                            )}
                            <ErrorText error={errors.file_note} touched={touched.file_note} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="type">Type</label>
                          <br />
                          <select
                            id="type"
                            className={inputError(errors.note_type, touched.note_type)}
                            value={values.note_type}
                            name="note_type"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option value="">Select Your Note Type</option>
                            {note_type_list.map((type) => {
                              return (
                                <option value={type.id} key={type.id}>
                                  {type.name}
                                </option>
                              );
                            })}
                          </select>
                          <ErrorText error={errors.note_type} touched={touched.note_type} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="nop">Number of Pages</label>
                          <input
                            className={inputError(errors.number_of_pages, touched.number_of_pages)}
                            value={values.number_of_pages}
                            name="number_of_pages"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="number"
                            id="nop"
                            placeholder="Enter Your Note's Number of Pages"
                          />
                          <ErrorText error={errors.number_of_pages} touched={touched.number_of_pages} />
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
                          <ErrorText error={errors.description} touched={touched.description} />
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
                          <label htmlFor="country">Country</label>
                          <br />
                          <select
                            id="country"
                            className={inputError(errors.country, touched.country)}
                            value={values.country}
                            name="country"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option value="">Select Your Country</option>
                            {country_list.map((country) => {
                              return (
                                <option value={country.id} key={country.id}>
                                  {country.name}
                                </option>
                              );
                            })}
                          </select>
                          <ErrorText error={errors.country} touched={touched.country} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="institution">Institution Name</label>
                          <input
                            className={inputError(errors.university_name, touched.university_name)}
                            value={values.university_name}
                            name="university_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="institution"
                            placeholder="Enter Your Institution Name"
                          />
                          <ErrorText error={errors.university_name} touched={touched.university_name} />
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
                            className={inputError(errors.course, touched.course)}
                            value={values.course}
                            name="course"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="course-name"
                            placeholder="Enter Your Course Name"
                          />
                          <ErrorText error={errors.course} touched={touched.course} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="course-code">Course Code</label>
                          <input
                            className={inputError(errors.course_code, touched.course_code)}
                            value={values.course_code}
                            name="course_code"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="course-code"
                            placeholder="Enter Your Course Code"
                          />
                          <ErrorText error={errors.course_code} touched={touched.course_code} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="professor">Professor / Lecturer</label>
                          <input
                            className={inputError(errors.professor, touched.professor)}
                            value={values.professor}
                            name="professor"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id="professor"
                            placeholder="Enter Your Professor Name"
                          />
                          <ErrorText error={errors.professor} touched={touched.professor} />
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
                          <RadioGroup
                            row
                            aria-label="sellType"
                            value={values.is_paid}
                            name="is_paid"
                            onChange={(e) => {
                              setFieldValue("is_paid", e.target.value === "true");
                              if (e.target.value === "false") {
                                setFieldValue("selling_price", 0);
                              }
                            }}
                            onBlur={handleBlur}>
                            <FormControlLabel value={false} control={<Radio size="large" />} label="Free" />
                            <FormControlLabel value={true} control={<Radio size="large" />} label="Paid" />
                          </RadioGroup>
                          <ErrorText error={errors.is_paid} touched={touched.is_paid} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="sell-price">Sell Price *</label>
                          <input
                            className={inputError(errors.selling_price, touched.selling_price)}
                            value={values.selling_price}
                            name="selling_price"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="number"
                            id="sell-price"
                            placeholder="Enter Your Sell Price"
                            disabled={!values.is_paid}
                          />
                          <ErrorText error={errors.selling_price} touched={touched.selling_price} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="note-preview">Note Preview *</label>
                          <div className={uploadError(errors.notes_preview_note, touched.notes_preview_note)}>
                            <input
                              className="upload"
                              name="notes_preview_note"
                              onChange={(e) => setFieldValue("notes_preview_note", e.target.files[0])}
                              onBlur={handleBlur}
                              type="file"
                              id="upload-notes"
                              accept="application/pdf"
                            />
                          </div>
                          {values.notes_preview_note ? (
                            <span className="file-info">{values.notes_preview_note.name}</span>
                          ) : (
                            <span className="file-info">{values.notes_preview}</span>
                          )}
                          <ErrorText error={errors.notes_preview_note} touched={touched.notes_preview_note} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-note-button">
                    <button
                      type="button"
                      className="btn save-btn btn-purple"
                      onClick={(e) => {
                        setStatus(1);
                        handleSubmit();
                      }}>
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn publish-btn btn-purple"
                      onClick={(e) => {
                        setStatus(2);
                        handleSubmit();
                      }}>
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
