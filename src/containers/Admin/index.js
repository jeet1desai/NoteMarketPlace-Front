import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";

const AdminHeader = lazy(() => import("../../hoc/admin/header"));
const AdminFooter = lazy(() => import("../../hoc/admin/footer"));
const PrivateRoute = lazy(() => import("../../components/Routes/Private"));
const Dashboard = lazy(() => import("./dashboard"));
const SpamReports = lazy(() => import("./Reports/spam"));
const Members = lazy(() => import("./Members/members"));
const MemberDetail = lazy(() => import("./Members/member-detail"));
const Downloaded = lazy(() => import("./Notes/downloaded"));
const Rejected = lazy(() => import("./Notes/rejected"));
const Published = lazy(() => import("./Notes/published"));
const UnderReview = lazy(() => import("./Notes/under-review"));
const SystemConfig = lazy(() => import("./Settings/system-config"));
const AdminProfile = lazy(() => import("./Profile"));
const Admin = lazy(() => import("./Settings/Admin"));
const Category = lazy(() => import("./Settings/Category"));
const Country = lazy(() => import("./Settings/Country"));
const Type = lazy(() => import("./Settings/Type"));
const AdminForm = lazy(() => import("./Settings/Admin/admin-form"));
const CategoryForm = lazy(() => import("./Settings/Category/category-form"));
const CountryForm = lazy(() => import("./Settings/Country/country-form"));
const TypeForm = lazy(() => import("./Settings/Type/type-form"));
const AdminNoteDetails = lazy(() => import("./Notes/note-details"));

export default function AdminRoute() {
  return (
    <>
      <AdminHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute roles={[1, 2]} exact path="/admin/dashboard" component={Dashboard} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/note/:id" component={AdminNoteDetails} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/note-under-review" component={UnderReview} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/published-notes" component={Published} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/downloaded-notes" component={Downloaded} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/rejected-notes" component={Rejected} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/members" component={Members} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/members/:id" component={MemberDetail} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/spam-report" component={SpamReports} />
          <PrivateRoute roles={[1]} exact path="/admin/manage-system-config" component={SystemConfig} />
          <PrivateRoute roles={[1]} exact path="/admin/manage-admin" component={Admin} />
          <PrivateRoute roles={[1]} exact path="/admin/manage-admin/add-admin" component={AdminForm} />
          <PrivateRoute roles={[1]} exact path="/admin/manage-admin/edit-admin/:id" component={AdminForm} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/manage-category" component={Category} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/manage-category/add-category" component={CategoryForm} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/manage-category/edit-category/:id" component={CategoryForm} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/manage-type" component={Type} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/manage-type/add-type" component={TypeForm} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/manage-type/edit-type/:id" component={TypeForm} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/manage-country" component={Country} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/manage-country/add-country" component={CountryForm} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/manage-country/edit-country/:id" component={CountryForm} />
          <PrivateRoute roles={[1, 2]} exact path="/admin/my-profile" component={AdminProfile} />
          <Redirect to="/admin/dashboard" />
        </Switch>
      </Suspense>
      <AdminFooter />
    </>
  );
}
