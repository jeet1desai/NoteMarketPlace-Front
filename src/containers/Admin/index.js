import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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

export default function AdminRoute() {
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/note/:id" component={AdminNoteDetails} />
        <Route exact path="/admin/note-under-review" component={UnderReview} />
        <Route exact path="/admin/published-notes" component={Published} />
        <Route exact path="/admin/downloaded-notes" component={Downloaded} />
        <Route exact path="/admin/rejected-notes" component={Rejected} />
        <Route exact path="/admin/members" component={Members} />
        <Route exact path="/admin/members/:id" component={MemberDetail} />
        <Route exact path="/admin/spam-report" component={SpamReports} />
        <Route
          exact
          path="/admin/manage-system-config"
          component={SystemConfig}
        />
        <Route exact path="/admin/manage-admin" component={Admin} />
        <Route
          exact
          path="/admin/manage-admin/add-admin"
          component={AddAdmin}
        />
        <Route
          exact
          path="/admin/manage-admin/edit-admin/:id"
          component={EditAdmin}
        />
        <Route exact path="/admin/manage-category" component={Category} />
        <Route
          exact
          path="/admin/manage-category/add-category"
          component={AddCategory}
        />
        <Route
          exact
          path="/admin/manage-category/edit-category/:id"
          component={EditCategory}
        />
        <Route exact path="/admin/manage-type" component={Type} />
        <Route exact path="/admin/manage-type/add-type" component={AddType} />
        <Route
          exact
          path="/admin/manage-type/edit-type/:id"
          component={EditType}
        />
        <Route exact path="/admin/manage-country" component={Country} />
        <Route
          exact
          path="/admin/manage-country/add-country"
          component={AddCountry}
        />
        <Route
          exact
          path="/admin/manage-country/edit-country/:id"
          component={EditCountry}
        />
        <Route exact path="/admin/my-profile" component={AdminProfile} />
        <Redirect to="/admin/dashboard"/>
      </Switch>
      <AdminFooter />
    </>
  );
}
