import { Card, Col, Container } from "react-bootstrap";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import { useState } from "react";


function MatchProfile() {
  useEffect(() => {
    dispatch({
      type: "FETCH_SELECTED_MATCH",
    });
 
    dispatch({
      type: "FETCH_SELECTED_PROFILE",
      payload: tuteeId
    });
  }, []);

  const dispatch = useDispatch();
  const selectedMatch = useSelector((store) => store.selectedMatch);
  const [tuteeId, setTuteeId] = useState("");

  const matchProfile =()=>{

    dispatch({
      type: "FETCH_SELECTED_PROFILE",
      payload: tuteeId
    });
  }

  return (
    <div>
      <div className="container">
        <Col lg={{ span: 8, offset: 3 }}>
          <Nav />

          <Container>
            <Card className="title">
              <Card.Body>
                <h1>Match Profile</h1>
                {/* BALLOON! Obvious balloon. Just a gameplan for how this component could work...
         filter the matches reducer to objects that match the tutor's id, then
         map through and show a profile for each tutee */}

                <Form.Select
                  id="gradeLevel"
                  className="selectGradeDropdown"
                  aria-label="gradeLevel"
                  onChange={(event) => setTuteeId(event.target.value)}
                >
                  <option value="">Select </option>
                  {selectedMatch.map((match) => {
                    // console.log("match reducer in map", match);
                    return (
                      <option value={match.tutee_id} key={match.id}>
                        {match.student_first_name}
                      </option>
                    );
                  })}







                  
                </Form.Select>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </div>
    </div>
  );
}

export default MatchProfile;
