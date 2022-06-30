import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Nav from "../Nav/Nav";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import ProfilePicItem from './ProfilePicItem';
import Header from '../Header/Header';


import { Card, Col, Container, Button } from "react-bootstrap";

function Profile() {

  const [file, setFile] = React.useState('');
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: 'FETCH_PROFILE_PIC',
      payload: user.id
    })
  }, [])



  const handleProfilePicChange = () => {
    history.push(`/profilePicUpload`);
  }


  return (

    <div className="container">
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
