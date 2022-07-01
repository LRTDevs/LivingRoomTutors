const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


// POST route is for tutors recommending times
// PUT route is for tutees accepting/rejecting times


// will handle a tutor suggesting times:
router.post('/', async (req, res) => {
  
  // BALLOON! We re-did this route big time:
  try {
    // find out the current tutor's tutor_id, using the req.body.user.id
    const getTutorIdQuery = `
      SELECT "id" FROM "tutors"
        WHERE tutors.user_id=$1
    `
    const tutorIdRes = await pool.query(getTutorIdQuery, [req.user.id]);
    const tutorId = tutorIdRes.rows[0].id

    // insert three rows into the sessions table, each row looks something like:
    const insertScheduleQuery = `
      INSERT INTO "schedule"
        ("tutor_id", "tutee_id", "date")
        VALUES
        ($1, $2, $3),
        ($1, $2, $4),
        ($1, $2, $5)
    `
    const insertScheduleSqlValues = [
      tutorId,
      req.body.tutee_id,
      req.body.primaryDate,
      req.body.secondaryDate,
      req.body.tertiaryDate
    ]

    await pool.query(insertScheduleQuery, insertScheduleSqlValues);

    res.sendStatus(201);
  } catch (dbErr) {
    console.error(dbErr);
    res.sendStatus(500);
  }
});





  router.get("/", (req, res) => {
    const query = `SELECT * FROM "schedule"

    `;
    pool
      .query(query)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("ERROR: Get TUTOR SESSIONS", err);
        res.sendStatus(500);
      });
  });

  router.get("/selected", (req, res) => {
    // console.log("SELECTED/Sessions");
    const query = `
    SELECT * FROM schedule
    JOIN tutees ON tutees.id = schedule.tutee_id
    JOIN "user" ON "user".id = tutees.user_id
    WHERE "user".id = $1;
    `;
    pool
      .query(query, [req.user.id])
      .then((result) => {
        console.log('result.rows IN SELECTED SESSIONS-->',result.rows)
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("ERROR:GET SELECTED SESSIONS", err);
        res.sendStatus(500);
      });
  });











module.exports = router;
