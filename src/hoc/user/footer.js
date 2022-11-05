import React from "react";

import "../../assets/css/footer.css";

export default function UserFooter() {
  return (
    <div className="footer">
      <div className="container footer-content">
        <p>Copyright &copy; Jeet Desai All Rights Reserved By</p>
        <ul className="social-list">
          <li>
            <a href="/">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
