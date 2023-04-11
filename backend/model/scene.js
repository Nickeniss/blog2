// src/models/storyboard.js

const mongoose = require('mongoose');


const storyboardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    storyState: { type: String, required: true },
    
});

const Storyboard = mongoose.model('Storyboard', storyboardSchema);

module.exports = Storyboard;
