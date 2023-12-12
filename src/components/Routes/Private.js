import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { getLSUser, getLSUserToken } from "../../utils/local";

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = getLSUser();
      const token = getLSUserToken();

      // not logged in so redirect to login page with the return url
      // if (!currentUser || !currentUser.isEmailVerified) {
      if (!currentUser || !token) {
        toast.info("You need to login first! 😊");
        return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
      }

      // check if route is restricted by role
      if (currentUser && !roles.includes(currentUser.role_id)) {
        console.log(currentUser, roles);
        toast.error("Sorry, You are not authorized! 😒");
        if (currentUser.role_id === 3) {
          return <Redirect to={{ pathname: "/" }} />;
        } else {
          return <Redirect to={{ pathname: "/admin/dashboard" }} />;
        }
      }

      // // authorized so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
