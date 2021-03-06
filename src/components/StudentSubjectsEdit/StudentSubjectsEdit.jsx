import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Header from "../Header/Header";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Nav/Nav";
import { Card, Col} from "react-bootstrap";


function StudentSubjectsEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  // const presenting = false;

  useEffect(() => {
    scrollToTop();
    checkReducer(newStudentSubjects);
    dispatch({type: "FETCH_STUDENT_SUBJECTS"})
  }, []);
  const user = useSelector((store) => store.user);

  const store = useSelector((store) => store);
  const newStudentSubjects = useSelector(
    (store) => store.newStudent.newstudentSubjectReducer
  );

  const tuteeSubject = useSelector((store) => store.tutees.tuteesSubject);

  const checkReducer = (newStudentSubjects) => {
    console.log("in checkReducer", newStudentSubjects);
    if (newStudentSubjects.length == 0) {
      console.log("EMPTY");
      return false;
    } else {
      setNewPrimarySubject(newStudentSubjects.newPrimarySubject);
      setNewSecondarySubject(newStudentSubjects.newSecondarySubject);
      setNewTertiarySubject(newStudentSubjects.newTertiarySubject);
      setNewDetailedNeeds(newStudentSubjects.newDetailedNeeds);
    }
  };
  const rightArrow = <FontAwesomeIcon icon={faArrowRight} />;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const setDefaults = () => {
  
      setNewPrimarySubject("4");
      setNewSecondarySubject("1");
      setNewTertiarySubject("3");
      setNewDetailedNeeds("General support but especially with math homework.");
    
  };

  const [newPrimarySubject, setNewPrimarySubject] = useState(null);

  const [newSecondarySubject, setNewSecondarySubject] = useState(null);

  const [newTertiarySubject, setNewTertiarySubject] = useState(null);

  const [newDetailedNeeds, setNewDetailedNeeds] = useState("");

  // ************ Primary Subject Change ************
  const changePrimarySubject = () => {
    console.log("in new primary");
    if (event.target.value === "") {
      setNewPrimarySubject(null);
    } else {
      setNewPrimarySubject(event.target.value);
    }
  };

  const changeOtherPrimarySubject = () => {
    console.log("in other school");
    setNewPrimarySubject(event.target.value);
  };

  // ************ Secondary Subject Change ************
  const changeSecondarySubject = () => {
    console.log("in new secondary");

    if (event.target.value == "") {
      setNewSecondarySubject(null);
    } else {
      setNewSecondarySubject(event.target.value);
    }
  };

  const changeOtherSecondarySubject = () => {
    console.log("in other school");
    setNewSecondarySubject(event.target.value);
  };

  // ************ Tertiary Subject Change ************
  const changeTertiarySubject = () => {
    console.log("in new tertiary");

    if (event.target.value === "") {
      setNewTertiarySubject(null);
    } else {
      setNewTertiarySubject(event.target.value);
    }
  };

  const changeOtherTertiarySubject = () => {
    console.log("in other school");
    setNewTertiarySubject(event.target.value);
  };

  const changeDetailedNeeds = () => {
    console.log("in new detailed needs");
    setNewDetailedNeeds(event.target.value);
  };

  const AddNewStudentSubjects = () => {
    //package up new info in object
    const newStudentSubjects = {
      newPrimarySubject: newPrimarySubject,
      newSecondarySubject: newSecondarySubject,
      newTertiarySubject: newTertiarySubject,
      newDetailedNeeds: newDetailedNeeds,
    };

    if (
      newStudentSubjects.newPrimarySubject == null ||
      newStudentSubjects.newSecondarySubject == null ||
      newStudentSubjects.newTertiarySubject == null ||
      newStudentSubjects.newDetailedNeeds == "" ||
      newStudentSubjects.newDetailedNeeds == null
    ) {
      return alert(
        "At least one required field was empty. Please fill in the required fields before continuing."
      );
    } else {
      dispatch({
        type: "UPDATE_STUDENT_SUBJECTS",
        payload:{ ...newStudentSubjects, user_id: user.id},
      });
      history.push("/ProfileDashboard");
      //////Add sweetalert for updated information!!!!!!!
    }
  };

  return (
    <div className="formBackground">

<Nav/>
     <Col lg={{ span: 8, offset: 3 }}>
          <Container>
            <Card className="title">

          
              <Card.Body>







      <Header />
      <Container className="formContainer">
        <div className="maincard">
     
          <div className="formContent">
            <div className="formQandA">
              <p onClick={setDefaults}>
                In what subjects does the student need support?{" "}
                <span className="requiredField"> *</span>
              </p>
              <FloatingLabel
                controlId="primarySubject"
                label="Student's 1st Choice"
                className="selectInput subjectOptions"
              >
                <Form.Select
                  onChange={(event) => changePrimarySubject(event)}
                  aria-label="Student's 1st Choice"
                  defaultValue={newPrimarySubject}
                  value={newPrimarySubject}
                >
                  <option value="">Select</option>
                  <option value="1">K-5 Math</option>
                  <option value="2">K-5 Reading</option>
                  <option value="3">K-5 English/Writing</option>
                  <option value="5">K-5 Social Studies</option>
                  <option value="4">K-5 Science</option>
                  <option value="6">6-8th Language Arts</option>
                  <option value="7">6-8th Science</option>
                  <option value="8">6-8th Social Studies</option>
                  <option value="9">Math: Pre-Algebra</option>
                  <option value="10">Math: Algebra I/Linear Algebra</option>
                  <option value="11">Math: Algebra II</option>
                  <option value="12">Math: Geometry</option>
                  <option value="13">Math: Precalculus/Trigonometry</option>
                  <option value="14">Science: Biology/Life Sciences</option>
                  <option value="15">Science: Chemistry</option>
                  <option value="16">Science: Physics</option>
                  <option value="17">Science: Computer Science</option>
                  <option value="18">Language: Chinese </option>
                  <option value="20">Language: Spanish</option>
                  <option value="21">Language: French</option>
                  <option value="19">Language: German</option>
                  <option value="22">History: World History</option>
                  <option value="23">History: U.S. History</option>
                  <option value="24">AP Honors Biology</option>
                  <option value="25">AP Honors Chemistry</option>
                  <option value="26">AP Honors Physics</option>
                  <option value="27">AP Honors Calculus AB</option>
                  <option value="28">AP Honors Calculus BC</option>
                  <option value="29">AP Honors Statistics</option>
                  <option value="30">AP Honors Computer Science</option>
                  <option value="31">
                    AP Honors English Literature and Composition
                  </option>
                  <option value="32">
                    AP Honors English Language and Composition
                  </option>
                  <option value="33">AP Honors Macroeconomics</option>
                  <option value="34">AP Honors Microeconomics</option>
                  <option value="35">AP Honors Psychology</option>
                  <option value="36">AP Honors United States History</option>
                  <option value="37">AP Honors Government and Politics</option>
                  <option value="38">AP Honors Human Geography</option>
                  <option value="39">SAT Subject Tests</option>
                  <option value="40">SAT Prep</option>
                  <option value="41">ACT Prep</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="secondarySubject"
                label="Student's 2nd Choice"
                className="selectInput subjectOptions"
                onChange={(event) => changeSecondarySubject(event)}
              >
                <Form.Select
                  aria-label="Student's 2nd Choice"
                  defaultValue={newSecondarySubject}
                  value={newSecondarySubject}
                >
                  <option value="">Select</option>
                  <option value="1">K-5 Math</option>
                  <option value="2">K-5 Reading</option>
                  <option value="3">K-5 English/Writing</option>
                  <option value="5">K-5 Social Studies</option>
                  <option value="4">K-5 Science</option>
                  <option value="6">6-8th Language Arts</option>
                  <option value="7">6-8th Science</option>
                  <option value="8">6-8th Social Studies</option>
                  <option value="9">Math: Pre-Algebra</option>
                  <option value="10">Math: Algebra I/Linear Algebra</option>
                  <option value="11">Math: Algebra II</option>
                  <option value="12">Math: Geometry</option>
                  <option value="13">Math: Precalculus/Trigonometry</option>
                  <option value="14">Science: Biology/Life Sciences</option>
                  <option value="15">Science: Chemistry</option>
                  <option value="16">Science: Physics</option>
                  <option value="17">Science: Computer Science</option>
                  <option value="18">Language: Chinese </option>
                  <option value="20">Language: Spanish</option>
                  <option value="21">Language: French</option>
                  <option value="19">Language: German</option>
                  <option value="22">History: World History</option>
                  <option value="23">History: U.S. History</option>
                  <option value="24">AP Honors Biology</option>
                  <option value="25">AP Honors Chemistry</option>
                  <option value="26">AP Honors Physics</option>
                  <option value="27">AP Honors Calculus AB</option>
                  <option value="28">AP Honors Calculus BC</option>
                  <option value="29">AP Honors Statistics</option>
                  <option value="30">AP Honors Computer Science</option>
                  <option value="31">
                    AP Honors English Literature and Composition
                  </option>
                  <option value="32">
                    AP Honors English Language and Composition
                  </option>
                  <option value="33">AP Honors Macroeconomics</option>
                  <option value="34">AP Honors Microeconomics</option>
                  <option value="35">AP Honors Psychology</option>
                  <option value="36">AP Honors United States History</option>
                  <option value="37">AP Honors Government and Politics</option>
                  <option value="38">AP Honors Human Geography</option>
                  <option value="39">SAT Subject Tests</option>
                  <option value="40">SAT Prep</option>
                  <option value="41">ACT Prep</option>
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel
                controlId="tertiarySubject"
                label="Student's 3rd Choice"
                className="selectInput"
              >
                <Form.Select
                  onChange={(event) => changeTertiarySubject(event)}
                  aria-label="Student's 3rd Choice"
                  defaultValue={newTertiarySubject}
                  value={newTertiarySubject}
                >
                  <option value="">Select</option>
                  <option value="1">K-5 Math</option>
                  <option value="2">K-5 Reading</option>
                  <option value="3">K-5 English/Writing</option>
                  <option value="5">K-5 Social Studies</option>
                  <option value="4">K-5 Science</option>
                  <option value="6">6-8th Language Arts</option>
                  <option value="7">6-8th Science</option>
                  <option value="8">6-8th Social Studies</option>
                  <option value="9">Math: Pre-Algebra</option>
                  <option value="10">Math: Algebra I/Linear Algebra</option>
                  <option value="11">Math: Algebra II</option>
                  <option value="12">Math: Geometry</option>
                  <option value="13">Math: Precalculus/Trigonometry</option>
                  <option value="14">Science: Biology/Life Sciences</option>
                  <option value="15">Science: Chemistry</option>
                  <option value="16">Science: Physics</option>
                  <option value="17">Science: Computer Science</option>
                  <option value="18">Language: Chinese </option>
                  <option value="20">Language: Spanish</option>
                  <option value="21">Language: French</option>
                  <option value="19">Language: German</option>
                  <option value="22">History: World History</option>
                  <option value="23">History: U.S. History</option>
                  <option value="24">AP Honors Biology</option>
                  <option value="25">AP Honors Chemistry</option>
                  <option value="26">AP Honors Physics</option>
                  <option value="27">AP Honors Calculus AB</option>
                  <option value="28">AP Honors Calculus BC</option>
                  <option value="29">AP Honors Statistics</option>
                  <option value="30">AP Honors Computer Science</option>
                  <option value="31">
                    AP Honors English Literature and Composition
                  </option>
                  <option value="32">
                    AP Honors English Language and Composition
                  </option>
                  <option value="33">AP Honors Macroeconomics</option>
                  <option value="34">AP Honors Microeconomics</option>
                  <option value="35">AP Honors Psychology</option>
                  <option value="36">AP Honors United States History</option>
                  <option value="37">AP Honors Government and Politics</option>
                  <option value="38">AP Honors Human Geography</option>
                  <option value="39">SAT Subject Tests</option>
                  <option value="40">SAT Prep</option>
                  <option value="41">ACT Prep</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            {/*---------- last section---------- */}
            <div className="formQandA">
              <p className="pWithSubP">
                Please describe your needs in detail regarding the subject(s)
                you selected above: <span className="requiredField"> *</span>
              </p>
              <p className="subP">
                The more detailed you are, the better we can find a tutor to fit
                your needs!
                <br></br>
                For example: (AP Macroeconomics) I need help understanding
                Fiscal Policy; (K-5 math) I need help with understanding long
                division.
              </p>
              <FloatingLabel
                controlId="DetailedNeeds"
                label="Details of tutoring needs"
                className="textInput"
                onChange={(event) => changeDetailedNeeds(event)}
              >
                <Form.Control
                  className="textArea"
                  as="textarea"
                  placeholder="Details of tutoring needs"
                  style={{ height: "100px" }}
                  defaultValue={newDetailedNeeds}
                />
              </FloatingLabel>
            </div>

            <Button
              className="primaryButton saveAndContinueButton"
              onClick={AddNewStudentSubjects}
            >
              Save and Continue <span className="rightarrow">{rightArrow}</span>
            </Button>
          </div>
        </div>
      </Container>
      </Card.Body>
            </Card>
          </Container>
        </Col>
    </div>
  );
}

export default StudentSubjectsEdit;
