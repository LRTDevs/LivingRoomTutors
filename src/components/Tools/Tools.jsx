import Nav from '../Nav/Nav';
import baamboozled from '../../images/baamboozled.png';
import kahoot from '../../images/kahoot.png';
import theMathLearningCenter from '../../images/themathlearningcenter.png';
import sketchpad from '../../images/sketchpad.png';
import webWhiteboard from '../../images/webwhiteboard.png';
import quizizz from '../../images/quizizz.png'
import { Card, Col, Container } from 'react-bootstrap';
import './Tools.css';

function Tools() {
  return (
    <>
      <Nav />

      <Col md={{ span: 6, offset: 5 }}>
        <Container>
          <Card className='toolsTitle'>
            <Card.Body>
              <h2>Tools you can use in your sessions!</h2>
              {/* <h2>here are some external links you can use in your tutor sessions!</h2> */}
            </Card.Body>
          </Card>
        </Container>
      </Col>

      <Col md={{ span: 6, offset: 5 }}>
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Bamboozle - make your own teaching games</Card.Title>
              <a href='https://www.baamboozle.com/'>
                <Card.Img src={baamboozled}></Card.Img>
              </a>
            </Card.Body>
          </Card>
        </Container>
      </Col>

      <Col md={{ span: 6, offset: 5 }}>
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Quizizz: a quiz and interactive lesson tool</Card.Title>
              <a href='https://quizizz.com/'>
                <Card.Img src={quizizz}></Card.Img>
              </a>
            </Card.Body>
          </Card>
        </Container>
      </Col>

      <Col md={{ span: 6, offset: 5 }}>
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Kahoot: user-generated multiple-choice quizzes </Card.Title>
              <a href='https://kahoot.com/'>
                <Card.Img src={kahoot}></Card.Img>
              </a>
            </Card.Body>
          </Card>
        </Container>
      </Col>

      <Col md={{ span: 6, offset: 5 }}>
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>The Math Learning Center: Math tutoring resources</Card.Title>
              <a href='https://www.mathlearningcenter.org/'>
                <Card.Img src={theMathLearningCenter}></Card.Img>
              </a>
            </Card.Body>
          </Card>
        </Container>
      </Col>

      <Col md={{ span: 6, offset: 5 }}>
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Sketchpad: A free online drawing application for all ages</Card.Title>
              <a href='https://sketch.io/sketchpad/'>
                <Card.Img src={sketchpad}></Card.Img>
              </a>
            </Card.Body>
          </Card>
        </Container>
      </Col>

      <Col md={{ span: 6, offset: 5 }}>
        <Container>
          <Card>
            <Card.Body>
              <Card.Title>Web Whiteboard: a learning space where teachers and students can write and interact in real time</Card.Title>
              <a href='https://webwhiteboard.com/'>
                <Card.Img src={webWhiteboard}></Card.Img>
              </a>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </>
  );
}

export default Tools;
