import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

function TutorProfile(props) {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const flagIcon = <FontAwesomeIcon icon={faStar} />;

  const store = useSelector((store) => store);

  const languages = [
    { name: "Arabic ", status: props.tutor.tutor_language_arabic },
    { name: "Chinese ", status: props.tutor.tutor_language_chinese },
    { name: "French ", status: props.tutor.tutor_language_french },
    { name: "Hmong ", status: props.tutor.tutor_language_hmong },
    { name: "Somali ", status: props.tutor.tutor_language_somali },
    { name: "Tagalog ", status: props.tutor.tutor_language_tagalog },
    { name: "Vietnamese ", status: props.tutor.tutor_language_vietnamese },
    { name: "Spanish ", status: props.tutor.tutor_language_spanish },
    { name: props.tutor.tutor_language_other, status: false },
  ];

  const subjects = [
    { name: "K-5 Math ", status: props.tutor.tutor_k5_math },
    { name: "K-5 Reading ", status: props.tutor.tutor_k5_reading },
    {
      name: "K-5 English/Writing ",
      status: props.tutor.tutor_k5_english_writing,
    },
    { name: "K-5 Social Studies ", status: props.tutor.tutor_k5_science },
    { name: "K-5 Science ", status: props.tutor.tutor_k5_social_studies },
    {
      name: "6-8th Language Arts ",
      status: props.tutor.tutor_6th_to_8th_language_arts,
    },
    { name: "6-8th Science ", status: props.tutor.tutor_6th_to_8th_science },
    {
      name: "6-8th Social Studies ",
      status: props.tutor.tutor_6th_to_8th_social_studies,
    },
    { name: "Pre-Algebra ", status: props.tutor.tutor_math_pre_algebra },
    {
      name: "Algebra I/ Linear Algebra ",
      status: props.tutor.tutor_math_alg1_linear_alg,
    },
    { name: "Algebra II ", status: props.tutor.tutor_math_alg2 },
    { name: "Geometry ", status: props.tutor.tutor_math_geom },
    {
      name: "Precalculus/Trigonometry ",
      status: props.tutor.tutor_math_precalc_trig,
    },
    {
      name: "Biology/Life Sciences ",
      status: props.tutor.tutor_sci_bio_life,
    },
    { name: "Chemistry ", status: props.tutor.tutor_sci_chem },
    { name: "Physics ", status: props.tutor.tutor_sci_physics },
    { name: "Computer Science ", status: props.tutor.tutor_sci_comp_sci },
    { name: "Chinese ", status: props.tutor.tutor_lang_chinese },
    { name: "Spanish ", status: props.tutor.tutor_lang_spanish },
    { name: "French ", status: props.tutor.tutor_lang_french },
    { name: "German ", status: props.tutor.tutor_lang_german },
    { name: "World History ", status: props.tutor.tutor_hist_world },
    { name: "U.S. History ", status: props.tutor.tutor_hist_us },
    { name: "AP/Honors Biology ", status: props.tutor.tutor_ap_bio },
    { name: "AP/Honors Chemistry ", status: props.tutor.tutor_ap_chem },
    { name: "AP/Honors Physics ", status: props.tutor.tutor_ap_physics },
    { name: "AP/Honors Calculus AB ", status: props.tutor.tutor_ap_calc_ab },
    { name: "AP/Honors Calculus BC ", status: props.tutor.tutor_ap_calc_bc },
    { name: "AP/Honors Statistics ", status: props.tutor.tutor_ap_stats },
    {
      name: "AP/Honors Computer Science ",
      status: props.tutor.tutor_ap_comp_sci,
    },
    {
      name: "AP/Honors English Literature and Composition ",
      status: props.tutor.tutor_ap_english_lit_comp,
    },
    {
      name: "AP/Honors Language and Composition ",
      status: props.tutor.tutor_ap_lang_comp,
    },
    {
      name: "AP/Honors Macroeconomics ",
      status: props.tutor.tutor_ap_macro_econ,
    },
    {
      name: "AP/Honors Microeconomics ",
      status: props.tutor.tutor_ap_micro_econ,
    },
    { name: "AP/Honors Psychology ", status: props.tutor.tutor_ap_psyc },
    {
      name: "AP/Honors United States History ",
      status: props.tutor.tutor_ap_hist_us,
    },
    {
      name: "AP/Honors Government and Politics (US) ",
      status: props.tutor.tutor_ap_gov_politics_us,
    },
    {
      name: "AP/Honors Human Geography ",
      status: props.tutor.tutor_ap_human_geog,
    },
    {
      name: "SAT Subject Tests ",
      status: props.tutor.tutor_sat_subject_tests,
    },
    { name: "SAT Prep ", status: props.tutor.tutor_sat_prep },
    { name: "ACT Prep ", status: props.tutor.tutor_act_prep },
  ];

  const grades = [
    {
      name: "Pre-K/Kindergarten",
      status: props.tutor.mentor_prek_kindergarten,
    },
    { name: "1st Grade", status: props.tutor.mentor_grade_1 },
    { name: "2nd Grade", status: props.tutor.mentor_grade_2 },
    { name: "3rd Grade", status: props.tutor.mentor_grade_3 },
    { name: "4th Grade", status: props.tutor.mentor_grade_4 },
    { name: "5th Grade", status: props.tutor.mentor_grade_5 },
    { name: "6th Grade", status: props.tutor.mentor_grade_6 },
    { name: "7th Grade", status: props.tutor.mentor_grade_7 },
    { name: "8th Grade", status: props.tutor.mentor_grade_8 },
    { name: "9th Grade", status: props.tutor.mentor_grade_9 },
    { name: "10th Grade", status: props.tutor.mentor_grade_10 },
    { name: "11th Grade", status: props.tutor.mentor_grade_11 },
    { name: "12th Grade", status: props.tutor.mentor_grade_12 },
  ];


  return (
    <div>
      <div className="tutorAdditionalInfoBackground"></div>
      <h2 className="tutorGeneralInfo">Tutor General Information</h2>
      <div className="tutorGeneralInfoSection">
        <div className="profileTitle">
          <h2 className="profileFirstLastName">
            {props.tutor.tutor_first_name} {props.tutor.tutor_last_name}
          </h2>
          {props.tutor.tutor_pronouns && <p>({props.tutor.tutor_pronouns})</p>}
        </div>

        <div>
          <p className="profileQuestion">{emailIcon} Tutor's email: </p>
          <p className="profileAnswer">{props.tutor.tutor_email}</p>
        </div>

        <div>
          <p className="profileQuestion">{phoneIcon} Phone number: </p>
          <p className="profileAnswer">{props.tutor.tutor_phone}</p>
        </div>

        <div>
          <p className="profileQuestion">Grade Level:</p>
          <p className="profileAnswer">{props.tutor.tutor_grade}</p>
        </div>

        <div>
          <p className="profileQuestion">School attending:</p>
          <p className="profileAnswer"> {props.tutor.tutor_school}</p>
        </div>
        <div>
          <p className="profileQuestion">Languages comfortable tutoring in:</p>
          <div className="languagePillContainer">
            {languages.map((language) => {
              if (language.status === true) {
                return (

                  <div className="languagePill">
                    {" "}
                    <span className="languageFlag">
                      {flagIcon}
                    </span>{" "}
                    {language.name}
                  </div>
                );
              }
            })}
            {props.tutor.tutor_language_other !== null ?
              <div className="languagePill">
                {" "}
                <span className="languageFlag">
                  {flagIcon}
                </span>{" "}
                {props.tutor.tutor_language_other}
              </div>
              : <span></span>}
          </div>
        </div>
      </div>

      {/* ---------GRADES & SUBJECTS SECTION---------- */}

      <div className="tutorSubjectGradePreferenceBackground"></div>
      <h2 className="tutorSubjectGradePreference">
        Tutor Subject & Grade Preference
      </h2>
      <div className="tutorSubjectGradePreferenceSection">
        <div>
          <p className="profileQuestion">Grades comfortable tutoring: </p>
          <div className="gradesPillContainer">
            {grades.map((grade) => {
              if (grade.status === true) {
                return (

                  <div className="gradesPill">
                    {" "}

                    {grade.name}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div>
          <p className="profileQuestion">Subjects comfortable tutoring: </p>
          <div className="subjectPillContainer">
            {subjects.map((subject) => {
              if (subject.status === true && (
                subject.name === "Precalculus/Trigonometry " ||
                subject.name === "Biology/Life Sciences " ||
                subject.name === "Chemistry " ||
                subject.name === "Physics " ||
                subject === "Computer Science " ||
                subject.name === "Chinese " ||
                subject.name === "Spanish " ||
                subject.name === "French " ||
                subject.name === "German " ||
                subject.name === "World History " ||
                subject.name === "U.S. History " ||
                subject.name === "AP/Honors Biology " ||
                subject.name === "AP/Honors Chemistry " ||
                subject.name === "AP/Honors Physics " ||
                subject.name === "AP/Honors Calculus AB " ||
                subject.name === "AP/Honors Calculus BC " ||
                subject.name === "AP/Honors Statistics " ||
                subject.name === "AP/Honors Computer Science " ||
                subject.name ===
                "AP/Honors English Literature and Composition " ||
                subject.name ===
                "AP/Honors Language and Composition " ||
                subject.name === "AP/Honors Macroeconomics " ||
                subject.name === "AP/Honors Microeconomics " ||
                subject.name === "AP/Honors Psychology " ||
                subject.name === "AP/Honors United States History " ||
                subject.name ===
                "AP/Honors Government and Politics (US) " ||
                subject.name === "AP/Honors Human Geography " ||
                subject.name === "SAT Subject Tests " ||
                subject.name === "SAT Prep " ||
                subject.name === "ACT Prep "
              )) {
                return (
                  <div className="subjectPillFlagged">
                    <span className="subjectFlag">
                      {flagIcon}
                    </span>{" "}
                    {subject.name}
                  </div>
                );
              } else if (subject.status === true) {
                return (
                  <div className="subjectPill">{subject.name}</div>
                );
              }
            })}
          </div>
        </div>
      </div>

      {props.tutor.tutor_miscinfo && (
        <div>
          <div className="tuteeAdditionalInfoBackground"></div>
          <h2 className="tuteeAdditionalInfo">Additional Information</h2>
          <div className="tuteeAdditionalInfoRecordsSection">
            <span className="profileAnswer quote">
              "{props.tutor.tutor_miscinfo}"
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TutorProfile;
