import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Logo from '../../images/logoCrop.png';
import loginPage from '../LoginPage/LoginPage.css';
import { Table, Card, Col, Row } from 'react-bootstrap';

function LoginPage() {
  const history = useHistory();

  return (
    <div className='loginPage'>
      <div className='brandNameHeader adminLoginHeader'>
        <img alt='logo' style={{ maxWidth: '65px' }} src={Logo} />
        <h1 className='headingLRT'>LIVING ROOM TUTORS</h1>
      </div>
      <Col lg='6'>
        <LoginForm />
      </Col>

      <button
        type='button'
        className='btn btn_asLink'
        onClick={() => {
          history.push('/registration');
        }}
      >
        Register
      </button>
    </div>
  );
}

export default LoginPage;
