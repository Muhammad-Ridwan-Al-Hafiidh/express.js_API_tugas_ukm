const express = require('express');
const characterController = require('../server/controllers/characterController');

const router = express.Router();

router.get('/character', characterController.getCharacter);
router.post('/levelup', characterController.levelUpCharacter);
router.delete('/leveldown', characterController.levelDownCharacter);

module.exports = router;