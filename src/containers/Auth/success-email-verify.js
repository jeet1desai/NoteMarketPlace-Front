import React from "react";

import "../../assets/css/email-verify.css";
import PurpleLogo from "../../assets/images/top-logo-purple.png";

function SuccessEmailVerification() {
  return (
    <div className="email-verify-page">
      <div className="form-content">
        <div className="text-center">
          <img alt="logo" src={PurpleLogo} />
        </div>
        <div className="email-verify-heading text-center">
          <div className="mt-3">
            <button type="button" className="btn email-verify-btn btn-purple">
              Go To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessEmailVerification;
