
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const MainNavBar = () => {
  const { id } = useParams()

  return (
    <nav class='navbar'>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/characters/${id}`} exact={true} activeClassName='active'>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to={`/spells/${id}`} exact={true} activeClassName='active'>
            Spells
          </NavLink>
        </li>
        <li>
          <NavLink to={`/inventory/${id}`} exact={true} activeClassName='active'>
            Inventory
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default MainNavBar;
