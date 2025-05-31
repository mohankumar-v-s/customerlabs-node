const router = require('express').Router();
const accountController = require('../controller/account.controller')

// Create Account
router.post('/', accountController.createAccount);

// Read All Accounts
router.get('/', accountController.getAllAccount);

// Read Account by ID
router.get('/:id', accountController.getAccountById);

// Update Account
router.put('/:id', accountController.updateAccount);

// Delete Account (cascade delete Destinations)
router.delete('/:id', accountController.deleteAccount);

module.exports = router;
