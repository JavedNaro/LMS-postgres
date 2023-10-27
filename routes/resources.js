const authenticationcontroller = require('../controller/common/authenticationcontroller');
let resources = require('../controller/resources/resources');

const express = require('express');
let router = express.Router();

// router.get("/", authController.authenticateToken, userController.getUsers),

router.get('/:id',resources.giveResources);
router.get('/', resources.getAllResources);
router.post('/createResource', resources.createResource);
router.delete('/deleteResource/:id', resources.deleteResource);
router.put('/updateResource/:id', resources.updateResource);
router.post('/login',authenticationcontroller.login);
module.exports = router;