
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const SelectNavBar = () => {
    const user = useSelector((state) => state.session)

    return (
        <nav class='navbar'>
            <ul className='navbarlinks'>
                <li>
                    <h2 className="logoname">QuestKeeper</h2>
                </li>
                <li>
                    <NavLink className='navlinkstyle' to='/' exact={true} activeClassName='active'>
                        Home
                    </NavLink>
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
                <li className='nav-button'>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    );
}

export default SelectNavBar;
