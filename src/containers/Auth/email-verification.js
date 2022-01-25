import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

import "../../assets/css/email-verify.css";
import PurpleLogo from "../../assets/images/top-logo-purple.png";

import { getLSUser } from "../../utils/local";
import { sendVerificationMailAction } from "../../store/Auth/authActions";

const EmailVerification = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const loading = useSelector((state) => state.authReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    const cUser = getLSUser();
    const name = cUser ? `${cUser.firstName} ${cUser.lastName}` : "";
    const email = cUser ? cUser.email : "";
    setName(name);
    setEmail(email);
    sendEMail(email);
  }, []);

  const sendEMail = (email) => {
    const emailInfo = {
      email,
    };
    dispatch(sendVerificationMailAction(emailInfo));
  };

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
          <br />
          <br />
          <Button
            type="button"
            variant="contained"
            className="btn email-verify-btn btn-purple"
            onClick={() => sendEMail(email)}
            disabled={loading}
            startIcon={
              loading && <CircularProgress color="inherit" size={24} />
            }>
            Resend Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
