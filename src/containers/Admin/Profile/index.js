import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import "../../../assets/css/admin-profile.css";
import { useDispatch, useSelector } from "react-redux";
import ErrorText, { inputError } from "../../../components/Error";
import Loader from "../../../components/Loader";
import { getLSUser } from "../../../utils/local";
import { getProfileAction, updateAdminProfileAction } from "../../../store/Profile/profileActions";
import { getUserCountryListAction } from "../../../store/Configuration/configActions";
import { adminProfileSchema } from "../../../utils/schema";
import { uploadDocument } from "../../../utils/upload";

const AdminProfile = () => {
  const dispatch = useDispatch();

  const { loading: config_loading, country_list } = useSelector((state) => state.configReducer);
  const { loading: profile_loading, user } = useSelector((state) => state.profileReducer);

  const [formValue, setFormValue] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localUser = getLSUser();
    if (localUser) {
      dispatch(getProfileAction(localUser.id));
      dispatch(getUserCountryListAction());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      setFormValue({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_country_code: user.phone_country_code?.id || "",
        phone_number: user.phone_number || "",
        profile_picture: user.profile_picture,
        picture_file: null,
      });
    }
  }, [user]);

  return (
    <div className="admin-profile">
      <Loader loading={config_loading || profile_loading || loading} />
      <div className="admin-profile-form">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Formik
                enableReinitialize={true}
                initialValues={formValue}
                validationSchema={adminProfileSchema}
                onSubmit={async (values) => {
                  setLoading(true);
                  let note_value = { ...values };
                  if (values.picture_file) {
                    const url = await uploadDocument("profile", values.picture_file);
                    note_value["profile_picture"] = url;
                  }
                  delete note_value.picture_file;
                  dispatch(updateAdminProfileAction(note_value));
                  setLoading(false);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
                  return (
                    <Form onSubmit={handleSubmit}>
                      <div className="basic-profile-details">
                        <div className="row">
                          <div className="page-title">
                            <p>My Profile</p>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="first-name">First Name *</label>
                              <input
                                type="text"
                                id="first-name"
                                placeholder="Enter Your First Name"
                                className={inputError(errors.first_name, touched.first_name)}
                                value={values.first_name}
                                name="first_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorText error={errors.first_name} touched={touched.first_name} />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="last-name">Last Name *</label>
                              <input
                                type="text"
                                id="last-name"
                                placeholder="Enter Your Last Name"
                                className={inputError(errors.last_name, touched.last_name)}
                                value={values.last_name}
                                name="last_name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorText error={errors.last_name} touched={touched.last_name} />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="email">Email *</label>
                              <input
                                type="text"
                                id="email"
                                placeholder="Enter Your email"
                                className={inputError(errors.email, touched.email)}
                                value={values.email}
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                readOnly
                                disabled
                              />
                              <ErrorText error={errors.email} touched={touched.email} />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="phone">Phone No</label>
                              <br />
                              <div className="phone-number">
                                <select
                                  className={inputError(errors.phone_country_code, touched.phone_country_code)}
                                  value={values.phone_country_code}
                                  name="phone_country_code"
                                  onChange={handleChange}
                                  onBlur={handleBlur}>
                                  <option value="">Code</option>
                                  {country_list.map((country) => (
                                    <option value={country.id} key={country.id}>
                                      +{country.code}
                                    </option>
                                  ))}
                                </select>
                                <input
                                  type="number"
                                  id="phone"
                                  placeholder="Enter Your Phone No"
                                  className={inputError(errors.phone_number, touched.phone_number)}
                                  value={values.phone_number}
                                  name="phone_number"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                              </div>
                              {errors.phone_country_code ? (
                                <ErrorText error={errors.phone_country_code} touched={touched.phone_country_code} />
                              ) : (
                                <ErrorText error={errors.phone_number} touched={touched.phone_number} />
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="profile-pic">Profile Picture</label>
                              <div className="upload-box">
                                <input
                                  type="file"
                                  className="upload"
                                  id="profile-pic"
                                  name="picture_file"
                                  onChange={(e) => setFieldValue("picture_file", e.target.files[0])}
                                  onBlur={handleBlur}
                                />
                              </div>
                              {values.picture_file ? (
                                <span className="file-info">{values.picture_file.name}</span>
                              ) : (
                                <a className="file-info" href={values.profile_picture} target="_blank" rel="noreferrer">
                                  {values.profile_picture}
                                </a>
                              )}
                              <ErrorText error={errors.picture_file} touched={touched.picture_file} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="admin-profile-button">
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
    </div>
  );
};

export default AdminProfile;
