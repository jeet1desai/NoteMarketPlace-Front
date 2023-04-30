import React from "react";

const PasswordEye = ({ inputId, eyeId }) => {
  const showAndHidePassword = () => {
    var inputPassword = document.getElementById(inputId);
    var eyeIcon = document.getElementById(eyeId);
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
      eyeIcon.className = "fa fa-eye-slash";
    } else {
      inputPassword.type = "password";
      eyeIcon.className = "fa fa-eye";
    }
  };

  return (
    <span
      onClick={() => showAndHidePassword()}
      id={eyeId}
      toggle={`#${inputId}`}
      className="fa fa-eye"></span>
  );
};

export default PasswordEye;
