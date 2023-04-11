import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSceneData } from '../features/sceneFeatures/sceneSlice';

const StoryContainer = () => {
  const {currentScene} = useSelector(state => state.scene);
  const storyState = "story_a1"
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSceneData(storyState));
  }, [storyState, dispatch]);
  //{currentScene.text}
  return (
    <div>
      <div><p>test</p></div>
    </div>
  );
}

export default StoryContainer;