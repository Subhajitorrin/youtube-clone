import axios from 'axios';
import APIKEY from "../API/APIKEY";

export const GetChannelDetail = (channelId) => {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${APIKEY}`;

    return axios.get(url)
        .then(response => {
            return response.data;
        })
}
