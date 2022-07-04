import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from "react";
import Nav from '../Nav/Nav';
import { useHistory } from 'react-router-dom';
import './Profile.css';
import ProfilePicItem from './ProfilePicItem';

import { Card, Col, Container, Button } from 'react-bootstrap';

function Profile() {
  const [file, setFile] = React.useState('');
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const profileInfo = useSelector((store) => store.profileReducer);

  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: 'FETCH_PROFILE_PIC',
      payload: user.id,
    });
    dispatch({
      type: 'FETCH_PROFILE_INFO',
    });
  }, []);

  const handleProfilePicChange = () => {
    history.push(`/profilePicUpload`);
  };
  console.log(profileInfo);

  return (
    <div className='adminPageContainer'>
      <Col lg={{ span: 8, offset: 2 }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Nav />
          <Container>
            <Card className='toolsTitle card-heading'>
              <Card.Body>
                <h1>Profile</h1>
                {/* <h2>here are some external links you can use in your tutor sessions!</h2> */}
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Container>
          <Card className='profile-card'>
            <Card.Body>
              <div className='card-heading'>
                <h2>{user.username}'s Profile</h2>
                <div className='profile-card-heading'>
                  <form className='profile-picture'>
                    {/* <input type="file" onChange={(e) => setFile(e.target.files[0])}></input> */}
                    {/* <button onClick={handleClick}>Upload</button> */}

                    <ProfilePicItem />
                  </form>
                </div>
              </div>

              {profileInfo.id && (
                <ul>
                  <li className='profile-bio'>
                    What is/was your favorite subject in school? <p>{profileInfo.favorite_subject}</p>
                  </li>
                  <li className='profile-bio'>
                    What are your special talents? <p>{profileInfo.hidden_talents}</p>
                  </li>
                  <li className='profile-bio'>
                    What is your 5-year goal? <p>{profileInfo.five_year_plan}</p>
                  </li>
                  <li className='profile-bio'>
                    If you could live in a fictional universe, which one would you choose?{' '}
                    <p>{profileInfo.fictional_universe}</p>
                  </li>
                  <li className='profile-bio'>
                    What is your favorite type of music? <p>{profileInfo.favorite_music}</p>
                  </li>
                  <li className='profile-bio'>
                    A couple sentences to describe yourself. <p>{profileInfo.short_description}</p>
                  </li>
                </ul>
              )}
              <Button className='primaryButton matchButton' onClick={handleProfilePicChange}>
                Change Profile Picture
              </Button>
              <Button className='primaryButton matchButton' onClick={() => history.push('/ProfileInfoForm')}>
                Update Bio
              </Button>

              {user.isTutor === true ? (
                <Button className='primaryButton matchButton' onClick={() => history.push('/TutorInfoEdit')}>
                  Update Tutoring Subjects
                </Button>
              ) : (
                <Button className='primaryButton matchButton' onClick={() => history.push('/StudentSubjectsEdit')}>
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
