
import Header from '../Header/Header';

import Logo from "../../images/logoCrop.png";


import Nav from '../Nav/Nav'
import { Card, Col, Container } from "react-bootstrap";
import UserPage from '../UserPage/UserPage';
import AdminNavBar from '../AdminNavBar/AdminNavBar';

import React from 'react';
import {useSelector} from 'react-redux';


function ProfileDashboard() {
  const user = useSelector((store)=> store.userReducer)

  


  return (

    <div>
      
      <Header />
  {user.isAdmin === true ? <AdminNavBar/> : <Nav/>}

      <Col lg={{ span: 8, offset: 3 }}>
        <Container>
          <Card className="title">
            <Card.Body>
            <img alt="logo" style={{ maxWidth: "65px", }} src={Logo} />

              <h1>Welcome To The Dashboard, {user.username}!</h1>

            </Card.Body>
          </Card>
        </Container>
      </Col>

    </div>
  );
}


export default ProfileDashboard;
