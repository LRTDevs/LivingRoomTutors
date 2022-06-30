import Header from "../Header/Header";

import Logo from "../../images/logoCrop.png";

import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Nav from "../Nav/Nav";
import { Card, Col, Container } from "react-bootstrap";
import UserPage from '../UserPage/UserPage';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from 'react';


import React from "react";
import { useSelector } from "react-redux";

function ProfileDashboard() {

  useEffect(() => {
    dispatch({
        type: 'FETCH_PROFILE_PIC',
        payload: user.id
    })
}, [])

  const user = useSelector((store)=> store.userReducer)
  const dispatch = useDispatch();

  



  return (
    <div>
      <Col lg={{ span: 8, offset: 3 }}>
        <Header />
        {user.isAdmin === true ? <AdminNavBar /> : <Nav />}

        <Container>
          <Card className="title">
            <Card.Body>
              <img alt="logo" style={{ maxWidth: "65px" }} src={Logo} />

              <h1>Welcome To The Dashboard, {user.username}!</h1>

            </Card.Body>
          </Card>
        </Container>
      </Col>
    </div>
  );
}

export default ProfileDashboard;
