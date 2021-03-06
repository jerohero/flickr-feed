const express = require('express');
const photoController = require('../controllers/photoController')

const router = express.Router();

router.get('/', photoController.getPhotoFeed)
router.get('/search/:keyword/:page?', photoController.getPhotosByKeyword)

module.exports = router
