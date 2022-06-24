import React from 'react'
import Header from '../Header/Header';
import TutorProgressBar from '../TutorProgressBar/TutorProgressBar';
import { Container, Form } from 'react-bootstrap';

function ProfileInfoForm() {
  return (
    <div>
        <Header />
    </div>
//     <div className="formBackground">
//     <Header />
//     <Container className="formContainer">
//       <TutorProgressBar />
//       <div className="formContent">
//         <div className="formQandA">
//           <p onClick={setDefaults}>
//             What is your name? <span className="requiredField"> *</span>
//           </p>
//           <FloatingLabel
//             controlID="FirstName"
//             label="First Name"
//             className="formInput"
//           >
//             <Form.Control
//               type="FirstName"
//               placeholder="First Name"
//               value={newTutorFirstName}
//               onChange={(event) => changeTutorFirstName(event)}
//               defaultValue={newTutorFirstName}
//             />
//           </FloatingLabel>
//           <FloatingLabel
//             controlID="LastName"
//             label="Last Name"
//             className="formInput"
//           >
//             <Form.Control
//               type="LastName"
//               placeholder="Last Name"
//               value={newTutorLastName}
//               onChange={(event) => changeTutorLastName(event)}
//               defaultValue={newTutorLastName}
//             />
//           </FloatingLabel>
//         </div>

//         <div className="formQandA">
//           <p>What are your pronouns?</p>
//           <FloatingLabel
//             controlID="Pronouns"
//             label="Pronouns Ex:She/Her"
//             className="formInput"
//           >
//             <Form.Control
//               type="Pronouns"
//               placeholder="Pronouns"
//               value={Pronouns}
//               onChange={(event) => changePronouns(event)}
//               defaultValue={Pronouns}
//             />
//           </FloatingLabel>
//         </div>

//         <div className="formQandA">
//           <p className="pWithSubP">
//             What is your email address?{" "}
//             <span className="requiredField"> *</span>
//           </p>
//           <p className="subP">
//             Please confirm the email address you enter is correct. Email is
//             our primary way of communicating with our tutors and tutees, so it
//             is crucial that the email address that you provide is correct.
//           </p>
//           <FloatingLabel
//             controlID="Email"
//             label="Email"
//             className="formInput"
//           >
//             <Form.Control
//               type="Email"
//               placeholder="Email"
//               value={newTutorEmail}
//               onChange={(event) => changeTutorEmail(event)}
//               defaultValue={newTutorEmail}
//             />
//           </FloatingLabel>
//         </div>

//         <div className="formQandA">
//           <p>
//             What is your phone number?
//             <span className="requiredField"> *</span>
//           </p>
//           <FloatingLabel
//             controlID="Phone"
//             label="Phone Number"
//             className="formInput"
//           >
//             <Form.Control
//               type="Phone"
//               placeholder="Phone"
//               value={newTutorPhone}
//               onChange={(event) => changeTutorPhone(event)}
//               defaultValue={newTutorPhone}
//             />
//           </FloatingLabel>
//         </div>

//         <div className="formQandA">
//           <label className="customLabel" htmlFor="gradeLevel">
//             What is your current grade level?{" "}
//             <span className="requiredField"> *</span>
//           </label>
//           <Form.Select
//             className="selectGradeDropdown"
//             id="gradeLevel"
//             aria-label="gradeLevel"
//             value={newGrade}
//             onChange={(event) => changeTutorGrade(event)}
//             defaultValue={newGrade}
//           >
//             <option value="">Select your current grade level</option>
//             <option value="Freshman">9th</option>
//             <option value="Sophomore">10th</option>
//             <option value="Junior">11th</option>
//             <option value="Senior">12th</option>
//             <option value="College">I'm in College</option>
//           </Form.Select>
//         </div>

//         <div className="formQandA">
//           <label className="customLabel" htmlFor="schoolAttending">
//             Where do you go to school?
//             <span className="requiredField"> *</span>
//           </label>

//           <Form.Select
//             id="schoolAttending"
//             className="selectGradeDropdown"
//             label="Current School"
//             value={defaultSchoolVal}
//             onChange={(event) => changeTutorSchool(event)}
//             aria-label="schoolAttending"
//             defaultValue={defaultSchoolVal}
//           >
//             <option value="">Select where you go to school</option>
//             <option value="Mayo High School">Mayo High School</option>
//             <option value="John Marshall High School">
//               John Marshall High School
//             </option>
//             <option value="Century High School">Century High School</option>
//             <option value="Lourdes High School">Lourdes High School</option>
//             <option value="Byron High School">Byron High School</option>
//             <option value="Dover-Eyota High School">
//               Dover-Eyota High School
//             </option>
//             <option value="Stewartville High School">
//               Stewartville High School
//             </option>
//             <option value="Other">Other</option>
//           </Form.Select>

//           {changeOtherField ? (
//             <>
//               <FloatingLabel
//                 controlID="OtherSchool"
//                 label="School Name"
//                 className="formInput"
//               >
//                 <Form.Control
//                   type="OtherSchool"
//                   placeholder="OtherSchool"
//                   onChange={(event) => changeOtherSchool(event)}
//                   defaultValue={otherSchooldefault}
//                 />
//               </FloatingLabel>
//             </>
//           ) : (
//               <> </>
//             )}
//         </div>

//         <Button
//           className="primaryButton saveAndContinueButton"
//           onClick={AddNewTutorInfo}
//         >
//           Save and Continue <span className="rightarrow">{rightArrow}</span>
//         </Button>
//       </div>
//     </Container>
//   </div>
  )
}

export default ProfileInfoForm