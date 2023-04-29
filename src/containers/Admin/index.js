import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Dashboard from "./dashboard";
import SpamReports from "./Reports/spam";
import Members from "./Members/members";
import MemberDetail from "./Members/member-detail";
import Downloaded from "./Notes/downloaded";
import Rejected from "./Notes/rejected";
import Published from "./Notes/published";
import UnderReview from "./Notes/under-review";
import SystemConfig from "./Settings/system-config";
import AdminProfile from "./Profile";
import Admin from "./Settings/Admin";
import Category from "./Settings/Category";
import Country from "./Settings/Country";
import Type from "./Settings/Type";
import AddAdmin from "./Settings/Admin/add";
import EditAdmin from "./Settings/Admin/edit";
import AddCategory from "./Settings/Category/add";
import EditCategory from "./Settings/Category/edit";
import AddCountry from "./Settings/Country/add";
import EditCountry from "./Settings/Country/edit";
import AddType from "./Settings/Type/add";
import EditType from "./Settings/Type/edit";
import AdminNoteDetails from "./Notes/note-details";

import AdminHeader from "../../hoc/admin/header";
import AdminFooter from "../../hoc/admin/footer";
import PrivateRoute from "../../components/Routes/Private";

export default function AdminRoute() {
  return (
    <>
      <AdminHeader />
      <Switch>
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/note/:id"
          component={AdminNoteDetails}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/note-under-review"
          component={UnderReview}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/published-notes"
          component={Published}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/downloaded-notes"
          component={Downloaded}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/rejected-notes"
          component={Rejected}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/members"
          component={Members}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/members/:id"
          component={MemberDetail}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/spam-report"
          component={SpamReports}
        />
        <PrivateRoute
          roles={[1]}
          exact
          path="/admin/manage-system-config"
          component={SystemConfig}
        />
        <PrivateRoute
          roles={[1]}
          exact
          path="/admin/manage-admin"
          component={Admin}
        />
        <PrivateRoute
          roles={[1]}
          exact
          path="/admin/manage-admin/add-admin"
          component={AddAdmin}
        />
        <PrivateRoute
          roles={[1]}
          exact
          path="/admin/manage-admin/edit-admin/:id"
          component={EditAdmin}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/manage-category"
          component={Category}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/manage-category/add-category"
          component={AddCategory}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/manage-category/edit-category/:id"
          component={EditCategory}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/manage-type"
          component={Type}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/manage-type/add-type"
          component={AddType}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/manage-type/edit-type/:id"
          component={EditType}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/manage-country"
          component={Country}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/manage-country/add-country"
          component={AddCountry}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/manage-country/edit-country/:id"
          component={EditCountry}
        />
        <PrivateRoute
          roles={[1, 2]}
          exact
          path="/admin/my-profile"
          component={AdminProfile}
        />
        <Redirect to="/admin/dashboard" />
      </Switch>
      <AdminFooter />
    </>
  );
}
