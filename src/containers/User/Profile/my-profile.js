import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getProfileAction, updateUserProfileAction } from "../../../store/Profile/profileActions";
import { getUserCountryListAction } from "../../../store/Configuration/configActions";
import { getLSUser } from "../../../utils/local";
import Loader from "../../../components/Loader";
import ErrorText, { inputError } from "../../../components/Error";
import { userProfileSchema } from "../../../utils/schema";
import { uploadDocument } from "../../../utils/upload";

const MyProfile = () => {
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
        date_of_birth: user.date_of_birth ? moment(user.date_of_birth).format("YYYY-MM-DD") : "",
        gender: user.gender || "",
        phone_country_code: user.phone_country_code?.id || "",
        phone_number: user.phone_number || "",
        profile_picture: user.profile_picture,
        picture_file: null,
        address_line_one: user.address_line_one || "",
        address_line_two: user.address_line_two || "",
        city: user.city || "",
        state: user.state || "",
        zip_code: user.zip_code || "",
        country: user.country?.id || "",
        university: user.university || "",
        college: user.college || "",
      });
    }
  }, [user]);

  return (
    <div className="user-profile">
      <Loader loading={config_loading || profile_loading || loading} />

      <div className="page-top">
        <div className="page-top-title">
          <p>User Profile</p>
        </div>
      </div>

      <div className="user-profile-form">
        <div className="container">
          <Formik
            enableReinitialize={true}
            initialValues={formValue}
            validationSchema={userProfileSchema}
            onSubmit={async (values) => {
              setLoading(true);
              let note_value = { ...values };
              if (values.picture_file) {
                const url = await uploadDocument("profile", values.picture_file);
                note_value["profile_picture"] = url;
              }
              delete note_value.picture_file;
              dispatch(updateUserProfileAction(note_value));
              setLoading(false);
            }}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <div className="basic-profile-details">
                    <div className="row">
                      <div className="page-title">
                        <p>Basic Profile Details</p>
                      </div>
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                            disabled
                            readOnly
                          />
                          <ErrorText error={errors.email} touched={touched.email} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="dob">Date of Birth *</label>
                          <input
                            type="date"
                            id="dob"
                            className={inputError(errors.date_of_birth, touched.date_of_birth)}
                            value={values.date_of_birth}
                            name="date_of_birth"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            max={moment().format("YYYY-MM-DD")}
                          />
                          <ErrorText error={errors.date_of_birth} touched={touched.date_of_birth} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="gender">Gender *</label>
                          <br />
                          <select
                            id="gender"
                            className={inputError(errors.gender, touched.gender)}
                            value={values.gender}
                            name="gender"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option value="">Select Your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          <ErrorText error={errors.gender} touched={touched.gender} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone">Phone No *</label>
                          <br />
                          <div className="form-group">
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
                      </div>
                      <div className="col-md-6">
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

                  <div className="address-details">
                    <div className="row">
                      <div className="page-title">
                        <p>Address Details</p>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="address1">Address Line 1 *</label>
                          <input
                            type="text"
                            id="address1"
                            placeholder="Enter Your Address"
                            className={inputError(errors.address_line_one, touched.address_line_one)}
                            value={values.address_line_one}
                            name="address_line_one"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.address_line_one} touched={touched.address_line_one} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="address2">Address Line 2</label>
                          <input
                            type="text"
                            id="address2"
                            placeholder="Enter Your Address"
                            className={inputError(errors.address_line_two, touched.address_line_two)}
                            value={values.address_line_two}
                            name="address_line_two"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.address_line_two} touched={touched.address_line_two} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="city">City *</label>
                          <input
                            type="text"
                            id="city"
                            placeholder="Enter Your City"
                            className={inputError(errors.city, touched.city)}
                            value={values.city}
                            name="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.city} touched={touched.city} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="state">State *</label>
                          <input
                            type="text"
                            id="state"
                            placeholder="Enter Your State"
                            className={inputError(errors.state, touched.state)}
                            value={values.state}
                            name="state"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.state} touched={touched.state} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="zipcode">Zipcode *</label>
                          <input
                            type="number"
                            id="zipcode"
                            placeholder="Enter Your Zipcode"
                            className={inputError(errors.zip_code, touched.zip_code)}
                            value={values.zip_code}
                            name="zip_code"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.zip_code} touched={touched.zip_code} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Country *</label>
                          <br />
                          <select
                            className={inputError(errors.country, touched.country)}
                            value={values.country}
                            name="country"
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option value="">Select Your Country</option>
                            {country_list.map((country) => (
                              <option value={country.id} key={country.id}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                          <ErrorText error={errors.country} touched={touched.country} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="collage-university-info">
                    <div className="row">
                      <div className="page-title">
                        <p>University and Collage Information</p>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="university">University</label>
                          <input
                            type="text"
                            id="university"
                            placeholder="Enter Your University"
                            className={inputError(errors.university, touched.university)}
                            value={values.university}
                            name="university"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.university} touched={touched.university} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="collage">Collage</label>
                          <input
                            type="text"
                            id="collage"
                            placeholder="Enter Your Collage"
                            className={inputError(errors.college, touched.college)}
                            value={values.college}
                            name="college"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorText error={errors.college} touched={touched.college} />
                        </div>
                      </div>
                    </div>
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
  );
};

export default MyProfile;
