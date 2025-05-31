const router = require('express').Router();
const controller = require('../controller/destination.controller');

// Create Destination
router.post('/',controller.createDestination );

// Get All Destinations
router.get('/', controller.getAllDestination);

// Get Destination by ID
router.get('/:id',controller.getDestinationByID );

// Update Destination
router.put('/:id', controller.updateDestinationById);

// Delete Destination
router.delete('/:id', controller.deleteDestinationById);

// Get Destinations by Account ID
router.get('/account/:accountId', controller.getDestinationByAccountId);

module.exports = router;
