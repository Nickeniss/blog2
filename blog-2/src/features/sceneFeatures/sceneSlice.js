import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateScene } from './sceneServices';

const initialState = {
  currentScene: null,
  status: 'idle',
  error: null,
};


export const updateSceneData = createAsyncThunk(
  'scene/updateSceneData',
  async (storyState, thunkAPI) => {
    try {
      const response = await updateScene(storyState);
      
      
      return response;
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message) 
  }
  }
);

const sceneSlice = createSlice({
  name: 'scene',
  initialState,
  reducers: {
    reset: (state) => initialState   
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateSceneData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateSceneData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentScene = action.payload[0];
      })
      .addCase(updateSceneData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const {reset} = sceneSlice.actions
export default sceneSlice.reducer;
