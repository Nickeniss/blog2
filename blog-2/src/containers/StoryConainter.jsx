import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSceneData } from '../features/sceneFeatures/sceneSlice';
import { fetchChoicesForStory } from '../features/choiceFeatures/choiceSlice';
import { ChoiceButton } from '../components';
import './StoryContainer.css'
const StoryContainer = () => {
  const {currentScene} = useSelector(state => state.scene);
  const {choices} = useSelector(state => state.choices);
  const storyState = "story_1a"
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentScene === null){
      dispatch(updateSceneData(storyState));
      dispatch(fetchChoicesForStory(storyState));
    }
    console.log(choices)
  }, [storyState, dispatch]);
  //{currentScene.text}
  return (
    <div >
        <div class="headerDiv"><h1>{currentScene === null ? "help" : currentScene.title}</h1></div>
      <div class="storyTextDiv">{currentScene === null ? "help" : currentScene.text}</div>
      <div class='buttonDiv'>
        {choices.map(choice => (
          <ChoiceButton key={choice.id} choice={choice} />
        ))}
      </div>
    </div>
    
  );
}

export default StoryContainer;