import { Card, Col, Container } from 'react-bootstrap';
import Nav from '../Nav/Nav';
import { Accordion, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DateTime } from 'luxon';
import ConfirmSession from '../ConfirmDate/ConfirmDate';

function Sessions() {
  useEffect(() => {
    dispatch({
      type: 'FETCH_SELECTED_SESSIONS',
    });
    dispatch({
      type: 'FETCH_SELECTED_MATCH',
    });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const matches = useSelector((store) => store.matches);
  const selectedSessions = useSelector((store) => store.selectedSessions);
  const selectedMatch = useSelector((store) => store.selectedMatch);

  const [primaryDate, setPrimaryDate] = useState([]);
  const [secondaryDate, setSecondaryDate] = useState([]);
  const [tertiaryDate, setTertiaryDate] = useState([]);
  const [tuteeId, setTuteeId] = useState('');

  const AddSessions = () => {
    const newSessions = {
      primaryDate: primaryDate,
      secondaryDate: secondaryDate,
      tertiaryDate: tertiaryDate,
    };

    console.log('newSessions------------>', newSessions);
    console.log('Matches------------>', matches);

    dispatch({
      type: 'ADD_TUTOR_SESSIONS',
      payload: { ...newSessions, tutee_id: tuteeId },
    });

    ////Add Modal Alert
    history.push('/ProfileDashboard');
  };

  return (
    <div className='adminPageContainer'>
      <Col lg={{ span: 8, offset: 2 }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Nav />
          <Container>
            <Card className='toolsTitle card-heading'>
              <Card.Body>
                <h1>Sessions</h1>
                {/* <h2>here are some external links you can use in your tutor sessions!</h2> */}
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <div>
          <Container>
            <Card className='title'>
              <Card.Body>
                {user.isTutor && (
                  <div>
                    <h1>Schedule Tutoring Sessions </h1>
                    <span>
                      Please select three dates and times for possible sessions. Sessions will be send to tutee for
                      confirmation.
                    </span>

                    <div className='formQandA'>
                      <label className='customLabel' htmlFor='gradeLevel'>
                        Select Student Name
                        <span className='requiredField'> *</span>
                      </label>

                      <Form.Select
                        id='gradeLevel'
                        className='selectGradeDropdown'
                        aria-label='gradeLevel'
                        onChange={(event) => setTuteeId(event.target.value)}
                      >
                        <option value=''>Select </option>
                        {selectedMatch.map((match) => {
                          // console.log("match reducer in map", match);
                          return (
                            <option value={match.tutee_id} key={match.id}>
                              {match.student_first_name}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </div>

                    <Form.Group className='mb-3'>
                      <Form.Label style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
                        {' '}
                        Select 1st Choice Date And Time
                      </Form.Label>
                      <Form.Control
                        type='datetime-local'
                        required
                        value={primaryDate}
                        onChange={(event) => setPrimaryDate(event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
                        {' '}
                        Select 2nd Choice Date And Time{' '}
                      </Form.Label>
                      <Form.Control
                        type='datetime-local'
                        required
                        value={secondaryDate}
                        onChange={(event) => setSecondaryDate(event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label style={{ fontSize: '1.25rem', marginBottom: '18px' }}>
                        {' '}
                        Select Third Choice Date And Time
                      </Form.Label>
                      <Form.Control
                        type='datetime-local'
                        required
                        value={tertiaryDate}
                        onChange={(event) => setTertiaryDate(event.target.value)}
                      />
                    </Form.Group>

                    <Button className='primaryButton saveAndContinueButton' onClick={AddSessions}>
                      Save
                    </Button>
                  </div>
                )}

                {user.isTutor === false && (
                  <div>
                    <h1>Confirm Tutoring Sessions </h1>
                    <span> Please confirm the best dates for your session.</span>

                    {selectedSessions
                      .filter((session) => {
                        return !session.isBooked && !session.isRejected;
                      })
                      .map((session) => {
                        console.log('session map*****************', session);
                        return <ConfirmSession key={session.id} session={session} />;
                      })}

                    {/* {selectedSessions[1]} */}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Container>
        </div>
      </Col>
    </div>
  );
}

export default Sessions;
