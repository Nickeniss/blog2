import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getChoices } from './choiceServices';

const initialState = {
  choices: [],
  status: 'idle',
  error: null,
};

export const fetchChoicesForStory = createAsyncThunk(
  'choices/fetchChoicesForStory',
  async (storyState, thunkAPI) => {
    
    const response = await getChoices(storyState);
    return response.data;
  }
);

export const choicesSlice = createSlice({
  name: 'choices',
  initialState,
  reducers: {
    reset: (state) => initialState            
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChoicesForStory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChoicesForStory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.choices = action.payload;
      })
      .addCase(fetchChoicesForStory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {reset} = choicesSlice.actions
export default choicesSlice.reducer;
