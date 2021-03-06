import Header from '../Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nav from '../Nav/Nav';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Logo from '../../images/logoCrop.png';

import { Card, Col, Container } from 'react-bootstrap';
import './Guidelines.css';

function Guidelines() {
  useEffect(() => {
    console.log('userReducer---------->', user);
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const tutors = useSelector((store) => store.tutorReducer);

  return (
    <div className='adminPageContainer'>
      <Col lg={{ span: 8, offset: 2 }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Nav />
          <Container>
            <Card className='title card-heading'>
              <Card.Body>{user.isTutor === true ? <h1> Tutor Guidelines</h1> : <h1>Tutee Guidelines</h1>}</Card.Body>
            </Card>
          </Container>
        </Col>

        <Container className='guideline'>
          {user.isTutor === true ? (
            <>
              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>Account Info</h2>
                  <ul>
                    <li>Your LRT account may be accessed from the “Sign In” page of LRT’s main page.</li>
                    <li>The account will contain all information about your upcoming sessions and your tutees.</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>Matching</h2>
                  <ul>
                    <li>Once a match is made, you will be notified by email.</li>
                    <li>
                      After being matched, it is your responsibility to suggest three meeting times in the “Sessions”
                      section of your LRT account. If none of the suggested times work for your tutee, please suggest
                      three new ones.
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>Sessions</h2>
                  <ul>
                    <li>To start a session, visit the “Sessions” section of your LRT account.</li>
                    <li>
                      Please take the time to familiarize yourself with Google Meets before your first tutoring session.
                      Note that you will need a Google Account to host a meeting.
                    </li>
                    <li>Each tutoring session should be at least 20 minutes and no more than 2 hours.</li>
                    <li>
                      If canceling or rescheduling a session, give your tutee at least 24 hours notice by email or text.
                      Informing Living Room Tutors is not necessary.
                    </li>
                    <li>
                      Recording of tutoring sessions is prohibited unless all attending parties provide verbal consent.
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>Tutor Training Modules</h2>
                  <ul>
                    <li>
                      Before your first tutoring session, be sure to go over our LRT Tutor Training Modules. These
                      modules will equip you with the necessary skills to be a successful tutor.
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>General Tips and Housekeeping</h2>
                  <ul>
                    <li>
                      Do not worry if you cannot meet all three of your tutee’s subject requests. We aim to create
                      matches that accommodate for all of their desired subject areas to be covered, but sometimes that
                      is not possible.
                    </li>

                    <li>
                      Many of our tutors find that using IXL or Khan Academy to guide their lessons helpful. The “Tools”
                      section of your LRT account also contains useful resources.
                    </li>
                    <li>
                      Many tutors share their screen and use a sketchpad tool to help with their lessons. (works
                      especially well for math problems).
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>Communication Guidelines</h2>
                  <ul>
                    <li> Use respectful language and tone.</li>
                    <li> Listen with your full attention.</li>
                    <li> Suspend assumptions and judgments.</li>
                    <li>Respect the confidentiality of information shared during sessions.</li>
                    <li> Try to keep distractions minimum during calls.</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title card-heading'>
                <Card.Body>
                  <h2>
                    Please reach out to team@livingroomtutors.com with any questions. This includes requests for
                    volunteer hour certification.
                  </h2>
                </Card.Body>
              </Card>
            </>
          ) : (
            <>
              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>Account Info</h2>
                  <ul>
                    <li>Your LRT account may be accessed from the “Sign In” page of LRT’s main page.</li>
                    <li>The account will contain all information about your upcoming sessions and your tutees.</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>Matching</h2>
                  <ul>
                    <li>Once a match is made, you will be notified by email.</li>
                    <li>
                      Your tutor will suggest three meeting times through your LRT account. You may select as many or as
                      few of these as you desire or as work for you. If none of them work, please select “None of these
                      work”, and your tutor will suggest three new times.
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>Sessions</h2>
                  <ul>
                    <li>To join a tutoring session, visit the “Join A Session” section of your LRT account.</li>
                    <li>
                      Please take the time to familiarize yourself with Google Meets before your first tutoring session.
                    </li>
                    <li>Parents and guardians are encouraged to stay in the room during tutoring sessions.</li>
                    <li>Each tutoring session should be at least 30 minutes and no more than 2 hours. </li>
                    <li>
                      If canceling or rescheduling a session, give your tutor at least 24 hours notice by email or text.
                      Informing Living Room Tutors is not necessary.
                    </li>

                    <li>
                      Recording of tutoring sessions is prohibited unless all attending parties provide verbal consent.
                    </li>
                    <li>
                      When you have completed, stopped, or canceled tutoring with your tutor, please mark your status as
                      “Not seeking tutoring” in the “Account” section of your LRT account.
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title guideline-card'>
                <Card.Body>
                  <h2 className='card-heading'>Communication Guidelines</h2>
                  <ul>
                    <li>Use respectful language and tone. </li>
                    <li>Listen with your full attention.</li>
                    <li>Suspend assumptions and judgments. </li>
                    <li>Respect the confidentiality of information shared during sessions.</li>
                    <li>Try to keep distractions at a minimum during sessions.</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className='title card-heading'>
                <Card.Body>
                  <h2>Please reach out to team@livingroomtutors.com with any questions.</h2>
                </Card.Body>
              </Card>
            </>
          )}
        </Container>
      </Col>
    </div>
  );
}
export default Guidelines;
