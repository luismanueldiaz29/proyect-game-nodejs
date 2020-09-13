const express = require('express');
const router = express.Router();

const gameController = require('../controllers/games.controller');

router.get('/', gameController.get);
router.get('/:id', gameController.getGames);
router.post('/', gameController.postGame);

module.exports = router;