const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */

router.get("/", (req, res) => {
  console.log("in tutors.router/get");
  const query = `SELECT * FROM tutors`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get test", err);
      res.sendStatus(500);
    });
});

router.get("/active", (req, res) => {
  console.log("in tutors/active get router");
  const query = `SELECT 
  tutors.id,
  tutor_first_name,
  tutor_last_name,
    pronouns AS tutor_pronouns,
    tutors.phone AS tutor_phone,
tutors.email AS tutor_email,
    grade_level AS tutor_grade,
    school AS tutor_school,
   misc_info AS tutor_miscInfo,
    active_tutor,
    submission_timestamp AS tutor_submission_timestamp,
    "prek_kindergarten" AS mentor_prek_kindergarten,
   "1st" AS mentor_grade_1,
   "2nd" AS mentor_grade_2,
   "3rd" AS mentor_grade_3,
   "4th" AS mentor_grade_4,
   "5th" AS mentor_grade_5,
   "6th" AS mentor_grade_6,
   "7th" AS mentor_grade_7,
   "8th" AS mentor_grade_8,
   "9th" AS mentor_grade_9,
   "10th" AS mentor_grade_10,
   "11th" AS mentor_grade_11,
   "12th" AS mentor_grade_12,
   subjects_tutors."K5_Math" AS tutor_k5_math,
      subjects_tutors."K5_Reading" AS tutor_k5_reading,
      subjects_tutors."K5_English_Writing" AS tutor_k5_english_writing,
      subjects_tutors."K5_Science" AS tutor_k5_science,
      subjects_tutors."K5_social_studies" AS tutor_k5_social_studies,
      subjects_tutors."6th_to_8th_language_arts" AS tutor_6th_to_8th_language_arts,
      subjects_tutors."6th_to_8th_science" AS tutor_6th_to_8th_science,
      subjects_tutors."6th_to_8th_social_studies" AS tutor_6th_to_8th_social_studies,
      subjects_tutors."math_pre_algebra" AS tutor_math_pre_algebra,
      subjects_tutors."math_alg1_linear_alg" AS tutor_math_alg1_linear_alg,
      subjects_tutors."math_alg2" AS tutor_math_alg2,
      subjects_tutors."math_geom" AS tutor_math_geom,
      subjects_tutors."math_precalc_trig" AS tutor_math_precalc_trig,
      subjects_tutors."sci_bio_life" AS tutor_sci_bio_life,
      subjects_tutors."sci_chem" AS tutor_sci_chem,
      subjects_tutors."sci_physics" AS tutor_sci_physics,
      subjects_tutors."sci_comp_sci" AS tutor_sci_comp_sci,
      subjects_tutors."lang_chinese" AS tutor_lang_chinese,
      subjects_tutors."lang_spanish" AS tutor_lang_spanish,
      subjects_tutors."lang_french" AS tutor_lang_french,
      subjects_tutors."lang_german" AS tutor_lang_german,
          subjects_tutors."hist_world" AS tutor_hist_world,
          subjects_tutors."hist_us" AS tutor_hist_us,
          subjects_tutors."ap_bio" AS tutor_ap_bio,
          subjects_tutors."ap_chem" AS tutor_ap_chem,
          subjects_tutors."ap_physics" AS tutor_ap_physics,
          subjects_tutors."ap_calc_AB" AS tutor_ap_calc_AB,
          subjects_tutors."ap_calc_BC" AS tutor_ap_calc_BC,
          subjects_tutors."ap_stats" AS tutor_ap_stats,
          subjects_tutors."ap_comp_sci" AS tutor_ap_comp_sci,
          subjects_tutors."ap_english_lit_comp" AS tutor_ap_english_lit_comp,
          subjects_tutors."ap_lang_comp" AS tutor_ap_lang_comp,
          subjects_tutors."ap_macro_econ" AS tutor_ap_macro_econ,
          subjects_tutors."ap_micro_econ" AS tutor_ap_micro_econ,
          subjects_tutors."ap_psyc" AS tutor_ap_psyc, 
          subjects_tutors."ap_hist_us" AS tutor_ap_hist_us,
  subjects_tutors."ap_gov_politics_us" AS tutor_ap_gov_politics_us,
  subjects_tutors."ap_human_geog" AS tutor_ap_human_geog,
  subjects_tutors."sat_subject_tests" AS tutor_sat_subject_tests,
  subjects_tutors."sat_prep" AS tutor_sat_prep,
  subjects_tutors."act_prep" AS tutor_act_prep,
  subjects_tutors."other" AS tutor_subject_other,
   language."Arabic" AS tutor_language_Arabic,
   language."Chinese" AS tutor_language_Chinese,
   language."French" AS tutor_language_French,
   language."Hmong" AS tutor_language_Hmong,
   language."Somali" AS tutor_language_Somali,
   language."Tagalog" AS tutor_language_Tagalog,
   language."Vietnamese" AS tutor_language_Vietnamese,
   language."Spanish" AS tutor_language_Spanish,
   language."Other" AS tutor_language_Other
    FROM tutors
     JOIN subjects_tutors ON tutors.subjects_id = subjects_tutors.id
     JOIN "language" ON tutors.language_tutor_id = "language".id
     JOIN mentoring_grade ON tutors.mentoring_grade_id = mentoring_grade.id
     WHERE tutors.active_tutor = true and tutors.matched = false 
     ORDER BY submission_timestamp ASC;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get test", err);
      res.sendStatus(500);
    });
});

router.get("/deactive", (req, res) => {
  console.log("in tutors/deactive get router");

  const query = `SELECT 
  tutors.id,
  tutor_first_name,
  tutor_last_name,
    pronouns AS tutor_pronouns,
    tutors.phone AS tutor_phone,
tutors.email AS tutor_email,
    grade_level AS tutor_grade,
    school AS tutor_school,
   misc_info AS tutor_miscInfo,
    active_tutor,
    submission_timestamp AS tutor_submission_timestamp,
    "prek_kindergarten" AS mentor_prek_kindergarten,
   "1st" AS mentor_grade_1,
   "2nd" AS mentor_grade_2,
   "3rd" AS mentor_grade_3,
   "4th" AS mentor_grade_4,
   "5th" AS mentor_grade_5,
   "6th" AS mentor_grade_6,
   "7th" AS mentor_grade_7,
   "8th" AS mentor_grade_8,
   "9th" AS mentor_grade_9,
   "10th" AS mentor_grade_10,
   "11th" AS mentor_grade_11,
   "12th" AS mentor_grade_12,
   subjects_tutors."K5_Math" AS tutor_k5_math,
      subjects_tutors."K5_Reading" AS tutor_k5_reading,
      subjects_tutors."K5_English_Writing" AS tutor_k5_english_writing,
      subjects_tutors."K5_Science" AS tutor_k5_science,
      subjects_tutors."K5_social_studies" AS tutor_k5_social_studies,
      subjects_tutors."6th_to_8th_language_arts" AS tutor_6th_to_8th_language_arts,
      subjects_tutors."6th_to_8th_science" AS tutor_6th_to_8th_science,
      subjects_tutors."6th_to_8th_social_studies" AS tutor_6th_to_8th_social_studies,
      subjects_tutors."math_pre_algebra" AS tutor_math_pre_algebra,
      subjects_tutors."math_alg1_linear_alg" AS tutor_math_alg1_linear_alg,
      subjects_tutors."math_alg2" AS tutor_math_alg2,
      subjects_tutors."math_geom" AS tutor_math_geom,
      subjects_tutors."math_precalc_trig" AS tutor_math_precalc_trig,
      subjects_tutors."sci_bio_life" AS tutor_sci_bio_life,
      subjects_tutors."sci_chem" AS tutor_sci_chem,
      subjects_tutors."sci_physics" AS tutor_sci_physics,
      subjects_tutors."sci_comp_sci" AS tutor_sci_comp_sci,
      subjects_tutors."lang_chinese" AS tutor_lang_chinese,
      subjects_tutors."lang_spanish" AS tutor_lang_spanish,
      subjects_tutors."lang_french" AS tutor_lang_french,
      subjects_tutors."lang_german" AS tutor_lang_german,
          subjects_tutors."hist_world" AS tutor_hist_world,
          subjects_tutors."hist_us" AS tutor_hist_us,
          subjects_tutors."ap_bio" AS tutor_ap_bio,
          subjects_tutors."ap_chem" AS tutor_ap_chem,
          subjects_tutors."ap_physics" AS tutor_ap_physics,
          subjects_tutors."ap_calc_AB" AS tutor_ap_calc_AB,
          subjects_tutors."ap_calc_BC" AS tutor_ap_calc_BC,
          subjects_tutors."ap_stats" AS tutor_ap_stats,
          subjects_tutors."ap_comp_sci" AS tutor_ap_comp_sci,
          subjects_tutors."ap_english_lit_comp" AS tutor_ap_english_lit_comp,
          subjects_tutors."ap_lang_comp" AS tutor_ap_lang_comp,
          subjects_tutors."ap_macro_econ" AS tutor_ap_macro_econ,
          subjects_tutors."ap_micro_econ" AS tutor_ap_micro_econ,
          subjects_tutors."ap_psyc" AS tutor_ap_psyc, 
          subjects_tutors."ap_hist_us" AS tutor_ap_hist_us,
  subjects_tutors."ap_gov_politics_us" AS tutor_ap_gov_politics_us,
  subjects_tutors."ap_human_geog" AS tutor_ap_human_geog,
  subjects_tutors."sat_subject_tests" AS tutor_sat_subject_tests,
  subjects_tutors."sat_prep" AS tutor_sat_prep,
  subjects_tutors."act_prep" AS tutor_act_prep,
  subjects_tutors."other" AS tutor_subject_other,
   language."Arabic" AS tutor_language_Arabic,
   language."Chinese" AS tutor_language_Chinese,
   language."French" AS tutor_language_French,
   language."Hmong" AS tutor_language_Hmong,
   language."Somali" AS tutor_language_Somali,
   language."Tagalog" AS tutor_language_Tagalog,
   language."Vietnamese" AS tutor_language_Vietnamese,
   language."Spanish" AS tutor_language_Spanish,
   language."Other" AS tutor_language_Other
    FROM tutors
     JOIN subjects_tutors ON tutors.subjects_id = subjects_tutors.id
     JOIN "language" ON tutors.language_tutor_id = "language".id
     JOIN mentoring_grade ON tutors.mentoring_grade_id = mentoring_grade.id
     WHERE tutors.active_tutor = false and tutors.matched = false 
     ORDER BY submission_timestamp ASC;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get test", err);
      res.sendStatus(500);
    });
});

router.put("/changeStatus/", (req, res) => {
  console.log("in /changeStatus", req.body.id);
  const queryString = `UPDATE "tutors" SET active_tutor = NOT active_tutor WHERE id=${req.body.id};`;
  pool
    .query(queryString)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log("changeStatus failed: ", err);
      res.sendStatus(500);
    });
});
/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log("newTutorObject:", req.body);
  const insertMentoringGradeQuery = `
INSERT INTO "mentoring_grade" ( "prek_kindergarten", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th" )
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING "id";`;
  pool
    .query(insertMentoringGradeQuery, [
      req.body.PreK,
      req.body.FirstGrade,
      req.body.SecondGrade,
      req.body.ThirdGrade,
      req.body.FourthGrade,
      req.body.FifthGrade,
      req.body.SixthGrade,
      req.body.SeventhGrade,
      req.body.EighthGrade,
      req.body.NinthGrade,
      req.body.TenthGrade,
      req.body.EleventhGrade,
      req.body.TwelfthGrade,
    ])
    .then((result) => {
      const mentoringGradeId = result.rows[0].id;
      console.log("MentoringGradeID:", result.rows[0].id);
      //SECOND QUERY MAKES TUTOR SUBJECT INSERT
      const insertTutorSubjectsQuery = `INSERT INTO "subjects_tutors" ( "K5_Math", "K5_Reading", "K5_English_Writing", "K5_Science", "K5_social_studies", "6th_to_8th_language_arts", "6th_to_8th_science", "6th_to_8th_social_studies", "math_pre_algebra", "math_alg1_linear_alg", "math_alg2", "math_geom", "math_precalc_trig", "sci_bio_life", "sci_chem", "sci_physics", "sci_comp_sci", "lang_chinese", "lang_spanish", "lang_french", "lang_german", "hist_world", "hist_us", "ap_bio", "ap_chem", "ap_physics", "ap_calc_AB", "ap_calc_BC", "ap_stats", "ap_comp_sci", "ap_english_lit_comp", "ap_lang_comp", "ap_macro_econ", "ap_micro_econ", "ap_psyc", "ap_hist_us", "ap_gov_politics_us", "ap_human_geog", "sat_subject_tests", "sat_prep", "act_prep", "other")
        VALUES  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42)
        RETURNING "id";`;
      pool
        .query(insertTutorSubjectsQuery, [
          req.body.K5Math,
          req.body.K5Reading,
          req.body.K5EnglishWriting,
          req.body.K5Science,
          req.body.K5SocialStudies,
          req.body.SixToEightLanguageArts,
          req.body.SixToEightScience,
          req.body.SixToEightSocialStudies,
          req.body.MathPreAlgebra,
          req.body.MathLinearAlgebra,
          req.body.MathAlgebraII,
          req.body.MathGeometry,
          req.body.MathPrecalculusTrigonometry,
          req.body.BiologyLifeSciences,
          req.body.ScienceChemistry,
          req.body.SciencePhysics,
          req.body.ComputerScience,
          req.body.LanguageChinese,
          req.body.LanguageSpanish,
          req.body.LanguageFrench,
          req.body.LanguageGerman,
          req.body.WorldHistory,
          req.body.USHistory,
          req.body.APHonorsBiology,
          req.body.APHonorsChemistry,
          req.body.APHonorsPhysics,
          req.body.APHonorsCalculusAB,
          req.body.APHonorsCalculusBC,
          req.body.APHonorsStatistics,
          req.body.APHonorsComputerScience,
          req.body.APHonorsEnglishLiterature,
          req.body.APHonorsEnglishLanguage,
          req.body.APHonorsMacroeconomics,
          req.body.APHonorsMicroeconomics,
          req.body.APHonorsPsychology,
          req.body.APHonorsUSHistory,
          req.body.APHonorsGovernmentPolitics,
          req.body.APHonorsHumanGeography,
          req.body.SATSubjectTests,
          req.body.SATPrep,
          req.body.ACTPrep,
          req.body.Other,
        ])
        .then((result) => {
          const subjectTutorId = result.rows[0].id;
          console.log("SubjectTutorID:", subjectTutorId);
          const insertTutorLanguageQuery = `
            INSERT INTO "language" ( "Spanish", "Somali", "Arabic", "Chinese", "Tagalog", "French", "Vietnamese", "Hmong", "Other" )
            VALUES  ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING "id";`;
          pool
            .query(insertTutorLanguageQuery, [
              req.body.Spanish,
              req.body.Somali,
              req.body.Arabic,
              req.body.Chinese,
              req.body.Tagalog,
              req.body.French,
              req.body.Vietnamese,
              req.body.Hmong,
              req.body.otherLanguage,
            ])
            .then((result) => {
              const languageTutorId = result.rows[0].id;
              console.log("LanguageTutorID:", languageTutorId);
              const submissionTimestamp = new Date(Date.now()).toISOString();
              const insertTutorQuery = `
                INSERT INTO "tutors" ("tutor_first_name", "tutor_last_name", "pronouns", "phone", "email", "grade_level", "school", "mentoring_grade_id", "language_tutor_id", "subjects_id", "misc_info", "submission_timestamp", "active_tutor", "matched", "user_id")
                VALUES  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15);`;
              pool
                .query(insertTutorQuery, [
                  req.body.firstName,
                  req.body.lastName,
                  req.body.pronouns,
                  req.body.phone,
                  req.body.email,
                  req.body.grade,
                  req.body.school,
                  mentoringGradeId,
                  languageTutorId,
                  subjectTutorId,
                  req.body.miscInfo,
                  submissionTimestamp,
                  true,
                  false,
                  req.user.id,
                ])
                .then((result) => {
                  res.sendStatus(201);
                })
                .catch((err) => {
                  //CATCH FOR FOURTH QUERY
                  console.log("error posting to tutor table:", err);
                  res.sendStatus(500);
                });
            })
            .catch((err) => {
              //CATCH FOR THIRD QUERY
              console.log("error posting to language table", err);
              res.sendStatus(500);
            });
        })
        .catch((err) => {
          //CATCH FOR SECOND QUERY
          console.log("error posting to subject_tutor", err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      //CATCH FOR FIRST QUERY
      console.log("error posting to mentoring_grade:", err);
      res.sendStatus(500);
    });
});



router.put("/update/:id", (req, res) => {
  console.log("Update ROUTE newTutorObject:---------->", req.body);
  const insertMentoringGradeQuery = `
  UPDATE "mentoring_grade" 
  SET
    "prek_kindergarten"= $1, 
    "1st" = $2,
    "2nd" = $3, 
    "3rd" = $4,
    "4th"= $5,
    "5th" =$6, 
    "6th" =$7,
    "7th" =$8,
    "8th" = $9, 
    "9th" =$10,
   "10th" =$11,
    "11th" =$12,
    "12th"  = $13
    FROM "tutors"
    JOIN "user" ON "user".id = "tutors".user_id
    WHERE "mentoring_grade".id = "tutors".mentoring_grade_id
    AND "tutors".user_id = $14;
;`;
const sqlValues =[ req.body.PreK,
  req.body.FirstGrade,
  req.body.SecondGrade,
  req.body.ThirdGrade,
  req.body.FourthGrade,
  req.body.FifthGrade,
  req.body.SixthGrade,
  req.body.SeventhGrade,
  req.body.EighthGrade,
  req.body.NinthGrade,
  req.body.TenthGrade,
  req.body.EleventhGrade,
  req.body.TwelfthGrade,
  req.params.id,]
console.log('sqlValues in PUT api/tutors/update/:id', sqlValues);
  pool
    .query(insertMentoringGradeQuery, sqlValues)
    .then((result) => {
      //SECOND QUERY MAKES TUTOR SUBJECT INSERT
      const insertTutorSubjectsQuery = `
      UPDATE "subjects_tutors"
        SET
          "K5_Math" =$1, 
          "K5_Reading" =$2, 
          "K5_English_Writing"=$3,
          "K5_Science" =$4, 
          "K5_social_studies" = $5,
          "6th_to_8th_language_arts"=$6,
          "6th_to_8th_science" =$7,
          "6th_to_8th_social_studies" =$8,
          "math_pre_algebra"=$9,
          "math_alg1_linear_alg" =$10,
          "math_alg2" =$11,
          "math_geom"=$12, 
          "math_precalc_trig"=$13, 
          "sci_bio_life"=$14, 
          "sci_chem"=$15, 
          "sci_physics"=$16, 
          "sci_comp_sci"=$17,
          "lang_chinese"=$18, 
          "lang_spanish"=$19, 
          "lang_french"=$20, 
          "lang_german"=$21,
          "hist_world"=$22, 
          "hist_us"=$23,
          "ap_bio"=$24, 
          "ap_chem"=$25,
          "ap_physics"=$26,
          "ap_calc_AB"=$27,
          "ap_calc_BC"=$28,
          "ap_stats"=$29,
          "ap_comp_sci"=$30,
          "ap_english_lit_comp"=$31,
          "ap_lang_comp"=$32,
          "ap_macro_econ"=$33, 
          "ap_micro_econ"=$34, 
          "ap_psyc"=$35, 
          "ap_hist_us"=$36,
          "ap_gov_politics_us"=$37,
          "ap_human_geog"=$38,
          "sat_subject_tests"=$39, 
          "sat_prep"=$40,
          "act_prep"=$41,
          "other"=$42  
       FROM "tutors"
      JOIN "user" ON "user".id = tutors.user_id
      WHERE subjects_tutors.id = "tutors".subjects_id
      AND "user".id = $43;
     ;`;
      pool
        .query(insertTutorSubjectsQuery, [
          req.body.K5Math,
          req.body.K5Reading,
          req.body.K5EnglishWriting,
          req.body.K5Science,
          req.body.K5SocialStudies,
          req.body.SixToEightLanguageArts,
          req.body.SixToEightScience,
          req.body.SixToEightSocialStudies,
          req.body.MathPreAlgebra,
          req.body.MathLinearAlgebra,
          req.body.MathAlgebraII,
          req.body.MathGeometry,
          req.body.MathPrecalculusTrigonometry,
          req.body.BiologyLifeSciences,
          req.body.ScienceChemistry,
          req.body.SciencePhysics,
          req.body.ComputerScience,
          req.body.LanguageChinese,
          req.body.LanguageSpanish,
          req.body.LanguageFrench,
          req.body.LanguageGerman,
          req.body.WorldHistory,
          req.body.USHistory,
          req.body.APHonorsBiology,
          req.body.APHonorsChemistry,
          req.body.APHonorsPhysics,
          req.body.APHonorsCalculusAB,
          req.body.APHonorsCalculusBC,
          req.body.APHonorsStatistics,
          req.body.APHonorsComputerScience,
          req.body.APHonorsEnglishLiterature,
          req.body.APHonorsEnglishLanguage,
          req.body.APHonorsMacroeconomics,
          req.body.APHonorsMicroeconomics,
          req.body.APHonorsPsychology,
          req.body.APHonorsUSHistory,
          req.body.APHonorsGovernmentPolitics,
          req.body.APHonorsHumanGeography,
          req.body.SATSubjectTests,
          req.body.SATPrep,
          req.body.ACTPrep,
          req.body.Other,
          req.params.id,
        ])
        .then((result) => {
          // const subjectTutorId = result.rows[0].id;
          // console.log("SubjectTutorID:", subjectTutorId);
          const insertTutorLanguageQuery = `
            UPDATE "language" 
            SET
             "Spanish" =$1 ,
              "Somali"=$2,
               "Arabic"=$3, 
               "Chinese"=$4,
                "Tagalog"=$5,
                 "French"=$6,
                  "Vietnamese"=$7,
                   "Hmong"=$8, 
                   "Other"=$9 
            FROM "tutors"
               JOIN "user" ON "user".id = tutors.user_id
               WHERE "user".id = $10;
          `;
          pool
            .query(insertTutorLanguageQuery, [
              req.body.Spanish,
              req.body.Somali,
              req.body.Arabic,
              req.body.Chinese,
              req.body.Tagalog,
              req.body.French,
              req.body.Vietnamese,
              req.body.Hmong,
              req.body.otherLanguage,
              req.params.id,
            ]) 
            .then((result) => {
              res.sendStatus(200);
            })

            .catch((err) => {
              //CATCH FOR THIRD QUERY
              console.log("error posting to language table", err);
              res.sendStatus(500);
            });
        })
        .catch((err) => {
          //CATCH FOR SECOND QUERY
          console.log("error posting to subject_tutor", err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      //CATCH FOR FIRST QUERY
      console.log("error posting to mentoring_grade:", err);
      res.sendStatus(500);
    });
});

module.exports = router;
