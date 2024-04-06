import axios from 'axios';
import APIKEY from "../API/APIKEY";

// Function to make GET request
export const GetVideosBySearch = (query) => {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&q=${encodedQuery}&type=video&maxResults=5&part=snippet`
    return axios.get(url)
        .then(response => {
            return response.data;
        })
}