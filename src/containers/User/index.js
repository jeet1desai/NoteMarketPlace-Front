import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../../components/Routes/Private";

import UserFooter from "../../hoc/user/footer";
import UserHeader from "../../hoc/user/header";

import BuyerRequest from "./buyer-request";
import ContactUs from "./contact-us";
import FAQ from "./faq";
import Home from "./home";
import NoteDetail from "./note-detail";
import NoteForm from "./Note/note-form";
import MyDownload from "./Profile/my-download";
import MyProfile from "./Profile/my-profile";
import MyRejectedNote from "./Profile/my-rejected-note";
import MySoldNote from "./Profile/my-sold-note";
import SearchNotes from "./search-notes";
import SellNoteDashboard from "./sell-note-dashboard";

export default function UserRoute() {
  return (
    <>
      <UserHeader />
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
      <UserFooter />
    </>
  );
}
