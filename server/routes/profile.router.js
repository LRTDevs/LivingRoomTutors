const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

router.post('/', (req, res) => {
  const profileInfoQuery = `
INSERT INTO "profile" ("favorite_subject", "hidden_talents", "five_year_plan", "fictional_universe", "favorite_music", "user_id")
VALUES ($1, $2, $3, $4, $5, $6);
`;
  const profileInfoValues = [
    req.body.favoriteSubject,
    req.body.specialTalents,
    req.body.fiveYearGoal,
    req.body.fictionalUniverse,
    req.body.favoriteMusic,
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
