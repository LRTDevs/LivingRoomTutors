import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import LRTHeader from "../../images/LRTHeader.png";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="AdminNav">
      <div className="LRTHeaderContainer">
        <Link to="/">
          <img alt="header" src={LRTHeader} className="LRTHeader" />
        </Link>
      </div>

      {/* If no user is logged in, show these links */}
      {user.id === null && (
        // If there's no user, show login/registration links
        <Link className="navLink" to="/login">
          Login / Register
        </Link>
      )}

      {/* If a user is logged in, show these links */}
      {user.id && (
        <div className="adminNavContents">
          <div className="AdminNavLinks">
            <NavLink
              activeClassName="tutorNavbarLink--active navbarlink--active"
              className="AdminNavLink tutorNavLink"
              to="/ProfileDashboard"
            >
              <div className="topNavDiv"> </div>
              <div className="middleDivBackground">
                <div className="middleNavDiv">
                  <div className="tutorIcon"></div>
                  <span className="navTitleSpan">Dashboard</span>
                </div>
              </div>
              <div className="bottomNavDiv"></div>
            </NavLink>

            <NavLink
              activeClassName="tuteeNavbarLink--active navbarlink--active"
              className="AdminNavLink tuteeNavLink"
              to="/profile"
            >
              <div className="topNavDiv"></div>
              <div className="middleDivBackground">
                <div className="middleNavDiv">
                  <div className="tuteeIcon"></div>
                  <span className="navTitleSpan">Profile</span>
                </div>
              </div>
              <div className="bottomNavDiv"></div>
            </NavLink>

            <NavLink
              activeClassName="tuteeNavbarLink--active navbarlink--active"
              className="AdminNavLink tuteeNavLink"
              to="/MatchProfile"
            >
              <div className="topNavDiv"></div>
              <div className="middleDivBackground">
                <div className="middleNavDiv">
                  <div className="recordsIcon"></div>
                  <span className="navTitleSpan">Matches</span>
                </div>
              </div>
              <div className="bottomNavDiv"></div>
            </NavLink>

            <NavLink
              activeClassName="tutorNavbarLink--active navbarlink--active"
              className="AdminNavLink tutorNavLink"
              to="/sessions"
            >
              <div className="topNavDiv"> </div>
              <div className="middleDivBackground">
                <div className="middleNavDiv">
                  <div className="tutorIcon"></div>
                  <span className="navTitleSpan">Sessions</span>
                </div>
              </div>
              <div className="bottomNavDiv"></div>
            </NavLink>

            <NavLink
              activeClassName="recordsNavbarLink--active navbarlink--active"
              className="AdminNavLink"
              to="/tools"
            >
              <div className="topNavDiv"> </div>
              <div className="middleDivBackground">
                <div className="middleNavDiv">
                  <div className="recordsIcon"></div>
                  <span className="navTitleSpan">Tools</span>
                </div>
              </div>
              <div className="bottomNavDiv"></div>
            </NavLink>

            <NavLink
              activeClassName="tutorNavbarLink--active navbarlink--active"
              className="AdminNavLink tutorNavLink"
              to="/guidelines"
            >
              <div className="topNavDiv"> </div>
              <div className="middleDivBackground">
                <div className="middleNavDiv">
                  <div className="tutorIcon"></div>
                  <span className="navTitleSpan">Guidelines</span>
                </div>
              </div>
              <div className="bottomNavDiv"></div>
            </NavLink>
          </div>
          <div className="logoutButton">
            <LogOutButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
