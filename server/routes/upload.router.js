const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const app = express();

cloudinary.config({
  cloud_name: "living-room-tutors",
  api_key: "526496113922312",
  api_secret: "RyptXQTuju7QsH2D-F1k8e4PSsE",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  },
});

const upload = multer({ storage: storage });

router.post('/:id', upload.single('file'), (req, res) => {
  {
    console.log(req.params.id);
     const sqlQuery = `
     INSERT INTO "profile_pictures" ( "image_url")
     VALUES ($1);
     `;
     const sqlValues = [req.file.path];
     pool
       .query(sqlQuery, sqlValues)
       .then((dbRes) => {
         res.sendStatus(201);
       })
       .catch((dbErr) => {
         res.sendStatus(500);
       });
   }
 });


/**
 * GET route template
 */

router.get("/", (req, res) => {
  const query = `SELECT * FROM "profile_pictures" 
  WHERE "user_id" = $1`;
  pool
    .query(query, [req.user.id] )
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get test", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
