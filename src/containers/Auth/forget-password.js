import React from 'react';

import '../../assets/css/forget-password.css';
import WhiteLogo from '../../assets/images/top-logo-white.png';

export default function ForgetPassword() {
    return (
      <div class="forget-password-page">
        <div className="white-top-logo">
          <img alt="logo" src={WhiteLogo} />
        </div>
        <div className="form-content">
          <div class="forget-password-heading">
            <h3 class="text-center">Forgot Password?</h3>
            <p class="text-center">Enter your email to reset password</p>
          </div>
          <form class="form" action="#" method="post">
            <div class="form-group">
              <label for="exampleInputEmail1">Email *</label>
              <input type="email" class="form-control" id="exampleInputEmail1"
                placeholder="Enter your Email" required />
            </div>
            <button type="button" class="btn btn-purple forget-password-btn">Submit</button>
          </form>
        </div>
      </div>
    )
}
