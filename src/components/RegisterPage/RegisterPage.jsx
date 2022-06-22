import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import Logo from '../../images/logoCrop.png';
import { Col } from 'react-bootstrap';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className='loginPage'>
      <div className='brandNameHeader adminLoginHeader'>
        <img alt='logo' style={{ maxWidth: '65px' }} src={Logo} />
        <h1 className='headingLRT'>LIVING ROOM TUTORS</h1>
      </div>
      <Col lg='6'>
        <RegisterForm />
      </Col>
    </div>
  );
}

export default RegisterPage;
