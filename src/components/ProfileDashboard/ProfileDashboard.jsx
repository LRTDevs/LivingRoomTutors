import Header from "../Header/Header";

import Logo from "../../images/logoCrop.png";

import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { DateTime } from "luxon";

import Nav from "../Nav/Nav";
import { Card, Col, Container } from "react-bootstrap";
import UserPage from "../UserPage/UserPage";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

function ProfileDashboard() {
  useEffect(() => {
    dispatch({
      type: "FETCH_PROFILE_PIC",
      payload: user.id,
    });
    dispatch({
      type: "FETCH_SELECTED_SESSIONS",
    });
  }, []);

  const selectedSessions = useSelector((store) => store.selectedSessions);

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();


  return (
    <div>
      <Col lg={{ span: 8, offset: 3 }}>
        <Header />
        {user.isAdmin === true ? <AdminNavBar /> : <Nav />}

        <Container>
          <Card className="title">
            <Card.Body>
              <img alt="logo" style={{ maxWidth: "65px" }} src={Logo} />

              <h1>Welcome To The Dashboard, {user.username}!</h1>

              {/* should show only isConfirm === true */}
              {selectedSessions.map((session) => {
                console.log("sessions in dashboard", session);
                return (
                  <h1 key={session.id}>
                    {" "}
                    {DateTime.fromISO(session.date).toLocaleString(
                      DateTime.DATETIME_MED
                    )}
                    {user.isTutor == true && session.student_first_name}
                    <>
                      {session.isBooked == true ? <p>Confirmed ✓</p> : session.isRejected == true ? <p>Rejected</p> : <p>Pending</p>}
                    

                  
                    </>
                  </h1>
                );
              })}
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </div>
  );
}

export default ProfileDashboard;
