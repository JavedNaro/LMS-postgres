let express = require('express');
let router = express.Router();
let studentController = require('../controller/resources/studentcontroller');
router.post('/createStudent',studentController.createStudent);

module.exports = router;