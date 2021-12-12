import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { Avatar } from "@mui/material";

import "../../assets/css/header.css";
import BlueLogo from "../../assets/images/top-logo-purple.png";
import AvatarImage from "../../assets/images/avatar.png";

export default function AdminHeader() {
  const [toggle, setToggle] = useState(false);

  const profileMenu = (
    <Menu>
      <Menu.Item>
        <NavLink exact="true" to="/admin/my-profile" activeClassName="active">
          Update Profile
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact="true" to="/change-password" activeClassName="active">
          Change Password
        </NavLink>
      </Menu.Item>
      <Menu.Item className="drop-logout">
        <NavLink exact="true" to="/logout" activeClassName="active">
          Logout
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const notesMenu = (
    <Menu>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/admin/note-under-review"
          activeClassName="active"
        >
          Note Under Review
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/admin/published-notes"
          activeClassName="active"
        >
          Published Notes
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/admin/downloaded-notes"
          activeClassName="active"
        >
          Downloaded Notes
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/admin/rejected-notes"
          activeClassName="active"
        >
          Rejected Notes
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const reportsMenu = (
    <Menu>
      <Menu.Item>
        <NavLink exact="true" to="/admin/spam-report" activeClassName="active">
          Spam Reports
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const settingsMenu = (
    <Menu>
      <Menu.Item>
        <NavLink exact="true" to="/admin/manage-system-config" activeClassName="active">
          Manage System Configuration
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact="true" to="/admin/manage-admin" activeClassName="active">
          Manage Administration
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact="true" to="/admin/manage-category" activeClassName="active">
          Manage Category
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact="true" to="/admin/manage-type" activeClassName="active">
          Manage Type
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact="true" to="/admin/manage-country" activeClassName="active">
          Manage Country
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="fixed-top">
      <div className="container">
        <div className="navigation">
          <Link to="/" className="nav-link">
            <img alt="logo" className="logo" src={BlueLogo} />
          </Link>
          <div
            onClick={() => setToggle(!toggle)}
            className={`menu-toggle ${toggle ? "open" : ""}`}
            id="mobile-menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`header-link ${toggle ? "open" : ""}`}>
            <ul>
              <li className="nav-link">
                <NavLink
                  exact="true"
                  to="/admin/dashboard"
                  activeClassName="active"
                >
                  Dashboard
                </NavLink>
                <div className="underline"></div>
              </li>
              <li className="nav-link">
                <Dropdown overlay={notesMenu}>
                  <a>Notes</a>
                </Dropdown>
              </li>
              <li className="nav-link">
                <NavLink
                  exact="true"
                  to="/admin/members"
                  activeClassName="active"
                >
                  Members
                </NavLink>
                <div className="underline"></div>
              </li>
              <li className="nav-link">
                <Dropdown overlay={reportsMenu}>
                  <a>Reports</a>
                </Dropdown>
              </li>
              <li className="nav-link">
                <Dropdown overlay={settingsMenu}>
                  <a>Settings</a>
                </Dropdown>
              </li>
              <li className="nav-link">
                <Dropdown overlay={profileMenu}>
                  <Avatar
                    alt="Remy Sharp"
                    src={AvatarImage}
                    sx={{ width: 28, height: 28 }}
                  />
                </Dropdown>
              </li>
              <li className="nav-link">
                <Link to="/login" className="login">
                  <button type="button" className="btn btn-purple">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
