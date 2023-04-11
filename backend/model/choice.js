const mongoose = require('mongoose');
const choiceSchema = new mongoose.Schema({
    text: { type: String, required: true },
    next: { type: mongoose.Schema.Types.ObjectId, ref: 'Storyboard', required: true },
});

const Choice = mongoose.model('Choice', choiceSchema);

module.exports = Choice;