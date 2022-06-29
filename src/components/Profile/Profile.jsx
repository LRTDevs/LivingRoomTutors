import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Nav from "../Nav/Nav";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import ProfilePicItem from './ProfilePicItem';

import { Card, Col, Container } from "react-bootstrap";

function Profile() {

  useEffect(() => {
    dispatch({
      type: 'FETCH_PROFILE_PIC',
      payload: user.id
    })
  }, [])
  const history = useHistory();
  const user = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();


  const handleProfilePicChange = () => {
    history.push(`/profilePicUpload`);
  }

  return (
    <div>
      <Nav />
      <div className="container">
        <Col lg={{ span: 8, offset: 3 }}>
          <Container>
            <Card className="title">
              <Card.Body>
                <form>
                  <ProfilePicItem />
                  <button onClick={handleProfilePicChange}>Change Profile Picture</button>
                </form>

              </Card.Body>
            </Card>
          </Container>
        </Col>
      </div>
    </div>

  );
}

export default Profile;
