import axios from 'axios';
import APIKEY from "../API/APIKEY";

export const GetVideoDetailsSnippetStatistics = (videoId) => {
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${APIKEY}&id=${videoId}&part=snippet,statistics`;
    
    return axios.get(url)
        .then(response => {
            return response.data;
        })
}
