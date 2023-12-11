import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be at least 6 characters")
    .max(24, "Password must be at most 24 characters")
    .matches(
      "(?=.*[a-z])",
      "Password must be contain at least 1 lower character"
    )
    .matches(
      "(?=.*[A-Z])",
      "Password must be contain at least 1 upper character"
    )
    .matches(
      "(?=.*[0-9])",
      "Password must be contain at least 1 digit character"
    )
    .matches(
      "(?=.*?[#?!@$%^&*-])",
      "Password must be contain at least 1 special character"
    ),
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
    .matches(
      "(?=.*[a-z])",
      "Password must be contain at least 1 lower character"
    )
    .matches(
      "(?=.*[A-Z])",
      "Password must be contain at least 1 upper character"
    )
    .matches(
      "(?=.*[0-9])",
      "Password must be contain at least 1 digit character"
    )
    .matches(
      "(?=.*?[#?!@$%^&*-])",
      "Password must be contain at least 1 special character"
    ),
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
  phone_number: Yup.number().required("Required").positive('Must be a positive').integer('Must be a number'),
  address_line_one: Yup.string().required("Required").nullable(),
  address_line_two: Yup.string().nullable(),
  city: Yup.string().required("Required").nullable(),
  state: Yup.string().required("Required").nullable(),
  zip_code: Yup.number().required("Required").nullable(),
  country: Yup.string().required("Required"),
  university: Yup.string().nullable(),
  college: Yup.string().nullable(),
});
