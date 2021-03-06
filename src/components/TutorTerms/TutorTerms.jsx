import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Header from "../Header/Header";
import TutorModal from "../TutorModal/TutorModal";
import TutorProgressBar from "../TutorProgressBar/TutorProgressBar";
import {useHistory} from "react-router-dom"

function StudentTerms(props) {
  const dispatch = useDispatch();
  const history =useHistory();


  useEffect(() => {
    scrollToTop();

  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const tutorAdditional = useSelector(
    (store) => store.newtutor.newtutorAdditionalReducer
  );
  const tutorSubjects = useSelector((store) => store.newtutor.newtutorSubjectReducer);

  const tutorInfo = useSelector((store) => store.newtutor.newtutorInfoReducer);

  const newTutorTerms = useSelector(
    (store) => store.newtutor.newtutorTermsReducer
  );

  const [agreedToggle, setAgreedToggle] = useState(false);




  const [ClikcableButton, setClikcableButton] = useState(false);

  const changeTutorTerms = () => {
    console.log("in tutor terms");

    if (agreedToggle === false) {
      setAgreedToggle(true);
      dispatch({
        type: "ADD_TUTOR_TERMS",
        payload: true,
      });
    } else {
      setAgreedToggle(false);
      dispatch({
        type: "ADD_TUTOR_TERMS",
        payload: false,
      });
    }
  };

  //package up all collected info into object
  const newTutorObject = {
    PreK: tutorSubjects.PreK,
    FirstGrade: tutorSubjects.FirstGrade,
    SecondGrade: tutorSubjects.SecondGrade,
    ThirdGrade: tutorSubjects.ThirdGrade,
    FourthGrade: tutorSubjects.FourthGrade,
    FifthGrade: tutorSubjects.FifthGrade,
    SixthGrade: tutorSubjects.SixthGrade,
    SeventhGrade: tutorSubjects.SeventhGrade,
    EighthGrade: tutorSubjects.EighthGrade,
    NinthGrade: tutorSubjects.NinthGrade,
    TenthGrade: tutorSubjects.TenthGrade,
    EleventhGrade: tutorSubjects.EleventhGrade,
    TwelfthGrade: tutorSubjects.TwelfthGrade,
    K5Math: tutorSubjects.K5Math,
    K5Reading: tutorSubjects.K5Reading,
    K5EnglishWriting: tutorSubjects.K5EnglishWriting,
    K5SocialStudies: tutorSubjects.K5SocialStudies,
    K5Science: tutorSubjects.K5Science,
    SixToEightLanguageArts: tutorSubjects.SixToEightLanguageArts,
    SixToEightScience: tutorSubjects.SixToEightScience,
    SixToEightSocialStudies: tutorSubjects.SixToEightSocialStudies,
    MathPreAlgebra: tutorSubjects.MathPreAlgebra,
    MathLinearAlgebra: tutorSubjects.MathPreAlgebra,
    MathGeometry: tutorSubjects.MathGeometry,
    MathAlgebraII: tutorSubjects.MathAlgebraII,
    MathPrecalculusTrigonometry: tutorSubjects.MathPrecalculusTrigonometry,
    BiologyLifeSciences: tutorSubjects.BiologyLifeSciences,
    ScienceChemistry: tutorSubjects.ScienceChemistry,
    SciencePhysics: tutorSubjects.SciencePhysics,
    ComputerScience: tutorSubjects.ComputerScience,
    LanguageChinese: tutorSubjects.LanguageChinese,
    LanguageSpanish: tutorSubjects.LanguageSpanish,
    LanguageFrench: tutorSubjects.LanguageFrench,
    LanguageGerman: tutorSubjects.LanguageGerman,
    WorldHistory: tutorSubjects.WorldHistory,
    USHistory: tutorSubjects.USHistory,
    APHonorsBiology: tutorSubjects.APHonorsBiology,
    APHonorsChemistry: tutorSubjects.APHonorsChemistry,
    APHonorsPhysics: tutorSubjects.APHonorsPhysics,
    APHonorsComputerScience: tutorSubjects.APHonorsComputerScience,
    APHonorsCalculusAB: tutorSubjects.APHonorsCalculusAB,
    APHonorsCalculusBC: tutorSubjects.APHonorsCalculusBC,
    APHonorsStatistics: tutorSubjects.APHonorsStatistics,
    APHonorsEnglishLiterature: tutorSubjects.APHonorsEnglishLiterature,
    APHonorsEnglishLanguage: tutorSubjects.APHonorsEnglishLanguage,
    APHonorsMacroeconomics: tutorSubjects.APHonorsMacroeconomics,
    APHonorsMicroeconomics: tutorSubjects.APHonorsMicroeconomics,
    APHonorsPsychology: tutorSubjects.APHonorsPsychology,
    APHonorsUSHistory: tutorSubjects.APHonorsUSHistory,
    APHonorsGovernmentPolitics: tutorSubjects.APHonorsGovernmentPolitics,
    APHonorsHumanGeography: tutorSubjects.APHonorsHumanGeography,
    SATSubjectTests: tutorSubjects.SATSubjectTests,
    SATPrep: tutorSubjects.SATPrep,
    ACTPrep: tutorSubjects.ACTPrep,
    Other: tutorSubjects.Other,
    Spanish: tutorSubjects.Spanish,
    Somali: tutorSubjects.Somali,
    Arabic: tutorSubjects.Arabic,
    Chinese: tutorSubjects.Chinese,
    Tagalog: tutorSubjects.Tagalog,
    French: tutorSubjects.French,
    Vietnamese: tutorSubjects.Vietnamese,
    Hmong: tutorSubjects.Hmong,
    otherLanguage: tutorSubjects.otherLanguage,
    firstName: tutorInfo.firstName,
    lastName: tutorInfo.lastName,
    email: tutorInfo.email,
    pronouns: tutorInfo.pronouns,
    phone: tutorInfo.phone,
    grade: tutorInfo.grade,
    school: tutorInfo.school,
    miscInfo: tutorAdditional.tutorAdditionalInfo,
  };



  //the following two functions are the dispatch for the tutorInfo and
  //history.push to profileInfo
  const sendNewTutor = () => {
    dispatch({ type: "SEND_NEW_TUTOR", payload: newTutorObject });
  };


  const goToProfileInfoForm = () => {
    if (agreedToggle === false) {
      alert('Please agree to the required terms before continuing.');
    } else if (agreedToggle) {
      sendNewTutor();
      history.push('/ProfileInfoForm');
    }
  };

  return (
    <div className="formBackground">
      <Header />
      <Container className="formContainer">
        <div className="maincard">
          <TutorProgressBar />
          <div className="formContent">
            <p>
              Living Room Tutors (LRT) is supporting communities in their
              efforts to mitigate the immediate impact of school closures by
              facilitating the connections between volunteer student mentors/
              tutors and students/ mentees(tutees) who need support. This
              matching and tutoring service is offered at no cost. Once a match
              is made, it is the responsibility of the tutor and tutee to plan a
              tutoring session via Zoom, Google Hangouts, Skype or any other
              digital conferencing platform. By agreeing to become a volunteer
              tutor, you grant permission to allow LRT to share your personal
              information, such as a telephone number or email, with your tutee
              in order to facilitate scheduling a tutoring session. Once the
              match is made, it is the responsibility of the parents of the
              student mentee to set up and oversee any conferences and determine
              if the tutoring sessions should occur. We take safety very
              seriously and are taking all the possible precautions to
              prioritize the well-being and protection of all who use this
              service. Living Room Tutors does not perform background checks on
              potential mentors or mentees. We do not make any guarantees as to
              the quality of the mentorship/ tutoring provided by our mentors.
              By using this service, you are agreeing to assume all risks
              connected to the participation in the Living Room Tutors program
              match program and agree to not make a claim against Living Room
              Tutors, its directors and volunteers for damages that result from
              the use of our services, however caused, as a result of the
              student participation.
            </p>

            <Form.Check type="radio">
              <Form.Check.Input
                type="checkbox"
                id="TutorTerms"
                name="TutorTerms"
                onClick={(event) => changeTutorTerms()}
                checked={agreedToggle}
              />
              <Form.Check.Label
                className="customCheckAndRadioOptions"
                htmlFor="TutorTerms"
              >
                I understand <span className="requiredField"> *</span>
              </Form.Check.Label>
            </Form.Check>

            <div>
              {agreedToggle ? (
                <>
                  {/* <TutorModal newTutorObject={newTutorObject} /> */}
                  <Button className='saveAndContinueButton' onClick={goToProfileInfoForm}>
                    Submit
                  </Button>
                </>
              ) : (
                <Button className='saveAndContinueButton' disabled>
                  Submit
                </Button>
              )}
            </div>
     
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StudentTerms;
