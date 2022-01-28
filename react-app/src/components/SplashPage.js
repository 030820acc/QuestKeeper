import React from 'react';
import LoginForm from './auth/LoginForm';

const SplashPage = () => {
  return (
    <div className='splash'>
        <h1 className="splashpanel">Welcome to QuestKeeper the online character sheet creator for the Worlds Greatest Roleplaying Game. Login or sign up to start creating exciting characters to fill your worlds...</h1>
        <LoginForm />
    </div>
  ) 
};

export default SplashPage;
