
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const SelectNavBar = () => {

    return (
        <nav className='navbar'>
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
                <li className='nav-button'>
                    <LogoutButton />
                </li>
            </ul>
        </nav>
    );
}

export default SelectNavBar;
