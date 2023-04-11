const express = require('express'); 
const router = express.Router();
const { getScene, setScene,  } = require('../controller/sceneController');

//error for authorization when testing getReview route. Help!
router.route('/').post(setScene);
router.route('/:storyState').get(getScene)

module.exports = router;