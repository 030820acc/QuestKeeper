
import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoutNavBar = () => {

    return (
        <nav className='navbar'>
            <ul className='navbarlinks'>
                <li>
                    <h2 className="logoname">QuestKeeper</h2>
                </li>
                <li>
                    <NavLink className='navlinkstyle' to='/about' exact={true} activeClassName='active'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className='navlinkstyle' to='/sign-up' exact={true} activeClassName='active'>
                        Sign Up
                    </NavLink>
                </li>
                <li>
                    <NavLink className='navlinkstyle' to='/login' exact={true} activeClassName='active'>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default LogoutNavBar;
