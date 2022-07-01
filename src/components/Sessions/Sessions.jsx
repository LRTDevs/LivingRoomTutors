import { Card, Col, Container } from "react-bootstrap";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import { Accordion, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {useHistory} from "react-router-dom"


function Sessions() {

  useEffect(() => {
    if (user.isTutor === false) {
      dispatch({
        type: "FETCH_TUTOR_SESSIONS",
        type:"FETCH_MATCHED_TUTEES"
      });
    }
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const matches = useSelector((store) => store.matches);


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
      //hardcoded for now
      // BALLOON! added a hardcoded tutee_id value to test this out
      // remember that it was super important to have dummy data that made
      // sense in order to test all this out.
      //dropdown that maps tutees.id's of tutor. 
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
              // value={matches}
         
            >
               {matches.map((match) => {
                console.log('match reducer in map',match)
                return (
                  
                  <option value = {match.id} onClick={() => AddSessions(match.tutee_id)} key={match.id}>
                    {match.tutee_firstname} -
                  </option>
                );
              })}

/// .filter where user.id === match.tutor.id



              <option value="">Select </option>
            
              {/* <option value="1st">1st Grade</option>
              <option value="2nd">2nd Grade</option> */}
  
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
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </div>
    </div>
  );
}

export default Sessions;


