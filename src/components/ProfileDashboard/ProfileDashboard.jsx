import Header from '../Header/Header';

import Nav from '../Nav/Nav'
import { Card, Col, Container } from "react-bootstrap";

function ProfileDashboard() {
  return (
  
  

  <div>
  <Header />
  <Nav/>


<Col lg={{ span: 8, offset: 3 }}>
          <Container>
            <Card className="title">
              <Card.Body>
              <h1>Welcome To The Dashboard! </h1>
              </Card.Body>
            </Card>
          </Container>
        </Col>



  </div>
  
  ) ;
}


export default ProfileDashboard;
