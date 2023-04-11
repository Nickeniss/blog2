const Choice = require('../model/choice')
const asyncHandler = require('express-async-handler')
const getChoices = asyncHandler(async (req, res) => {
    const { currentStoryState } = req.params;

    try {
        const choices = await Choice.find({ currentStoryState });

        if (choices.length === 0) {
            res.status(404).json({ error: 'No choices found with the specified current story state.' });
            return;
        }

        res.status(200).json(choices);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


const setChoice = asyncHandler(async (req, res) => {
    const choiceData = req.body;

    // Basic validation
    if (!Array.isArray(choiceData) || choiceData.length === 0) {
        res.status(400).json({ error: 'Please provide an array of choice objects.' });
        return;
    }

    // Check that no more than four choices are associated with each story state
    const choicesByState = {};
    for (const choice of choiceData) {
        const { text, currentStoryState, nextStoryState } = choice;
        if (!text || !currentStoryState || !nextStoryState) {
            res.status(400).json({ error: 'Please provide text, currentStoryState, and nextStoryState parameters for all choices.' });
            return;
        }

        choicesByState[currentStoryState] = choicesByState[currentStoryState] || [];
        if (choicesByState[currentStoryState].length >= 4) {
            res.status(400).json({ error: `Cannot add more than four choices per currentStoryState (${currentStoryState}).` });
            return;
        }

        choicesByState[currentStoryState].push(choice);
    }

    const newChoices = await Choice.insertMany(choiceData);

    res.status(201).json(newChoices);
});

module.exports = {
    getChoice,
    setChoice,

}