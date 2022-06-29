// import * as React from 'react';
import React, { useEffect } from 'react';
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import Nav from "../Nav/Nav";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
import FormData from "form-data";


import { Card, Col, Container } from "react-bootstrap";

function Profile() {
  const [file, setFile] = React.useState('');
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer);
  const profileInfo = useSelector((store) => store.profileReducer);
  const history = useHistory();

  const handleFileChange = (event) => {
    event.preventDefault();
    setFile(event.target.files[0]);
  };

  const handleClick = () => {
    console.log(user.id);
    const data = new FormData()
    data.append('file', file)
    let url = `http://localhost:5000/api/upload/${user.id}`;
    axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
  console.log(profileInfo);

  useEffect(() => {
    dispatch({
      type: 'FETCH_PROFILE_INFO',
    });
  }, []);

  return (
    <div>
      <Col lg={{ span: 8, offset: 3 }}>
        <Nav />
        <Header />
        <div className="container">
          <Container>
            <Card className="title">
              <Card.Body>
                <form>
                  <h3>Profile Pic Upload</h3>
                  <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
                  <button onClick={handleClick}>Upload</button>
                </form>

                {profileInfo.id &&
                  <ul>
                    <li>{profileInfo.favorite_music}</li>
                    <li>{profileInfo.favorite_subject}</li>
                    <li>{profileInfo.fictional_universe}</li>
                    <li>{profileInfo.five_year_plan}</li>
                    <li>{profileInfo.hidden_talents}</li>
                  </ul>
                }

                {user.isTutor === true ? (
                  <Button
                    className="primaryButton matchButton"
                    onClick={() => history.push("/TutorInfoEdit")}
                  >
                    Update Tutoring Subjects
                  </Button>
                ) : (
                  <Button
                    className="primaryButton matchButton"
                    onClick={() => history.push("/StudentSubjectsEdit")}
                  >
                    Update Tutoring Subjects
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Container>
        </div>
      </Col>
    </div>
  );
}

export default Profile;
