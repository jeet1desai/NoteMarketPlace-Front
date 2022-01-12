import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { Avatar } from "@mui/material";

import "../../assets/css/header.css";
import BlueLogo from "../../assets/images/top-logo-purple.png";

import { getLSUser } from "../../utils/local";

export default function UserHeader() {
  const [toggle, setToggle] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const currentUser = getLSUser();
    if (currentUser) {
      setIsLoggedIn(true);
      setCurrentUser(currentUser);
    }
  }, []);

  const menu = (
    <Menu>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/sell-note/my-profile"
          activeclassname="active">
          My Profile
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/sell-note/my-download"
          activeclassname="active">
          My Downloads
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/sell-note/my-sold-note"
          activeclassname="active">
          My Sold Notes
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          exact="true"
          to="/sell-note/my-rejected-note"
          activeclassname="active">
          My Rejected Notes
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
                  to="/search-notes"
                  activeclassname="active">
                  Search Notes
                </NavLink>
                <div className="underline"></div>
              </li>
              <li className="nav-link">
                <NavLink
                  exact="true"
                  to="/sell-note/dashboard"
                  activeclassname="active">
                  Sell Your Notes
                </NavLink>
                <div className="underline"></div>
              </li>
              {isLoggedIn && (
                <li className="nav-link">
                  <NavLink
                    exact="true"
                    to="/sell-note/buyer-request"
                    activeclassname="active">
                    Buyer Requests
                  </NavLink>
                  <div className="underline"></div>
                </li>
              )}
              <li className="nav-link">
                <NavLink exact="true" to="/faq" activeclassname="active">
                  FAQ
                </NavLink>
                <div className="underline"></div>
              </li>
              <li className="nav-link">
                <NavLink exact="true" to="/contact-us" activeclassname="active">
                  Contact Us
                </NavLink>
                <div className="underline"></div>
              </li>
              {isLoggedIn && (
                <li className="nav-link">
                  <Dropdown overlay={menu}>
                    <Avatar
                      alt="Remy Sharp"
                      src={currentUser.profilePicture}
                      sx={{ width: 28, height: 28 }}
                    />
                  </Dropdown>
                </li>
              )}
              <li className="nav-link">
                {isLoggedIn ? (
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
