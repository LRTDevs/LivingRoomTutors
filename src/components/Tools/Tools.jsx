import Nav from '../Nav/Nav';
import baamboozled from '../../images/baamboozled.png';
import kahoot from '../../images/kahoot.png';
import theMathLearningCenter from '../../images/themathlearningcenter.png';
import sketchpad from '../../images/sketchpad.png';
import webWhiteboard from '../../images/webwhiteboard.png';
import quizizz from '../../images/quizizz.png';
import { Card, Col, Container } from 'react-bootstrap';
import './Tools.css';

function Tools() {
  return (
    <>
      <div className='adminPageContainer tools-container'>
        <Col md={{ span: 6, offset: 4 }}>
          <Nav />
          <Col md={{ span: 7 }}>
            <Nav />
            <Container>
              <Card className='toolsTitle card-heading'>
                <Card.Body>
                  <h1>Tools</h1>
                  {/* <h2>here are some external links you can use in your tutor sessions!</h2> */}
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Col>

        <Col md={{ span: 4 }}>
          <Container>
            <Card className='tool-card'>
              <Card.Body>
                <Card.Title className='card-heading tool-card-title'>
                  <h3>Bamboozle</h3>
                  <p>Make Custom Teaching Games</p>
                </Card.Title>
                <a href='https://www.baamboozle.com/'>
                  <Card.Img src={baamboozled}></Card.Img>
                </a>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col md={{ span: 4 }}>
          <Container>
            <Card className='tool-card'>
              <Card.Body>
                <Card.Title className='card-heading tool-card-title'>
                  <h3>Quizizz</h3>
                  <p>A Quiz Lesson Tool</p>
                </Card.Title>
                <a href='https://quizizz.com/'>
                  <Card.Img src={quizizz}></Card.Img>
                </a>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col md={{ span: 4 }}>
          <Container>
            <Card className='tool-card'>
              <Card.Body>
                <Card.Title className='card-heading tool-card-title'>
                  <h3>Kahoot</h3>
                  <p>User-Generated Multiple-Choice Quizzes</p>
                </Card.Title>
                <a href='https://kahoot.com/'>
                  <Card.Img src={kahoot}></Card.Img>
                </a>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col md={{ span: 4 }}>
          <Container>
            <Card className='tool-card'>
              <Card.Body>
                <Card.Title className='card-heading tool-card-title'>
                  <h3>The Math Learning Center</h3>
                  {/* <p>Math Tutoring</p> */}
                </Card.Title>
                <a href='https://www.mathlearningcenter.org/'>
                  <Card.Img src={theMathLearningCenter}></Card.Img>
                </a>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col md={{ span: 4 }}>
          <Container>
            <Card className='tool-card'>
              <Card.Body>
                <Card.Title className='card-heading tool-card-title'>
                  <h3>Sketchpad</h3>
                  <p>Free Online Drawing</p>
                </Card.Title>
                <a href='https://sketch.io/sketchpad/'>
                  <div className='sketchpad-sizing-container'>
                    <Card.Img src={sketchpad} className='sketchpad-sizing'></Card.Img>
                  </div>
                </a>
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Col md={{ span: 4 }}>
          <Container>
            <Card className='tool-card'>
              <Card.Body>
                <Card.Title className='card-heading tool-card-title'>
                  <h3>Web Whiteboard</h3>
                  <p>Write and Interact in Real Time</p>
                </Card.Title>
                <a href='https://webwhiteboard.com/'>
                  <div className='web-whiteboard-sizing-container'>
                    <Card.Img src={webWhiteboard} className='web-whiteboard-sizing'></Card.Img>
                  </div>
                </a>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </div>
    </>
  );
}

export default Tools;
