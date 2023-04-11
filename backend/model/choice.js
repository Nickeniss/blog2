const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
    text: { type: String, required: true },
    currentStoryState: { type: String, required: true },
    nextStoryState: { type: String, required: true },
});

const Choice = mongoose.model('Choice', choiceSchema);

module.exports = Choice;