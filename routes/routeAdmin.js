const express = require('express')
const router = express.Router();
// const queryController = require('../controllers/queryController.js');

router.get("/", (req, resp) => resp.status(200).send("Wellcome to Admin Page."));

module.exports = router;

