import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
    history.push('/RolesChoice');
  }; // end registerUser

  return (
    <div className='loginFormContainer'>
      <Form onSubmit={registerUser}>
        <h2 className='loginH2'>Register User</h2>
        <p className='loginP'>Please enter a new username and password</p>
        {errors.registrationMessage && (
          <h3 className='alert' role='alert'>
            {errors.registrationMessage}
          </h3>
        )}
        <Form.Group>
          <Form.Label htmlFor='username'>Username:</Form.Label>
          <Form.Control
            type='text'
            name='username'
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password:</Form.Label>
          <Form.Control
            type='password'
            name='password'
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <div>
          <input className='btn primaryButton loginPagePrimaryBtn' type='submit' name='submit' value='SUBMIT' />
        </div>
      </Form>
      <div>
        <input
          type='button'
          className='btn primaryButton loginPagePrimaryBtn'
          value='LOGIN'
          onClick={() => {
            history.push('/login');
          }}
        />
      </div>
    </div>
  );
}

export default RegisterForm;
