
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const MainNavBar = () => {
  const { id } = useParams()

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
          <NavLink className='navlinkstyle' to={`/characters/${id}`} exact={true} activeClassName='active'>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink className='navlinkstyle' to={`/spells/${id}`} exact={true} activeClassName='active'>
            Spells
          </NavLink>
        </li>
        <li>
          <NavLink className='navlinkstyle' to={`/inventory/${id}`} exact={true} activeClassName='active'>
            Inventory
          </NavLink>
        </li>
        <li className='nav-button'>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default MainNavBar;
