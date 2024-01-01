import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const PrivateRoute = lazy(() => import("../../components/Routes/Private"));
const UserFooter = lazy(() => import("../../hoc/user/footer"));
const UserHeader = lazy(() => import("../../hoc/user/header"));
const Home = lazy(() => import("./home"));
const SearchNotes = lazy(() => import("./search-notes"));
const NoteDetail = lazy(() => import("./note-detail"));
const FAQ = lazy(() => import("./faq"));
const ContactUs = lazy(() => import("./contact-us"));
const SellNoteDashboard = lazy(() => import("./sell-note-dashboard"));
const NoteForm = lazy(() => import("./Note/note-form"));
const BuyerRequest = lazy(() => import("./buyer-request"));
const MyProfile = lazy(() => import("./Profile/my-profile"));
const MyDownload = lazy(() => import("./Profile/my-download"));
const MySoldNote = lazy(() => import("./Profile/my-sold-note"));
const MyRejectedNote = lazy(() => import("./Profile/my-rejected-note"));

export default function UserRoute() {
  return (
    <>
      <UserHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search-notes" component={SearchNotes} />
          <Route exact path="/search-notes/note/:id" component={NoteDetail} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/contact-us" component={ContactUs} />

          <PrivateRoute roles={[3]} exact path="/sell-note/dashboard" component={SellNoteDashboard} />
          <PrivateRoute roles={[3]} exact path="/sell-note/add-note" component={NoteForm} />
          <PrivateRoute roles={[3]} exact path="/sell-note/edit-note/:id" component={NoteForm} />
          <PrivateRoute roles={[3]} exact path="/sell-note/buyer-request" component={BuyerRequest} />
          <PrivateRoute roles={[3]} exact path="/sell-note/my-profile" component={MyProfile} />
          <PrivateRoute roles={[3]} exact path="/sell-note/my-download" component={MyDownload} />
          <PrivateRoute roles={[3]} exact path="/sell-note/my-sold-note" component={MySoldNote} />
          <PrivateRoute roles={[3]} exact path="/sell-note/my-rejected-note" component={MyRejectedNote} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
      <UserFooter />
    </>
  );
}
