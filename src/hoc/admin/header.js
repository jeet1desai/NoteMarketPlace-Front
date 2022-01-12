import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { Avatar } from "@mui/material";

import "../../assets/css/header.css";
import BlueLogo from "../../assets/images/top-logo-purple.png";

import { getLSUser } from "../../utils/local";

export default function AdminHeader() {
  const [toggle, setToggle] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const currentUser = getLSUser();
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }, []);

  const profileMenu = (
    <Menu>
      <Menu.Item>
        <NavLink exact="true" to="/admin/my-profile" activeclassname="active">
          Update Profile
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact="true" to="/change-password" activeclassname="active">
          Change Password
        </NavLink>
      </Menu.Item>
      <Menu.Item className="drop-logout">
        <NavLink
          exact="true"
          to="/login"
          activeclassname="active"
          onClick={() => {
            localStorage.removeItem("currentUser");
          }}>
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
          activeclassname="active">
          Note Under Review
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/admin/published-notes"
          activeclassname="active">
          Published Notes
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/admin/downloaded-notes"
          activeclassname="active">
          Downloaded Notes
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/admin/rejected-notes"
          activeclassname="active">
          Rejected Notes
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const reportsMenu = (
    <Menu>
      <Menu.Item>
        <NavLink exact="true" to="/admin/spam-report" activeclassname="active">
          Spam Reports
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const settingsMenu = (
    <Menu>
      {currentUser.role === 3 && (
        <>
          <Menu.Item>
            <NavLink
              exact="true"
              to="/admin/manage-system-config"
              activeclassname="active">
              Manage System Configuration
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              exact="true"
              to="/admin/manage-admin"
              activeclassname="active">
              Manage Administration
            </NavLink>
          </Menu.Item>
        </>
      )}
      <Menu.Item>
        <NavLink
          exact="true"
          to="/admin/manage-category"
          activeclassname="active">
          Manage Category
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact="true" to="/admin/manage-type" activeclassname="active">
          Manage Type
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/admin/manage-country"
          activeclassname="active">
          Manage Country
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="fixed-top">
      <div className="container">
        <div className="navigation">
          <Link to="/admin/dashboard" className="nav-link">
            <img alt="logo" className="logo" src={BlueLogo} />
          </Link>
          <div
            onClick={() => setToggle(!toggle)}
            className={`menu-toggle ${toggle ? "open" : ""}`}
            id="mobile-menu">
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
                  activeclassname="active">
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
                  activeclassname="active">
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
                    src={currentUser.profilePicture}
                    sx={{ width: 28, height: 28 }}
                  />
                </Dropdown>
              </li>
              <li className="nav-link">
                {currentUser ? (
                  <Link to="/login" className="login">
                    <button
                      type="button"
                      className="btn btn-purple"
                      onClick={() => {
                        localStorage.removeItem("currentUser");
                      }}>
                      Logout
                    </button>
                  </Link>
                ) : (
                  <Link to="/login" className="login">
                    <button type="button" className="btn btn-purple">
                      Login
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
