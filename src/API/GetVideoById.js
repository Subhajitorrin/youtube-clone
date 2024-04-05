import axios from 'axios';
import APIKEY from "../API/APIKEY";

export const GetVideoById = (videoId) => {
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${APIKEY}&id=${videoId}&part=statistics`
    return axios.get(url)
        .then(response => {
            return response.data;
        })
}