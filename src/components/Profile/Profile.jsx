import React, { useEffect } from 'react';
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import Nav from "../Nav/Nav";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import ProfilePicItem from './ProfilePicItem';


import { Card, Col, Container, Button } from "react-bootstrap";

function Profile() {

  const [file, setFile] = React.useState('');
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const profileInfo = useSelector((store) => store.profileReducer);

  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: 'FETCH_PROFILE_PIC',
      payload: user.id
    });
    dispatch({
      type: 'FETCH_PROFILE_INFO',
    });
  }, [])



  const handleProfilePicChange = () => {
    history.push(`/profilePicUpload`);
  }
  console.log(profileInfo);


  return (
    <div>
      <Col lg={{ span: 8, offset: 3 }}>
        <Nav />
        <Header />
        <Container>
          <Card className="title">
            <Card.Body>
              <form>
                <h1>Profile Pic Upload</h1>
                {/* <input type="file" onChange={(e) => setFile(e.target.files[0])}></input> */}
                {/* <button onClick={handleClick}>Upload</button> */}

                <ProfilePicItem />
                <Button onClick={handleProfilePicChange}>Change Profile Picture</Button>
              </form>


                {profileInfo.id &&
                  <ul>
                    <li>What is/was your favorite subject in school? {profileInfo.favorite_subject}</li>
                    <li>What are your special talents? {profileInfo.hidden_talents}</li>
                    <li>What is your 5-year goal? {profileInfo.five_year_plan}</li>
                    <li>If you could live in a fictional universe, which one would you choose? {profileInfo.fictional_universe}</li>
                    <li>What is your favorite type of music? {profileInfo.favorite_music}</li>
                    <li>A couple sentences to describe yourself. {profileInfo.short_description}</li>
                  </ul>
                }
                <Button
                    className="primaryButton matchButton"
                    onClick={() => history.push("/ProfileInfoForm")}
                  >
                    Update Bio
                  </Button>

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
      </Col>
    </div>
  );
}

export default Profile;
