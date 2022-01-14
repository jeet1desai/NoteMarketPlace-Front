import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { getLSUser } from "../../utils/local";

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = getLSUser();

      // not logged in so redirect to login page with the return url
      if (!currentUser || !currentUser.isEmailVerified) {
        toast.info("You need to login first! 😊");
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      // check if route is restricted by role
      if (currentUser && !roles.includes(currentUser.role)) {
        toast.error("Sorry, You are not Authorized! 😒");
        if (currentUser.role === 1) {
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
