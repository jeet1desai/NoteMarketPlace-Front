import React from "react";

import "../../assets/css/email-verify.css";
import PurpleLogo from "../../assets/images/top-logo-purple.png";

function EmailVerification() {
  return (
    <div className="email-verify-page">
      <div className="form-content">
        <div className="text-center">
          <img alt="logo" src={PurpleLogo} />
        </div>
        <div className="email-verify-heading">
          <h3>Email Verification</h3>
          <p>
            <b>Dear, John</b>
          </p>
          <span>Thanks for Signing up!</span>
          <br />
          <span>
            Please verify the email address via clicking on the link we sent you
            via email.
          </span>
          <br />
          <br />
          <button type="button" className="btn email-verify-btn btn-purple">
            Resend Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
