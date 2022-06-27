// import Header from '../Header/Header';

import Nav from '../Nav/Nav'
import { Card, Col, Container } from "react-bootstrap";

import React from 'react';
import {useSelector} from 'react-redux';


function ProfileDashboard() {

const user = useSelector((store) => store.user);


  return (

    <div>
      {/* <Header /> */}
      <Nav />

      <Col lg={{ span: 8, offset: 3 }}>
        <Container>
          <Card className="title">
            <Card.Body>
              <h1>Welcome To The Dashboard, {user.username}!</h1>
            </Card.Body>
          </Card>
        </Container>
      </Col>

    </div>
  );
}


export default ProfileDashboard;
