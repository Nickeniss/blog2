import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSceneData } from '../../features/sceneFeatures/sceneSlice';
import { fetchChoicesForStory } from '../../features/choiceFeatures/choiceSlice';
const ChoiceButton = ({choice}) => {
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateSceneData(choice.nextStoryState));
    dispatch(fetchChoicesForStory(choice.nextStoryState));
  };

  return (
    <button onClick={handleClick}>
      {choice.text}
    </button>
  );
}

export default ChoiceButton;
