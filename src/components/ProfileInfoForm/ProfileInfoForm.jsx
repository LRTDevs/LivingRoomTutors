import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import TutorProgressBar from '../TutorProgressBar/TutorProgressBar';
import { Button, Container, Form, FloatingLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProfileInfoForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const profileBio = useSelector((store) => store.profileReducer);

  useEffect(() => {
    scrollToTop();
    dispatch({
      type: 'FETCH_PROFILE_INFO',
    });
    // checkReducer(newtutorInfo);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  //////////////
  let favSubVal;
  let talentVal;
  let fiveYearVal;
  let universeVal;
  let musicVal;
  let descriptionVal;
  if (profileBio.favorite_subject === undefined ) {
    favSubVal = '';
    talentVal = '';
    fiveYearVal ='';
    universeVal ='';
    musicVal ='';
    descriptionVal ='';
  } else {
    favSubVal = profileBio.favorite_subject;
    talentVal = profileBio.hidden_talents;
    fiveYearVal =profileBio.five_year_plan;
    universeVal =profileBio.fictional_universe;
    musicVal =profileBio.favorite_music;
    descriptionVal =profileBio.short_description;
  }
  console.log(profileBio.favorite_music);
  ///////

  const [favoriteSubject, setFavoriteSubject] = useState(`${favSubVal}`);
  const [specialTalents, setSpecialTalents] = useState(`${talentVal}`);
  const [fiveYearGoal, setFiveYearGoal] = useState(`${fiveYearVal}`);
  const [fictionalUniverse, setFictionalUniverse] = useState(`${universeVal}`);
  const [favoriteMusic, setFavoriteMusic] = useState(`${musicVal}`);
  const [shortDescription, setShortDescription] = useState(`${descriptionVal}`);

  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

  //package up new info in object
  const profileInfo = {
    favoriteSubject: favoriteSubject,
    specialTalents: specialTalents,
    fiveYearGoal: fiveYearGoal,
    fictionalUniverse: fictionalUniverse,
    favoriteMusic: favoriteMusic,
    shortDescription: shortDescription
  };

  const addNewProfileInfo = () => {
    dispatch({ type: 'ADD_PROFILE_INFO', payload: profileInfo });
    history.push('/profile');
  };

  return (
    <div className='formBackground'>
      <Header />
      <Container className='formContainer'>
        {/* <TutorProgressBar /> */}
        <div className='formContent'>
          <h2>
            These questions will help your match get to know you better!
          </h2>
          <div className='formQandA'>
            <p>What is/was your favorite subject in school?</p>
            <FloatingLabel controlID='Favorite Subject' label='Favorite Subject' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                value={favoriteSubject}
                onChange={(event) => setFavoriteSubject(event.target.value)}
                defaultValue={favoriteSubject}
              />
            </FloatingLabel>
          </div>

          <div className='formQandA'>
            <p>What are your special talents?</p>
            <FloatingLabel controlID='Special Talents' label='Special Talents' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                value={specialTalents}
                onChange={(event) => setSpecialTalents(event.target.value)}
                defaultValue={specialTalents}
              />
            </FloatingLabel>
          </div>

          <div className='formQandA'>
            <p>What is your 5-year goal?</p>
            <FloatingLabel controlID='5-year Goal' label='5-year Goal' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                value={fiveYearGoal}
                onChange={(event) => setFiveYearGoal(event.target.value)}
                defaultValue={fiveYearGoal}
              />
            </FloatingLabel>
          </div>

          <div className='formQandA'>
            <p>If you could live in a fictional universe, which one would you choose?</p>
            <FloatingLabel controlID='Fictional Universe' label='Fictional Universe' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                value={fictionalUniverse}
                onChange={(event) => setFictionalUniverse(event.target.value)}
                defaultValue={fictionalUniverse}
              />
            </FloatingLabel>
          </div>

          <div className='formQandA'>
            <p>What is your favorite type of music?</p>
            <FloatingLabel controlID='Favorite Music' label='Favorite Music' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                value={favoriteMusic}
                onChange={(event) => setFavoriteMusic(event.target.value)}
                defaultValue={favoriteMusic}
              />
            </FloatingLabel>
          </div>

          <div className='formQandA'>
            <p>A couple sentences to describe yourself.</p>
            <FloatingLabel controlID='Short Description' label='Short Description' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                value={shortDescription}
                onChange={(event) => setShortDescription(event.target.value)}
                defaultValue={shortDescription}
              />
            </FloatingLabel>
          </div>

          <Button className='primaryButton saveAndContinueButton' onClick={addNewProfileInfo}>
            Save and Continue <span className='rightarrow'>{rightArrow}</span>
          </Button>
          <Button
            className='primaryButton saveAndContinueButton'
            //   onClick={AddNewTutorInfo}
          >
            Skip this Step <span className='rightarrow'>{rightArrow}</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ProfileInfoForm;
