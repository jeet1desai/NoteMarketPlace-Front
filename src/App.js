import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./assets/font-awesome/css/font-awesome.css";

import "./assets/css/email-verify.css";
import "./assets/css/signup.css";
import "./assets/css/login.css";
import "./assets/css/forget-password.css";
import "./assets/css/email-verify.css";
import "./assets/css/change-password.css";
import "./assets/css/header.css";
import "./assets/css/footer.css";
import "./assets/css/sell-note-dashboard.css";
import "./assets/css/search-notes.css";
import "./assets/css/note-detail.css";
import "./assets/css/home.css";
import "./assets/css/faq.css";
import "./assets/css/contact-us.css";
import "./assets/css/buyer-request.css";
import "./assets/css/user-profile.css";
import "./assets/css/my-rejected-note.css";
import "./assets/css/my-sold-note.css";
import "./assets/css/my-download.css";
import "./assets/css/add-note.css";
import "./assets/css/admin-dashboard.css";
import "./assets/css/manage-system-config.css";

import Login from "./containers/Auth/login";
import Signup from "./containers/Auth/signup";
import ForgetPassword from "./containers/Auth/forget-password";
import EmailVerification from "./containers/Auth/email-verification";
import ChangePassword from "./containers/Auth/change-password";
import SuccessEmailVerification from "./containers/Auth/success-email-verify";

import UserRoute from "./containers/User";
import AdminRoute from "./containers/Admin";
import PrivateRoute from "./components/Routes/Private";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forget-password" component={ForgetPassword} />
        <Route exact path="/email-verification" component={EmailVerification} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/email/confirm/:id" component={SuccessEmailVerification} />

        <PrivateRoute roles={[1, 2]} path="/admin" component={AdminRoute} />

        <Route path="/" component={UserRoute} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
