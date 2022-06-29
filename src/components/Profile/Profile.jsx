import * as React from 'react';
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Nav from "../Nav/Nav";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
import FormData from "form-data";

import { Card, Col, Container } from "react-bootstrap";

function Profile() {
  const user = useSelector((store)=> store.userReducer);
  const profilePic = useSelector((store)=> store.profilePicReducer);
  const dispatch = useDispatch();

  function fetchProfilePicture(id) {
    dispatch({
        type: 'FETCH_PROFILE_PIC',
        payload: id
    });
}

  const handleClick = () => {
    // const data = new FormData()
    // data.append('file', file)
    // let url = `http://localhost:5000/api/upload/${user.id}`;
    // axios.post(url, data, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
    console.log('click');
    fetchProfilePicture(user.id);
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
                  <img src={profilePic.image_url} width='100' />
                  <h1>Profile Pic Upload</h1>
                  <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
                  <button onClick={handleClick}>Upload</button>
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
