import axios from 'axios';
const API_URL = '/scene/'


const apiClient = axios.create({
  baseURL: 'http://localhost:8001/api'
});

const updateScene = async (storyState) => {
  try {
    
    const response = await apiClient.get(API_URL + storyState);
    
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch choices');
  }
}

export { updateScene };