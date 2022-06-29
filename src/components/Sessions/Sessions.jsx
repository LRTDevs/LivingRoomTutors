import { Card, Col, Container } from "react-bootstrap";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import { Accordion, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function Sessions() {
  useEffect(() => {
    if (user.isTutor === false) {
      dispatch({
        type: "FETCH_TUTOR_SESSIONS",
      });
    }
  }, []);

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [primaryDate, setPrimaryDate] = useState([]);
  const [secondaryDate, setSecondaryDate] = useState([]);
  const [tertiaryDate, setTertiaryDate] = useState([]);

  const AddSessions = () => {
    const newSessions = {
      primaryDate: primaryDate,
      secondaryDate: secondaryDate,
      tertiaryDate: tertiaryDate,
    };

    console.log("newSessions------------>", newSessions);

    dispatch({
      type: "ADD_TUTOR_SESSIONS",
      payload: { ...newSessions, user_id: user.id },
    });

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
