import { Card, Col, Container } from "react-bootstrap";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";


function Sessions() {
  return (

    <>
      <Col lg={{ span: 8, offset: 3 }}>
        <Nav />
        <Header />
        <div className="container">
          <Container>
            <Card className="title">
              <Card.Body>
                <h1>Schedule Sessions </h1>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </Col>
    </>

  );
};

export default Sessions;