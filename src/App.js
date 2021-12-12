import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import Login from "./containers/Auth/login";
import Signup from "./containers/Auth/signup";
import ForgetPassword from "./containers/Auth/forget-password";
import EmailVerification from "./containers/Auth/email-verification";
import ChangePassword from "./containers/Auth/change-password";
import SuccessEmailVerification from "./containers/Auth/success-email-verify";

import FoF from "./containers/404";

import Home from "./containers/User/home";
import SearchNotes from "./containers/User/search-notes";
import ContactUs from "./containers/User/contact-us";
import FAQ from "./containers/User/faq";
import BuyerRequest from "./containers/User/buyer-request";
import SellNoteDashboard from "./containers/User/sell-note-dashboard";
import MyProfile from "./containers/User/Profile/my-profile";
import MyDownload from "./containers/User/Profile/my-download";
import MySoldNote from "./containers/User/Profile/my-sold-note";
import MyRejectedNote from "./containers/User/Profile/my-rejected-note";
import AddNote from "./containers/User/Note/add-note";
import EditNote from "./containers/User/Note/edit-note";
import NoteDetail from "./containers/User/Note/note-detail";

import Dashboard from "./containers/Admin/dashboard";
import SpamReports from "./containers/Admin/Reports/spam";
import Members from "./containers/Admin/Members/members";
import MemberDetail from "./containers/Admin/Members/member-detail";
import Downloaded from "./containers/Admin/Notes/downloaded";
import Rejected from "./containers/Admin/Notes/rejected";
import Published from "./containers/Admin/Notes/published";
import UnderReview from "./containers/Admin/Notes/under-review";
import SystemConfig from "./containers/Admin/Settings/system-config";
import AdminProfile from "./containers/Admin/Profile";
import Admin from "./containers/Admin/Settings/Admin";
import Category from "./containers/Admin/Settings/Category";
import Country from "./containers/Admin/Settings/Country";
import Type from "./containers/Admin/Settings/Type";
import AddAdmin from "./containers/Admin/Settings/Admin/add";
import EditAdmin from "./containers/Admin/Settings/Admin/edit";
import AddCategory from "./containers/Admin/Settings/Category/add";
import EditCategory from "./containers/Admin/Settings/Category/edit";
import AddCountry from "./containers/Admin/Settings/Country/add";
import EditCountry from "./containers/Admin/Settings/Country/edit";
import AddType from "./containers/Admin/Settings/Type/add";
import EditType from "./containers/Admin/Settings/Type/edit";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route exact="true" path="/login" element={<Login />} />
        <Route exact="true" path="/signup" element={<Signup />} />
        <Route
          exact="true"
          path="/forget-password"
          element={<ForgetPassword />}
        />
        <Route
          exact="true"
          path="/email-verification"
          element={<EmailVerification />}
        />
        <Route
          exact="true"
          path="/change-password"
          element={<ChangePassword />}
        />
        <Route
          exact="true"
          path="/email/confirm/:id"
          element={<SuccessEmailVerification />}
        />

        {/* End User */}
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/search-notes" element={<SearchNotes />} />
        <Route
          exact="true"
          path="/search-notes/note/:id"
          element={<NoteDetail />}
        />
        <Route exact="true" path="/faq" element={<FAQ />} />
        <Route exact="true" path="/contact-us" element={<ContactUs />} />

        <Route
          exact="true"
          path="/sell-note/dashboard"
          element={<SellNoteDashboard />}
        />
        <Route exact="true" path="/sell-note/add-note" element={<AddNote />} />
        <Route
          exact="true"
          path="/sell-note/edit-note/:id"
          element={<EditNote />}
        />
        <Route
          exact="true"
          path="/sell-note/buyer-request"
          element={<BuyerRequest />}
        />
        <Route
          exact="true"
          path="/sell-note/my-profile"
          element={<MyProfile />}
        />
        <Route
          exact="true"
          path="/sell-note/my-download"
          element={<MyDownload />}
        />
        <Route
          exact="true"
          path="/sell-note/my-sold-note"
          element={<MySoldNote />}
        />
        <Route
          exact="true"
          path="/sell-note/my-rejected-note"
          element={<MyRejectedNote />}
        />

        {/* Admin */}
        <Route exact="true" path="/admin/dashboard" element={<Dashboard />} />
        <Route
          exact="true"
          path="/admin/note-under-review"
          element={<UnderReview />}
        />
        <Route
          exact="true"
          path="/admin/published-notes"
          element={<Published />}
        />
        <Route
          exact="true"
          path="/admin/downloaded-notes"
          element={<Downloaded />}
        />
        <Route
          exact="true"
          path="/admin/rejected-notes"
          element={<Rejected />}
        />
        <Route exact="true" path="/admin/members" element={<Members />} />
        <Route
          exact="true"
          path="/admin/members/:id"
          element={<MemberDetail />}
        />
        <Route exact="true" path="/admin/note/:id" element={<NoteDetail />} />
        <Route
          exact="true"
          path="/admin/spam-report"
          element={<SpamReports />}
        />
        <Route
          exact="true"
          path="/admin/manage-system-config"
          element={<SystemConfig />}
        />
        <Route exact="true" path="/admin/manage-admin" element={<Admin />} />
        <Route
          exact="true"
          path="/admin/manage-admin/add-admin"
          element={<AddAdmin />}
        />
        <Route
          exact="true"
          path="/admin/manage-admin/edit/:id"
          element={<EditAdmin />}
        />
        <Route
          exact="true"
          path="/admin/manage-category"
          element={<Category />}
        />
        <Route
          exact="true"
          path="/admin/manage-category/add-category"
          element={<AddCategory />}
        />
        <Route
          exact="true"
          path="/admin/manage-category/edit/:id"
          element={<EditCategory />}
        />
        <Route exact="true" path="/admin/manage-type" element={<Type />} />
        <Route
          exact="true"
          path="/admin/manage-type/add-type"
          element={<AddType />}
        />
        <Route
          exact="true"
          path="/admin/manage-type/edit/:id"
          element={<EditType />}
        />
        <Route
          exact="true"
          path="/admin/manage-country"
          element={<Country />}
        />
        <Route
          exact="true"
          path="/admin/manage-country/add-country"
          element={<AddCountry />}
        />
        <Route
          exact="true"
          path="/admin/manage-country/edit/:id"
          element={<EditCountry />}
        />
        <Route
          exact="true"
          path="/admin/my-profile"
          element={<AdminProfile />}
        />
        <Route path="*" element={<FoF />} />
      </Routes>
    </Router>
  );
}

export default App;
