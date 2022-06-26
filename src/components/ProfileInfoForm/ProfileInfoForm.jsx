import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import TutorProgressBar from '../TutorProgressBar/TutorProgressBar';
import { Button, Container, Form, FloatingLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProfileInfoForm() {
  useEffect(() => {
    scrollToTop();
    // checkReducer(newtutorInfo);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <div className='formBackground'>
      <Header />
      <Container className='formContainer'>
        <TutorProgressBar />
        <div className='formContent'>
          <h2>
            These questions will help your match get to know you better! If you'd like to fill in these bits later, you
            may skip this step.
          </h2>
          <div className='formQandA'>
            <p>What is/was your favorite subject in school?</p>
            <FloatingLabel controlID='Favorite Subject' label='Favorite Subject' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                //   value={Pronouns}
                //   onChange={(event) => changePronouns(event)}
                //   defaultValue={Pronouns}
              />
            </FloatingLabel>
          </div>

          <div className='formQandA'>
            <p>What are your special talents?</p>
            <FloatingLabel controlID='Special Talents' label='Special Talents' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                //   value={Pronouns}
                //   onChange={(event) => changePronouns(event)}
                //   defaultValue={Pronouns}
              />
            </FloatingLabel>
          </div>

          <div className='formQandA'>
            <p>What is your 5-year goal?</p>
            <FloatingLabel controlID='5-year Goal' label='5-year Goal' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                //   value={Pronouns}
                //   onChange={(event) => changePronouns(event)}
                //   defaultValue={Pronouns}
              />
            </FloatingLabel>
          </div>

          <div className='formQandA'>
            <p>If you could live in a fictional universe, which one would you choose?</p>
            <FloatingLabel controlID='Fictional Universe' label='Fictional Universe' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                //   value={Pronouns}
                //   onChange={(event) => changePronouns(event)}
                //   defaultValue={Pronouns}
              />
            </FloatingLabel>
          </div>

          <div className='formQandA'>
            <p>What is your favorite type of music?</p>
            <FloatingLabel controlID='Favorite Music' label='Favorite Music' className='formInput'>
              <Form.Control
                type='Pronouns'
                placeholder='Pronouns'
                //   value={Pronouns}
                //   onChange={(event) => changePronouns(event)}
                //   defaultValue={Pronouns}
              />
            </FloatingLabel>
          </div>

          <Button
            className='primaryButton saveAndContinueButton'
            //   onClick={AddNewTutorInfo}
          >
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
