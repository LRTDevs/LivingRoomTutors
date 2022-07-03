const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const query = `
    SELECT * FROM "profile"
    WHERE "user_id"=$1
    ORDER BY "inserted_at" DESC
    LIMIT 1
  `;
  
  const sqlValues = [req.user.id]
  pool.query(query, sqlValues)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('Error in GET all profile info:', error);
    });
});

router.post('/', (req, res) => {
  const profileInfoQuery = `
INSERT INTO "profile" ("favorite_subject", "hidden_talents", "five_year_plan", "fictional_universe", "favorite_music",short_description, "user_id")
VALUES ($1, $2, $3, $4, $5, $6, $7);
`;
  const profileInfoValues = [
    req.body.favoriteSubject,
    req.body.specialTalents,
    req.body.fiveYearGoal,
    req.body.fictionalUniverse,
    req.body.favoriteMusic,
    req.body.shortDescription,
    req.user.id,
  ];
  pool
    .query(profileInfoQuery, profileInfoValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in /api/profile POST request:', error);
    });
});

module.exports = router;
