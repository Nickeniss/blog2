// src/models/storyboard.js

const mongoose = require('mongoose');


const storyboardSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true },
    text: { 
        type: String, 
        required: true },
    storyState: { 
        type: String, 
        required: true,
        match: /^[a-zA-Z]+_[0-9]+[a-zA-Z]{1}$/ },
    
});

const Storyboard = mongoose.model('Storyboard', storyboardSchema);

module.exports = Storyboard;
