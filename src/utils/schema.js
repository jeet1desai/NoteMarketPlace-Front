import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be at least 6 characters")
    .max(24, "Password must be at most 24 characters")
    .matches("(?=.*[a-z])", "Password must be contain at least 1 lower character")
    .matches("(?=.*[A-Z])", "Password must be contain at least 1 upper character")
    .matches("(?=.*[0-9])", "Password must be contain at least 1 digit character")
    .matches("(?=.*?[#?!@$%^&*-])", "Password must be contain at least 1 special character"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

export const changePasswordSchema = Yup.object().shape({
  old_password: Yup.string().required("Required"),
  new_password: Yup.string()
    .required("Required")
    .min(6, "Password must be at least 6 characters")
    .max(24, "Password must be at most 24 characters")
    .matches("(?=.*[a-z])", "Password must be contain at least 1 lower character")
    .matches("(?=.*[A-Z])", "Password must be contain at least 1 upper character")
    .matches("(?=.*[0-9])", "Password must be contain at least 1 digit character")
    .matches("(?=.*?[#?!@$%^&*-])", "Password must be contain at least 1 special character"),
  confirm_password: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("new_password")], "Passwords must match"),
});

export const userProfileSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Enter valid"),
  date_of_birth: Yup.string().required("Required").nullable(),
  gender: Yup.string().required("Required"),
  phone_country_code: Yup.string().required("Required"),
  phone_number: Yup.number().required("Required").positive("Must be a positive").integer("Must be a number"),
  address_line_one: Yup.string().required("Required").nullable(),
  address_line_two: Yup.string().nullable(),
  city: Yup.string().required("Required").nullable(),
  state: Yup.string().required("Required").nullable(),
  zip_code: Yup.number().required("Required").nullable(),
  country: Yup.string().required("Required"),
  university: Yup.string().nullable(),
  college: Yup.string().nullable(),
});

export const contactUsSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Enter valid email"),
  subject: Yup.string().required("Required"),
  comment: Yup.string().required("Required"),
});

export const noteSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  notes_preview: Yup.string(),
  notes_preview_note: Yup.string()
    .nullable()
    .test({
      name: "isNotEmpty",
      message: "Required",
      test: function (value) {
        const { notes_preview } = this.parent;
        const notes_preview_note = value;
        if ((notes_preview === "" || notes_preview === undefined) && notes_preview_note === null) {
          return false;
        }
        return true;
      },
    }),
  file: Yup.string(),
  file_note: Yup.string()
    .nullable()
    .test({
      name: "isNotEmpty",
      message: "Required",
      test: function (value) {
        const { file } = this.parent;
        const file_note = value;
        if ((file === "" || file === undefined) && file_note === null) {
          return false;
        }
        return true;
      },
    }),
});

export const configSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Valid email").nullable(),
  phone_number: Yup.string().required("Required").nullable(),
  facebook_url: Yup.string().nullable(),
  twitter_url: Yup.string().nullable(),
  linkedIn_url: Yup.string().nullable(),
  profile_picture: Yup.string(),
  profile_picture_img: Yup.string()
    .nullable()
    .test({
      name: "isNotEmpty",
      message: "Required",
      test: function (value) {
        const { profile_picture } = this.parent;
        const profile_picture_img = value;
        if ((profile_picture === "" || profile_picture === undefined) && profile_picture_img === null) {
          return false;
        }
        return true;
      },
    }),
  note_picture: Yup.string(),
  note_picture_img: Yup.string()
    .nullable()
    .test({
      name: "isNotEmpty",
      message: "Required",
      test: function (value) {
        const { note_picture } = this.parent;
        const note_picture_img = value;
        if ((note_picture === "" || note_picture === undefined) && note_picture_img === null) {
          return false;
        }
        return true;
      },
    }),
});

export const adminSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Enter valid"),
  phone_country_code: Yup.string().required("Required"),
  phone_number: Yup.number().required("Required").positive("Must be a positive").integer("Must be a number"),
});

export const categoryTypeSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

export const countrySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  code: Yup.number().required("Required").positive("Must be a positive").integer("Must be a number"),
});

export const adminProfileSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Enter valid"),
});

export const reviewSchema = Yup.object().shape({
  rating: Yup.number().required("Required").min(1, "Required"),
  comment: Yup.string().required("Required"),
});

export const rejectNoteSchema = Yup.object().shape({
  remark: Yup.string().required("Required"),
});

export const spamNoteSchema = Yup.object().shape({
  remarks: Yup.string().required("Required"),
});
