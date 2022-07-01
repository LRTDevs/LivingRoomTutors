import { Card, Col, Container } from "react-bootstrap";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import { Accordion, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DateTime } from "luxon";
import ConfirmSession from "../ConfirmDate/ConfirmDate";

function Sessions() {
  useEffect(() => {
    if (user.isTutor === false) {
      dispatch({
        type: "FETCH_TUTOR_SESSIONS",
      });
    }

    dispatch({
      type: "FETCH_SELECTED_MATCH",
      type: "FETCH_SELECTED_SESSIONS",

    });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const matches = useSelector((store) => store.matches);
  const sessions = useSelector((store) => store.sessions);
  const selectedMatch = useSelector((store) => store.selectedMatch);

  const [primaryDate, setPrimaryDate] = useState([]);
  const [secondaryDate, setSecondaryDate] = useState([]);
  const [tertiaryDate, setTertiaryDate] = useState([]);

  const AddSessions = (tutee_id) => {
    const newSessions = {
      primaryDate: primaryDate,
      secondaryDate: secondaryDate,
      tertiaryDate: tertiaryDate,
    };

    console.log("newSessions------------>", newSessions);
    console.log("Matches------------>", matches);

    dispatch({
      type: "ADD_TUTOR_SESSIONS",
      payload: { ...newSessions, tutee_id: tutee_id },
    });

    // history.push('/ProfileDashboard')
  };

  return (
    <div>
      <Nav />

      <div className="container">
        <Col lg={{ span: 8, offset: 3 }}>
          <Container>
            <Card className="title">
              <Card.Body>
                {user.isTutor && (
                  <div>
                    <h1>Schedule Tutoring Sessions </h1>
                    <span>
                      {" "}
                      Please select three dates and times for possible sessions.
                      Sessions will be send to tutee for confirmation.
                    </span>

                    <div className="formQandA">
                      <label className="customLabel" htmlFor="gradeLevel">
                        Select Student Name
                        <span className="requiredField"> *</span>
                      </label>

                      <Form.Select
                        id="gradeLevel"
                        className="selectGradeDropdown"
                        aria-label="gradeLevel"
                      >
                          <option value="">Select </option>
                        {selectedMatch.map((match) => {
                          // console.log("match reducer in map", match);
                          return (
                            <option
                              value={match.tutee_id}
                              onClick={() => AddSessions(match.tutee_id)}
                              key={match.id}
                            >
                              {match.student_first_name}
                            </option>
                          );
                        })}

                      
                      </Form.Select>
                    </div>

                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{ fontSize: "1.25rem", marginBottom: "20px" }}
                      >
                        {" "}
                        Select 1st Choice Date And Time
                      </Form.Label>
                      <Form.Control
                        type="datetime-local"
                        required
                        value={primaryDate}
                        onChange={(event) => setPrimaryDate(event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{ fontSize: "1.25rem", marginBottom: "20px" }}
                      >
                        {" "}
                        Select 2nd Choice Date And Time{" "}
                      </Form.Label>
                      <Form.Control
                        type="datetime-local"
                        required
                        value={secondaryDate}
                        onChange={(event) =>
                          setSecondaryDate(event.target.value)
                        }
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{ fontSize: "1.25rem", marginBottom: "18px" }}
                      >
                        {" "}
                        Select Third Choice Date And Time
                      </Form.Label>
                      <Form.Control
                        type="datetime-local"
                        required
                        value={tertiaryDate}
                        onChange={(event) =>
                          setTertiaryDate(event.target.value)
                        }
                      />
                    </Form.Group>

                    <Button
                      className="primaryButton saveAndContinueButton"
                      onClick={AddSessions}
                    >
                      Save
                    </Button>
                  </div>
                )}

                {user.isTutor === false && (
                  <div>
                    <h1>Confirm Tutoring Sessions </h1>
                    <span>
                      {" "}
                      Please confirm the best dates for your session.
                    </span>
                   
                    {sessions.map((session) => {
                      console.log("session map*****************", session);
                      return (
                        <ConfirmSession key={session.id} session={session} />
                      );
                    })}
                  </div> /////// separate get and reducer for specific sessions
                )}
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </div>
    </div>
  );
}

export default Sessions;
