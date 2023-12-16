import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import "../../../assets/css/manage-system-config.css";
import { getAdminConfigAction, updateAdminConfigAction } from "../../../store/Configuration/configActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import { configSchema } from "../../../utils/schema";
import ErrorText, { inputError, uploadError } from "../../../components/Error";
import { uploadDocument } from "../../../utils/upload";

const SystemConfig = () => {
  const dispatch = useDispatch();
  const { loading: config_loading, config } = useSelector((state) => state.configReducer);

  const [formValue, setFormValue] = useState({
    email: "",
    phone_number: "",
    facebook_url: "",
    twitter_url: "",
    linkedIn_url: "",
    profile_picture: "",
    profile_picture_img: null,
    note_picture: "",
    note_picture_img: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAdminConfigAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (config) {
      setFormValue({
        email: config.email,
        phone_number: config.phone_number,
        facebook_url: config.facebook_url,
        twitter_url: config.twitter_url,
        linkedIn_url: config.linkedIn_url,
        profile_picture: config.profile_picture || "",
        profile_picture_img: null,
        note_picture: config.note_picture || "",
        note_picture_img: null,
      });
    }
  }, [config]);

  return (
    <div className="manage-system-config">
      <Loader loading={loading || config_loading} />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="page-title">
              <p>Manage System Configuration</p>
            </div>
            <Formik
              enableReinitialize={true}
              initialValues={formValue}
              validationSchema={configSchema}
              onSubmit={async (value, { resetForm }) => {
                setLoading(true);
                let config_value = { ...value };
                if (value.profile_picture_img) {
                  const url = await uploadDocument("config", value.profile_picture_img);
                  config_value["profile_picture"] = url;
                }
                if (value.note_picture_img) {
                  const url = await uploadDocument("config", value.note_picture_img);
                  config_value["note_picture"] = url;
                }
                delete config_value.note_picture_img;
                delete config_value.profile_picture_img;
                setLoading(false);
                dispatch(updateAdminConfigAction(config_value));
              }}>
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="title">Support Email Address *</label>
                      <input
                        type="text"
                        id="title"
                        placeholder="Enter Your Support Email Address"
                        className={inputError(errors.email, touched.email)}
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorText error={errors.email} touched={touched.email} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Support Phone No *</label>
                      <input
                        type="text"
                        id="title"
                        placeholder="Enter Your Support Phone No"
                        className={inputError(errors.phone_number, touched.phone_number)}
                        value={values.phone_number}
                        name="phone_number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorText error={errors.phone_number} touched={touched.phone_number} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Facebook URL</label>
                      <input
                        type="text"
                        id="title"
                        placeholder="Enter Your Facebook URL"
                        className={inputError(errors.facebook_url, touched.facebook_url)}
                        value={values.facebook_url}
                        name="facebook_url"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorText error={errors.facebook_url} touched={touched.facebook_url} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Twitter URL</label>
                      <input
                        type="text"
                        id="title"
                        placeholder="Enter Your Twitter URL"
                        className={inputError(errors.twitter_url, touched.twitter_url)}
                        value={values.twitter_url}
                        name="twitter_url"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorText error={errors.twitter_url} touched={touched.twitter_url} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Linkedin URL</label>
                      <input
                        type="text"
                        id="title"
                        placeholder="Enter Your Linkedin URL"
                        className={inputError(errors.linkedIn_url, touched.linkedIn_url)}
                        value={values.linkedIn_url}
                        name="linkedIn_url"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorText error={errors.linkedIn_url} touched={touched.linkedIn_url} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="profile-pic">Default Image htmlFor Notes (if seller do not upload) *</label>
                      <div className={uploadError(errors.note_picture_img, touched.note_picture_img)}>
                        <input
                          type="file"
                          className="upload"
                          id="profile-pic"
                          name="note_picture_img"
                          onChange={(e) => setFieldValue("note_picture_img", e.target.files[0])}
                          onBlur={handleBlur}
                          accept="image/*"
                        />
                      </div>
                      {values.note_picture_img ? (
                        <span className="file-info">{values.note_picture_img.name}</span>
                      ) : (
                        <span className="file-info">{values.note_picture}</span>
                      )}
                      <ErrorText error={errors.note_picture_img} touched={touched.note_picture_img} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="profile-pic">Default Profile Picture (if seller do not upload) *</label>
                      <div className={uploadError(errors.profile_picture_img, touched.profile_picture_img)}>
                        <input
                          type="file"
                          className="upload"
                          id="profile-pic"
                          name="profile_picture_img"
                          onChange={(e) => setFieldValue("profile_picture_img", e.target.files[0])}
                          onBlur={handleBlur}
                          accept="image/*"
                        />
                      </div>
                      {values.profile_picture_img ? (
                        <span className="file-info">{values.profile_picture_img.name}</span>
                      ) : (
                        <span className="file-info">{values.profile_picture}</span>
                      )}
                      <ErrorText error={errors.profile_picture_img} touched={touched.profile_picture_img} />
                    </div>
                    <div className="user-profile-button">
                      <button type="submit" className="btn submit-btn btn-purple">
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemConfig;
