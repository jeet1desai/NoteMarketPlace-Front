import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import Login from "./containers/Auth/login";
import Signup from "./containers/Auth/signup";
import ForgetPassword from "./containers/Auth/forget-password";
import EmailVerification from "./containers/Auth/email-verification";
import ChangePassword from "./containers/Auth/change-password";
import SuccessEmailVerification from "./containers/Auth/success-email-verify";

import UserRoute from "./containers/User";

import AdminRoute from "./containers/Admin";

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
        <Route
          exact
          path="/email/confirm/:id"
          component={SuccessEmailVerification}
        />

        <Route path="/admin" component={AdminRoute} />

        <Route path="/" component={UserRoute} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
