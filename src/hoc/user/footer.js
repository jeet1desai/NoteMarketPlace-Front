import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminConfigAction } from "../../store/Configuration/configActions";

const UserFooter = () => {
  const dispatch = useDispatch();
  const { config } = useSelector((state) => state.configReducer);

  const [formValue, setFormValue] = useState({
    facebook_url: "",
    twitter_url: "",
    linkedIn_url: "",
  });

  useEffect(() => {
    dispatch(getAdminConfigAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (config) {
      setFormValue({
        facebook_url: config.facebook_url,
        twitter_url: config.twitter_url,
        linkedIn_url: config.linkedIn_url,
      });
    }
  }, [config]);

  return (
    <div className="footer">
      <div className="container footer-content">
        <p>Copyright &copy; Jeet Desai All Rights Reserved By</p>
        <ul className="social-list">
          <li>
            <a href={formValue.facebook_url}>
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href={formValue.twitter_url}>
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href={formValue.linkedIn_url}>
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserFooter;
