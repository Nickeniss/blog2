const express = require('express'); 
const router = express.Router();
const { getChoices, setChoice, } = require('../controller/choiceController');

//error for authorization when testing getReview route. Help!
router.route('/').post(setChoice);
router.route('/:currentStoryState').get(getChoices)


module.exports = router;