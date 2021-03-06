import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(username, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className='authforms' onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind} className="error">{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          name='username'
          type='text'
          placeholder='Username'
          value={username}
          onChange={updateUsername}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button className='button2' type='submit'>Login</button>
        <button className='button2' onClick={(e) => {
          e.preventDefault()
          setUsername('Demo')
          setPassword('password')
        }}>Demo Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
