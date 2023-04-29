import React, { useState, useEffect } from "react";

import "../../assets/css/email-verify.css";
import PurpleLogo from "../../assets/images/top-logo-purple.png";

import { getLSUser } from "../../utils/local";

const EmailVerification = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const cUser = getLSUser();
    const name = cUser ? `${cUser.first_name} ${cUser.last_name}` : "";
    setName(name);
  }, []);

  return (
    <div className="email-verify-page">
      <div className="form-content">
        <div className="text-center">
          <img alt="logo" src={PurpleLogo} />
        </div>
        <div className="email-verify-heading">
          <h3>Email Verification</h3>
          <p>
            <b>Dear, {name}</b>
          </p>
          <span>Thanks for Signing up!</span>
          <br />
          <span>
            Please verify the email address via clicking on the link we sent you
            via email.
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
