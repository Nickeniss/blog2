const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
    text: { type: String, required: true },
    currentStoryState: { 
        type: String, 
        required: true, 
        match: /^[a-zA-Z]+_[0-9]+[a-zA-Z]{1}$/ },
    nextStoryState: { 
        type: String, 
        required: true, 
        match: /^[a-zA-Z]+_[0-9]+[a-zA-Z]{1}$/ },
});

const Choice = mongoose.model('Choice', choiceSchema);

module.exports = Choice;