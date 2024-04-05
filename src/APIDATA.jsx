import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'eebde8e515msh8d7af8220ec03bbp1730fejsn33777e018b5f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
export const APIDATA = async(URL)=>{
    const {data} = await axios.get(`${BASE_URL}/${URL}`,options)
    return data;
}