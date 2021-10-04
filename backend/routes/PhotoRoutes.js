const express = require('express');
const photoController = require('../controllers/PhotoController')

const router = express.Router();

router.get('/', photoController.getPhotoFeed)

module.exports = router
