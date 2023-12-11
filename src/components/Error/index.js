import React from "react";

const ErrorText = ({ error, touched }) => {
  if (error && touched) {
    return <small className="error-text">{error}</small>;
  }
  return <></>;
};
export default ErrorText;

export const inputError = (errors, touched) => {
  return `form-control ${errors && touched && "invalid"}`;
};
