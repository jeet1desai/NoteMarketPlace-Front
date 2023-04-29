export const showAndHidePassword = (labelId, eyeId) => {
  var inputPassword = document.getElementById(labelId);
  var eyeIcon = document.getElementById(eyeId);
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    eyeIcon.className = "fa fa-eye-slash";
  } else {
    inputPassword.type = "password";
    eyeIcon.className = "fa fa-eye";
  }
};
