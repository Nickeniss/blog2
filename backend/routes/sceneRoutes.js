const express = require('express'); 
const router = express.Router();
const { getScene, setScene,  } = require('../controller/sceneController');

//error for authorization when testing getReview route. Help!
router.route('/').get(getScene).post(setScene);


module.exports = router;