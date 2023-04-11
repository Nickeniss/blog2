import axios from 'axios';

async function getChoices(storyState) {
  try {
    const response = await axios.get(`choices/${storyState}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch choices');
  }
}

export { getChoices };