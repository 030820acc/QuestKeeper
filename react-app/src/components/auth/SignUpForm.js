import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [inputerrors, setInputerrors] = useState([])
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let othererrors = [];
    if (username?.length < 4 || username?.length > 30) { othererrors.push('Username must be between 4-30 characters') }
    if (!(password === repeatPassword)) {othererrors.push('Passwords must match')}
    setInputerrors(othererrors)
}, [name, password, username, repeatPassword])

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, name, password));
      if (data) {
        setErrors([data])
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className='authforms' onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind} className='error'>{error}</div>
        ))}
        {inputerrors.map((error) => {
          return (
            <p className='error'>{error}</p>
          )
        })}
      </div>
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required={true}
        ></input>
      </div>
      <div>
        <label>Name</label>
        <input
          type='text'
          name='name'
          onChange={updateName}
          value={name}
          required={true}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          required={true}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button className='button2' type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
