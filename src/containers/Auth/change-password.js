import React from "react";

import "../../assets/css/change-password.css";
import "../../assets/font-awesome/css/font-awesome.css";
import WhiteLogo from "../../assets/images/top-logo-white.png";

export default function ChangePassword() {
  const showAndHidePassword = () => {
    var inputPassword = document.getElementById("password");
    var eyeIcon = document.getElementById("eye");
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
      eyeIcon.className = "fa fa-eye-slash";
    } else {
      inputPassword.type = "password";
      eyeIcon.className = "fa fa-eye";
    }
  };

  return (
    <div className="change-password">
      <div className="white-top-logo">
        <img alt="logo" src={WhiteLogo} />
      </div>
      <div class="form-content">
        <div class="change-password-heading">
          <h3 class="text-center">Change Password</h3>
          <p class="text-center">Enter your new password to change password</p>
        </div>
        <form id="login-form" class="form" action="#" method="post">
          <div class="form-group password">
            <label for="password">Old Password *</label>
            <input
              id="password"
              type="password"
              class="form-control"
              name="password"
              placeholder="Enter your Old Password"
              required
            />
            <span
              onClick={() => showAndHidePassword()}
              id="eye"
              toggle="#password"
              class="fa fa-eye"></span>
          </div>
          <div class="form-group password">
            <label for="password">New Password *</label>
            <input
              id="password"
              type="password"
              class="form-control"
              name="password"
              placeholder="Enter your New Password"
              required
            />
            <span
              onClick={() => showAndHidePassword()}
              id="eye"
              toggle="#password"
              class="fa fa-eye"></span>
          </div>
          <div class="form-group password">
            <label for="password">Confirm Password *</label>
            <input
              id="password"
              type="password"
              class="form-control"
              name="password"
              placeholder="Enter your Confirm Password"
              required
            />
            <span
              onClick={() => showAndHidePassword()}
              id="eye"
              toggle="#password"
              class="fa fa-eye"></span>
            <small className="error-text">
              The password that you've entered is incorrect
            </small>
          </div>
          <button type="button" class="btn btn-purple change-password-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
