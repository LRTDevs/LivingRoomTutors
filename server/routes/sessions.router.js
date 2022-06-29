const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


router.post('/', (req, res) => {
    console.log('Tutor Session req.body--------->', req.body)
    const sqlText = `
  INSERT INTO "schedule" ("primary_date", "secondary_date", "tertiary_date", "user_id")
  VALUES ($1, $2, $3, $4);
  `;
    const sqlValues = [
      req.body.primaryDate,
      req.body.secondaryDate,
      req.body.tertiaryDate,
      req.user.id
    ]
    pool
      .query(sqlText, sqlValues)
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log('Error in TUTOR SESSIONS POST request:', error);
      });
  });
















module.exports = router;
