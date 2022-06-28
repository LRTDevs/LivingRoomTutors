import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Nav from "../Nav/Nav";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Card, Col, Container } from "react-bootstrap";
import "./Guidelines.css";

function Guidelines() {
  useEffect(() => {
    console.log("userReducer---------->", user);
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const tutors = useSelector((store) => store.tutorReducer);

  return (
    <>
      {/* <Header /> */}
      <Nav />
      <div className="container">
        <Col lg={{ span: 8, offset: 3 }}>
          <Container>
            <Card className="title">
              <Card.Body>
                {user.isTutor === true ? (
                  <h1> Tutor Guidelines</h1>
                ) : (
                  <h1>Tutee Guidelines</h1>
                )}
              </Card.Body>
            </Card>
          </Container>
        </Col>

        <Container>
          <Col lg={{ span: 8, offset: 3 }}>
            {user.isTutor === true ? (
              <Card className="title">
                <Card.Body>
                  LRT Tutor Guide------Once a match is made, you will be
                  notified by email.You can access your LRT account from the
                  “Sign In” page of LRT’s main page. After being matched, it is
                  your responsibility to suggest three meeting times in the
                  “Sessions” section of your LRT account. If none of the
                  suggested times work for your tutee, please suggest three new
                  ones. Your LRT account will contain all information about your
                  upcoming sessions and your tutee. To communicate with your
                  tutee, please find their contact information in the “My Match”
                  section of your LRT account. To start a session, visit the
                  “Sessions” section of your LRT account. Please take the time
                  to familiarize yourself with Google Meets before your first
                  tutoring session. Note that you will need a Google Account to
                  host a meeting. Each tutoring session should be at least 20
                  minutes and no more than 2 hours. If canceling or rescheduling
                  a session, give your tutee at least 24 hours notice by email
                  or text. Informing Living Room Tutors is not necessary.
                  Recording of tutoring sessions is prohibited unless all
                  attending parties provide verbal consent. When you have
                  completed, stopped, or canceled tutoring with your tutor,
                  please mark your status as “Not actively tutoring” in the
                  “Account” section of your LRT account. Please reach out to
                  team@livingroomtutors.com with any questions. This includes
                  requests for volunteer hour certification. Tutor Training
                  Modules Before your first tutoring session, be sure to go over
                  our LRT Tutor Training Modules. These modules will equip you
                  with the necessary skills to be a successful tutor. General
                  Tips and Housekeeping. Do not worry if you cannot meet all
                  three of your tutee’s subject requests. We aim to create
                  matches that accommodate for all of their desired subject
                  areas to be covered, but sometimes that is not possible. Many
                  of our tutors find that using IXL or Khan Academy to guide
                  their lessons helpful. The “Tools” section of your LRT account
                  also contains useful resources. Many tutors share their screen
                  and use this sketchpad tool to help with their lessons. (works
                  especially well for math problems). Communication Guidelines.
                  Use respectful language and tone. Listen with your full
                  attention. Suspend assumptions and judgments. Respect the
                  confidentiality of information shared during sessions. Try to
                  keep distractions minimum during calls.
                </Card.Body>
              </Card>
            ) : (
              <Card className="title">
                <Card.Body>
                  LRT Tutee Guide ------Once a match is made, you will be
                  notified by email. You can access your LRT account from the
                  “Sign In” page of LRT’s main page.Your tutor will suggest
                  three meeting times through your LRT account. You may select
                  as many or as few of these as you desire or as work for you.
                  If none of them work, please select “None of these work,” and
                  your tutor will suggest three new times.Your LRT account will
                  contain all information about your upcoming sessions and your
                  tutor. To communicate with your tutor, please find their
                  contact information in the “My Match” section of your LRT
                  account. To join a tutoring session, visit the “Join A
                  Session” section of your LRT account.Please take the time to
                  familiarize yourself with Google Meets before your first
                  tutoring session. Parents and guardians are encouraged to stay
                  in the room during tutoring sessions. Each tutoring session
                  should be at least 30 minutes and no more than 2 hours.If
                  canceling or rescheduling a session, give your tutor at least
                  24 hours notice by email or text. Informing Living Room Tutors
                  is not necessary. Recording of tutoring sessions is prohibited
                  unless all attending parties provide verbal consent. When you
                  have completed, stopped, or canceled tutoring with your tutor,
                  please mark your status as “Not seeking tutoring” in the
                  “Account” section of your LRT account. Please reach out to
                  team@livingroomtutors.com with any questions. Communication
                  Guidelines. Use respectful language and tone. Listen with your
                  full attention. Suspend assumptions and judgments. Respect the
                  confidentiality of information shared during sessions. Try to
                  keep distractions at a minimum during sessions.
                </Card.Body>
              </Card>
            )}
       
      

      
   </Col>
  </Container>



      </div>
    </>
  );
}
export default Guidelines;
