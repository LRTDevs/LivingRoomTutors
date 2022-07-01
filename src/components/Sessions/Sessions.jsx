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
      type: "FETCH_TUTOR_SESSIONS",
    });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const matches = useSelector((store) => store.matches);
  const sessions = useSelector((store) => store.sessions);

  const [primaryDate, setPrimaryDate] = useState([]);
  const [secondaryDate, setSecondaryDate] = useState([]);
  const [tertiaryDate, setTertiaryDate] = useState([]);
  const [setTuteeId, TuteeId] = useState([]);

  const AddSessions = (tuteeId) => {
    const newSessions = {
      primaryDate: primaryDate,
      secondaryDate: secondaryDate,
      tertiaryDate: tertiaryDate,
    };

    console.log("newSessions------------>", newSessions);
    console.log("Matches------------>", matches);

    dispatch({
      type: "ADD_TUTOR_SESSIONS",
      payload: { ...newSessions, tutee_id: tuteeId },
    });
    //hardcoded for now
    // BALLOON! added a hardcoded tutee_id value to test this out
    // remember that it was super important to have dummy data that made
    // sense in order to test all this out.
    //dropdown that maps tutees.id's of tutor.
    // history.push('/ProfileDashboard')
  };

  // const handleTutee = (tutee_id) => {
  //   setTuteeId(tutee_id);
  //   console.log("onclick TuteeID**********************", TuteeId);
  // };

  return (
    <div>
      <Nav />

      <div className="container">
        <Col lg={{ span: 8, offset: 3 }}>
          <Container>
            <Card className="title">
              <Card.Body>
                <h1>Schedule Sessions </h1>
                {user.isTutor && (
                  <div>
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
                        value={TuteeId}
                        onChange={(event) => setTuteeId(event.target.value)}
                      >
                        {matches.map((match) => {
                          console.log("match reducer in map", match);
                          return (
                            <option
                              value={match.tutee_id}
                              onClick={() => AddSessions(match.tutee_id)}
                              key={match.id}
                            >
                              {match.tutee_firstname} -
                            </option>
                          );
                          ƒ;
                        })}
                        /// .filter where user.id === match.tutor.id
                        <option value="">Select </option>
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

                <span>
                  {" "}
                  Please confirm the best dates for your session.
                </span>

                {user.isTutor === false && (
                  <div>
                    {sessions.map((session) => {
                      console.log("session map*****************", session);
                      return (
                        <ConfirmSession key={session.id} session={session} />
                      );
                    })}
                  </div>
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
