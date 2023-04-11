const express = require('express'); 
const router = express.Router();
const { getChoice, setChoice, } = require('../controller/choiceController');

//error for authorization when testing getReview route. Help!
router.route('/').get(getChoice).post(setChoice);



module.exports = router;