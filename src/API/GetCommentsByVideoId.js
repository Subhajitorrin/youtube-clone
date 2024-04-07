import axios from 'axios';
import APIKEY from "../API/APIKEY";

export const GetCommentsByVideoId = (videoId,maxResults) => {
    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=${maxResults}&key=${APIKEY}`;

    return axios.get(url)
        .then(response => {
            return response.data;
        })
}
