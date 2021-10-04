const express = require('express');
const photoController = require('../controllers/photoController')

const router = express.Router();

router.get('/', photoController.getPhotoFeed)

module.exports = router
