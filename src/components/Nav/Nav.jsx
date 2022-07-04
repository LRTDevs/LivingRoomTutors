import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import LRTHeader from '../../images/LRTHeader.png';
import './Nav.css';
import { useSelector } from 'react-redux';
import { MdComputer, MdDashboard } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { TbTools } from 'react-icons/tb';
import { FaLightbulb } from 'react-icons/fa';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className='AdminNav'>
      <div className='LRTHeaderContainer'>
        <Link to='/'>
          <img alt='header' src={LRTHeader} className='LRTHeader' />
        </Link>
      </div>

      {/* If no user is logged in, show these links */}
      {user.id === null && (
        // If there's no user, show login/registration links
        <Link className='navLink' to='/login'>
          Login / Register
        </Link>
      )}

      {/* If a user is logged in, show these links */}
      {user.id && (
        <div className='adminNavContents'>
          <div className='AdminNavLinks'>
            <NavLink
              activeClassName='tutorNavbarLink--active navbarlink--active'
              className='AdminNavLink tutorNavLink'
              to='/ProfileDashboard'
            >
              <div className='topNavDiv'> </div>
              <div className='middleDivBackground'>
                <div className='middleNavDiv'>
                  <div className='tutorIcon'>
                    <MdDashboard />
                  </div>
                  <span className='navTitleSpan'>Dashboard</span>
                </div>
              </div>
              <div className='bottomNavDiv'></div>
            </NavLink>

            <NavLink
              activeClassName='tuteeNavbarLink--active navbarlink--active'
              className='AdminNavLink tuteeNavLink'
              to='/profile'
            >
              <div className='topNavDiv'></div>
              <div className='middleDivBackground'>
                <div className='middleNavDiv'>
                  <div className='tuteeIcon'>
                    <CgProfile />
                  </div>
                  <span className='navTitleSpan'>Profile</span>
                </div>
              </div>
              <div className='bottomNavDiv'></div>
            </NavLink>

            <NavLink
              activeClassName='tutorNavbarLink--active navbarlink--active'
              className='AdminNavLink tutorNavLink'
              to='/sessions'
            >
              <div className='topNavDiv'> </div>
              <div className='middleDivBackground'>
                <div className='middleNavDiv'>
                  <div className='tutorIcon'>
                    <MdComputer />
                  </div>
                  <span className='navTitleSpan'>Sessions</span>
                </div>
              </div>
              <div className='bottomNavDiv'></div>
            </NavLink>

            <NavLink
              activeClassName='recordsNavbarLink--active navbarlink--active'
              className='AdminNavLink'
              to='/tools'
            >
              <div className='topNavDiv'> </div>
              <div className='middleDivBackground'>
                <div className='middleNavDiv'>
                  <div className='recordsIcon'>
                    <TbTools />
                  </div>
                  <span className='navTitleSpan'>Tools</span>
                </div>
              </div>
              <div className='bottomNavDiv'></div>
            </NavLink>

            <NavLink
              activeClassName='tutorNavbarLink--active navbarlink--active'
              className='AdminNavLink tutorNavLink'
              to='/guidelines'
            >
              <div className='topNavDiv'> </div>
              <div className='middleDivBackground'>
                <div className='middleNavDiv'>
                  <div className='tutorIcon'>
                    <FaLightbulb />
                  </div>
                  <span className='navTitleSpan'>Guidelines</span>
                </div>
              </div>
              <div className='bottomNavDiv'></div>
            </NavLink>
          </div>
          <div className='logoutButton'>
            <LogOutButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
