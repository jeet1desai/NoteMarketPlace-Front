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

      if (!currentUser || !token) {
        toast.info("You need to login first.");
        return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
      }

      if (currentUser && !roles.includes(currentUser.role_id)) {
        toast.error("Role is not allowed to visit the page.");
        if (currentUser.role_id === 3) {
          return <Redirect to={{ pathname: "/" }} />;
        } else {
          return <Redirect to={{ pathname: "/admin/dashboard" }} />;
        }
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
