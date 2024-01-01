import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import PurpleLogo from "../../assets/images/top-logo-purple.png";
import { verificationMailAction } from "../../store/Auth/authActions";

const SuccessEmailVerification = () => {
  const params = useParams();

  const { loading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = params;
    dispatch(verificationMailAction(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="email-verify-page">
      <div className="form-content">
        <div className="text-center">
          <img alt="logo" src={PurpleLogo} />
        </div>
        <div className="email-verify-heading text-center">
          <div className="mt-3">
            <NavLink to="/login">
              <Button
                type="button"
                variant="contained"
                className="btn email-verify-btn btn-purple"
                disabled={loading}
                startIcon={loading && <CircularProgress color="inherit" size={24} />}>
                Login
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessEmailVerification;
