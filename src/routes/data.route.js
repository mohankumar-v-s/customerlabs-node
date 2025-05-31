const router = require('express').Router();
const dataController = require('../controller/data.controller');

router.post('/incoming_data', dataController.handleIncomingData);

module.exports = router;
