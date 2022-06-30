import { Card, Col, Container } from "react-bootstrap";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";


function MatchProfile () {
    return(
 
<div>
    <Nav/>
   
    <div className="container">
    <Col lg={{ span: 8, offset: 3 }}>
      <Container>
        <Card className="title">
          <Card.Body>
         <h1>Match Profile</h1>
         {/* BALLOON! Obvious balloon. Just a gameplan for how this component could work...
         filter the matches reducer to objects that match the tutor's id, then
         map through and show a profile for each tutee */}
          </Card.Body>
        </Card>
      </Container>
    </Col>
 
   </div>
   </div>
    
    
  
    );
};

export default MatchProfile;