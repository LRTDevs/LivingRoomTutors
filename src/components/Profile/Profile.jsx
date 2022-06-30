import React, { useEffect } from 'react';
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import Nav from "../Nav/Nav";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import ProfilePicItem from './ProfilePicItem';


import { Card, Col, Container } from "react-bootstrap";

function Profile() {

  const [file, setFile] = React.useState('');
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer);
  const profileInfo = useSelector((store) => store.profileReducer);
  const history = useHistory();

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
                    <li>Favorite Music: {profileInfo.favorite_music}</li>
                    <li>Favorite Subject: {profileInfo.favorite_subject}</li>
                    <li>Favorite Fictional Universe: {profileInfo.fictional_universe}</li>
                    <li>Where I see myself in 5 years: {profileInfo.five_year_plan}</li>
                    <li>Hidden Talents: {profileInfo.hidden_talents}</li>
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
