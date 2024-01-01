import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./assets/font-awesome/css/font-awesome.css";
import "./css";

const PrivateRoute = lazy(() => import("./components/Routes/Private"));
const Login = lazy(() => import("./containers/Auth/login"));
const Signup = lazy(() => import("./containers/Auth/signup"));
const ForgetPassword = lazy(() => import("./containers/Auth/forget-password"));
const EmailVerification = lazy(() => import("./containers/Auth/email-verification"));
const ChangePassword = lazy(() => import("./containers/Auth/change-password"));
const SuccessEmailVerification = lazy(() => import("./containers/Auth/success-email-verify"));
const UserRoute = lazy(() => import("./containers/User"));
const AdminRoute = lazy(() => import("./containers/Admin"));

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
