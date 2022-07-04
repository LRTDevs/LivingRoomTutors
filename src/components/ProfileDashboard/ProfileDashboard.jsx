
import Logo from '../../images/logoCrop.png';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { Card, Col, Container } from 'react-bootstrap';
import UserPage from '../UserPage/UserPage';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { DateTime } from 'luxon';

function ProfileDashboard() {
  useEffect(() => {
    dispatch({
      type: 'FETCH_PROFILE_PIC',
      payload: user.id,
    });
    dispatch({
      type: 'FETCH_SELECTED_SESSIONS',
    });
  }, []);

  const selectedSessions = useSelector((store) => store.selectedSessions);

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (

    <div className='adminPageContainer'>
      <Col lg={{ span: 8, offset: 2 }}>
        <Col md={{ span: 6, offset: 3 }}>
          {user.isAdmin === true ? <AdminNavBar /> : <Nav />}
          <Container>
            <Card className='toolsTitle card-heading'>
              <Card.Body>
                <h1>Dashboard</h1>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Container>
          <Card className='title dashboard-card'>
            <Card.Title className='mt-3'>
              <img alt='logo' style={{ maxWidth: '65px' }} src={Logo} />
            </Card.Title>
            <Card.Body>

              <h1 className='dashboard-title'>Welcome, {user.username}!</h1>
            </Card.Body>
          </Card>

          <Card className='dashboard-card'>
            <Card.Body>
              {user.isTutor === true ? (
                <div className='dashboard-title'>
                  <h3 className='dashboard-item'>Living Room Tutors makes helping students easier than ever.</h3>
                  <h3 className='dashboard-item'>To start your experience, try scheduling a session under the 'Sessions' tab.</h3>
                  <h3>Thanks for helping students learn through Living Room Tutors!</h3>
                </div>
              ) : (
                <div className='dashboard-title'>
                  <h3 className='dashboard-item'>Living Room Tutors makes scheduling a qualified tutor easier than ever.</h3>
                  <h3 className='dashboard-item'>Once a tutor schedules with you or your child, please confirm your preferred time.</h3>
                  <h3>Thanks for learning with Living Room Tutors!</h3>
                </div>
              )}
            </Card.Body>
          </Card>

          {selectedSessions.length > 0 ? (
            selectedSessions.map((session) => {
              console.log('sessions in dashboard', session);
              return (
                <Card>
                  {/* The following should show only isConfirm === true */}
                  <Card.Body>
                    <h1 key={session.id} className='dashboard-title'>
                    {DateTime.fromISO(session.date).toLocaleString(
                      DateTime.DATETIME_MED
                    )}
                    {user.isTutor == true && session.student_first_name}
                    <>
                      {session.isBooked == true ? (
                        <p>Confirmed ✓</p>
                      ) : session.isRejected == true ? (
                        <p>Rejected</p>
                      ) : (
                        <p>Pending</p>
                      )}
                    </>
                  </h1>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <Card>
              <Card.Body>
                <h3 className='dashboard-title'>Whoops! No sessions scheduled yet!</h3>
              </Card.Body>
            </Card>
          )}
        </Container>
      </Col>
    </div>
  );
}

export default ProfileDashboard;
