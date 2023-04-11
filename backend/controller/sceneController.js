const Scene = require('../model/scene')
const asyncHandler = require('express-async-handler')
const getScene = asyncHandler(async (req, res) => {
    const { storyState } = req.params;
  
    //validation
    if (!storyState) {
      res.status(400).json({ error: 'Please provide a story state parameter.' });
      return;
    }
  
    const scene = await Scene.find({ storyState });
  
    if (scene.length === 0) {
      res.status(404).json({ error: 'No scenes found with the specified story state.' });
      return;
    }
  
    res.status(200).json(scene);
  });
  
  

  const setScene = asyncHandler(async (req, res) => {
    const { title, text, storyState } = req.body;
  
    //validation
    if (!title || !text || !storyState) {
      res.status(400).json({ error: 'Please provide a title, text, and story state.' });
      return;
    }
  
    const newScene = new Storyboard({
      title,
      text,
      storyState,
    });
  
    try {
      await newScene.validate();
    } catch (error) {
      res.status(400).json({ error: error.message });
      return;
    }
  
    await newScene.save();
  
    res.status(201).json(newScene);
  });
  


module.exports = {
    getScene,
    setScene,

}