import axios from 'axios';
const API_URL = '/choices/'


const apiClient = axios.create({
  baseURL: 'http://localhost:8001/api'
});

async function getChoices(storyState) {
  try {
    const response = await apiClient.get(API_URL +storyState);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch choices');
  }
}

export { getChoices };