//package to create store
import { configureStore } from '@reduxjs/toolkit';
import choicesReducer from '../features/choiceFeatures/choiceSlice'
import sceneReducer from '../features/sceneFeatures/sceneSlice'
export const store = configureStore({
    reducer: {
     scene: sceneReducer,
     choices:choicesReducer,
    }
  });