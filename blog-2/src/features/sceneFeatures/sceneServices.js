import axios from 'axios';
const API_URL = '/api/scene/'
async function updateScene(storyState) {
  try {
    console.log(storyState)
    const response = await axios.get(API_URL + storyState);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch choices');
  }
}

export { updateScene };