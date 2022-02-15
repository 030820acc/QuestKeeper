import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MainNavBar from './components/MainNavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
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
import AboutPage from './components/AboutPage';
import LogoutNavBar from './components/LogoutNav';
import SplashPage from './components/SplashPage';
import SignupPage from './components/SignupPage';
import EditItemForm from './components/EditItemForm';
import NewItemForm from './components/NewItemForm';
import ItemPage from './components/ItemPage';
import NewArmorForm from './components/NewArmorForm';
import EditArmorForm from './components/EditArmorForm';
import ArmorPage from './components/ArmorPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
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
        <Route path='/about' exact={true}>
          <SelectNavBar />
          <AboutPage />
        </Route>
        <ProtectedRoute path='/characters/new' exact={true}>
          <SelectNavBar />
          <NewCharacterForm />
        </ProtectedRoute>
        <ProtectedRoute path='/weapons/new/:id' exact={true}>
          <MainNavBar />
          <NewWeaponForm />
        </ProtectedRoute>
        <ProtectedRoute path='/items/new/:id' exact={true}>
          <MainNavBar />
          <NewItemForm />
        </ProtectedRoute>
        <ProtectedRoute path='/armors/new/:id' exact={true}>
          <MainNavBar />
          <NewArmorForm />
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
        <ProtectedRoute path='/items/edit/:id' exact={true}>
          <MainNavBar />
          <EditItemForm />
        </ProtectedRoute>
        <ProtectedRoute path='/armors/edit/:id' exact={true}>
          <MainNavBar />
          <EditArmorForm />
        </ProtectedRoute>
        <ProtectedRoute path='/spells/edit/:id' exact={true}>
          <MainNavBar />
          <EditSpellForm />
        </ProtectedRoute>
        <ProtectedRoute path='/weapons/:id'>
          <MainNavBar />
          <WeaponPage />
        </ProtectedRoute>
        <ProtectedRoute path='/items/:id'>
          <MainNavBar />
          <ItemPage />
        </ProtectedRoute>
        <ProtectedRoute path='/armors/:id'>
          <MainNavBar />
          <ArmorPage />
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
          <LogoutNavBar />
          <SplashPage />
        </Route>
        <Route path='/sign-up' exact={true}>
          <LogoutNavBar />
          <SignupPage />
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
