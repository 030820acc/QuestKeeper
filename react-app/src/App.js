import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import MainNavBar from './components/MainNavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import CharacterSelect from './components/characterSelect';
import NewCharacterForm from './components/NewCharacterForm';
import MainCharacterPage from './components/MainCharacterPage';
import EditCharacterForm from './components/EditCharacterForm';
import SelectNavBar from './components/SelectNav';
import WeaponPage from './components/WeaponPage';
import NewWeaponForm from './components/NewWeaponForm';
import EditWeaponForm from './components/EditWeaponForm';
import SpellPage from './components/SpellPage';
import NewSpellForm from './components/NewSpellForm'
import EditSpellForm from './components/EditSpellForm';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path='/characters/new' exact={true}>
          <SelectNavBar />
          <NewCharacterForm />
        </ProtectedRoute>
        <ProtectedRoute path='/weapons/new/:id' exact={true}>
          <MainNavBar />
          <NewWeaponForm />
        </ProtectedRoute>
        <ProtectedRoute path='/spells/new/:id' exact={true}>
          <MainNavBar />
          <NewSpellForm />
        </ProtectedRoute>
        <ProtectedRoute path='/characters/edit/:id' exact={true}>
          <MainNavBar />
          <EditCharacterForm />
        </ProtectedRoute>
        <ProtectedRoute path='/weapons/edit/:id' exact={true}>
          <MainNavBar />
          <EditWeaponForm />
        </ProtectedRoute>
        <ProtectedRoute path='/spells/edit/:id' exact={true}>
          <MainNavBar />
          <EditSpellForm />
        </ProtectedRoute>
        <ProtectedRoute path='/inventory/:id'>
          <MainNavBar />
          <WeaponPage />
        </ProtectedRoute>
        <ProtectedRoute path='/spells/:id'>
          <MainNavBar />
          <SpellPage />
        </ProtectedRoute>
        <ProtectedRoute path='/characters/:id'>
          <MainNavBar />
          <MainCharacterPage />
        </ProtectedRoute>
        <Route path='/login' exact={true}>
          <SelectNavBar />
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SelectNavBar />
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/' exact={true} > 
          <SelectNavBar />
          <CharacterSelect />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
