import React from 'react';
import SignUpForm from './auth/SignUpForm';


const SignupPage = () => {
  return (
    <div className='splash'>
        <h1 className="splashpanel">Welcome to QuestKeeper the online character sheet creator for the Worlds Greatest Roleplaying Game. Sign up to start creating exciting characters to fill your worlds...</h1>
        <SignUpForm />
    </div>
  ) 
};

export default SignupPage;