// src/models/storyboard.js

const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
    text: { type: String, required: true },
    next: { type: mongoose.Schema.Types.ObjectId, ref: 'Storyboard', required: true },
});

const storyboardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    choices: { type: [choiceSchema], required: true },
});

const Storyboard = mongoose.model('Storyboard', storyboardSchema);

module.exports = Storyboard;
