import { Card, Col, Container } from "react-bootstrap";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";


function MatchProfile () {
    return(
 
<div>
   <div className="container">
    <Col lg={{ span: 8, offset: 3 }}>
    <Nav/>
    <Header/>
      <Container>
        <Card className="title">
          <Card.Body>
         <h1>Match Profile</h1>
          </Card.Body>
        </Card>
      </Container>
    </Col>
   </div>
   </div>
    
    
  
    );
};

export default MatchProfile;